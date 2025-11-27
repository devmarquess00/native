import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 32,
    backgroundColor: "#0D0D0D",
    borderRadius: 12,
  },

  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  textBalenceTotal: {
    fontSize: 12,
    color: "white",
  },

  textBalanceTotalValue: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },

  textEntriesTotal: {
    fontSize: 12,
    color: "white",
  },

  textEntriesTotalValue: {
    fontSize: 16,
    fontWeight: 900,
    color: "#4BD388",
  },

  containerExitText: {
    borderLeftWidth: 0.5,
    borderLeftColor: "#A39D9D",
    paddingLeft: 6,
  },

  textExitTotal: {
    fontSize: 12,
    color: "white",
  },

  textExitTotalValue: {
    fontSize: 16,
    fontWeight: 900,
    color: "#E22B1B",
  },

  containerValuesExitAndEntries: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
