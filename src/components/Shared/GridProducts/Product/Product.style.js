import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "48%",
    paddingVertical: 6,
  },
  product: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginTop: 4,
  },
});
