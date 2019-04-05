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
          xs={12}
          sm={8}
          xl={6}
          style={ {padding: '2px'} }
        >
            <Main />
        </Grid>

        <Grid
          item
          xs={12}
        >
            <Footer />
        </Grid>
    </Grid>
)

export default connect()(App)

