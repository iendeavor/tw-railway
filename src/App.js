import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

import Station from './components/Station'
import DatePicker from './components/DatePicker'
import Filter from './components/Filter'
import Sort from './components/Sort'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <div className="m-1">
                            <DatePicker />
                        </div>
                        <div className="m-1">
                            <Station />
                        </div>
                        <div className="m-1">
                            <Filter />
                        </div>
                        <div className="m-1">
                            <Sort />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(App)

