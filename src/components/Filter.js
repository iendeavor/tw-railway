import React from 'react'
import { connect } from 'react-redux'
import { FormControl, InputLabel, Select } from '@material-ui/core'

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

const mapStateToProps = state => {
    console.log('---')
    console.log(state.filter.selectedValues)
    return {
        selectedValues: Array.from(state.filter.selectedValues),
    }
}

const mapDispatchToProps = dispatch => ({
    addFilter: value => {
        console.log('add')
        dispatch({
            type: ADD_FILTER,
            payload: {
                value: value
            }
        })
    },
    removeFilter: value=> {
        console.log('remove')
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
                  native
                  multiple
                  value={ props.selectedValues }
                  onChange={event => {
                      const value = event.target.value
                      console.log('+++')
                      console.log(value)
                      if (value !== '') {
                          if (props.selectedValues.indexOf(value) === -1) {
                            props.addFilter(value)
                          } else {
                            props.removeFilter(value)
                          }
                      }
                  }}
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
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

