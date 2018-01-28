import { StyleSheet } from 'react-native'

const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  backButtonContainer: {
    alignItems: 'flex-end'
  },
  boldStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomMenu: {
    borderTopColor: '#C7CACD',
    borderTopWidth: 1,
    flex: 0,
  },
  nonBoldStyle: {
    paddingTop: 4,
  },
  scale: {
    color: TEXT_COLOR
  },
  weatherScale: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
})
