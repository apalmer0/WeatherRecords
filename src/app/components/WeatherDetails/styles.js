import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  city: {
    fontSize: 40,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '20%',
    paddingTop: '20%',
  },
  description: {
    flex: 0.5,
    paddingLeft: 30,
  },
  header: {
    flexDirection: 'row',
  },
  icon: {
    height: 90,
    width: 90,
  },
  temp: {
    flex: 0.6,
    fontSize: 100,
  },
  recordHeader: {
    fontSize: 15,
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
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  recordTemp: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  recordTitle: {
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  weather: {
    alignItems: 'center',
  },
})
