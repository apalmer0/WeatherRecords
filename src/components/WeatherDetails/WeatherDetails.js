import React, { Component } from 'react'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Entypo';
import { Platform, Text, View } from 'react-native'

import CurrentConditions from '../CurrentConditions'
import DailyForecast from '../DailyForecast'
import HourlyForecast from '../HourlyForecast'
import Loading from '../Loading'
import Records from '../Records'
import styles from './styles'
import TodayForecast from '../TodayForecast'
import { stubbedState } from './helpers'

const API_KEY = 'e6ceaca079a9b34e'
const USE_STUB = true

class WeatherDetails extends Component {
  constructor (props) {
    super(props)
    const defaultState = {
      currentData: false,
      dailyForecast: false,
      history: false,
      hourlyForecast: false,
      sunrise: false,
      sunset: false,
    }

    if (USE_STUB) {
      this.state = stubbedState
    } else {
      this.state = defaultState
    }
  }

  componentDidMount () {
    const { city, state } = this.props.navigation.state.params
    const location = `${state}/${city}`
    if (!USE_STUB) {
      axios.get(`https://api.wunderground.com/api/${API_KEY}/conditions/almanac/forecast/hourly/astronomy/q/${location}.json`, {
        timeout: 2000,
      })
        .then(response => {
          const {
            almanac: history,
            current_observation: currentData,
            forecast,
            hourly_forecast: hourlyForecast,
            sun_phase: sunPhase,
          } = response.data
          const { sunrise, sunset } = sunPhase
          const { forecastday: dailyForecast } = forecast.simpleforecast

          this.setState({
            currentData,
            dailyForecast,
            history,
            hourlyForecast,
            sunrise: `${sunrise.hour}:${sunrise.minute}`,
            sunset: `${sunset.hour}:${sunset.minute}`,
          })
        })

    }
  }

  render () {
    const { currentData, dailyForecast, history, hourlyForecast, sunrise, sunset } = this.state

    if (!currentData || !dailyForecast || !history || !hourlyForecast || !sunrise || !sunset) return <Loading />

    const { display_location: displayLocation, temp_f: temp, icon_url: iconUrl, weather } = currentData
    const { temp_high: tempHigh, temp_low: tempLow } = history
    const { city } = displayLocation
    const todayForecast = dailyForecast[0]
    const iosStyles = Platform.OS === 'ios' ? { paddingTop: 30 } : {}

    return (
      <View style={styles.container}>
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
            backgroundColor='#3C4566'
            color='#EBECEE'
            name="back"
            onPress={() => this.props.navigation.navigate('Home')}
            padding={0}
            size={30}
          />
        </View>
      </View>
    )
  }
}

export default WeatherDetails
