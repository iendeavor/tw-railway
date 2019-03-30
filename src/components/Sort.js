import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button, FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core'

import {
    SET_SORT,
    SET_ORDER
} from '../constants/actionTypes'
import {
    SORT_BY,
    ORDER_BY,
} from '../constants/keys'
import {
    ARRIVAL,
    DEPARTURE,
    CHEAP_COST,
    SMALL_TRANSFER,
    FIRST,
    LAST,
    LABEL,
} from '../constants/sortTypes'

const mapStateToProps = state => {
    return {
        [SORT_BY]: state.sort[SORT_BY],
        [ORDER_BY]: state.sort[ORDER_BY],
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeSort: event => dispatch({
        type: SET_SORT,
        payload: {
            [SORT_BY]: event.target.value
        }
    }),
    onChangeOrder: event => dispatch({
        type: SET_ORDER,
        payload: {
            [ORDER_BY]: event.target.value
        }
    })
})

const Sort = props => {
    const selectedSort = props[SORT_BY]
    const selectedOrder = props[ORDER_BY]
    const sortOptions = [
        {value: ARRIVAL, label: LABEL.tw[ARRIVAL]},
        {value: DEPARTURE, label: LABEL.tw[DEPARTURE]},
        {value: CHEAP_COST, label: LABEL.tw[CHEAP_COST]},
        {value: SMALL_TRANSFER, label: LABEL.tw[SMALL_TRANSFER]},
    ]
    const orderOptions = [
        {value: FIRST, label: LABEL.tw[FIRST][props[SORT_BY]]},
        {value: LAST, label: LABEL.tw[LAST][props[SORT_BY]]},
    ]

    return (
        <Grid container>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor="sort-required">
                        Sort by
                    </InputLabel>

                    <Select
                      native
                      defaultValue={selectedSort}
                      onChange={props.onChangeSort}
                    >
                    {
                        sortOptions.map(option => {
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

            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor="order-required">
                        Order by
                    </InputLabel>

                    <Select
                      native
                      defaultValue={selectedOrder}
                      onChange={props.onChangeOrder}
                    >
                    {
                        orderOptions.map(option => {
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
        </Grid>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)

