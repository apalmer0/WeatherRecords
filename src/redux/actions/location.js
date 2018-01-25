import { ADD_LOCATION, DELETE_LOCATION } from '../actionTypes'

export const addLocation = payload => ({ type: ADD_LOCATION, payload })
export const deleteLocation = payload => ({ type: DELETE_LOCATION, payload })

export default {
  addLocation,
  deleteLocation,
}
