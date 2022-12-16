import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  ticketCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 4,
    elevation: 3,
    flex: 1 / 10,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 5,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  ticketListShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
