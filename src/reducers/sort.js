import {
    SET_SORT,
    SET_ORDER,
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
} from '../constants/sortTypes'


export default (state = {}, action) => {
    const next = {...state}
    if (next[SORT_BY] === undefined) {
        next[SORT_BY] = ARRIVE
    }
    if (next[ORDER_BY] === undefined) {
        next[ORDER_BY] = FIRST
    }

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

