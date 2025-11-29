import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { map } from "lodash";
import { Address } from "./Address";
import { styles } from "./AddressList.styles";

export function AddressList(props) {
  const { addresses, onReload } = props;
  //console.log(addresses);
  return (
    <View style={styles.container}>
      {map(addresses, (address) => (
        <Address key={address.id} address={address} onReload={onReload} />
      ))}
    </View>
  );
}
