import { View, Text, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { DateTime } from "luxon";
import { scrensName } from "../../../../utils";
import { styles } from "./Order.styles";

export function Order(props) {
  const { order } = props;
  const navigation = useNavigation();

  const goToOrder = () => {
    navigation.navigate(scrensName.account.order, { id: order.documentId });
  };

  return (
    <Pressable onPress={goToOrder} style={styles.container}>
      <View>
        <Text>
          <Text style={styles.title}>Pedido: </Text>
          {order.id}
        </Text>

        <Text>
          <Text style={styles.title}>Total: </Text>${order.totalPayment}
        </Text>

        <Text>
          <Text style={styles.title}>Fecha de compra: </Text>
          {DateTime.fromISO(order.createdAt, { locale: "es" }).toFormat(
            "dd/MM/yyyy"
          )}
        </Text>
      </View>

      <IconButton icon="eye" />
    </Pressable>
  );
}
