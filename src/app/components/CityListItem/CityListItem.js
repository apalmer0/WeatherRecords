import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

class CityListItem extends Component {
  onPress = () => true

  render () {
    const { location, navigate } = this.props
    const city = location.split(', ')[0]
    const state = location.split(', ')[1]

    return (
      <View style={styles.containerx}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigate('Weather', { city, state })}
        >
          <Text style={styles.cityName}>{location}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CityListItem
