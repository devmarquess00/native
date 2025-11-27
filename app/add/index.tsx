import { Buttons } from "@/src/components/add/buttons";
import { Inputs } from "@/src/components/add/inputs";
import { Navigation } from "@/src/components/navigation";
import { StyleSheet, View } from "react-native";

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Buttons />

        <Inputs />
      </View>

      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    backgroundColor: "#080808",
  },

  containerHeader: {
    marginTop: 76,
  },

  input: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#A39D9D",
    fontWeight: 800,
    fontSize: 40,
  },
});
