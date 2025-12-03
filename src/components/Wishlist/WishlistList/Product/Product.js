import { useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { wishlistCtrl } from "../../../../api";
import { ENV } from "../../../../utils";
import { useAuth } from "../../../../hooks";
import { fn, scrensName } from "../../../../utils";
import { styles } from "./Product.styles";

export function Product(props) {
  const { product, onReload } = props;
  const productImageUrl = product.main_image.url;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { user } = useAuth();

  const goToProduct = () => {
    navigation.navigate(scrensName.home.root, {
      screen: scrensName.home.product,
      params: { productId: product.documentId },
    });
  };

  const deleteFavorite = async () => {
    setLoading(true);
    await wishlistCtrl.delete(user.id, product.documentId);
    onReload();
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: `${ENV.URL}${productImageUrl}` }}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {product.title}
          </Text>
          <View style={styles.prices}>
            <Text style={styles.currentPrice}>
              ${fn.calcPrice(product.price, product.discount)}
            </Text>
            {product.discount && (
              <Text style={styles.oldPrice}>${product.price}</Text>
            )}
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            style={styles.btnGoToProduct}
            mode="contained"
            onPress={goToProduct}
          >
            Ver producto
          </Button>
          <IconButton
            icon="close"
            iconColor="#fff"
            style={styles.btnDelete}
            onPress={deleteFavorite}
          />
        </View>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );
}
