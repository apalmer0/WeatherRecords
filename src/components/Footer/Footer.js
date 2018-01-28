import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { Text, TouchableOpacity } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'

import styles from './styles'

export class Footer extends Component {
  render () {
    const {
      backgroundColor,
      isFahrenheit,
      navigate,
      toggleTemperatureScale
    } = this.props
    const {
      backButtonContainer,
      boldStyle,
      bottomMenu,
      nonBoldStyle,
      scale,
      weatherScale,
    } = styles
    const boldCelsius = !isFahrenheit ? boldStyle : nonBoldStyle
    const boldFahrenheit = isFahrenheit ? boldStyle : nonBoldStyle

    return (
      <Grid style={bottomMenu}>
        <Col>
          <TouchableOpacity style={weatherScale} onPress={toggleTemperatureScale}>
            <Text style={[scale, boldCelsius]}>C°</Text>
            <Text style={scale}> / </Text>
            <Text style={[scale, boldFahrenheit]}>F°</Text>
          </TouchableOpacity>
        </Col>
        <Col style={backButtonContainer}>
          <Icon.Button
            backgroundColor={backgroundColor}
            color='#EBECEE'
            name="back"
            onPress={() => navigate('Home')}
            padding={0}
            size={30}
          />
        </Col>
      </Grid>
    )
  }
}

export default Footer
