import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 12,
    color: "#0f172a",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // separa mejor las cards
  },
});
