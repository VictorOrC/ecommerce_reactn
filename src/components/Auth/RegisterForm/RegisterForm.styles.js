import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#0f172a",
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 16,
    width: "100%",
    alignSelf: "stretch",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    color: "#f9fafb",
    fontWeight: "600",
  },
  subtitle: {
    color: "#9ca3af",
    marginTop: 4,
  },
  input: {
    marginBottom: 12,
    borderRadius: 12,
    height: 58,
  },
  outline: {
    borderRadius: 12,
    borderWidth: 1.2,
  },
  errorText: {
    color: "#f97373",
    fontSize: 12,
    marginTop: -6,
    marginBottom: 8,
  },
});
