import React, { Component } from 'react'
import axios from 'axios'
import { Button, ScrollView } from 'react-native'

import AddLocationModal from '../../components/AddLocationModal'
import CityListItem from '../../components/CityListItem'
import Loading from '../../components/Loading'
import styles from './styles'

export class HomeScreen extends Component {
  state = {
    locations: [],
    showModal: false,
  }

  componentDidMount () {
    axios.get('http://localhost:3000/locations')
      .then(response => (
        this.setState({ locations: response.data })
      ))
  }

  toggleModal = () => {
    const { showModal } = this.state

    this.setState({ showModal: !showModal })
  }

  render () {
    const { navigate } = this.props.navigation
    const { locations, showModal } = this.state

    if (!locations) return <Loading />

    return (
      <ScrollView style={styles.container}>
        {locations.map((location, index) => (
            <CityListItem navigate={navigate} location={location.name} key={index} />
          )
        )}
        <Button onPress={this.toggleModal} title='Add location' />
        <AddLocationModal
          visible={showModal}
          toggleModal={this.toggleModal}
        />
      </ScrollView>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Locations',
}

export default HomeScreen
