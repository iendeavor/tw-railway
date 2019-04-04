import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'


const Header = props => {
    return (
        <Grid
          container
          style={ {'marginBottom': '10px',} }
        >
            <Grid
              item
              xs={12}
            >
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <Grid
                          container
                          justify="center"
                        >
                            <Typography
                              variant='h5'
                            >
                                Taiwan Railway Search
                            </Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    )
}

export default Header

