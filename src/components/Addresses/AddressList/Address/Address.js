import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Address.styles";
import { scrensName } from "../../../../utils";

export function Address(props) {
  const { address } = props;
  const navigation = useNavigation();

  const goToUpdateAddress = () => {
    navigation.navigate(scrensName.account.addEditAddresses, {
      addressId: address.id,
      documentId: address.documentId,
    });
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
        <Button mode="contained">Eliminar</Button>
      </View>
    </View>
  );
}
