import { View, Text } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { addressCtrl, userCtrl } from "../../../api";
import { useAuth } from "../../../hooks";

export function AddressesScreen() {
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth;

  console.log(addresses);

  useFocusEffect(
    useCallback(() => {
      retriveAddresses();
    }, [])
  );

  const retriveAddresses = async () => {
    const response = await addressCtrl.getAll(user.id);
    setAddresses(response?.data || []);
    console.log(response);
  };

  return (
    <View>
      <Text>AddressesScreen</Text>
    </View>
  );
}
