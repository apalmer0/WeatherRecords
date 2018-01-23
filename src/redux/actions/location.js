import axios from 'axios'

import { ADD_LOCATION, FETCH_LOCATIONS } from '../actionTypes'

export const addLocation = (name) => (
  dispatch => axios.post('http://localhost:3000/locations', { name })
    .then(response => {
      dispatch({
        type: ADD_LOCATION,
        payload: response.data,
      })
    })
)

export const fetchLocations = () => (
  dispatch => axios.get('http://localhost:3000/locations')
    .then(response => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: response.data
      })
    })
)

export default {
  addLocation,
  fetchLocations,
}
