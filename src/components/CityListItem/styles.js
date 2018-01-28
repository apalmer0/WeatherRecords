import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cityListContainer: {
    justifyContent: 'center',
  },
  cityListItem: {
    borderBottomColor: '#1a3e61',
    borderBottomWidth: 1,
  },
  cityName: {
    color: '#fff',
    fontSize: 30,
  },
  currentTempStyles: {
    color: '#fff',
    fontSize: 30,
    position: 'absolute',
    right: 15,
  },
  deleteButton: {
    backgroundColor: '#F51B18',
    borderBottomColor: '#B61210',
    borderBottomWidth: 1,
    borderTopColor: '#F51B18',
    borderTopWidth: 1,
    paddingBottom: 19,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    position: 'absolute',
    right: 0,
    width: 105,
  },
  deleteText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
  },
  listItem: {
    backgroundColor: '#5086e0',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 20,
  },
  textContainer: {
    flexDirection: 'row',
  }
})
