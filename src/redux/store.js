import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import locationReducer from './reducers/location'
import scaleReducer from './reducers/scale'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'locations',
    'scale',
  ],
}

const rootReducer = combineReducers({
  locations: locationReducer,
  scale: scaleReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
