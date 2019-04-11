import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Icon, InputLabel, Grid, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import KEYS from '../constants/keys'


const Filter = ({
    options,
    selectedValues,
    onAddingFilter,
    onRemovingFilter,
}) => {
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
                            <Icon className={ clsx(option.icon) } p={0.5} style={{width: 'auto'}}/>
                            <Box display={{xs: 'none', sm: 'none', md: 'block'}} p={0.5}>
                                { option.name }
                            </Box>
                        </Button>
                    </Grid>
                ))
            }
            </Grid>
        </React.Fragment>
    )
}

Filter.propTypes = {
    options: PropTypes.array.isRequired,
    selectedValues: PropTypes.array.isRequired,
    onAddingFilter: PropTypes.func.isRequired,
    onRemovingFilter: PropTypes.func.isRequired,
}

export default Filter
