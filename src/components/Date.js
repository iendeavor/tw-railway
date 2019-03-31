import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, TextField, Button } from '@material-ui/core';
import 'react-datepicker/dist/react-datepicker.css'

import { SET_DATE } from '../constants/actionTypes'


const toYYYYMMDD = date => date.toISOString().slice(0, 10)

const mapStateToProps = state => {
    return {
        yyyymmdd: toYYYYMMDD(state.date.date),
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
            })
        },
        handleSetToday: event => {
            const today = new Date()
            dispatch({
                type: SET_DATE,
                payload: {
                    date: today,
                },
            })
        },
        handleSetTomorrow: event => {
            const today = Math.floor(Date.now())
            const tomorrow = new Date(today + 86400 * 1000)
            dispatch({
                type: SET_DATE,
                payload: {
                    date: tomorrow,
                },
            })
        },
    }
}

const Date_ = props => {
    return(
        <Grid
          container
          justify="center"
          alignItems="center"
        >
            <Grid
              item
              xs={5}
            >
                <TextField
                  style={{width: '100%'}}
                  label="To date"
                  type="date"
                  value={ props.yyyymmdd }
                  onChange={ props.handleChangeDate }
                />
            </Grid>

            <Grid
              item
              xs={7}
            >
                <Button
                  style={{width: '50%'}}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={ props.handleSetToday }
                >
                    Today
                </Button>

                <Button
                  style={{width: '50%'}}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={ props.handleSetTomorrow }
                >
                    Tomorrow
                </Button>
            </Grid>
        </Grid>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Date_)

