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
import { find } from 'lodash'

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
    const { currentTemp, index, location, navigate } = this.props
    const {
      cityListContainer,
      cityListItem,
      cityName,
      currentTempStyles,
      deleteButton,
      deleteText,
      listItem,
      textContainer,
    } = styles
    const { pan } = this.state
    const translateX = pan.x
    const newStyle = { transform: [{ translateX }] }
    const firstElementStyle = Platform.OS === 'ios' && index === 0 ? { paddingTop: 40 } : {}
    const temp = currentTemp ? Math.round(currentTemp) : '-'

    return (
      <View style={cityListContainer}>
        <TouchableHighlight style={[deleteButton, firstElementStyle]} onPress={this.showAlert} underlayColor='#B61210'>
          <Text style={deleteText}>Delete</Text>
        </TouchableHighlight>
        <Animated.View style={[cityListItem, newStyle]} {...this.panResponder.panHandlers}>
          <TouchableHighlight
            style={[listItem, firstElementStyle]}
            onPress={() => navigate('Weather', { location })}
            underlayColor='#1a3e61'
          >
            <View style={textContainer}>
              <Text style={cityName}>{location}</Text>
              <Text style={currentTempStyles}>{temp}°</Text>
            </View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isFahrenheit } = state.scale
  const weatherFormat = isFahrenheit ? 'temp_f' : 'temp_c'
  const { location } = ownProps
  const locationData = find(state.locations, ({ name }) => name === location).data
  const { currentData } = locationData
  let currentTemp

  if (currentData) {
    currentTemp = currentData[weatherFormat]
  }

  return { currentTemp }
}

const mapDispatchToProps = (dispatch) => ({
  clearLocation: location => dispatch(deleteLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(CityListItem)
