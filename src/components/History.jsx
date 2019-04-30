import React from 'react'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import { Divider, InputLabel, Grid, Chip, Button } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'


const History = ({
    histories,
    onSearch,
    t,
}) => {
    return (
        <React.Fragment>
            <InputLabel shrink>
                { t('label_history') }
            </InputLabel>

            <Grid
              container
              justify='center'
            >
                { histories.map((history, index) => {
                    return (
                        <React.Fragment
                          key={index}
                        >
                            { index !== 0 && <Divider
                                  style={{width: '100%'}}
                                  light
                              />
                            }
                            <Grid
                              item
                              xs={9}
                            >
                                    <Chip
                                      style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        margin: '2px'
                                      }}
                                      variant='outlined'
                                          component='p'
                                      label={ history.departureDate }
                                    />
                                    <Chip
                                      style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        margin: '2px'
                                      }}
                                      variant='outlined'
                                          component='span'
                                      label={ t(history.fromStationName.toLowerCase()) }
                                    />
                                    <Chip
                                      style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        margin: '2px'
                                      }}
                                      variant='outlined'
                                          component='p'
                                      label={ t(history.toStationName.toLowerCase()) }
                                    />
                            </Grid>
                            <Grid
                              item
                            >
                                <Button
                                  onClick={ () => onSearch(history.fromStation, history.toStation, history.departureDate) }
                                  color='primary'
                                  variant='text'
                                  size='small'
                                >
                                    <RestoreIcon />
                                </Button>
                            </Grid>
                        </React.Fragment>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

History.propTypes = {
    histories: PropTypes.arrayOf(PropTypes.shape({
        fromStation: PropTypes.string.isRequired,
        toStation: PropTypes.string.isRequired,
        fromStationName: PropTypes.string.isRequired,
        toStationName: PropTypes.string.isRequired,
        departureDate: PropTypes.string.isRequired
    })),
    onSearch: PropTypes.func.isRequired
}

export default withTranslation()(History)

