import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Grid } from 'react-native-easy-grid'

import HourlyForecastItem from '../HourlyForecastItem'
import styles from './styles'

export class HourlyForecast extends Component {
  render () {
    const { forecast } = this.props

    return (
      <Grid style={styles.hourlyForecastContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {forecast.map((hour, index) => {
            const { FCTTIME, icon_url: iconUrl, temp, pop } = hour

            return (
              <HourlyForecastItem
                ampm={FCTTIME.ampm}
                chanceOfPrecip={pop}
                hour={FCTTIME.hour}
                iconUrl={iconUrl}
                key={index}
                temp={temp.english}
              />
            )
          })}
        </ScrollView>
      </Grid>
    )
  }
}

export default HourlyForecast
