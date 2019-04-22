import React from 'react'
import PropTypes from 'prop-types'
import { Divider, InputLabel, Grid, Chip, Button } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'


const History = ({
    histories,
    onRestoreHistory
}) => {
    return (
        <React.Fragment>
            <InputLabel shrink>
                History
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
                                          component='span'
                                      label={ history.fromStation }
                                    />
                                    <Chip
                                      style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        margin: '2px'
                                      }}
                                      variant='outlined'
                                          component='p'
                                      label={ history.toStation }
                                    />
                            </Grid>
                            <Grid
                              item
                            >
                                <Button
                                  onClick={ () => onRestoreHistory(index) }
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
    })),
    onRestoreHistory: PropTypes.func.isRequired
}

export default History

