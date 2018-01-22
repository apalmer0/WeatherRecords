import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import axios from 'axios'

import styles from './styles'

const API_KEY = 'e6ceaca079a9b34e'
const LOCATION = 'MA/Boston'
const USE_STUB = false

class WeatherDetails extends Component {
  constructor (props) {
    super(props)
    const stubbedState = {
      weather: {
        icon_url: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
        weather: 'Rain',
        display_location: {
          city: 'Boston',
        },
        temp_f: 43.2,
      },
      history: {
        temp_low: {
          record: { F: 0 },
          recordyear: '1990',
        },
        temp_high: {
          record: { F: 90 },
          recordyear: '1921',
        },
      }
    }
    const defaultState = {
      weather: false,
      history: false,
    }

    if (USE_STUB) {
      this.state = stubbedState
    } else {
      this.state = defaultState
    }
  }

  componentDidMount () {
    axios.get(`https://api.wunderground.com/api/${API_KEY}/conditions/q/${LOCATION}.json`)
      .then(response => this.setState({ weather: response.data.current_observation }))
    axios.get(`https://api.wunderground.com/api/${API_KEY}/almanac/q/${LOCATION}.json`)
      .then(response => this.setState({ history: response.data.almanac }))
  }

  render () {
    const { history, weather } = this.state

    if (!weather) return false

    const uri = weather.icon_url.replace('http', 'https')
    const source = { uri }
    const temp = Math.round(weather.temp_f)

    return (
      <View style={styles.container}>
        <Text style={styles.city}>{weather.display_location.city}</Text>
        <View style={styles.header}>
          <View style={styles.description}>
            <Image style={styles.icon} source={source} />
            <Text style={styles.weather}>{weather.weather}</Text>
          </View>
          <Text style={styles.temp}>{temp}°</Text>
        </View>

        {history &&
          <View>
            <Text style={styles.recordTitle}>Record low and high today:</Text>
            <View style={styles.records}>
              <View style={styles.recordLow}>
                <Text style={styles.recordHeader}>Low:</Text>
                <Text style={styles.recordTemp}>{history.temp_low.record.F}°</Text>
                <Text>({history.temp_low.recordyear})</Text>
              </View>
              <View style={styles.recordHigh}>
                <Text style={styles.recordHeader}>High:</Text>
                <Text style={styles.recordTemp}>{history.temp_high.record.F}°</Text>
                <Text>({history.temp_high.recordyear})</Text>
              </View>
            </View>
          </View>
        }
      </View>
    )
  }
}

export default WeatherDetails
