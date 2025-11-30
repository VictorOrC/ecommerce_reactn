import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { RootNavigation } from "./src/navigation";
import { AuthProvider, SearchProvider } from "./src/contexts"

export default function App() {
  return (
    <AuthProvider>
      <SearchProvider>
      <RootSiblingParent>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </RootSiblingParent>
      </SearchProvider>
    </AuthProvider>
  );
}
