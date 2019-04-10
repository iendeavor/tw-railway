import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'

const defaultState = {
    open: false,
    message: '',
}

export default (state=defaultState, action) => {
    if (action === undefined) {
        return state
    }

    const next = {...state}

    switch(action.type) {
        case TYPES.addMessage:
            next.message = action.payload[KEYS.message]
            next.open = true
            break

        case TYPES.removeMessage:
            next.message = ''
            next.open = false

            break

        default:
            break
    }

    return next
}

