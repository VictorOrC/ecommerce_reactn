// src/components/Cart/Payment/Payment.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  card: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    width: "100%",
    alignSelf: "stretch",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    color: "#f9fafb",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },

  subtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 16,
  },

  input: {
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 56,
  },

  outline: {
    borderRadius: 12,
    borderWidth: 1.2,
  },

  outlineSmall: {
    borderRadius: 10,
    borderWidth: 1.1,
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
  },

  viewMonthYearInputs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 8,
  },

  inputDate: {
    flex: 1,
    marginRight: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  inputCvc: {
    width: 110,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  errorText: {
    color: "#f97373",
    fontSize: 12,
    marginTop: -2,
    marginBottom: 8,
  },
  btn: {
    marginTop: 10,
  },
  btnContent: {
    height: 48,
    //marginTop: 12,
  },

  btnText: {
    fontWeight: "600",
    fontSize: 16,
  },
});
