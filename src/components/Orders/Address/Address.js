import { View, Text } from "react-native";
import { styles } from "./Address.styles";

export function Address(props) {
  const { address } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{address.title}</Text>
      <Text>{address.name}</Text>
      <Text>
        {address.address}, {address.postal_code}
      </Text>
      <Text>
        {address.city}, {address.state}, {address.country}
      </Text>
      <Text>Numero de telefono: {address.phone}</Text>
    </View>
  );
}
