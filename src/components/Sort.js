import React from 'react'
import PropTypes from 'prop-types'
import { Grid, InputLabel, Button } from '@material-ui/core'

import { SET_SORT } from '../constants/actionTypes'
import { SORT_BY } from '../constants/keys'
import {
    ARRIVAL,
    DEPARTURE,
    CHEAP_COST,
    SMALL_TRANSFER,
    LABEL,
} from '../constants/sortTypes'


const Sort = ({SORT_BY, ORDER_BY, onChangeSort}) => {
    const selectedSort = SORT_BY
    const sortOptions = [
        {value: ARRIVAL, label: LABEL.tw[ARRIVAL]},
        {value: DEPARTURE, label: LABEL.tw[DEPARTURE]},
        {value: CHEAP_COST, label: LABEL.tw[CHEAP_COST]},
        {value: SMALL_TRANSFER, label: LABEL.tw[SMALL_TRANSFER]},
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
                              onChangeSort(option.value)
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

Sort.propTypes = {
    [SORT_BY]: PropTypes.oneOf([ARRIVAL, DEPARTURE, CHEAP_COST, SMALL_TRANSFER]).isRequired,
    onChangeSort: PropTypes.func.isRequired,
}

export default Sort

