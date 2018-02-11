import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { Platform, Text, View } from 'react-native'

import CurrentConditions from '../CurrentConditions'
import DailyForecast from '../DailyForecast'
import Footer from '../Footer'
import HourlyForecast from '../HourlyForecast'
import Loading from '../Loading'
import Records from '../Records'
import styles, { BKGD_DAY, BKGD_NIGHT } from './styles'
import TodayForecast from '../TodayForecast'
import { changeTemperatureScale } from '../../redux/actions/scale'
import { getLocationData } from '../../redux/actions/location'
import { stubbedState } from './helpers'

const USE_STUB = false
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
    const { isFahrenheit, navigation, toggleTemperatureScale } = this.props
    const { navigate } = navigation
    const { currentData, dailyForecast, history, hourlyForecast, sunrise, sunset } = source

    if (!currentData || !dailyForecast || !history || !hourlyForecast || !sunrise || !sunset) return <Loading />

    const { display_location: displayLocation, icon_url: iconUrl, weather } = currentData
    const temp = currentData[isFahrenheit ? 'temp_f' : 'temp_c' ]
    const { temp_high: tempHigh, temp_low: tempLow } = history
    const { city } = displayLocation
    const todayForecast = dailyForecast[0]
    const todayLow = todayForecast.low[isFahrenheit ? 'fahrenheit' : 'celsius']
    const todayHigh = todayForecast.high[isFahrenheit ? 'fahrenheit' : 'celsius']
    const iosStyles = Platform.OS === 'ios' ? { paddingTop: 30 } : {}

    const now = moment()
    const parsedSunrise = moment(sunrise, TIME_FORMAT)
    const parsedSunset = moment(sunset, TIME_FORMAT)
    const isDay = now.isAfter(parsedSunrise) && now.isBefore(parsedSunset)
    const backgroundColor = isDay ? BKGD_DAY : BKGD_NIGHT
    const backgroundStyle = { backgroundColor }
    const weatherFormat = isFahrenheit ? 'F' : 'C'

    return (
      <View style={[styles.container, backgroundStyle]}>
        <Text style={[styles.city, iosStyles]}>{city}</Text>

        <CurrentConditions temp={temp} weather={weather} iconUrl={iconUrl} />

        <TodayForecast low={todayLow} high={todayHigh} />

        <Records
          highTemp={tempHigh.record[weatherFormat]}
          highYear={tempHigh.recordyear}
          lowTemp={tempLow.record[weatherFormat]}
          lowYear={tempLow.recordyear}
          normalHigh={tempHigh.normal[weatherFormat]}
          normalLow={tempLow.normal[weatherFormat]}
        />

        <HourlyForecast forecast={hourlyForecast} isFahrenheit={isFahrenheit} />

        <DailyForecast forecast={dailyForecast} isFahrenheit={isFahrenheit} />

        <Footer
          backgroundColor={backgroundColor}
          isFahrenheit={isFahrenheit}
          navigate={navigate}
          toggleTemperatureScale={toggleTemperatureScale}
        />
      </View>
    )
  }
}

const mapStateToProps = (reduxState, ownProps) => {
  const { location } = ownProps.navigation.state.params
  const locationData = find(reduxState.locations, ({ name }) => name === location).data
  const { isFahrenheit } = reduxState.scale

  return {
    isFahrenheit,
    locationData,
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateLocationData: (location) => (
    dispatch(getLocationData(location))
  ),
  toggleTemperatureScale: () => (
    dispatch(changeTemperatureScale)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails)
