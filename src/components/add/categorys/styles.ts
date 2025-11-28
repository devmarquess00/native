import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerButtonsCategory: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
    },

    buttonCategory: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6, 
        borderWidth: 0.5,
        borderColor: '#A39D9D',
        paddingHorizontal: 12, 
        paddingVertical: 8,
        borderRadius: 100,
        marginBottom: 2,
    },

    buttonTextCategory: {
        color: "white",
    },
})