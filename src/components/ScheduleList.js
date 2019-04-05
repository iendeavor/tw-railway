import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Card } from '@material-ui/core'

import { DEPARTURE, ARRIVAL, SCHEDULES } from '../constants/keys'
import Schedule from './Schedule'


const ScheduleList = props => {
    return (
        <Grid
          container
        >
            { props[SCHEDULES].map((schedule, i) => {
                return (
                    <Grid
                      item
                      key={schedule[DEPARTURE] + schedule[ARRIVAL] + '-' + i}
                      xs={12}
                    >
                        <Card>
                            { Schedule({schedule}) }
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

ScheduleList.propTypes = {
    [SCHEDULES]: PropTypes.array.isRequired,
}

export default ScheduleList

