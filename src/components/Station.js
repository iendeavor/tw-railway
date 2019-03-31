import React from 'react';
import { connect } from 'react-redux'
import { Grid, FormControl, InputLabel, Select } from '@material-ui/core'

import { SET_START_STATION, SET_END_STATION } from '../constants/actionTypes'
import { START_STATION, END_STATION, STATIONS } from '../constants/keys'

const mapStateToProps = state => ({
    [START_STATION]: state.station[START_STATION],
    [END_STATION]: state.station[END_STATION],
    [STATIONS]: state.station[STATIONS],
})

const mapDispatchToProps = dispatch => ({
    onChangeStartStation: event => (
        dispatch({
            type: SET_START_STATION,
            payload: {
                [START_STATION]: event.value,
            }
        })
    ),
    onChangeEndStation: event => (
        dispatch({
            type: SET_END_STATION,
            payload: {
                [END_STATION]: event.value,
            }
        })
    )
})

const Station = props => {
    const startStation = props[START_STATION]
    const endStation = props[END_STATION]
    const options = props[STATIONS]

    return (
        <Grid
          container
          justify="center"
          alignItems="center"
        >
            <FormControl style={{width: '50%'}}>
                <InputLabel htmlFor="from-required">
                    From
                </InputLabel>

                <Select
                  native
                  defaultValue={ startStation }
                  onChange={props.onChangeStartStation}
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
            </FormControl>

            <FormControl style={{width: '50%'}}>
                <InputLabel htmlFor="to-required">
                    To
                </InputLabel>

                <Select
                  native
                  defaultValue={ endStation }
                  onChange={props.onChangeStartStation}
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
            </FormControl>
        </Grid>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

