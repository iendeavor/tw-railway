import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    LAST,
    LABEL,
} from '../constants/sortTypes'

const mapStateToProps = state => {
    return {
        [SORT_BY]: state.sort[SORT_BY],
        [ORDER_BY]: state.sort[ORDER_BY],
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeSort: event => dispatch({
        type: SET_SORT,
        payload: {
            [SORT_BY]: event.value
        }
    }),
    onChangeOrder: event => dispatch({
        type: SET_ORDER,
        payload: {
            [ORDER_BY]: event.target.value
        }
    })
})

const Sort = props => {
    const selectedSort = props[SORT_BY]
    const options = [
        {value: ARRIVE, label: LABEL.tw[ARRIVE]},
        {value: DEPARTURE, label: LABEL.tw[DEPARTURE]},
        {value: CHEAP_COST, label: LABEL.tw[CHEAP_COST]},
        {value: SMALL_TRANSFER, label: LABEL.tw[SMALL_TRANSFER]},
    ]
    const first = LABEL.tw[FIRST][props[SORT_BY]]
    const last = LABEL.tw[LAST][props[SORT_BY]]
    const selectedOrder = props[ORDER_BY]

    return (
        <div>
            <Row>
                <Col className="pr-1">
                    <Select
                      defaultValue={selectedSort}
                      options={options}
                      onChange={props.onChangeSort}
                    />
                </Col>

                <Col className="pl-1">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="w-100">
                            <Button
                              value={LAST}
                              variant={selectedOrder === LAST ? 'primary' : 'secondary'}
                              onClick={props.onChangeOrder}
                            >
                                {last}
                            </Button>

                            <Button
                              value={FIRST}
                              variant={selectedOrder === FIRST ? 'primary' : 'secondary'}
                              onClick={props.onChangeOrder}
                            >
                                {first}
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)

