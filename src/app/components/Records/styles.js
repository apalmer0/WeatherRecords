import { StyleSheet } from 'react-native'

const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  recordContainer: {
    alignItems: 'center',
    flex: 0.5,
  },
  recordHeader: {
    color: TEXT_COLOR,
    fontSize: 15,
  },
  records: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  recordTemp: {
    color: TEXT_COLOR,
    fontSize: 50,
    fontWeight: 'bold',
  },
  recordTempYear: {
    color: TEXT_COLOR,
  },
  recordTitle: {
    color: TEXT_COLOR,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
})
