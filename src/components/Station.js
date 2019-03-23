import React, {Component} from 'react';
import { connect } from 'react-redux'
import Select from 'react-select'
import { Row, Col } from 'react-bootstrap'
import * as Icon from 'react-feather'

import { SET_START_STATION, SET_END_STATION } from '../constants/actionTypes'
import { START_STATION, END_STATION, STATIONS } from '../constants/keys'
import { stations } from '../data/stations'

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
                <Select
                  defaultValue={ startStation }
                  options={ options }
                  onChange={props.onChangeStartStation}
                />
            </Col>
            <Col xs={1} className="align-content-center justify-content-center p-0">
                <Icon.ArrowRight/>
            </Col>
            <Col>
                <Select
                  defaultValue={ endStation }
                  options={ options }
                  onChange={props.onChangeEndStation}
                />
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

