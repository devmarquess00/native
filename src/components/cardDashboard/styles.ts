import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    cardDashboard: {
        backgroundColor: "#0D0D0D",
        width: 170,
        padding: 16,
        borderRadius: 8,
    },

    cardDashboardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    cardTextPercent: {
        color: '#4BD388',
        fontWeight: 600,
    },

    cardDashboardBody: {
        marginTop: 22,
        flexDirection: "column",
    },

    cardDashboardTextBalance: {
        color: "white",
        fontSize: 18,
        fontWeight: 800,
    },

    cardDashboardTextLabel: {
        fontSize: 12, 
        fontWeight: 500,
        color: "white",
        opacity: 0.5
    }
})