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
        backgroundColor: "#4BD388",
        paddingVertical: 14,
        paddingHorizontal: 8,
        borderRadius: 6,
        marginTop: 12,
    },

    buttonTransactionText: {
        color: "white",
        textAlign: "center",
        fontWeight: 800,
        fontSize: 14,
    },
})