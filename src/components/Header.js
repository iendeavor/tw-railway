import React from 'react'
import { Button, Icon, Link, AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import clsx from 'clsx'


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
                          justify="space-around"
                        >
                            <Grid
                              item
                            >
                                <Typography
                                  variant='h5'
                                >
                                    Taiwan Railway
                                </Typography>
                            </Grid>
                            <Grid
                              item
                            >
                                <Grid
                                  container
                                  justify='flex-end'
                                >
                                    <Button
                                      size='small'
                                      style={{padding: '0', paddingTop: '4px', minWidth: '44px'}}
                                    >
                                        <Link
                                          href='https://github.com/iendeavor'
                                          style={{width: '100%', color: 'white'}}
                                        >
                                            <Icon className={ clsx('fab fa-github') } />
                                        </Link>
                                    </Button>
                                    <Button
                                      size='small'
                                      style={{padding: '0', paddingTop: '4px', minWidth: '44px'}}
                                    >
                                        <Link
                                          href='https://github.com/iendeavor/tw-tailway'
                                          style={{width: '100%', color: 'white'}}
                                        >
                                            <Icon className={ clsx('fas fa-code-branch') } />
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    )
}

export default Header

