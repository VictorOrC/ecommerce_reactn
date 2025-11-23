import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { RootNavigation } from "./src/navigation";
import { AuthProvider } from "./src/contexts"

export default function App() {
  return (
    <AuthProvider>
      <RootSiblingParent>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </RootSiblingParent>
    </AuthProvider>
  );
}
