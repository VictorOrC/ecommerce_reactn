import { AuthScreen } from "../screens/Auth";
import { useAuth } from "../hooks";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
  const { user } = useAuth();

  return user ? <AppNavigation /> : <AuthScreen />;
}
