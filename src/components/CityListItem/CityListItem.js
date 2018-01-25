import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Alert,
  Animated,
  PanResponder,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import { deleteLocation } from '../../redux/actions/location'
import styles from './styles'

class CityListItem extends Component {
  state = {
    pan: new Animated.ValueXY(),
  }

  componentWillMount () {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0 && gestureState.dx > -110) {
          this.state.pan.setValue({ x: gestureState.dx })
        }
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx <= -100) {
          this.state.pan.setValue({x: -100, y: 0});
        } else {
          this.state.pan.setValue({x: 0, y: 0});
        }
      },
      onPanResponderTerminate: () => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onShouldBlockNativeResponder: () => true,
    })
  }

  deleteLocation = () => {
    const { clearLocation, location } = this.props

    clearLocation(location)
  }

  showAlert = () => {
    Alert.alert(
      `Delete ${this.props.location}`,
      'Are you sure?',
      [
        { text: 'Delete', onPress: this.deleteLocation },
        { text: 'Cancel', onPress: () => {
          this.state.pan.setValue({x: 0, y: 0});
        }, style: 'cancel' },
      ]
    )
  }

  render () {
    const { index, location, navigate } = this.props
    const { cityListContainer, cityListItem, cityName, deleteButton, deleteText, listItem } = styles
    const city = location.split(', ')[0]
    const state = location.split(', ')[1]
    const { pan } = this.state
    const translateX = pan.x
    const newStyle = { transform: [{ translateX }] }
    const firstElementStyle = Platform.OS === 'ios' && index === 0 ? { paddingTop: 40 } : {}

    return (
      <View style={cityListContainer}>
        <TouchableHighlight style={[deleteButton, firstElementStyle]} onPress={this.showAlert} underlayColor='#B61210'>
          <Text style={deleteText}>Delete</Text>
        </TouchableHighlight>
        <Animated.View style={[cityListItem, newStyle]} {...this.panResponder.panHandlers}>
          <TouchableHighlight
            style={[listItem, firstElementStyle]}
            onPress={() => navigate('Weather', { city, state })}
            underlayColor='#1a3e61'
          >
            <Text style={cityName}>{city}</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearLocation: location => dispatch(deleteLocation(location))
})

export default connect(null, mapDispatchToProps)(CityListItem)
