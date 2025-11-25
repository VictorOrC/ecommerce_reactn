import { View, Text } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { map } from "lodash";
import { accountMenu, appMenu } from "./Menu.data";
import { styles } from "./Menu.styles";

export function Menu() {
  const navigation = useNavigation();

  const alertLogout = () => {
    console.log("Cerrar sesion");
  };

  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        {map(accountMenu, (item, index) => (
          <List.Item
            key={index}
            title={item.title}
            titleStyle={styles.titleItem}
            description={item.description}
            left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </List.Section>

      <List.Section>
        <List.Subheader>App</List.Subheader>
        {map(appMenu, (item, index) => (
          <List.Item
            key={index}
            title={item.title}
            titleStyle={styles.titleItem}
            description={item.description}
            left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </List.Section>

      <List.Section>
        <List.Item
          title="Cerrar sesion"
          titleStyle={styles.titleLogoutItem}
          description="Cerrar sesion"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={alertLogout}
        />
      </List.Section>
    </>
  );
}
