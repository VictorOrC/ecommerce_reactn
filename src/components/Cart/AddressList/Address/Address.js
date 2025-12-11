// src/components/Cart/AddressList/Address/Address.js
import { View, Text, Pressable } from "react-native";
import { styles } from "./Address.styles";

export function Address(props) {
  const { address, selectedAddress, setSelectedAddress } = props;

  const styledSelected =
    address.id === selectedAddress?.id ? styles.checked : null;

  return (
    <Pressable onPress={() => setSelectedAddress(address)}>
      <View style={[styles.container, styledSelected]}>
        <Text style={styles.title}>{address.title}</Text>

        <Text style={styles.textLine}>{address.name}</Text>

        <Text style={styles.textLine}>
          {address.address}, {address.postal_code}
        </Text>

        <Text style={styles.textLine}>
          {address.city}, {address.state}, {address.country}
        </Text>

        <Text style={styles.textLine}>Número de teléfono: {address.phone}</Text>
      </View>
    </Pressable>
  );
}
