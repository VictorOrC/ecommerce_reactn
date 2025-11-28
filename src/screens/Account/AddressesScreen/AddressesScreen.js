import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useCallback } from "react";
import { IconButton } from "react-native-paper";
import { size } from "lodash";
import { useFocusEffect } from "@react-navigation/native";
import { addressCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { AddressList } from "../../../components/Addresses";
import { styles } from "./AddressesScreen.style";

export function AddressesScreen() {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState([]);

  const retrieveAddresses = useCallback(async () => {
    if (!user || !user.id) return; // safety check

    try {
      const response = await addressCtrl.getAll(user.id);

      console.log("API addresses response:", response);

      // Strapi typically returns: { data: [...] }
      setAddresses(response?.data ?? []);
    } catch (error) {
      console.error("Error loading addresses:", error);
      setAddresses([]); // even on error, keep it as empty array, not null
    }
  }, [user?.id]);

  useFocusEffect(
    useCallback(() => {
      retrieveAddresses();
    }, [retrieveAddresses])
  );

  return (
    <ScrollView style={styles.container}>
      {!addresses ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : size(addresses) === 0 ? (
        <Text style={styles.noAddressText}>Crea tu primera direccion</Text>
      ) : (
        <AddressList addresses={addresses} />
      )}
    </ScrollView>
  );
}
