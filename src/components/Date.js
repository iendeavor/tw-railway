import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import 'react-datepicker/dist/react-datepicker.css'

import { SET_DATE } from '../constants/actionTypes'


const mapStateToProps = state => {
    console.log(state)
    return {
        value: state.date.value,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeDate: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    value: event.target.value,
                },
            })
        }
    }
}

const Date = props => {
    return(
        <React.Fragment>
            <TextField
              label="To date"
              type="date"
              value={ props.value }
              onChange={ props.handleChangeDate }
            />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Date)

