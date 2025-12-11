import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#e5e7eb",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    backgroundColor: "#ffffff",

    // sombra suave
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },

  title: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 4,
    color: "#111827",
  },

  textLine: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 2,
  },

  checked: {
    borderColor: "#0098d3",
    backgroundColor: "#e0f2fe",
  },
});
