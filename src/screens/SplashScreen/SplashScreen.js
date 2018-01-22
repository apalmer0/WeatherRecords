import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const MILLISECONDS_TO_WAIT = 100

class SplashScreen extends Component {
  componentDidMount () {
    const { transitionToHomeScreen } = this;

    setTimeout(transitionToHomeScreen, Number(MILLISECONDS_TO_WAIT));
  }

  transitionToHomeScreen = () => {
    const { navigate } = this.props.navigation;

    navigate('Home');
  };

  render () {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Weather Records</Text>
        <Text style={styles.subtitle}>Current vs record temps</Text>
      </View>
    )
  }
}

export default SplashScreen
