import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

class CityListItem extends Component {
  onPress = () => true

  render () {
    const { city, navigate } = this.props

    return (
      <View style={styles.containerx}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigate('Weather')}
        >
          <Text style={styles.cityName}>{city}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CityListItem
