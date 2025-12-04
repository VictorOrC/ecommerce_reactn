import { View, Text } from "react-native";
import { map } from "lodash";
import { Address } from "./Address";
import { styles } from "./AddressList.styles";

export function AddressList(props) {
  const { addresses, selectedAddress, setSelectedAddress } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Direccion de envio: </Text>
      {map(addresses.data, (address) => (
        <Address
          key={address.documentId}
          address={address}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
      ))}
    </View>
  );
}
