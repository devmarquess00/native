import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerWrapper: {
    height: 52,
  },

  containerContent: {
    flexDirection: "column",
  },

  containerHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  circle: {
    width: 8, 
    height: 8, 
    backgroundColor: '#4BD388',
    borderRadius: 100,
  },

  wrapperInvestments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  investmentsText: {
    color: 'white',
  },

  valueTotal: {
    color: 'white',
    fontWeight: 600, 
    fontSize: 15
  },

  barProgress: {
    height: 6,
    marginTop: 8, 
    width: 200,
    borderRadius: 8,
    backgroundColor: '#4BD388'
  },

  textPercent: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    color: 'white',
    opacity: 0.5,
    fontSize: 12,
  },
});
