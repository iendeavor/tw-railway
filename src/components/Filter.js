import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, FormControl, FormHelperText, MenuItem, Checkbox, ListItemText, Chip, InputLabel, Select } from '@material-ui/core'

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
    selectedValues: Array.from(state.filter.selectedValues),
})

const mapDispatchToProps = dispatch => ({
    addFilter: value => {
        dispatch({
            type: ADD_FILTER,
            payload: {
                value: value
            }
        })
    },
    removeFilter: value=> {
        dispatch({
            type: REMOVE_FILTER,
            payload: {
                value: value
            }
        })
    },
})

const Filter = props => {
    const options = [
        {value: WHEEL_CHAIR, label: LABEL.tw[WHEEL_CHAIR]},
        {value: BIKE_SPACE, label: LABEL.tw[BIKE_SPACE]},
        {value: NURSING_ROOM, label: LABEL.tw[NURSING_ROOM]},
    ]

    return (
        <React.Fragment>
            <FormControl>
                <InputLabel shrink htmlFor="filter-required">
                    Filter
                </InputLabel>

                <Select
                  multiple
                  value={ props.selectedValues }
                  renderValue={ selected => selected.join(', ') }
                  onChange={event => {
                    if (props.selectedValues.length < event.target.value.length) {
                        const value = event.target.value.filter(v => props.selectedValues.indexOf(v) === -1)
                        props.addFilter(value[0])
                    } else {
                        const value = props.selectedValues.filter(v => event.target.value.indexOf(v) === -1)
                        props.removeFilter(value[0])
                    }
                  }}
                >
                {
                    options.map(option => {
                        return (
                            <MenuItem
                              key={option.value}
                              value={option.value}
                            >
                                <Checkbox checked={ props.selectedValues.indexOf(option.value) > -1 } />
                                <ListItemText primary={option.label} />
                            </MenuItem>
                        )
                    })
                }
                </Select>
            </FormControl>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

