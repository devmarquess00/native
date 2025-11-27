import { styles } from "@/src/components/card/styles";
import { Text, View } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.textBalenceTotal}>Saldo total</Text>
          <Text style={styles.textBalanceTotalValue}>R$3000.90</Text>
        </View>

        <View style={styles.containerValuesExitAndEntries}>
          <View>
            <Text style={styles.textEntriesTotal}>Entradas</Text>
            <Text style={styles.textEntriesTotalValue}>+R$3000.90</Text>
          </View>

          <View style={styles.containerExitText}>
            <Text style={styles.textExitTotal}>Saídas</Text>
            <Text style={styles.textExitTotalValue}>-R$3000.90</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export { Card };

