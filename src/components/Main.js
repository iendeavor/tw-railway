import React from 'react'
import { Grid } from '@material-ui/core'

import Station from './Station'
import DateComponent from './Date'
import Filter from './Filter'
import Sort from './Sort'
import ScheduleList from './ScheduleList'
import Search from './Search'

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

