import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Address.styles";
import { scrensName } from "../../../../utils";
import { addressCtrl } from "../../../../api";
import Toast from "react-native-root-toast";

export function Address(props) {
  const { address, onReload } = props;
  const navigation = useNavigation();

  const goToUpdateAddress = () => {
    navigation.navigate(scrensName.account.addEditAddresses, {
      addressId: address.id,
      documentId: address.documentId,
    });
  };

  const deleteaddressAlert = () => {
    Alert.alert(
      "Eliminar direccion!!",
      `¿Estas seguro de que quieres eliminar la direccion (${address.title})?`,
      [
        {
          text: "No",
        },
        {
          text: "Si",
          onPress: deleteAddress,
        },
      ],
      { cancelable: false }
    );
  };
  const deleteAddress = async () => {
    try {
      await addressCtrl.delete(address.documentId);
      onReload();
    } catch (error) {
      Toast.show("Error al eliminar la direccion", {
        position: Toast.positions.CENTER,
      });
      console.log("error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{address.title}</Text>
      <Text>{address.name}</Text>
      <Text>{address.address}</Text>
      <Text>
        {address.state}, {address.city}, {address.postal_code}
      </Text>
      <Text>{address.country}</Text>
      <Text>Numero de telefono: {address.phone}</Text>

      <View style={styles.actions}>
        <Button mode="contained" onPress={goToUpdateAddress}>
          Editar
        </Button>
        <Button mode="contained" onPress={deleteaddressAlert}>
          Eliminar
        </Button>
      </View>
    </View>
  );
}
