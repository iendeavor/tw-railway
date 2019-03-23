import React from 'react'
import Select from 'react-select'
import {
    Row,
    Col,
    ButtonToolbar,
    ButtonGroup,
    Button
} from 'react-bootstrap'

import {
    SET_SORT,
    SET_ORDER
} from '../constants/actionTypes'
import {
    SORT_BY,
    ORDER_BY,
} from '../constants/keys'
import {
    ARRIVE,
    DEPARTURE,
    CHEAP_COST,
    SMALL_TRANSFER,
    FIRST,
    LAST
} from '../constants/sortTypes'

const mapStateToProps = state => ({
    [SORT_BY]: state[SORT_BY],
    [ORDER_BY]: state[ORDER_BY],
});

const mapDispatchToProps = dispatch => ({
    onChangeSort: event =>
        dispatch({
            type: SET_SORT,
            payload: {
                value: event.value
            }
        }),
    onChangeOrder: event =>
        dispatch({
            type: SET_ORDER,
            payload: {
                value: event.value
            }
        })
})

const Sort = props => {
    const selectedSort = ARRIVE
    const options = [
        {value: ARRIVE, label: 'Arrive'},
        {value: DEPARTURE, label: 'Departue'},
        {value: CHEAP_COST, label: 'Cost'},
        {value: SMALL_TRANSFER, label: 'Transfer'},
    ]
    // const first = props[ORDER_BY]
    const first = 'First'
    const last = 'Last'
    const selectedOrder = 'First'

    return (
        <div>
            <Row>
                <Col className="pr-1">
                    <Select
                      value={selectedSort}
                      options={options}
                    />
                </Col>
                <Col className="pl-1">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="w-100">
                            <Button variant={selectedOrder === last ? 'primary' : 'secondary'}>{last}</Button>
                            <Button variant={selectedOrder === first ? 'primary' : 'secondary'}>{first}</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
        </div>
    )
}

export default Sort

