import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ScrollView } from 'react-native'

import AddLocationModal from '../../components/AddLocationModal'
import CityListItem from '../../components/CityListItem'
import styles from './styles'

export class HomeScreen extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    const { showModal } = this.state

    this.setState({ showModal: !showModal })
  }

  render () {
    const { locations, navigation } = this.props
    const { navigate } = navigation
    const { showModal } = this.state

    return (
      <ScrollView style={styles.container}>
        {!!locations.length && locations.map((location, index) => (
            <CityListItem key={location} location={location} navigate={navigate} index={index} />
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

const mapStateToProps = (state) => {
  const { locations } = state

  return { locations }
}

export default connect(mapStateToProps)(HomeScreen)
