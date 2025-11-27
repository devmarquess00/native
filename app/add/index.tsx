import { Buttons } from "@/src/components/add/buttons";
import { Navigation } from "@/src/components/navigation";
import { StyleSheet, TextInput, View } from "react-native";

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Buttons />

        <TextInput style={styles.input} placeholder="R$ 00,00" placeholderTextColor="white" />
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
