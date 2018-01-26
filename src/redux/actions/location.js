import axios from 'axios'
import moment from 'moment'

import { ADD_LOCATION, DELETE_LOCATION, FETCH_LOCATION_DATA } from '../actionTypes'

const WEATHER_UNDERGROUND_API_KEY = 'e6ceaca079a9b34e'

export const addLocation = (name) => (
  (dispatch, getState) => {
    const { locations } = getState()
    const locationExists = locations.filter(location => location.name === name).length > 0

    if (!locationExists) {
      const payload = {
        name,
        data: {},
        lastUpdated: '',
      }

      dispatch({ type: ADD_LOCATION, payload })
    }
  }
)

export const deleteLocation = locationName => ({
  type: DELETE_LOCATION,
  payload: locationName,
})

export const getLocationData = (location) => {
  const city = location.split(', ')[0]
  const state = location.split(', ')[1]
  const now = moment().format('MM/DD/YY:ha')

  return (dispatch, getState) => {
    const { locations } = getState()
    const givenLocation = locations.find(({ name }) => name === location)

    if (givenLocation.lastUpdated !== now) {
      return axios.get(`https://api.wunderground.com/api/${WEATHER_UNDERGROUND_API_KEY}/conditions/almanac/forecast/hourly/astronomy/q/${state}/${city}.json`, {
        timeout: 5000,
      })
      .then(response => {
        const {
          almanac: history,
          current_observation: currentData,
          forecast,
          hourly_forecast: hourlyForecast,
          sun_phase: sunPhase,
        } = response.data
        const { sunrise, sunset } = sunPhase
        const { forecastday: dailyForecast } = forecast.simpleforecast
        const payload = {
          data: {
            currentData,
            dailyForecast,
            history,
            hourlyForecast,
            sunrise: `${sunrise.hour}:${sunrise.minute}`,
            sunset: `${sunset.hour}:${sunset.minute}`,
          },
          lastUpdated: now,
          name: location,
        }

        dispatch({
          type: FETCH_LOCATION_DATA,
          payload,
        })
      })
    }
  }
}

export default {
  addLocation,
  deleteLocation,
  getLocationData,
}
