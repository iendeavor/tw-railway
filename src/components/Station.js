import React from 'react';
import PropTypes from 'prop-types'
import { Button, Grid, InputLabel, Select } from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import SearchIcon from '@material-ui/icons/Search'


const Station = ({
    selectedFrom,
    selectedTo,
    stations,
    onSwapStation,
    onSetFromStation,
    onSetToStation,
    onSearch,
}) => {
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
                      xs={8}
                    >
                        <InputLabel shrink>
                            From
                        </InputLabel>

                        <Select
                          native
                          key={ selectedFrom }
                          defaultValue={ selectedFrom }
                          onChange={ onSetFromStation }
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
                          onClick={ onSwapStation }
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
                      xs={8}
                    >
                        <InputLabel shrink>
                            To
                        </InputLabel>

                        <Select
                          native
                          key={ selectedTo }
                          defaultValue={ selectedTo }
                          onChange={ onSetToStation }
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
                          onClick={ onSearch }
                          variant='contained'
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
    selectedFrom: PropTypes.string.isRequired,
    selectedTo: PropTypes.string.isRequired,
    stations: PropTypes.array.isRequired,
    onSwapStation: PropTypes.func.isRequired,
    onSetFromStation: PropTypes.func.isRequired,
    onSetToStation: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default Station

