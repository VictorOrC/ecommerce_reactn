import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 30,
  },
  title: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  viewMonthYearInputs: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  inputDate: {
    width: 100,
    marginRight: 10,
  },
  inputCvc: {
    width: "40%",
  },
  btnContent: {
    paddingVertical: 4,
    backgroundColor: "#0098d3",
  },
  btnText: {
    fontSize: 16,
  },
});
