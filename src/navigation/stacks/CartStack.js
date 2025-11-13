import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../../screens/Cart";
import { scrensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={scrensName.cart.cart} component={CartScreen} />
    </Stack.Navigator>
  );
}
