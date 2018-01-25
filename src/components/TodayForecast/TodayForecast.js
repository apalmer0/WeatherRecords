import React, { Component } from 'react'
import { Text } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'

import styles from './styles'

export class TodayForecast extends Component {
  render () {
    const { high, low } = this.props
    const { colStyle, gridStyle, tempsToday, tempsTodayHeader } = styles

    return (
      <Grid style={gridStyle}>
        <Col style={colStyle}>
          <Text style={tempsTodayHeader}>TODAY</Text>
        </Col>
        <Col style={colStyle}>
          <Text style={tempsToday}>{low} - {high}</Text>
        </Col>
      </Grid>
    )
  }
}

export default TodayForecast
