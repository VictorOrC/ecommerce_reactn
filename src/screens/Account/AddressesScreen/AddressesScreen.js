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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { addressCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { scrensName } from "../../../utils";
import { AddressList } from "../../../components/Addresses";
import { styles } from "./AddressesScreen.style";

export function AddressesScreen() {
  const { user } = useAuth();
  const [reload, setReload] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const navigation = useNavigation();

  const retrieveAddresses = useCallback(async () => {
    if (!user || !user.id) return; // safety check

    try {
      const response = await addressCtrl.getAll(user.id);

      //console.log("API addresses response:", response);

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
    }, [retrieveAddresses, reload])
  );

  const goToAddAddress = () => {
    navigation.navigate(scrensName.account.addEditAddresses);
  };

  const onReload = () => setReload((prevState) => !prevState);

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={goToAddAddress}>
        <View style={styles.addAddress}>
          <Text style={styles.addAdressText}>Añadir una direccion</Text>
          <IconButton icon="arrow-right" color="#000" size={19} />
        </View>
      </Pressable>
      {!addresses ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : size(addresses) === 0 ? (
        <Text style={styles.noAddressText}>Crea tu primera direccion</Text>
      ) : (
        <AddressList addresses={addresses} onReload={onReload} />
      )}
    </ScrollView>
  );
}
