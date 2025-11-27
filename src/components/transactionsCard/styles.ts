import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  transactionCard: {
    width: "100%",
    backgroundColor: "#0D0D0D",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  transactionCardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  transactionCardInfos: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  transactionCardTextCategory: {
    fontSize: 14,
    fontWeight: 700,
    color: "white",
  },

  transactionCardText: {
    fontSize: 12, 
    color: "#A39D9D"
  },

  transactionsCardValues: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  transactionsCardContainerTexts: {
    borderRightColor: "#A39D9D",
    borderRightWidth: 0.5,
    paddingRight: 10,
  },

  transactionsCardTextValueTotal: {
    fontSize: 14, 
    textAlign: "right",
    fontWeight: 900, 
    color: "#E22B1B",
  },

  transactionsCardTextDate: {
    fontSize: 12, 
    textAlign: "right",
    color: "#A39D9D",
  },
});
