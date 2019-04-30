import React from 'react'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import { InputLabel, Grid, TextField, Button } from '@material-ui/core';


const Date_ = ({
    selectedDate,
    isToday,
    isTomorrow,
    onChangeDate,
    onSetToday,
    onSetTomorrow,
    t,
}) => {
    return(
        <Grid
          container
          alignItems="flex-end"
        >
            <Grid
              item
            >
                <InputLabel shrink>
                  { t('label_departureDate') }
                </InputLabel>

                <TextField
                  style={{width: '100%'}}
                  type="date"
                  value={ selectedDate }
                  onChange={ onChangeDate }
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
                          onClick={ onSetToday }
                          size='small'
                        >
                            { t('date_today') }
                        </Button>
                    </Grid>
                    <Grid
                      item
                    >
                        <Button
                          variant={ isTomorrow ? 'contained' : 'text' }
                          color='primary'
                          onClick={ onSetTomorrow }
                          size='small'
                        >
                            { t('date_tomorrow') }
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Date_.propTypes = {
    selectedDate: PropTypes.string.isRequired,
    isToday: PropTypes.bool,
    isTomorrow: PropTypes.bool,
    onChangeDate: PropTypes.func.isRequired,
    onSetToday: PropTypes.func.isRequired,
    onSetTomorrow: PropTypes.func.isRequired,
}

export default withTranslation()(Date_)

