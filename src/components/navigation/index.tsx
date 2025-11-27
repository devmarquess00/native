import { styles } from "@/src/components/navigation/styles";
import { menuNavigation } from "@/src/menu";
import { RelativePathString, useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Navigation = () => {
  const router = useRouter();

  return (
    <View style={styles.navigation}>
      <FlatList
        data={menuNavigation}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View style={styles.navigationList}>
            <Pressable style={styles.buttonNavigation} onPress={() => router.push(item.href as RelativePathString)}>
              <Icon name={item.icon} size={22} color="white" />
              <Text style={styles.navigationLabel}>{item.label}</Text>
            </Pressable>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
        horizontal
      />
    </View>
  );
};

export { Navigation };

