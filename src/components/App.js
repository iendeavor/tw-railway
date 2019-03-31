import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import Station from './Station'
import Date from './Date'
import Filter from './Filter'
import Sort from './Sort'
import Schedule from './Schedule'

const App = props => (
    <Grid
      container
      spacing={2}
    >
        <Grid
          item
          xs={12}
        >
            <Date />
        </Grid>

        <Grid
          item
          xs={12}
        >
            <Station />
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

export default connect()(App)

