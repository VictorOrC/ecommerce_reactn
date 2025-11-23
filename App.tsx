import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { RootNavigation } from "./src/navigation";

export default function App() {
  return (
    <RootSiblingParent>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </RootSiblingParent>
  );
}
