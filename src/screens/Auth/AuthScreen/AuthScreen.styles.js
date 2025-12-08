// AuthScreen.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // 👈 importante con ScrollView
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 16,
  },
});
