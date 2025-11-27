import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },

  buttonExit: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 0.5,
    borderColor: "#A39D9D",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
  },

  buttonEntries: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 0.5,
    borderColor: "#A39D9D",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#4BD388",
  },

  textInButton: {
    color: "white",
    fontSize: 14,
  },
});
