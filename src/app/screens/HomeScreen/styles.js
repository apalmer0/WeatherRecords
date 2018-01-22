import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '20%',
    paddingTop: '40%',
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
  description: {
    flex: 0.5,
    paddingLeft: 30,
  },
  records: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  recordHeader: {
    fontSize: 15,
  },
  recordLow: {
    alignItems: 'center',
    flex: 0.5,
  },
  recordHigh: {
    alignItems: 'center',
    flex: 0.5,
  },
  recordTitle: {
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  recordTemp: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  city: {
    fontSize: 40,
  },
  weather: {
    alignItems: 'center',
  },
})
