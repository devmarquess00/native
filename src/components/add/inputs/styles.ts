import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerInputs: {
        flexDirection: "column",
    },

    inputValueCash: {
        fontSize: 40, 
        borderBottomColor: '#A39D9D',
        borderBottomWidth: 0.5,
        color: "white",
    },

    containerInputsNameAndCategory: {
        flexDirection: 'column',
        gap: 12, 
        marginTop: 22
    },

    inputName: {
        fontSize: 16,
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderColor: '#242424',
        borderWidth: 0.5,
        color: "white",
        borderRadius: 6
    },

    buttonTransaction: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D0D0D",
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius: 6,
        height: 54,
        marginTop: 12,
    },

    buttonTransactionText: {
        color: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: 14,
    },

    containerCategory: {
        flexDirection: "column",
    },

    containerTitleCategory: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 8,
    },

    categoryText: {
        color: "white",
        fontSize: 16,
        fontWeight: 700,
    },

    categoryContentList: {
        marginVertical: 12,
    },
})