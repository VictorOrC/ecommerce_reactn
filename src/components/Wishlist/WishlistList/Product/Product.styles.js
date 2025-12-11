import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 12,
    borderRadius: 16,
    backgroundColor: "#ffffff",

    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,

    // sombra Android
    elevation: 3,

    overflow: "hidden",
    position: "relative",
    paddingTop: 10,
  },

  containerImage: {
    width: 110,
    height: 110,
    backgroundColor: "#e5e7eb",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },

  info: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#111827",
  },

  prices: {
    flexDirection: "row",
    marginTop: 2,
    alignItems: "flex-end",
  },

  currentPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },

  oldPrice: {
    marginLeft: 7,
    fontSize: 13,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  btnGoToProduct: {
    flex: 1,
    borderRadius: 999,
    marginRight: 8,
    justifyContent: "center",
    backgroundColor: "#0098d3",
  },

  btnDelete: {
    backgroundColor: "#ef4444",
    borderRadius: 999,
    margin: 0,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  loading: {
    backgroundColor: "#000",
    opacity: 0.2,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
