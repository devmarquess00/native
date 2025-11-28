import { Navigation } from '@/src/components/navigation'
import { StyleSheet, Text, View } from 'react-native'

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>dashboard page</Text>

            <Navigation />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 30,
        backgroundColor: "#080808",
    }
})