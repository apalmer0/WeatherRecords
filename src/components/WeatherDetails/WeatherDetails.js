import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import moment from 'moment'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { Platform, Text, View } from 'react-native'

import CurrentConditions from '../CurrentConditions'
import DailyForecast from '../DailyForecast'
import HourlyForecast from '../HourlyForecast'
import Loading from '../Loading'
import Records from '../Records'
import styles, { BKGD_DAY, BKGD_NIGHT } from './styles'
import TodayForecast from '../TodayForecast'
import { stubbedState } from './helpers'
import { getLocationData } from '../../redux/actions/location'

const USE_STUB = true
const TIME_FORMAT = 'HH:mm'

class WeatherDetails extends Component {
  state = stubbedState

  componentDidMount () {
    const { navigation, updateLocationData } = this.props
    const { location } = navigation.state.params

    if (!USE_STUB) {
      updateLocationData(location)
    }
  }

  render () {
    const source = USE_STUB ? this.state : this.props.locationData
    const { navigate } = this.props.navigation
    const { currentData, dailyForecast, history, hourlyForecast, sunrise, sunset } = source

    if (!currentData || !dailyForecast || !history || !hourlyForecast || !sunrise || !sunset) return <Loading />

    const { display_location: displayLocation, temp_f: temp, icon_url: iconUrl, weather } = currentData
    const { temp_high: tempHigh, temp_low: tempLow } = history
    const { city } = displayLocation
    const todayForecast = dailyForecast[0]
    const iosStyles = Platform.OS === 'ios' ? { paddingTop: 30 } : {}

    const now = moment()
    const parsedSunrise = moment(sunrise, TIME_FORMAT)
    const parsedSunset = moment(sunset, TIME_FORMAT)
    const isDay = now.isAfter(parsedSunrise) && now.isBefore(parsedSunset)
    const backgroundColor = isDay ? BKGD_DAY : BKGD_NIGHT
    const backgroundStyle = { backgroundColor }

    return (
      <View style={[styles.container, backgroundStyle]}>
        <Text style={[styles.city, iosStyles]}>{city}</Text>

        <CurrentConditions temp={temp} weather={weather} iconUrl={iconUrl} />

        <TodayForecast low={todayForecast.low.fahrenheit} high={todayForecast.high.fahrenheit} />

        <Records
          highTemp={tempHigh.record.F}
          highYear={tempHigh.recordyear}
          lowTemp={tempLow.record.F}
          lowYear={tempLow.recordyear}
          normalHigh={tempHigh.normal.F}
          normalLow={tempLow.normal.F}
        />

        <HourlyForecast forecast={hourlyForecast} />

        <DailyForecast forecast={dailyForecast} />

        <View style={styles.bottomMenu}>
          <Icon.Button
            backgroundColor={backgroundColor}
            color='#EBECEE'
            name="back"
            onPress={() => navigate('Home')}
            padding={0}
            size={30}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (reduxState, ownProps) => {
  const { location } = ownProps.navigation.state.params
  const locationData = find(reduxState.locations, ({ name }) => name === location).data

  return { locationData }
}

const mapDispatchToProps = (dispatch) => ({
  updateLocationData: (location) => (
    dispatch(getLocationData(location))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails)
