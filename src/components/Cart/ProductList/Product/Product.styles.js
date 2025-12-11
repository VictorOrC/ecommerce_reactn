import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 12,
    marginHorizontal: 0,
    borderRadius: 16,
    backgroundColor: "#ffffff",

    // sombra
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,

    overflow: "hidden",
    paddingTop: 10,
    paddingBottom: 10,
    height: 150,
  },

  imageContainer: {
    width: 110,
    height: 110,
    backgroundColor: "#e5e7eb",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  infoContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  prices: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "flex-end",
  },

  currentPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  selectQuantity: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f172a0d",
    borderRadius: 999,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },

  btnQuantity: {
    backgroundColor: "#0098d3",
    borderRadius: 999,
    margin: 0,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  inputQuantity: {
    minWidth: 36,
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 0,
    paddingHorizontal: 4,
    color: "#111827",
  },

  btnDelete: {
    marginLeft: 10,
    borderRadius: 999,
  },

  btnDeleteContent: {
    height: 36,
  },

  btnDeleteLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
});
