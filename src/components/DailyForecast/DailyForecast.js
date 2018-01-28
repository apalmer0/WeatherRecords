import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

import styles from './styles'

export class DailyForecast extends Component {
  render () {
    const { forecast, isFahrenheit } = this.props
    const {
      forecastContainer,
      forecastDay,
      forecastDayIcon,
      forecastIconContainer,
      forecastTemp,
      forecastTemps,
    } = styles

    return (
      <Grid>
        {forecast.map((day, index) => {
          const { date, high, icon_url: iconUrl, low } = day
          const { weekday } = date
          const src = { uri: iconUrl.replace('http', 'https')}
          const lowTemp = low[isFahrenheit ? 'fahrenheit' : 'celsius']
          const highTemp = high[isFahrenheit ? 'fahrenheit' : 'celsius']

          return (
            <Row key={index} style={forecastContainer}>
              <Col size={2}>
                <Text style={forecastDay}>{weekday}</Text>
              </Col>
              <Col size={2} style={forecastIconContainer}>
                <Image style={forecastDayIcon} source={src} />
              </Col>
              <Col size={1} style={forecastTemps}>
                <Text style={forecastTemp}>{lowTemp}</Text>
              </Col>
              <Col size={1} style={forecastTemps}>
                <Text style={forecastTemp}>{highTemp}</Text>
              </Col>
            </Row>
          )
        })}
      </Grid>
    )
  }
}

export default DailyForecast
