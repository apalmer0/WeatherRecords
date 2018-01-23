import { StyleSheet } from 'react-native'

const TEXT_COLOR = '#EBECEE'

export default StyleSheet.create({
  hourlyForecastHour: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  hourlyIcon: {
    height: 15,
    width: 15,
  },
  hourlyPOP: {
    color: '#1aa3ff',
    textAlign: 'center',
    fontSize: 8,
    marginTop: -5,
    marginBottom: -5,
  },
  hourlyTemp: {
    color: TEXT_COLOR,
    textAlign: 'center',
    marginTop: 5,
  },
  hourlyTime: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
})
