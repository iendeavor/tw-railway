import React from 'react'
import { Grid } from '@material-ui/core'

import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

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
          style={ {padding: '0.3rem'} }
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

export default App

