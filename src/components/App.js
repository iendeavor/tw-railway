import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import Station from './Station'
import Date from './Date'
import Filter from './Filter'
import Sort from './Sort'

const App = props => (
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Date />
        </Grid>

        <Grid item xs={12} sm={6}>
            <Station />
        </Grid>

        <Grid item xs={12} md={6}>
            <Filter />
        </Grid>

        <Grid item xs={12} md={6}>
            <Sort />
        </Grid>
    </Grid>
)

export default connect()(App)

