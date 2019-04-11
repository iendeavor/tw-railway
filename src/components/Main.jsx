import React from 'react'
import { Grid } from '@material-ui/core'

import Station from '../containers/Station'
import DateComponent from '../containers/Date'
import Schedule from '../containers/Schedule'

const Main = props => (
    <Grid
      container
      justify='space-between'
    >
        <Grid
          item
          xs={12}
          style={{
              border: '1px solid #ddd',
              boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              padding: '.5rem'
          }}
        >
            <Grid
              container
            >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  style={{padding: '5px 0'}}
                >
                    <DateComponent />
                </Grid>

                <Grid
                  item
                  xs={12}
                  lg={6}
                  style={{padding: '5px 0'}}
                >
                    <Station />
                </Grid>
            </Grid>
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

