import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {
    Row,
    Col
} from 'react-bootstrap'


const DatePickerComponent = props => {
    return(
        <Row>
            <Col></Col> {/*polyfill: align center for DatePicker*/}

            <DatePicker
              className="text-center"
              selected={ new Date() }
              dateFormat="YYYY-MM-dd"
              value={ props.date }
            />

            <Col></Col>
        </Row>
    )
}

export default DatePickerComponent

