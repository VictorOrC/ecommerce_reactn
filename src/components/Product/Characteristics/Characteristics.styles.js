// src/components/Product/Characteristics/Characteristics.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: "#f9fafb",

    // sombra muy ligera
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 20,
    elevation: 1,
  },

  baseText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#111827",
  },
});
