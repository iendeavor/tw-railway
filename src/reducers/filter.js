import {
    ADD_FILTER,
    REMOVE_FILTER,
} from '../constants/actionTypes'
import {
    WHEEL_CHAIR,
    BIKE_SPACE,
    NURSING_ROOM,
    LABEL,
} from '../constants/filter'


export default (state = {}, action) => {
    const next = {...state}
    if (next.chooses === undefined) {
        next.chooses = new Set()
    }

    switch (action.type) {
        case ADD_FILTER:
            next.chooses.add(action.payload.filter)
            break
        case REMOVE_FILTER:
            delete action.payload['key']
            break
        default:
            break
    }

    return next
}
