import { StyleSheet } from 'react-native'

const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  forecastContainer: {
    height: 30,
  },
  forecastDayIcon: {
    height: 15,
    width: 15,
  },
  forecastTemps: {
    alignItems: 'center',
  },
  forecastDay: {
    color: TEXT_COLOR,
  },
  forecastTemp: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  forecastIconContainer: {
    alignItems: 'center'
  }
})
