import { CHANGE_SCALE } from '../actionTypes'

const initialState = true

const scaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCALE:
      return {
        isFahrenheit: !state.isFahrenheit
      };
    default:
      return state;
  }
}

export default scaleReducer
