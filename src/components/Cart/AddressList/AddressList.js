import React from "react";
import { View, Text } from "react-native";
import { Address } from "./Address";
import { styles } from "./AddressList.styles";

export function AddressList(props) {
  const { addresses, selectedAddress, setSelectedAddress } = props;

  const addressItems = addresses?.data ?? addresses ?? [];

  const hasAddresses = Array.isArray(addressItems) && addressItems.length > 0;

  if (!hasAddresses) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dirección de envío:</Text>
        <Text style={styles.emptyText}>
          No tienes direcciones guardadas. Agrega una dirección para continuar
          con tu pedido.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dirección de envío:</Text>
      {addressItems.map((address) => (
        <Address
          key={address.documentId ?? address.id}
          address={address}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
      ))}
    </View>
  );
}
