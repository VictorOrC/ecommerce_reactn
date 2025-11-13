import { AuthScreen } from "../screens/Auth";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
  const user = "karencita";
  return user ? <AppNavigation /> : <AuthScreen />;
}
