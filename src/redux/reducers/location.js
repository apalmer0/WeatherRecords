import { ADD_LOCATION, DELETE_LOCATION, FETCH_LOCATION_DATA } from '../actionTypes'

const initialState = []

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_LOCATION:
      return state.filter(location => location.name !== action.payload);
    case FETCH_LOCATION_DATA:
      return [
        ...state.filter(location => location.name !== action.payload.name),
        action.payload,
      ]
    default:
      return state;
  }
}

export default locationReducer
