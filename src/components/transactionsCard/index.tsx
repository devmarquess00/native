import { styles } from "@/src/components/transactionsCard/styles";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TransactionsCard = () => {
  return (
    <View style={styles.transactionCard}>
      <View style={styles.transactionCardContent}>
        <View style={styles.transactionCardInfos}>
          <Icon name="car" size={20} color="#E22B1B" />

          <View>
            <Text style={styles.transactionCardTextCategory}>Manutenção</Text>
            <Text style={styles.transactionCardText}>Carro</Text>
          </View>
        </View>
        <View style={styles.transactionsCardValues}>
          <View style={styles.transactionsCardContainerTexts}>
            <Text style={styles.transactionsCardTextValueTotal}>-R$1.5000</Text>
            <Text style={styles.transactionsCardTextDate}>
              13 de outubro de 2025
            </Text>
          </View>

          <Icon name="trash" size={22} color="#E22B1B" />
        </View>
      </View>
    </View>
  );
};

export { TransactionsCard };

