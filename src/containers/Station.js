import { connect } from 'react-redux'

import Station from '../components/Station'
import KEYS from '../constants/keys'
import CREATORS from '../constants/actionCreators'

const mapStateToProps = state => {
    return {
        countries:           state.station[KEYS.countries],
        selectedFromCountry: state.station[KEYS.fromCountry],
        selectedFromStation: state.station[KEYS.fromStation],
        fromStations:        state.station[KEYS.fromStations],
        selectedToCountry:   state.station[KEYS.toCountry],
        selectedToStation:   state.station[KEYS.toStation],
        toStations:          state.station[KEYS.toStations],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFromCountry: event => {
            CREATORS.handleSetFromCountry(event.target.value)
        },
        onSetFromStation: event => {
            CREATORS.handleSetFromStation(event.target.value)
        },
        onSetToCountry: event => {
            CREATORS.handleSetToCountry(event.target.value)
        },
        onSetToStation: event => {
            CREATORS.handleSetToStation(event.target.value)
        },
        onSwapStation: event => {
            CREATORS.handleSwapStation()
        },
        onSearch: event => {
            CREATORS.handleSearchRequest()
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

