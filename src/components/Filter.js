import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import {
    ADD_FILTER,
    REMOVE_FILTER,
} from '../constants/actionTypes'
import {
    WHEEL_CHAIR,
    BIKE_SPACE,
    NURSING_ROOM,
    LABEL,
} from '../constants/filter'

const mapStateToProps = state => ({
    [WHEEL_CHAIR]: state[WHEEL_CHAIR],
    [BIKE_SPACE]: state[BIKE_SPACE],
    [NURSING_ROOM]: state[NURSING_ROOM],
})

const mapDispatchToProps = dispatch => ({
    onAddFilter: event => dispatch({
        type: ADD_FILTER,
        payload: {
            [event.value]: true,
        }
    }),
    onRemoveFilter: event => dispatch({
        type: REMOVE_FILTER,
        payload: {
            [event.value]: false,
        }
    }),
})

const Filter = props => {
    const options = [
        {value: WHEEL_CHAIR, label: LABEL.tw[WHEEL_CHAIR]},
        {value: BIKE_SPACE, label: LABEL.tw[BIKE_SPACE]},
        {value: NURSING_ROOM, label: LABEL.tw[NURSING_ROOM]},
    ]

    return (
        <Select
          isSearchable={ false }
          closeMenuOnSelect={false}
          isMulti
          options={options}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

