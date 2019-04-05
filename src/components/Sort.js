import React from 'react'
import { connect } from 'react-redux'
import { Grid, InputLabel, Button } from '@material-ui/core'

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

const mapDispatchToProps = dispatch => {
    return {
        handleChangeSort: value => {
            dispatch({
                type: SET_SORT,
                payload: {
                    [SORT_BY]: value,
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleChangeOrder: value => {
            dispatch({
                type: SET_ORDER,
                payload: {
                    [ORDER_BY]: value,
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
        <React.Fragment>
            <InputLabel shrink>
                Sort
            </InputLabel>

            <Grid
              container
            >
            {
                sortOptions.map(option => (
                    <Grid
                      key={option.value}
                      item
                      xs={3}
                    >
                        <Button
                          key={ option.value }
                          size='small'
                          variant={ selectedSort === option.value ? 'contained' : 'text' }
                          color='primary'
                          onClick={ _ => {
                              props.handleChangeSort(option.value)
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

export default connect(mapStateToProps, mapDispatchToProps)(Sort)

