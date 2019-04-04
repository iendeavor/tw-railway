import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = props => (
    <Grid
      container
      justify="center"
    >
        <Grid
          item
          xs={12}
        >
            <Header />
        </Grid>

        <Grid
          item
        >
            <Main />
        </Grid>

        <Grid
          item
        >
            <Footer />
        </Grid>
    </Grid>
)

export default connect()(App)

