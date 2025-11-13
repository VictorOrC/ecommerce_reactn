import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../screens/Auth";
import { scrensName } from "../../utils";
import { HomeStack, WishlistStack } from "../stacks";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator>
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
        component={AuthScreen}
        options={{ title: "Carrito" }}
      />
      <Tab.Screen
        name={scrensName.account.root}
        component={AuthScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Tab.Navigator>
  );
}
