import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WishlistScreen } from "../../screens/Wishlist";
import { scrensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function WishlistStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={scrensName.wishlist.wishlist}
        component={WishlistScreen}
      />
    </Stack.Navigator>
  );
}
