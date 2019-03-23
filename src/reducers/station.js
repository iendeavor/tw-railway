import {
    SET_START_STATION,
    SET_END_STATION,
} from '../constants/actionTypes'
import {
    START_STATION,
    END_STATION,
    STATIONS,
} from '../constants/keys'
import { stations } from '../data/stations'


const options = stations.map(station => {
    return ({
        value: station['id'],
        label: station['name'],
    })
})

const default_state = {
    [START_STATION]: 1008,
    [END_STATION]: 1238,
    [STATIONS]: options,
}

export default (state = default_state, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_START_STATION:
            next[START_STATION] = action.payload[START_STATION]
            break
        case SET_END_STATION:
            next[END_STATION] = action.payload[END_STATION]
            break
        default:
            break
    }

    return next
}

