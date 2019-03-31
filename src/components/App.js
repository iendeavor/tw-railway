import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import Header from './Header'
import Station from './Station'
import DateComponent from './Date'
import Filter from './Filter'
import Sort from './Sort'
import Schedule from './Schedule'

const App = props => (
    <Grid
      container
      justify="center"
    >
        <Grid
          item
          xs={12}
        >
            <Grid
              container
              style={ {'marginBottom': '10px',} }
            >
                <Grid
                  item
                  xs={12}
                >
                    <Header />
                </Grid>
            </Grid>
        </Grid>

        <Grid
          item
        >
            <Grid
              container
              spacing={2}
              style={ {'maxWidth': '720px', 'padding': '2px'} }
            >
                <Grid
                  item
                  xs={12}
                  sm={7}
                >
                    <DateComponent />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={5}
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

            </Grid>
        </Grid>
    </Grid>
)

export default connect()(App)

