import React from 'react'
import { Grid } from '@material-ui/core'

import Station from '../containers/Station'
import DateComponent from '../containers/Date'
import Filter from '../containers/Filter'
import Sort from '../containers/Sort'
import ScheduleList from '../containers/ScheduleList'

const Main = props => (
    <Grid
      container
      justify='space-between'
    >
        <Grid
          item
          xs={12}
          md={6}
        >
            <DateComponent />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
            <Station />
        </Grid>

        <Grid
          item
          xs={10}
        >
            <Filter />
        </Grid>

        <Grid
          item
          xs={12}
        >
            <Sort />
        </Grid>

        <Grid
          item
          xs={12}
        >
            <ScheduleList />
        </Grid>
    </Grid>
)

export default Main

