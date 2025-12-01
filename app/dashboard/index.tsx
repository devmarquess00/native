import { CardDashboard } from "@/src/components/cardDashboard";
import { Navigation } from "@/src/components/navigation";
import { SpedingPerCategory } from "@/src/components/spedingPerCategory";
import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <CardDashboard />
      </View>
      <Text style={styles.title}>Gastos por categoria</Text>
      <View style={styles.containerBody}>
        <SpedingPerCategory />
        <SpedingPerCategory />
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
    marginTop: 82,
  },

  title: {
    color: "white",
    fontSize: 18,
    marginVertical: 22,
  },

  containerBody: {
    flexDirection: 'column',
    gap: 22,
    backgroundColor: "#0D0D0D",
    height: 450,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
});
