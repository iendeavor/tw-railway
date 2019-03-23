import {
    SET_SORT,
    SET_ORDER,
} from '../constants/actionTypes'
import * as KEYS from '../constants/keys'
import {
    ARRIVE,
    DEPARTURE,
    CHEAP_COST,
    SMALL_TRANSFER,
    FIRST,
    LAST,
} from '../constants/sortTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case: SET_SORT:
            return {
                ...state,
                [KEYS.SORT_BY]: action.payload[KEYS.SORT_BY],
            }
            break
        case: SET_ORDER:
            return {
                ...state,
                [KEYS.ORDER_BY]: action.payload[KEYS.ORDER_BY],
            }
            break
        default:
            return state
            break
    }
}

