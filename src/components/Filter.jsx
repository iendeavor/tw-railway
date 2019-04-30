import React from 'react'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Icon, InputLabel, Grid, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'


const Filter = ({
    options,
    selectedValues,
    onAddingFilter,
    onRemovingFilter,
    t,
}) => {
    return (
        <React.Fragment>
            <InputLabel shrink>
                { t('label_filter') }
            </InputLabel>

        <Grid
              container
              justify='space-around'
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
                            <Icon className={ clsx(option.icon) } p={0.5} style={{width: 'auto'}}/>
                            <Box display={{xs: 'none', sm: 'none', md: 'block'}} p={0.5}>
                                { t(option.name.toLowerCase()) }
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

export default withTranslation()(Filter)

