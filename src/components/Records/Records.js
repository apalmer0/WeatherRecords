import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export class Records extends Component {
  render () {
    const {
      highTemp,
      highYear,
      lowTemp,
      lowYear,
      normalHigh,
      normalLow,
    } = this.props
    const {
      normalRange,
      recordContainer,
      recordHeader,
      records,
      recordTemp,
      recordTempYear,
      recordTitle,
    } = styles

    return (
      <View>
        <Text style={recordTitle}>Record low and high today:</Text>
        <Text style={normalRange}>NORMAL: {normalLow}° - {normalHigh}°</Text>
        <View style={records}>
          <View style={recordContainer}>
            <Text style={recordHeader}>Low:</Text>
            <Text style={recordTemp}>{lowTemp}°</Text>
            <Text style={recordTempYear}>({lowYear})</Text>
          </View>
          <View style={recordContainer}>
            <Text style={recordHeader}>High:</Text>
            <Text style={recordTemp}>{highTemp}°</Text>
            <Text style={recordTempYear}>({highYear})</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Records
