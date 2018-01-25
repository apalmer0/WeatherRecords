import { StyleSheet } from 'react-native'

const BACKGROUND_COLOR = '#3C4566'
const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  city: {
    color: TEXT_COLOR,
    fontSize: 40,
    textAlign: 'center',
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
})
