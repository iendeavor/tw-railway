import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, Grid, TextField } from '@material-ui/core'


const Date_ = ({
    selectedDepartureTime,
    selectedArrivalTime,
    onSetDepartureTime,
    onSetArrivalTime,
    onResetTime,
}) => {
    return(
        <Grid
          container
          alignItems="flex-end"
          justify='space-between'
        >
            <Grid
              item
              xs={6}
            >
                <InputLabel shrink>
                    Depature time
                </InputLabel>

                <TextField
                  style={{width: '100%'}}
                  type="time"
                  defaultValue={ selectedDepartureTime }
                  onChange={ onSetDepartureTime }
                />
            </Grid>

            <Grid
              item
              xs={6}
            >
                <InputLabel shrink>
                    Arrival time
                </InputLabel>

                <TextField
                  style={{width: '100%'}}
                  type="time"
                  defaultValue={ selectedArrivalTime }
                  onChange={ onSetArrivalTime }
                />
            </Grid>
        </Grid>
    )
}

Date_.propTypes = {
    selectedDepartureTime: PropTypes.string,
    selectedArrivalTime: PropTypes.string,
    onSetDepartureTime: PropTypes.func.isRequired,
    onSetArrivalTime: PropTypes.func.isRequired,
    onResetTime: PropTypes.func.isRequired,
}

export default Date_

