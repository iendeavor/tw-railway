import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, InputLabel } from '@material-ui/core'

import {
    WHEEL_CHAIR,
    BIKE_SPACE,
    NURSING_ROOM,
} from '../constants/keys'
import {
    FILTER_LABELS,
} from '../constants/labels'


const Filter = ({selectedValues, onAddingFilter, onRemovingFilter}) => {
    const options = [
        {value: WHEEL_CHAIR, label: FILTER_LABELS.tw[WHEEL_CHAIR]},
        {value: BIKE_SPACE, label: FILTER_LABELS.tw[BIKE_SPACE]},
        {value: NURSING_ROOM, label: FILTER_LABELS.tw[NURSING_ROOM]},
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
                          variant={ selectedValues.indexOf(option.value) === -1 ? 'text' : 'contained' }
                          size='small'
                          color='primary'
                          onClick={ _ => {
                              if (selectedValues.indexOf(option.value) === -1) {
                                  onAddingFilter(option.value)
                              } else {
                                  onRemovingFilter(option.value)
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

Filter.propTypes = {
    selectedValues: PropTypes.array.isRequired,
    onAddingFilter: PropTypes.func.isRequired,
    onRemovingFilter: PropTypes.func.isRequired,
}

export default Filter

