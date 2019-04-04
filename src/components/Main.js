import React from 'react'
import { Grid } from '@material-ui/core'

import Station from './Station'
import DateComponent from './Date'
import Filter from './Filter'
import Sort from './Sort'
import Schedule from './Schedule'
import Search from './Search'

const Main = props => (
    <Grid
      container
      style={ {'maxWidth': '95%', 'padding': '2px', 'margin': 'auto'} }
      alignItems='flex-end'
      spacing={1}
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
          sm={9}
          md={5}
        >
            <Station />
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={1}
        >
            <Search />
        </Grid>

        <Grid
          item
          xs={12}
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
            <Schedule />
        </Grid>
    </Grid>
)

export default Main

