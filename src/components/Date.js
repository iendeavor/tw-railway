import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, Grid, TextField, Button } from '@material-ui/core';
import 'react-datepicker/dist/react-datepicker.css'

import { SET_DATE } from '../constants/actionTypes'
import { ON_DATE } from '../constants/keys'


const Date_ = ({yyyymmdd, isToday, isTomorrow,
                handleChangeDate, handleSetToday, handleSetTomorrow}) => {
    return(
        <Grid
          container
          alignItems="flex-end"
        >
            <Grid
              item
            >
                <InputLabel shrink>
                    Depature date
                </InputLabel>

                <TextField
                  style={{width: '100%'}}
                  type="date"
                  value={ yyyymmdd }
                  onChange={ handleChangeDate }
                />
            </Grid>

            <Grid
              item
            >
                <Grid
                  container
                >
                    <Grid
                      item
                    >
                        <Button
                          variant={ isToday ? 'contained' : 'text' }
                          color='primary'
                          onClick={ handleSetToday }
                          size='small'
                        >
                            Today
                        </Button>
                    </Grid>
                    <Grid
                      item
                    >
                        <Button
                          variant={ isTomorrow ? 'contained' : 'text' }
                          color='primary'
                          onClick={ handleSetTomorrow }
                          size='small'
                        >
                            Tomorrow
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Date_.propTypes = {
    yyyymmdd: PropTypes.string.isRequired,
    handleChangeDate: PropTypes.func.isRequired,
    handleSetToday: PropTypes.func.isRequired,
    handleSetTomorrow: PropTypes.func.isRequired,
    isToday: PropTypes.bool,
    isTomorrow: PropTypes.bool,
}

export default Date_

