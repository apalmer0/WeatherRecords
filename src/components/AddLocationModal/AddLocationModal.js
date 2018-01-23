import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'

import styles from './styles'
import { addLocation } from '../../redux/actions/location'

export class AddLocationModal extends Component {
  state = { location: '' }

  updateField = (location) => {
    this.setState({ location })
  }

  submitLocation = () => {
    const { createLocation, toggleModal } = this.props

    createLocation(this.state.location)
      .then(() => {
        this.setState({ location: '' })
        toggleModal()
      })
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
          <Text style={styles.headerText}>Add a new location:</Text>
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
  createLocation(name) {
    return dispatch(addLocation(name))
  }
})

export default connect(null, mapDispatchToProps)(AddLocationModal)
