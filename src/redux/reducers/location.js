import { ADD_LOCATION, DELETE_LOCATION, FETCH_LOCATIONS } from '../actionTypes'

const initialState = []

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_LOCATION:
      return state.filter(location => location.id !== action.payload);
    case FETCH_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
}

export default locationReducer
