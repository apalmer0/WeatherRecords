import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import locationReducer from './reducers/location'

const rootReducer = combineReducers({
  locations: locationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
