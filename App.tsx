import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { RootNavigation } from "./src/navigation";
import { AuthProvider, SearchProvider, CartProvider } from "./src/contexts"

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <RootSiblingParent>
            <PaperProvider>
              <RootNavigation />
            </PaperProvider>
          </RootSiblingParent>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}
