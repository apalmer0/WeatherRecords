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
  hourlyIcon: {
    height: 15,
    width: 15,
  },
  temp: {
    flex: 0.6,
    color: TEXT_COLOR,
    fontSize: 100,
  },
  recordHeader: {
    fontSize: 15,
    color: TEXT_COLOR,
  },
  recordHigh: {
    alignItems: 'center',
    flex: 0.5,
  },
  recordLow: {
    alignItems: 'center',
    flex: 0.5,
  },
  records: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  recordTemp: {
    color: TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 50,
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
  weather: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
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
  tempsTodayHeader: {
    color: TEXT_COLOR,
  },
  tempsToday: {
    textAlign: 'right',
    color: TEXT_COLOR,
  },
  hourlyForecastContainer: {
    borderTopColor: '#C7CACD',
    borderTopWidth: 1,
    borderBottomColor: '#C7CACD',
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  hourlyForecastHour: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  hourlyTime: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  hourlyPOP: {
    color: '#1aa3ff',
    textAlign: 'center',
    fontSize: 8,
  },
  hourlyTemp: {
    color: TEXT_COLOR,
    textAlign: 'center',
    marginTop: 5,
  },
  forecastDay: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  forecastTemp: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
})
