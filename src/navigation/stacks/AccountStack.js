import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  AddEditAddressesScreen,
  AddressesScreen,
  ChangeEmailScreen,
  ChangeNameScreen,
  ChangePasswordScreen,
  ChangeUserName,
  OrderScreen,
  OrdersScreen,
} from "../../screens/Account";
import { scrensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#16222b", // 🔹 color de la barra de arriba
        },
        headerTintColor: "#fff", // 🔹 color de texto y flecha de back
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "600",
        },
      }}
    >
      <Stack.Screen
        name={scrensName.account.account}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={scrensName.account.addEditAddresses}
        component={AddEditAddressesScreen}
      />
      <Stack.Screen
        name={scrensName.account.addresses}
        component={AddressesScreen}
        options={{ title: "Mis direcciones" }}
      />
      <Stack.Screen
        name={scrensName.account.changeEmail}
        component={ChangeEmailScreen}
        options={{ title: "Cambiar correo electronico" }}
      />
      <Stack.Screen
        name={scrensName.account.changeName}
        component={ChangeNameScreen}
        options={{ title: "Cambiar nombre y apellidos" }}
      />
      <Stack.Screen
        name={scrensName.account.changePassword}
        component={ChangePasswordScreen}
        options={{ title: "Cambiar contraseña" }}
      />
      <Stack.Screen
        name={scrensName.account.changeUsername}
        component={ChangeUserName}
        options={{ title: "Cambiar nombre de usuario" }}
      />
      <Stack.Screen
        name={scrensName.account.order}
        component={OrderScreen}
        options={{ title: "", presentation: "modal" }}
      />
      <Stack.Screen
        name={scrensName.account.orders}
        component={OrdersScreen}
        options={{ title: "Mis pedidos" }}
      />
    </Stack.Navigator>
  );
}
