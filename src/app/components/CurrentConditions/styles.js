import { StyleSheet } from 'react-native'

const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  description: {
    flex: 0.4,
    paddingLeft: 30,
  },
  header: {
    flexDirection: 'row',
  },
  headerIcon: {
    height: 90,
    width: 90,
  },
  tempStyles: {
    color: TEXT_COLOR,
    flex: 0.6,
    fontSize: 100,
  },
  weatherStyles: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
})
