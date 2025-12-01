import { styles } from "@/src/components/cardDashboard/styles";
import { menuCardDashboard } from "@/src/menu";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CardDashboard = () => {

  return (
    <View>
      <View style={styles.container}>
        {menuCardDashboard.map((item) => (
          <View key={item.id} style={styles.cardDashboard}>
            <View style={styles.cardDashboardHeader}>
              <Icon name={item.icon} color={item.colorIcon} size={16} style={{ fontWeight: 700, backgroundColor: `${item.color}`, opacity: 0.4, padding: 4, borderRadius: 6, }} />
              <Text style={styles.cardTextPercent}>%{item.percent}</Text>
            </View>

            <View style={styles.cardDashboardBody}>
                <Text style={styles.cardDashboardTextBalance}>R${item.balance}</Text>
                <Text style={styles.cardDashboardTextLabel}>{item.label}</Text>
            </View>

          </View>
        ))}
      </View>
    </View>
  );
};

export { CardDashboard };

