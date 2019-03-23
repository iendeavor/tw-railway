import {
    SET_FROM_STATION,
    SET_TO_STATION,
    SWAP_STATION,
} from '../constants/actionTypes'
import {
    FROM_STATION,
    TO_STATION,
    STATIONS,
} from '../constants/keys'
import { stations } from '../resources/stations'


const options = stations.map(station => {
    return ({
        value: station['id'],
        label: station['name'],
    })
})

const default_state = {
    [FROM_STATION]: 1008,
    [TO_STATION]: 1238,
    [STATIONS]: options,
}

export default (state=default_state, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_FROM_STATION:
            next[FROM_STATION] = parseInt(action.payload[FROM_STATION])
            break
        case SET_TO_STATION:
            next[TO_STATION] = parseInt(action.payload[TO_STATION])
            break
        case SWAP_STATION:
            next[FROM_STATION] = state[TO_STATION]
            next[TO_STATION] = state[FROM_STATION]
            break
        default:
            break
    }

    return next
}

