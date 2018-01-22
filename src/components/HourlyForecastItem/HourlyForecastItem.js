import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'

import styles from './styles'

export class HourlyForecastItem extends Component {
  getAdjustedTime = () => {
    const { ampm, hour } = this.props
    let time

    if (hour === '0') {
      time = '12'
    } else {
      time = hour > 12 ? hour - 12 : hour
    }

    return `${time}${ampm}`
  }

  getAdjustedChanceOfPrecip = () => {
    const { chanceOfPrecip } = this.props
    const chance = 5 * Math.round(chanceOfPrecip / 5)
    const conditionalChance = chance === 0 ? '' : `${chance}%`

    return conditionalChance
  }

  render () {
    const { iconUrl, temp } = this.props
    const {
      hourlyForecastHour,
      hourlyIcon,
      hourlyPOP,
      hourlyTemp,
      hourlyTime,
    } = styles
    const time = this.getAdjustedTime()
    const chance = this.getAdjustedChanceOfPrecip()
    const source = {
      uri: iconUrl.replace('http', 'https')
    }

    return (
      <Col style={hourlyForecastHour}>
        <Row>
          <Text style={hourlyTime}>{time}</Text>
        </Row>
        <Row>
          <Grid>
            <Row>
              <Text style={hourlyPOP}>{chance}</Text>
            </Row>
            <Row>
              <Image style={hourlyIcon} source={source} />
            </Row>
          </Grid>
        </Row>
        <Row>
          <Text style={hourlyTemp}>{temp}°</Text>
        </Row>
      </Col>
    )
  }
}

export default HourlyForecastItem
