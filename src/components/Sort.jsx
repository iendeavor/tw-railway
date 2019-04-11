import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Icon, InputLabel, Grid, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import KEYS from '../constants/keys'
import {
    LABEL,
} from '../constants/sortTypes'


const Sort = ({
    options,
    selectedSort,
    onSetSort,
}) => {
    return (
        <React.Fragment>
            <InputLabel shrink>
                Primary
            </InputLabel>

            <Grid
              container
              justify='space-between'
            >
            {
                options.map((option, i) => (
                    <Grid
                      key={i}
                      item
                      xs={3}
                    >
                        <Button
                          key={ option.value }
                          size='small'
                          variant={ selectedSort === option.value ? 'contained' : 'text' }
                          color='primary'
                          onClick={ _ => {
                              onSetSort(option.value)
                          }}
                          style={ {width: '100%'} }
                        >
                            <Icon className={ clsx(option.icon) } style={{width: 'auto'}}/>
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

Sort.propTypes = {
    options: PropTypes.array.isRequired,
    selectedSort: PropTypes.oneOf([KEYS.duration, KEYS.arrival, KEYS.departure, KEYS.fare, KEYS.smallTransfer]).isRequired,
    onSetSort: PropTypes.func.isRequired,
}

export default Sort

