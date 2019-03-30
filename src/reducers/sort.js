import {
    SET_SORT,
    SET_ORDER,
} from '../constants/actionTypes'
import {
    SORT_BY,
    ORDER_BY,
} from '../constants/keys'
import {
    ARRIVAL,
    DEPARTURE,
    CHEAP_COST,
    SMALL_TRANSFER,
    FIRST,
    LAST,
} from '../constants/sortTypes'

const defaultState = {
    [SORT_BY]: ARRIVAL,
    [ORDER_BY]: FIRST,
}

export default (state=defaultState, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_SORT:
            next[SORT_BY] = action.payload[SORT_BY]
            break
        case SET_ORDER:
            next[ORDER_BY] = action.payload[ORDER_BY]
            break
        default:
            break
    }

    return next
}

