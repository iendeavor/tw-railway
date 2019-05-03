import React from 'react'
import { withTranslation } from 'react-i18next';
import { Button, Icon, Link, AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import clsx from 'clsx'

import i18n from '../i18n';


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
                          justify="space-between"
                        >
                            <Grid
                              item
                            >
                                <Typography
                                  variant='h5'
                                >
                                    { props.t('app_name') }
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
                                          onClick={ () => {
                                            const languages = {
                                              en: 'zh_TW',
                                              zh_TW: 'jp',
                                              jp: 'en'
                                            }
                                            i18n.changeLanguage(languages[i18n.language])
                                          }}
                                          style={{width: '100%', color: 'white'}}
                                        >
                                            <Icon 
                                              className={ clsx('fas fa-language') } 
                                              style={{padding: 0.5, width: 'auto'}}
                                            />
                                        </Link>
                                    </Button>
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

export default withTranslation()(Header)

