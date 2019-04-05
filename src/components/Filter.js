import React from 'react'
import { connect } from 'react-redux'
import { Grid, Button, InputLabel } from '@material-ui/core'

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
    return {
       selectedValues: Array.from(state.filter.selectedValues),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddingFilter: value => {
            dispatch({
                type: ADD_FILTER,
                payload: {
                    value: value,
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleRemovingFilter: value=> {
            dispatch({
                type: REMOVE_FILTER,
                payload: {
                    value: value,
                },
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

const Filter = props => {
    const options = [
        {value: WHEEL_CHAIR, label: LABEL.tw[WHEEL_CHAIR]},
        {value: BIKE_SPACE, label: LABEL.tw[BIKE_SPACE]},
        {value: NURSING_ROOM, label: LABEL.tw[NURSING_ROOM]},
    ]

    return (
        <React.Fragment>
            <InputLabel shrink>
                Must have
            </InputLabel>

            <Grid
              container
            >
            {
                options.map(option => (
                    <Grid
                      item
                      key={ option.value }
                    >
                        <Button
                          variant={ props.selectedValues.indexOf(option.value) === -1 ? 'text' : 'contained' }
                          size='small'
                          color='primary'
                          onClick={ _ => {
                              if (props.selectedValues.indexOf(option.value) === -1) {
                                  props.handleAddingFilter(option.value)
                              } else {
                                  props.handleRemovingFilter(option.value)
                              }
                          }}
                          style={ {width: '100%'} }
                        >
                            { option.label }
                        </Button>
                    </Grid>
                ))
            }
            </Grid>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

