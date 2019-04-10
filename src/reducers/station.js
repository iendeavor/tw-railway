import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'
import { getCountries, getStationsOfCountry } from '../resources/stations'


const taipei_country_id = '2'
const kauhsiung_country_id = '14'
const taipei_station_id = '1008'
const kauhsiung_station_id = '1238'
const default_state = {
    [KEYS.countries]    : getCountries(),
    [KEYS.fromStations] : getStationsOfCountry(taipei_country_id),
    [KEYS.toStations]   : getStationsOfCountry(kauhsiung_country_id),
    [KEYS.fromCountry]  : getCountries()[taipei_country_id].id,
    [KEYS.fromStation]  : taipei_station_id,
    [KEYS.toCountry]    : getCountries()[kauhsiung_country_id].id,
    [KEYS.toStation]    : kauhsiung_station_id,
}

export default (state=default_state, action) => {
    if (action === undefined) {
        return state
    }

    const next = {...state}

    if (action !== undefined) {
        switch (action.type) {
            case TYPES.setFromCountry:
                const fromCountry = action.payload[KEYS.fromCountry]
                const fromStations = getStationsOfCountry(fromCountry)
                next[KEYS.fromCountry]  = fromCountry
                next[KEYS.fromStations] = fromStations
                next[KEYS.fromStation]  = fromStations[0].id
                break
            case TYPES.setToCountry:
                const toCountry = action.payload[KEYS.toCountry]
                const toStations = getStationsOfCountry(toCountry)
                next[KEYS.toCountry]  = toCountry
                next[KEYS.toStations] = toStations
                next[KEYS.toStation]  = toStations[0].id
                break
            case TYPES.setFromStation:
                const fromStation = action.payload[KEYS.fromStation]
                next[KEYS.fromStation] = fromStation
                break
            case TYPES.setToStation:
                const toStation = action.payload[KEYS.toStation]
                next[KEYS.toStation] = toStation
                break
            case TYPES.swapStation:
                next[KEYS.fromStations] = state[KEYS.toStations]
                next[KEYS.toStations]   = state[KEYS.fromStations]
                next[KEYS.fromCountry]  = state[KEYS.toCountry]
                next[KEYS.fromStation]  = state[KEYS.toStation]
                next[KEYS.toCountry]    = state[KEYS.fromCountry]
                next[KEYS.toStation]    = state[KEYS.fromStation]
                break
            default:
                break
        }
    }

    return next
}

