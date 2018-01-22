import { StyleSheet } from 'react-native'

const BACKGROUND_COLOR = '#3C4566'
const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  city: {
    fontSize: 40,
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
})
