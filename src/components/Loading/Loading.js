import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const MILLISECONDS_TO_WAIT = 500

export class Loading extends Component {
  state = {
    count: 0,
    text: '.',
  }

  componentDidMount () {
    this.interval = setInterval(this.updateLoadingText, Number(MILLISECONDS_TO_WAIT));
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  updateLoadingText = () => {
    const { count, text } = this.state

    if (count === 3) {
      this.setState({
        count: 0,
        text: '.',
      })
    } else {
      const newText = `${text}.`

      this.setState({
        count: count + 1,
        text: newText,
      })
    }
  }

  render () {
    const { text } = this.state
    const source = {
      uri: 'https://media2.giphy.com/media/3ohhwr9fxNhozYRhLy/giphy.gif'
    }

    return (
      <View style={styles.container}>
        <Image source={source} style={styles.loadingImage} />
        <Text style={styles.loadingText}>Loading</Text>
        <Text style={styles.loadingText}>{text}</Text>
      </View>
    )
  }
}

export default Loading
