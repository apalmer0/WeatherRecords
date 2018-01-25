import React from 'react'
import { AppRegistry } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'

import App from './App';
import { persistor, store } from './src/redux/store'

const ReduxApp = () => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
        <App />
    </Provider>
  </PersistGate>
)

AppRegistry.registerComponent('WeatherRecords', () => ReduxApp);
