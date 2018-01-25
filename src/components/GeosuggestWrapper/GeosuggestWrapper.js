import React, { Component } from 'react'
import { connect } from 'react-redux'
import { difference, find } from 'lodash'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import styles from './styles'
import { addLocation } from '../../redux/actions/location'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCA07g4oXkGBi5XOUpkSvEFIEy9C0E_7z0'

export class AddLocationModal extends Component {
  getLocationName = (addressComponents) => {
    const cityObject = find(addressComponents, (component) => {
      const { types } = component

      return types.includes('locality') || types.includes('sublocality')
    })
    const stateObject = find(addressComponents, (component) => {
      const { types } = component

      return difference(['administrative_area_level_1', 'political'], types).length === 0
    })

    return `${cityObject.long_name}, ${stateObject.short_name}`
  }

  submitLocation = (data) => {
    const { createLocation, toggleModal } = this.props
    const { address_components: addressComponents } = data
    const cityState = this.getLocationName(addressComponents)

    createLocation(cityState)
    toggleModal()
  }

  render () {
    const queryObject = {
      components: 'country:us',
      key: GOOGLE_MAPS_API_KEY,
      language: 'en',
      types: '(cities)',
    }

    return (
      <GooglePlacesAutocomplete
        autoFocus={false}
        debounce={200}
        fetchDetails
        minLength={2}
        onPress={(_, details) => this.submitLocation(details)}
        placeholder='Enter Location'
        query={queryObject}
        returnKeyType='default'
        styles={styles}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createLocation: name => dispatch(addLocation(name))
})

export default connect(null, mapDispatchToProps)(AddLocationModal)
