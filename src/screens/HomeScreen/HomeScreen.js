import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ScrollView, Text, View } from 'react-native'

import AddLocationModal from '../../components/AddLocationModal'
import CityListItem from '../../components/CityListItem'
import styles from './styles'

export class HomeScreen extends Component {
  state = {
    activeItem: undefined,
    showModal: false,
  }

  setActiveItem = (index) => (
    this.setState({ activeItem: index })
  )

  toggleModal = () => {
    const { showModal } = this.state

    this.setState({ showModal: !showModal })
  }

  render () {
    const { locations, navigation } = this.props
    const { activeItem, showModal } = this.state
    const { navigate } = navigation

    return (
      <ScrollView style={styles.container}>
        {!!locations.length && locations.map((location, index) => (
            <CityListItem
              activeItem={activeItem}
              index={index}
              key={location.name}
              location={location.name}
              navigate={navigate}
              setActiveItem={this.setActiveItem}
            />
          )
        )}
        {!locations.length &&
          <View style={styles.noLocations}>
            <Text style={styles.noLocationText}>No locations found</Text>
          </View>
        }
        <Button onPress={this.toggleModal} title='Add location' />
        <AddLocationModal
          visible={showModal}
          toggleModal={this.toggleModal}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { locations } = state

  return { locations }
}

export default connect(mapStateToProps)(HomeScreen)
