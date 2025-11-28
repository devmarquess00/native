import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerInputs: {
        flexDirection: "column",
        marginTop: 12,
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
        marginTop: 30
    },

    inputName: {
        fontSize: 16, 
        paddingHorizontal: 14,
        paddingVertical: 18,
        borderColor: '#A39D9D',
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
})