import { StackNavigator } from 'react-navigation'

import HomeScreen from './src/app/screens/HomeScreen'
import SplashScreen from './src/app/screens/SplashScreen'

const fade = props => {
  const { position } = props
  const { index } = props.scene

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3],
  })

  return {
    opacity,
    transform: [{ translateX: 0 }, { translateY: 0 }],
  }
}

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Splash: { screen: SplashScreen },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    transitionConfig: () => ({
      screenInterpolator: props => fade(props),
    }),
  },
)

export default App
