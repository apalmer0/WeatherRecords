import React, { Component } from 'react'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'
import axios from 'axios'

import styles from './styles'

export class AddLocationModal extends Component {
  state = { location: '' }

  updateField = (location) => {
    this.setState({ location })
  }

  submitLocation = () => {
    axios.post('http://localhost:3000/locations', {
      name: this.state.location
    })
      .then(() => {
        this.setState({ location: '' })
        this.props.toggleModal()
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

export default AddLocationModal
