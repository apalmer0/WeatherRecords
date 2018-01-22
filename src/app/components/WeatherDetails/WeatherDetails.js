import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import axios from 'axios'

import styles from './styles'
import { stubbedState } from './helpers'
import Loading from '../Loading'

const API_KEY = 'e6ceaca079a9b34e'
const USE_STUB = true

class WeatherDetails extends Component {
  constructor (props) {
    super(props)
    const defaultState = {
      forecast: false,
      history: false,
      hourly: false,
      sunrise: false,
      sunset: false,
      weather: false,
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
            weather: response.data.current_observation,
            history: response.data.almanac,
            forecast: response.data.forecast.simpleforecast.forecastday,
            hourly: response.data.hourly_forecast,
            sunrise: `${response.data.sun_phase.sunrise.hour}:${response.data.sun_phase.sunrise.minute}`,
            sunset: `${response.data.sun_phase.sunset.hour}:${response.data.sun_phase.sunset.minute}`,
          })
        })

    }
  }

  render () {
    const { forecast, history, hourly, sunrise, sunset, weather } = this.state

    if (!forecast || !history || !hourly || !sunrise || !sunset || !weather) return <Loading />

    const uri = weather.icon_url.replace('http', 'https')
    const source = { uri }
    const temp = Math.round(weather.temp_f)

    return (
      <View style={styles.container}>
        <Text style={styles.city}>{weather.display_location.city}</Text>
        <View style={styles.header}>
          <View style={styles.description}>
            <Image style={styles.headerIcon} source={source} />
            <Text style={styles.weather}>{weather.weather}</Text>
          </View>
          <Text style={styles.temp}>{temp}°</Text>
        </View>

        <Grid>
          <Col>
            <Text style={styles.tempsTodayHeader}>TODAY</Text>
          </Col>
          <Col>
            <Text style={styles.tempsToday}>{forecast[0].low.fahrenheit} - {forecast[0].high.fahrenheit}</Text>
          </Col>
        </Grid>

        <View>
          <Text style={styles.recordTitle}>Record low and high today:</Text>
          <View style={styles.records}>
            <View style={styles.recordLow}>
              <Text style={styles.recordHeader}>Low:</Text>
              <Text style={styles.recordTemp}>{history.temp_low.record.F}°</Text>
              <Text style={styles.recordTempYear}>({history.temp_low.recordyear})</Text>
            </View>
            <View style={styles.recordHigh}>
              <Text style={styles.recordHeader}>High:</Text>
              <Text style={styles.recordTemp}>{history.temp_high.record.F}°</Text>
              <Text style={styles.recordTempYear}>({history.temp_high.recordyear})</Text>
            </View>
          </View>
        </View>


        <Grid style={styles.hourlyForecastContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {hourly.map((hour, index) => {
              const adjustedTime = (num) => {
                if (num === '0') {
                  return '12'
                } else {
                  return num > 12 ? num - 12 : num
                }
              }
              const time = `${adjustedTime(hour.FCTTIME.hour)}${hour.FCTTIME.ampm}`
              const chance = 5 * Math.round(hour.pop / 5)
              const conditionalChance = chance === 0 ? '' : `${chance}%`

              return (
                <Col key={index} style={styles.hourlyForecastHour}>
                  <Row>
                    <Text style={styles.hourlyTime}>{time}</Text>
                  </Row>
                  <Row>
                    <Grid>
                      <Row>
                        <Text style={styles.hourlyPOP}>{conditionalChance}</Text>
                      </Row>
                      <Row>
                        <Image style={styles.hourlyIcon} source={{uri: hour.icon_url.replace('http', 'https')}} />
                      </Row>
                    </Grid>
                  </Row>
                  <Row>
                    <Text style={styles.hourlyTemp}>{hour.temp.english}°</Text>
                  </Row>
                </Col>
              )
            })}
          </ScrollView>
        </Grid>

        <Grid>
          {forecast.map((day, index) => {
            const { date } = day
            const src = { uri: day.icon_url.replace('http', 'https')}

            return (
              <Row key={index} style={styles.forecastContainer}>
                <Col size={3}>
                  <Text style={styles.forecastDay}>{date.weekday}</Text>
                </Col>
                <Col size={2}>
                  <Image style={styles.forecastDayIcon} source={src} />
                </Col>
                <Col size={1} style={styles.forecastTemps}>
                  <Text style={styles.forecastTemp}>{day.low.fahrenheit}</Text>
                </Col>
                <Col size={1} style={styles.forecastTemps}>
                  <Text style={styles.forecastTemp}>{day.low.fahrenheit}</Text>
                </Col>
              </Row>
            )
          })}
        </Grid>
      </View>
    )
  }
}

export default WeatherDetails
