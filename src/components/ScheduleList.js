import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Card } from '@material-ui/core'

import { DEPARTURE, ARRIVAL } from '../constants/keys'
import Schedule from './Schedule'


const ScheduleList = ({schedules}) => {
    return (
        <Grid
          container
        >
            { schedules.map((schedule, i) => {
                return (
                    <Grid
                      item
                      key={ schedule.departure + schedule.arrival + '-' + i }
                      xs={12}
                    >
                        <Card
                          style={ {margin: '1rem 0 0 0',
                                   padding: '.3rem',
                                   'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} }
                        >
                            <Schedule {...schedule} />
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired,
}

export default ScheduleList

