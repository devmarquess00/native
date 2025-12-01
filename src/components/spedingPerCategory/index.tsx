import { styles } from "@/src/components/spedingPerCategory/styles";
import { Text, View } from "react-native";

const SpedingPerCategory = () => {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.containerContent}>
        <View >
          <View style={styles.containerHeaderContent}>
            <View style={styles.wrapperInvestments}>
              <View style={styles.circle}></View>
              <Text style={styles.investmentsText}>Investimentos</Text>
            </View>
            <View>
              <Text style={styles.valueTotal}>R$2200.00</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <View style={styles.barProgress}></View>
          </View>
        </View>

        <Text style={styles.textPercent}>62.6%</Text>
      </View>
    </View>
  );
};

export { SpedingPerCategory };

