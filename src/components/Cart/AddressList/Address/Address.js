import { View, Text, Pressable } from "react-native";
import { styles } from "./Address.styles";

export function Address(props) {
  const { address, selectedAddress, setSelectedAddress } = props;

  const styledSelected = address.id === selectedAddress?.id && styles.checked;
  return (
    <Pressable onPress={() => setSelectedAddress(address)}>
      <View style={[styles.container, styledSelected]}>
        <Text style={styles.title}>{address.title}</Text>
        <Text>{address.name}</Text>
        <Text>
          {address.address}, {address.postal_code}
        </Text>
        <Text>
          {address.city}, {address.state}, {address.country}
        </Text>
        <Text>Numero de Telefono: {address.phone}</Text>

        <View></View>
      </View>
    </Pressable>
  );
}
