import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import KEYS from '../constants/keys'
import Schedule from '../containers/Schedule'


const ScheduleList = ({schedules}) => {
    return (
        <Grid
          container
        >
            <Grid
              item
              xs={12}
            >
                { schedules.map((schedule, i) => {
                    return (
                        <Schedule
                          {...schedule}
                          index={ i }
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired,
}

export default ScheduleList

