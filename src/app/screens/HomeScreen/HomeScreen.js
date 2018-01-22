import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const API_KEY = 'e6ceaca079a9b34e'
const LOCATION = 'MA/Boston'

class HomeScreen extends Component {
  state = {
    history: false,
    weather: false,
  }

  componentDidMount () {
    fetch(`https://api.wunderground.com/api/${API_KEY}/conditions/q/${LOCATION}.json`)
      .then(response => response.json())
      .then(data => this.setState({ weather: data.current_observation }))
    fetch(`https://api.wunderground.com/api/${API_KEY}/almanac/q/${LOCATION}.json`)
      .then(response => response.json())
      .then(data => this.setState({ history: data.almanac }))
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

export default HomeScreen
