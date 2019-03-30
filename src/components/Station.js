import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core'
import * as Icon from 'react-feather'

import { SET_START_STATION, SET_END_STATION } from '../constants/actionTypes'
import { START_STATION, END_STATION, STATIONS } from '../constants/keys'
import { stations } from '../resources/stations'

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
        <Row>
            <Col>
                <FormControl required>
                    <InputLabel htmlFor="from-required">
                        From
                    </InputLabel>

                    <Select
                      native
                      isSearchable={ false }
                      defaultValue={ startStation }
                      options={ options }
                      onChange={props.onChangeStartStation}
                    >
                    {
                        options.map(option => {
                            return (
                                <option value={option.value}>
                                    {option.label}
                                </option>
                            )
                        })
                    }
                    </Select>
                </FormControl>
            </Col>
            <Col>
                <FormControl required>
                    <InputLabel htmlFor="to-required">
                        to
                    </InputLabel>

                    <Select
                      native
                      isSearchable={ false }
                      defaultValue={ endStation }
                      onChange={props.onChangeStartStation}
                    >
                    {
                        options.map(option => {
                            return (
                                <option value={option.value}>
                                    {option.label}
                                </option>
                            )
                        })
                    }
                    </Select>
                </FormControl>
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

