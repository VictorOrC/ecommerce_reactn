import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./OrderScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { orderCtrl } from "../../../api";
import { Layout } from "../../../layouts";
import { ProductList, Address } from "../../../components/Orders";
import { LoadingScreen, Separator } from "../../../components/Shared";
import Toast from "react-native-root-toast";

export function OrderScreen(props) {
  const {
    route: { params },
  } = props;

  const orderId = params.id;
  const [order, setOrder] = useState(null);
  const navigation = useNavigation();
  //console.log(order);

  useEffect(() => {
    navigation.setOptions({ title: `Pedido ${orderId}` });
    getOrder();
  }, [orderId]);

  const getOrder = async () => {
    try {
      const response = await orderCtrl.getById(orderId);
      setOrder(response);
    } catch (error) {
      Toast.show("Error al obtener el pedido", {
        position: Toast.positions.CENTER,
      });
    }
  };
  return (
    <Layout.Basic hideSearch>
      <View style={styles.container}>
        {!order ? (
          <LoadingScreen text="Cargando pedido" />
        ) : (
          <View>
            <Separator height={20} />
            <Text style={styles.title}>Productos</Text>
            <ProductList products={order.data.products} />

            <Separator height={50} />
            <Text style={styles.title}>Direccion de envio</Text>
            <Separator height={20} />
            <Address address={order.data.addressShipping} />

            <Text style={styles.totalPayment}>
              Total: ${order?.data.totalPayment}
            </Text>
          </View>
        )}
      </View>
    </Layout.Basic>
  );
}
