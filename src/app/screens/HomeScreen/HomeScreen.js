import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import CityListItem from '../../components/CityListItem'
import styles from './styles'

export class HomeScreen extends Component {
  state = {
    cities: [
      'Boston, MA',
      'Midlothian, VA',
      'Hanover, NH',
      'Boulder, CO',
      'Rumney, NH',
    ]
  }
  render () {
    const { navigate } = this.props.navigation
    const { cities } = this.state

    return (
      <ScrollView style={styles.container}>
        {cities.map((city, index) => (
            <CityListItem navigate={navigate} city={city} key={index} />
          )
        )}
      </ScrollView>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Cities'
}

export default HomeScreen
