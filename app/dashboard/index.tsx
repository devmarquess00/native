import { useRouter } from 'expo-router';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get("window")

export default function Dashboard() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>
                <Pressable onPress={() => router.push('/')}>
                    <Text>Voltar para home</Text>
                </Pressable>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: height,
        justifyContent: 'center',
        alignItems: 'center'
    }
})