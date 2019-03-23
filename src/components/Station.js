import React from 'react';
import PropTypes from 'prop-types'
import { Button, Grid, InputLabel, Select } from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import SearchIcon from '@material-ui/icons/Search'

import { FROM_STATION, TO_STATION, STATIONS } from '../constants/keys'


const Station = ({from, to, stations,
                  handleSwapStation, handleSetFromStation, handleSetToStation, handleSearch}) => {
    return (
        <Grid
          container
        >
            <Grid
              item
              xs={12}
            >
                <Grid
                  container
                  alignItems='flex-end'
                  justify='space-between'
                >
                    <Grid
                      item
                      xs={9}
                    >
                        <InputLabel shrink>
                            From
                        </InputLabel>

                        <Select
                          native
                          key={ from }
                          defaultValue={ from }
                          onChange={ handleSetFromStation }
                          style={ {width: '100%'} }
                        >
                        {
                            stations.map(option => {
                                return (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                )
                            })
                        }
                        </Select>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                    >
                        <Button
                          onClick={ handleSwapStation }
                          variant='text'
                          color='primary'
                          size='small'
                        >
                            <SwapHorizIcon />
                        </Button>
                    </Grid>

                </Grid>

                <Grid
                  container
                  alignItems='flex-end'
                  justify='space-between'
                >
                    <Grid
                      item
                      xs={9}
                    >
                        <InputLabel shrink>
                            To
                        </InputLabel>

                        <Select
                          native
                          key={ to }
                          defaultValue={ to }
                          onChange={ handleSetToStation }
                          style={ {width: '100%'} }
                        >
                        {
                            stations.map(station => {
                                return (
                                    <option
                                      key={ station.value }
                                      value={ station.value }
                                    >
                                        { station.label }
                                    </option>
                                )
                            })
                        }
                        </Select>
                    </Grid>

                    <Grid
                      item
                      xs={3}
                    >
                        <Button
                          onClick={ handleSearch }
                          variant='text'
                          color='secondary'
                          size='small'
                        >
                            <SearchIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Station.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    stations: PropTypes.array.isRequired,
    handleSwapStation: PropTypes.func.isRequired,
    handleSetFromStation: PropTypes.func.isRequired,
    handleSetToStation: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
}

export default Station

