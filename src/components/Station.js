import React, {Component} from 'react';
import Select from 'react-select'
import {
    Row,
    Col,
} from 'react-bootstrap'
import * as Icon from 'react-feather'

import {
    SET_STATION,
} from '../constants/actionTypes'
import {
    START_STATION,
    END_STATION,
} from '../constants/enums'

const mapStateToProps = state => ({
    selectedOption: 'ChangHua',
    options: [
        {value: 'ChangHua', label: '彰化'},
        {value: 'Taichung', label: '臺中'},
        {value: 'Kaushung', label: '高雄'},
    ]
})

const mapDispatchToProps = dispatch => null


const Station = props => {
    const selectedOption = 'ChangHua'
    const options = [
        {value: 'ChangHua', label: '彰化'},
        {value: 'Taichung', label: '臺中'},
        {value: 'Kaushung', label: '高雄'},
    ]

    return (
        <Row>
            <Col>
                <Select
                  value={ selectedOption }
                  options={ options }
                />
            </Col>
            <Col xs={1} className="align-content-center justify-content-center p-0">
                <Icon.ArrowRight size={"100%"}/>
            </Col>
            <Col>
                <Select
                  value={ selectedOption }
                  options={ options }
                />
            </Col>
        </Row>
    )
}

export default Station

