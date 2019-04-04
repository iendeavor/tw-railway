import React from 'react'
import { connect } from 'react-redux'
import { InputLabel, Grid, TextField, Button } from '@material-ui/core';
import 'react-datepicker/dist/react-datepicker.css'

import { SET_DATE } from '../constants/actionTypes'
import { ON_DATE } from '../constants/keys'


const toYYYYMMDD = date => date.toISOString().slice(0, 10)
const getToday = () => new Date()
const getTomorrow = () => new Date(getToday() / 1 + (86400 * 1000))

const mapStateToProps = state => {
    return {
        yyyymmdd: toYYYYMMDD(state.date[ON_DATE]),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeDate: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    date: new Date(event.target.value),
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleSetToday: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    date: getToday(),
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleSetTomorrow: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    date: getTomorrow(),
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
    }
}

const Date_ = props => {
    return(
        <Grid
          container
          alignItems="flex-end"
        >
            <Grid
              item
              xs={5}
            >
                <InputLabel shrink>
                    Depature date
                </InputLabel>

                <TextField
                  style={{width: '100%'}}
                  type="date"
                  value={ props.yyyymmdd }
                  onChange={ props.handleChangeDate }
                />
            </Grid>

            <Grid
              item
              xs={7}
            >
                <Grid
                  container
                >
                    <Grid
                      item
                    >
                        <Button
                          variant={ props.yyyymmdd === toYYYYMMDD(getToday())? 'contained' : 'outlined' }
                          size="small"
                          color='primary'
                          onClick={ props.handleSetToday }
                        >
                            Today
                        </Button>
                    </Grid>
                    <Grid
                      item
                    >
                        <Button
                          variant={ props.yyyymmdd === toYYYYMMDD(getTomorrow())? 'contained' : 'outlined' }
                          size="small"
                          color='primary'
                          onClick={ props.handleSetTomorrow }
                        >
                            Tomorrow
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Date_)

