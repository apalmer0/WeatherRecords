import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

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
      forecast: false,
      history: false,
      hourly: false,
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
      axios.get(`https://api.wunderground.com/api/${API_KEY}/conditions/almanac/forecast/hourly/astronomy/q/${location}.json`)
        .then(response => {
          this.setState({
            currentData: response.data.current_observation,
            forecast: response.data.forecast.simpleforecast.forecastday,
            history: response.data.almanac,
            hourly: response.data.hourly_forecast,
            sunrise: `${response.data.sun_phase.sunrise.hour}:${response.data.sun_phase.sunrise.minute}`,
            sunset: `${response.data.sun_phase.sunset.hour}:${response.data.sun_phase.sunset.minute}`,
          })
        })

    }
  }

  render () {
    const { currentData, forecast, history, hourly, sunrise, sunset } = this.state

    if (!currentData || !forecast || !history || !hourly || !sunrise || !sunset) return <Loading />

    const { display_location: displayLocation, temp_f: temp, icon_url: iconUrl, weather } = currentData
    const { temp_high: tempHigh, temp_low: tempLow } = history
    const { city } = displayLocation

    return (
      <View style={styles.container}>
        <Text style={styles.city}>{city}</Text>

        <CurrentConditions temp={temp} weather={weather} iconUrl={iconUrl} />

        <TodayForecast low={forecast[0].low.fahrenheit} high={forecast[0].high.fahrenheit} />

        <Records
          highTemp={tempHigh.record.F}
          highYear={tempHigh.recordyear}
          lowTemp={tempLow.record.F}
          lowYear={tempLow.recordyear}
        />

        <HourlyForecast forecast={hourly} />

        <DailyForecast forecast={forecast} />
      </View>
    )
  }
}

export default WeatherDetails
