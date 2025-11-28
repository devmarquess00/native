import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerModalContent: {
    marginTop: 36,
    marginHorizontal: 22,
  },

  headerModalContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerEditContent: {
    flexDirection: "row",
    gap: 10,
  },

  textEdit: {
    color: "white",
    fontSize: 16,
  },

  containerInputs: {
    flexDirection: "column",
    gap: 8,
    marginTop: 24,
  },

  allInputs: {
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderColor: "#A39D9D",
    borderWidth: 0.5,
    color: "white",
    borderRadius: 6,
    width: "100%",
  },

  buttonSaveChanges: {
    backgroundColor: "#080808",
    paddingVertical: 16, 
    paddingHorizontal: 18,
    borderRadius: 8,
    marginTop: 12,
  },

  buttonSaveTextChanges: {
    textAlign: "center",
    color: "white",
    fontWeight: 700,
  }

});
