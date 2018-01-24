import axios from 'axios'

import { ADD_LOCATION, DELETE_LOCATION, FETCH_LOCATIONS } from '../actionTypes'

const URL = '192.168.1.155'

export const addLocation = (name) => (
  dispatch => axios.post(`http://${URL}:3000/locations`, { name })
    .then(response => {
      dispatch({
        type: ADD_LOCATION,
        payload: response.data,
      })
    })
)

export const deleteLocation = (locationId) => (
  dispatch => axios.delete(`http://${URL}:3000/locations/${locationId}`)
    .then(() => {
      dispatch({
        type: DELETE_LOCATION,
        payload: locationId,
      })
    })
)

export const fetchLocations = () => (
  dispatch => axios.get(`http://${URL}:3000/locations`)
    .then(response => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: response.data
      })
    })
)

export default {
  addLocation,
  deleteLocation,
  fetchLocations,
}
