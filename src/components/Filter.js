import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, InputLabel } from '@material-ui/core'

import {
    WHEEL_CHAIR,
    BIKE_SPACE,
    NURSING_ROOM,
    LABEL,
} from '../constants/filter'


const Filter = ({selectedValues, handleAddingFilter, handleRemovingFilter}) => {
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
                          variant={ selectedValues.indexOf(option.value) === -1 ? 'text' : 'contained' }
                          size='small'
                          color='primary'
                          onClick={ _ => {
                              if (selectedValues.indexOf(option.value) === -1) {
                                  handleAddingFilter(option.value)
                              } else {
                                  handleRemovingFilter(option.value)
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
    handleAddingFilter: PropTypes.func.isRequired,
    handleRemovingFilter: PropTypes.func.isRequired,
}

export default Filter

