import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

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
                          key={i}
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

