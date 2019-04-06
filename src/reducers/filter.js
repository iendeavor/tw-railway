import {
    ADD_FILTER,
    REMOVE_FILTER,
} from '../constants/actionTypes'
import KEYS from '../constants/keys'


const defaultState = {
    selectedValues: new Set(),
}

export default (state=defaultState, action) => {
    const next = {...state}

    switch (action.type) {
        case ADD_FILTER:
            next[KEYS.selectedValues].add(action.payload.value)
            break
        case REMOVE_FILTER:
            next[KEYS.selectedValues].delete(action.payload.value)
            break
        default:
            break
    }

    return next
}
