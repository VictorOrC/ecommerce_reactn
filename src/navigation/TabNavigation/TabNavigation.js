import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../screens/Auth";
import { scrensName } from "../../utils";
import { useCart } from "../../hooks";
import { HomeStack, WishlistStack, CartStack, AccountStack } from "../stacks";
import { View } from "react-native";
import { Badge } from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarActiveTintColor: "#000",
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={scrensName.home.root}
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name={scrensName.wishlist.root}
        component={WishlistStack}
        options={{ title: "Lista de deseos" }}
      />
      <Tab.Screen
        name={scrensName.cart.root}
        component={CartStack}
        options={{ title: "Carrito" }}
      />
      <Tab.Screen
        name={scrensName.account.root}
        component={AccountStack}
        options={{ title: "Mi cuenta" }}
      />
    </Tab.Navigator>
  );
}

function setIcon(route, routeStatus) {
  const { totalProducts } = useCart();
  let iconName = "";
  let color = "#fff";

  if (routeStatus.focused) {
    color = "#149bd0ff";
  }

  if (route.name === scrensName.home.root) {
    iconName = "home";
  }
  if (route.name === scrensName.wishlist.root) {
    iconName = "heart";
  }
  if (route.name === scrensName.account.root) {
    iconName = "user";
  }

  if (route.name === scrensName.cart.root) {
    return (
      <View>
        <AwesomeIcon name="shopping-cart" color={color} style={styles.icon} />
        {totalProducts > 0 && (
          <Badge style={styles.totalCart}>{totalProducts}</Badge>
        )}
      </View>
    );
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
}
