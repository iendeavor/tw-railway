import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid } from '@material-ui/core'

import ScheduleItem from '../containers/ScheduleItem'
import Filter from '../containers/Filter'
import Sort from '../containers/Sort'
import Time from '../containers/Time'


const Schedule = ({
    schedules,
}) => {
    return (
        <Grid
          container
        >
            <Grid
              item
              xs={12}
            >
                <Card
                  style={{
                      margin: '1rem 0 0',
                      padding: '.5rem',
                      boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
                  }}
                >
                    <Time />
                    <Filter />
                    <Sort />
                </Card>
            </Grid>

            <Grid
              item
              xs={12}
            >
                { schedules.map((schedule, i) => {
                    return (
                        <ScheduleItem
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

Schedule.propTypes = {
    schedules: PropTypes.array.isRequired,
}

export default Schedule

