import { styles } from "@/src/components/transactions/styles";
import { TransactionsCard } from "@/src/components/transactionsCard";
import { FC } from "react";
import { Text, View } from "react-native";

type Props = {
  toggleModalDelete: () => void;
};

const Transactions: FC<Props> = ({ toggleModalDelete }) => {
  return (
    <View>
      <Text style={styles.titleTransactions}>Transações recentes</Text>

      <View style={styles.containerTransactions}>
        <TransactionsCard toggleModalDelete={toggleModalDelete} />
        <TransactionsCard toggleModalDelete={toggleModalDelete} />
      </View>
    </View>
  );
};

export { Transactions };

