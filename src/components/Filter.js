import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import {
    WHEEL_CHAIR,
    BIKE_SPACE,
    NURSING_ROOM,
    LABEL,
} from '../constants/filter'

const Filter = props => {
    const options = [
        {value: WHEEL_CHAIR, label: LABEL.tw[WHEEL_CHAIR]},
        {value: BIKE_SPACE, label: LABEL.tw[BIKE_SPACE]},
        {value: NURSING_ROOM, label: LABEL.tw[NURSING_ROOM]},
    ]

    return (
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={options}
        />
    )
}

export default Filter

