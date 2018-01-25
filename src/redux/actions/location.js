import { ADD_LOCATION, DELETE_LOCATION } from '../actionTypes'

export const addLocation = (payload) => (
  (dispatch, getState) => {
    const { locations } = getState()

    if (!locations.includes(payload)) {
      dispatch({ type: ADD_LOCATION, payload })
    }
  }
)


export const deleteLocation = payload => ({ type: DELETE_LOCATION, payload })

export default {
  addLocation,
  deleteLocation,
}
