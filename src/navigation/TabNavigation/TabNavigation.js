import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../screens/Auth";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={AuthScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="wishlist"
        component={AuthScreen}
        options={{ title: "Lista de deseos" }}
      />
      <Tab.Screen
        name="cart"
        component={AuthScreen}
        options={{ title: "Carrito" }}
      />
      <Tab.Screen
        name="account"
        component={AuthScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Tab.Navigator>
  );
}
