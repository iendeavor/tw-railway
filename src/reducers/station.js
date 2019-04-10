import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'
import { stations } from '../resources/stations'


let options = stations.map(station => {
    return ({
        value: station['id'],
        label: station['name'],
    })
})
options.sort((a, b) => {
    return a.label.localeCompare(b.label)
})

const default_state = {
    [KEYS.fromStation]: 1008,
    [KEYS.toStation]: 1238,
    [KEYS.stations]: options,
}

export default (state=default_state, action) => {
    const next = {...state}

    if (action !== undefined) {
        switch (action.type) {
            case TYPES.setFromStation:
                next[KEYS.fromStation] = parseInt(action.payload[KEYS.fromStation])
                break
            case TYPES.setToStation:
                next[KEYS.toStation] = parseInt(action.payload[KEYS.toStation])
                break
            case TYPES.swapStation:
                next[KEYS.fromStation] = state[KEYS.toStation]
                next[KEYS.toStation] = state[KEYS.fromStation]
                break
            default:
                break
        }
    }

    return next
}

