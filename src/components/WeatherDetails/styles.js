import { StyleSheet } from 'react-native'

export const BKGD_DAY = '#0D64A7'
export const BKGD_NIGHT = '#010026'
const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  bottomMenu: {
    alignItems: 'flex-end',
    borderTopColor: '#C7CACD',
    borderTopWidth: 1,
  },
  city: {
    color: TEXT_COLOR,
    fontSize: 40,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
})
