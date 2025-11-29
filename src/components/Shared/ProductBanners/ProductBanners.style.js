import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  carousel: {
    width: width,
    height: 250,
  },
  dotContainer: {
    position: "absolute",
    bottom: "-20",
    width: "100%",
  },
  dot: {
    backgroundColor: "#000",
    width: 10,
    height: 10,
  },
});
