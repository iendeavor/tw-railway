import React from 'react';
import { connect } from 'react-redux'
import { Button, Grid, InputLabel, Select } from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import SearchIcon from '@material-ui/icons/Search'

import { SEARCH, SWAP_STATION, SET_FROM_STATION, SET_TO_STATION } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, ON_DATE, STATIONS } from '../constants/keys'
import store from '../store'

const mapStateToProps = state => {
    return {
        [FROM_STATION]: state.station[FROM_STATION],
        [TO_STATION]: state.station[TO_STATION],
        [STATIONS]: state.station[STATIONS],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeStartStation: event => {
            dispatch({
                type: SET_FROM_STATION,
                payload: {
                    [FROM_STATION]: event.target.value,
                },
            })
        },
        handleChangeEndStation: event => {
            dispatch({
                type: SET_TO_STATION,
                payload: {
                    [TO_STATION]: event.target.value,
                },
            })
        },
        handleSwapStation: event => {
            dispatch({
                type: SWAP_STATION,
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleSearch: event => {
            dispatch({
                type: SEARCH,
                payload: {
                    [FROM_STATION]: store.getState().station[FROM_STATION],
                    [TO_STATION]: store.getState().station[TO_STATION],
                    [ON_DATE]: store.getState().date[ON_DATE],
                },
                meta: {
                    debounce: {
                        time: 500,
                    },
                },
            })
        },
    }
}

const Station = props => {
    const startStation = props[FROM_STATION]
    const endStation = props[TO_STATION]
    const options = props[STATIONS]

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
                          key={ startStation }
                          defaultValue={ startStation }
                          onChange={ props.handleChangeStartStation }
                          style={ {width: '100%'} }
                        >
                        {
                            options.map(option => {
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
                          onClick={props.handleSwapStation}
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
                          key={ endStation }
                          defaultValue={ endStation }
                          onChange={ props.handleChangeEndStation }
                          style={ {width: '100%'} }
                        >
                        {
                            options.map(option => {
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
                          onClick={ props.handleSearch }
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

export default connect(mapStateToProps, mapDispatchToProps)(Station)

