import React, { Component } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'

import GeosuggestWrapper from '../GeosuggestWrapper'
import styles from './styles'

export class AddLocationModal extends Component {
  render () {
    const { visible, toggleModal } = this.props

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
              <GeosuggestWrapper toggleModal={toggleModal} />
              <TouchableOpacity style={styles.submitButton} onPress={toggleModal}>
                <Text style={styles.submitButtonText}>cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

export default AddLocationModal
