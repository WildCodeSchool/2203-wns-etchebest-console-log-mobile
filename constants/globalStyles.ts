import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  ticketCard: {
    flex: 1 / 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
    paddingLeft: 15,
    marginHorizontal: 5,
    borderRadius: 4,
    backgroundColor: "white",
  },
});
