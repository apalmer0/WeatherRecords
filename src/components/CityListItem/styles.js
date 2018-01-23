import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cityListContainer: {
    justifyContent: 'center',
  },
  cityListItem: {
    backgroundColor: '#B61210',
    borderBottomColor: '#648166',
    borderBottomWidth: 1,
  },
  cityName: {
    fontSize: 30,
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#F51B18',
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
    position: 'absolute',
    right: 0,
  },
  deleteText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
  },
  listItem: {
    backgroundColor: '#B4CCB6',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 20,
  },
})
