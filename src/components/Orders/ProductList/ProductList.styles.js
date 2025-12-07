import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    borderRadius: 0.5,
    borderColor: "#dadde1",
  },
  imageContainer: {
    width: "40%",
    backgroundColor: "#ebebeb",
    height: 170,
    padding: 5,
  },
  image: {
    height: "100%",
    resizeMode: "stretch",
  },
  infoContainer: {
    padding: 10,
    width: "60%",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "flex-end",
  },
  currentPrice: {
    fontSize: 20,
    color: "#b12704",
  },
});
