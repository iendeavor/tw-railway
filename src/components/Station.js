import React from 'react';
import { connect } from 'react-redux'
import { Button, Grid, InputLabel, Select } from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'

import { SWAP_STATION, SET_FROM_STATION, SET_TO_STATION } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, STATIONS } from '../constants/keys'

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
    }
}

const Station = props => {
    const startStation = props[FROM_STATION]
    const endStation = props[TO_STATION]
    const options = props[STATIONS]

    return (
        <Grid
          container
          alignItems="flex-end"
        >
            <Grid
              item
            >
                <InputLabel shrink>
                    From
                </InputLabel>

                <Select
                  native
                  key={ startStation }
                  defaultValue={ startStation }
                  onChange={ props.handleChangeStartStation }
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
            >
                <Button
                  onClick={props.handleSwapStation}
                >
                    <SwapHorizIcon />
                </Button>
            </Grid>

            <Grid
              item
            >
                <InputLabel shrink>
                    To
                </InputLabel>

                <Select
                  native
                  key={ endStation }
                  defaultValue={ endStation }
                  onChange={ props.handleChangeEndStation }
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
        </Grid>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

