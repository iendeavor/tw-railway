import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, Grid, Button } from '@material-ui/core'

import KEYS from '../constants/keys'
import {
    FILTER_LABELS,
} from '../constants/labels'


const Filter = ({selectedValues, onAddingFilter, onRemovingFilter}) => {
    const options = [
        {value: KEYS.wheelChair, label: FILTER_LABELS.tw[KEYS.wheelChair]},
        {value: KEYS.bikeSpace, label: FILTER_LABELS.tw[KEYS.bikeSpace]},
        {value: KEYS.nursingRoom, label: FILTER_LABELS.tw[KEYS.nursingRoom]},
    ]

    return (
        <React.Fragment>
            <InputLabel shrink>
                Filter
            </InputLabel>

        <Grid
              container
              justify='space-between'
            >
            {
                options.map(option => (
                    <Grid
                      item
                      key={ option.value }
                      xs={4}
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

