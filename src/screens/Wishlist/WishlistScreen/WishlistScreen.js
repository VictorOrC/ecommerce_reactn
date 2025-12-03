import { useState, useCallback } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./WishlistScreen.styles";
import { forEach, size } from "lodash";
import { useAuth } from "../../../hooks";
import { wishlistCtrl } from "../../../api";
import Toast from "react-native-root-toast";
import { Layout } from "../../../layouts";
import { LoadingScreen } from "../../../components/Shared";
import { WishlistList } from "../../../components/Wishlist";

export function WishlistScreen() {
  const [products, setProducts] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();
  //console.log(products);

  useFocusEffect(
    useCallback(() => {
      getAllProductWishlist();
    }, [reload])
  );

  const onReload = () => setReload((prevState) => !prevState);

  const getAllProductWishlist = async () => {
    try {
      const response = await wishlistCtrl.getAllProducts(user.id);

      const productTemp = response.data.map((item) => item.product);

      //console.log("Productos en wishlist:", productTemp);

      setProducts(productTemp);
    } catch (error) {
      Toast.show("Error al obtener la lista de deseos", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <Layout.Basic>
      {!products ? (
        <LoadingScreen text="Cargando lista" />
      ) : size(products) === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de deseos</Text>
          <Text>No tienes ningun producto en tu lista</Text>
        </View>
      ) : (
        <WishlistList
          title="Lista de deseos"
          products={products}
          onReload={onReload}
        />
      )}
    </Layout.Basic>
  );
}
