import { Card } from "@/src/components/card";
import { Header } from "@/src/components/header";
import { Navigation } from "@/src/components/navigation";
import { Transactions } from "@/src/components/transactions";

import { StatusBar, StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor="#080808" barStyle="dark-content" />
      <Header />

      <View>
        <Card />
        <Transactions />
      </View>

      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    backgroundColor: "#080808",
  },
});
