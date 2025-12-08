import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const widthNuevo = width * 0.9;

export const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: widthNuevo,
    height: widthNuevo,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  dotsContainer: {
    bottom: 15,
  },
});
