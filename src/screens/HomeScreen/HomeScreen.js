import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ScrollView } from 'react-native'

import AddLocationModal from '../../components/AddLocationModal'
import CityListItem from '../../components/CityListItem'
import Loading from '../../components/Loading'
import { fetchLocations } from '../../redux/actions/location'
import styles from './styles'

export class HomeScreen extends Component {
  state = {
    showModal: false,
  }

  componentDidMount () {
    this.props.getLocations()
  }

  toggleModal = () => {
    const { showModal } = this.state

    this.setState({ showModal: !showModal })
  }

  render () {
    const { locations, navigation } = this.props
    const { navigate } = navigation
    const { showModal } = this.state

    if (!locations.length) return <Loading />

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

const mapStateToProps = (state) => ({
  locations: state.locations,
})

const mapDispatchToProps = (dispatch) => ({
  getLocations() {
    return dispatch(fetchLocations())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
