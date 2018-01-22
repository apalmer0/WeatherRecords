import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import CityListItem from '../../components/CityListItem'
import styles from './styles'

export class HomeScreen extends Component {
  state = {
    locations: [
      'Boston, MA',
      'Midlothian, VA',
      'Hanover, NH',
      'Boulder, CO',
      'Rumney, NH',
    ]
  }
  render () {
    const { navigate } = this.props.navigation
    const { locations } = this.state

    return (
      <ScrollView style={styles.container}>
        {locations.map((location, index) => (
            <CityListItem navigate={navigate} location={location} key={index} />
          )
        )}
      </ScrollView>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Cities',
}

export default HomeScreen
