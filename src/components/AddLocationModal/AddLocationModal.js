import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'

import styles from './styles'
import { addLocation } from '../../redux/actions/location'

const options = [
  'Boston, MA',
  'Boston, VA',
  'Bostonia, CA',
]

export class AddLocationModal extends Component {
  state = { location: '' }

  updateField = (location) => {
    this.setState({ location })
  }

  submitLocation = () => {
    const { createLocation, toggleModal } = this.props

    createLocation(this.state.location)
    this.setState({ location: '' })
    toggleModal()
  }

  render () {
    const { visible, toggleModal } = this.props
    const { location } = this.state

    return (
      <Modal
        visible={visible}
        animationType='slide'
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.searchForm}>
            <Text style={styles.headerText}>Enter a city and state:</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.inputField}
                value={location}
                onChangeText={this.updateField}
              />
              <TouchableOpacity style={styles.submitButton} onPress={this.submitLocation}>
                <Text style={styles.submitButtonText}>submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {options.map((option) => (
            <View style={styles.resultContainer} key={option}>
              <Text style={styles.resultText}>{option}</Text>
            </View>
            ))
          }
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.closeModalButton}
          >
            <Text style={styles.closeModalText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createLocation: name => dispatch(addLocation(name))
})

export default connect(null, mapDispatchToProps)(AddLocationModal)
