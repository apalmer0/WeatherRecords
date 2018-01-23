import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Alert,
  Animated,
  PanResponder,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'

import { deleteLocation } from '../../redux/actions/location'
import styles from './styles'

class CityListItem extends Component {
  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(1),
  }

  componentWillMount () {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        Animated.spring(
          this.state.scale,
          { toValue: 1.01, friction: 3 }
        ).start();
      },
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
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      },
      onPanResponderTerminate: () => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onShouldBlockNativeResponder: () => true,
    })
  }

  deleteLocation = () => {
    const { clearLocation, id } = this.props

    clearLocation(id)
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
    const { location, navigate } = this.props
    const { cityListContainer, cityListItem, cityName, deleteButton, deleteText, listItem } = styles
    const city = location.split(', ')[0]
    const state = location.split(', ')[1]
    const { pan, scale } = this.state
    const translateX = pan.x
    const rotate = '0deg'
    const newStyle = { transform: [{ translateX }, {rotate}, {scale}] }

    return (
      <View style={cityListContainer}>
        <TouchableHighlight style={deleteButton} onPress={this.showAlert} underlayColor='#B61210'>
          <Text style={deleteText}>Delete</Text>
        </TouchableHighlight>
        <Animated.View style={[cityListItem, newStyle]} {...this.panResponder.panHandlers}>
          <TouchableHighlight
            style={listItem}
            onPress={() => navigate('Weather', { city, state })}
            underlayColor='#068F12'
          >
            <Text style={cityName}>{city}</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearLocation(id) {
    return dispatch(deleteLocation(id))
  }
})

export default connect(null, mapDispatchToProps)(CityListItem)
