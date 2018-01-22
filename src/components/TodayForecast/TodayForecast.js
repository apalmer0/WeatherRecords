import React, { Component } from 'react'
import { Text } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'

import styles from './styles'

export class TodayForecast extends Component {
  render () {
    const { high, low } = this.props
    const { tempsToday, tempsTodayHeader } = styles

    return (
      <Grid>
        <Col>
          <Text style={tempsTodayHeader}>TODAY</Text>
        </Col>
        <Col>
          <Text style={tempsToday}>{low} - {high}</Text>
        </Col>
      </Grid>
    )
  }
}

export default TodayForecast
