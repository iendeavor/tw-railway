import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Icon, InputLabel, Grid, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import KEYS from '../constants/keys'
import {
    LABEL,
} from '../constants/sortTypes'


const Sort = ({selectedSort, onSetSort}) => {
    const sortOptions = [
        {
            value: KEYS.departure,
            label: LABEL.tw[KEYS.departure],
            icon: 'fas fa-plane-departure'},
        {
            value: KEYS.arrival,
            label: LABEL.tw[KEYS.arrival],
            icon: 'fas fa-plane-arrival'},
        {
            value: KEYS.duration,
            label: LABEL.tw[KEYS.duration],
            icon: 'fas fa-hourglass-start'},
        {
            value: KEYS.fare,
            label: LABEL.tw[KEYS.fare],
            icon: 'fas fa-dollar-sign',
        },
    ]

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
                sortOptions.map((option, i) => (
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
                                { option.label }
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
    selectedSort: PropTypes.oneOf([KEYS.duration, KEYS.arrival, KEYS.departure, KEYS.fare, KEYS.smallTransfer]).isRequired,
    onSetSort: PropTypes.func.isRequired,
}

export default Sort

