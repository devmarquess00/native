import { styles } from "@/src/components/transactions/styles";
import { TransactionsCard } from "@/src/components/transactionsCard";
import { Text, View } from 'react-native';

const Transactions = () => {
    return (
        <View>
            <Text style={styles.titleTransactions}>Transações recentes</Text>

            <View style={styles.containerTransactions}>
                <TransactionsCard /> 
                <TransactionsCard />    
            </View>
        </View>
    )
}

export { Transactions };

