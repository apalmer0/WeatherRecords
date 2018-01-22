import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

export class CurrentConditions extends Component {
  render () {
    const { iconUrl, temp, weather } = this.props
    const { header, description, headerIcon, tempStyles, weatherStyles } = styles
    const currentTemp = Math.round(temp)
    const source = {
      uri: iconUrl.replace('http', 'https')
    }

    return (
      <View style={header}>
        <View style={description}>
          <Image style={headerIcon} source={source} />
          <Text style={weatherStyles}>{weather}</Text>
        </View>
        <Text style={tempStyles}>{currentTemp}°</Text>
      </View>
    )
  }
}

export default CurrentConditions
