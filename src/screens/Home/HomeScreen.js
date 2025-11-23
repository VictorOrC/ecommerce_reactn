import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useAuth } from "../../hooks";

export function HomeScreen() {
  const { logout } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button onPress={logout}>Cerrar Sesion</Button>
    </View>
  );
}
