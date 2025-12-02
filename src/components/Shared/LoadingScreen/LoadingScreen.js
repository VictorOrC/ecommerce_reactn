import { View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./LoadingScreen.styles";

export function LoadingScreen(props) {
  const { text = "Cargando...", color = "#000", size } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={size} color={color} style={styles.spinner} />
      <Text style={styles.title}>{text}</Text>
    </SafeAreaView>
  );
}
