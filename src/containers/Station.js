import { connect } from 'react-redux'

import Station from '../components/Station'
import { SEARCH, SWAP_STATION, SET_FROM_STATION, SET_TO_STATION } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, DEPARTURE_DATE, STATIONS } from '../constants/keys'
import store from '../store'
import { handleSwapStation, handleSetFromStation, handleSetToStation, handleSearchRequest } from '../constants/actionCreators'

const mapStateToProps = state => {
    return {
        from: state.station[FROM_STATION] + '',
        to: state.station[TO_STATION] + '',
        stations: state.station[STATIONS],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFromStation: event => {
            handleSetFromStation(event.target.value)
        },
        onSetToStation: event => {
            handleSetToStation(event.target.value)
        },
        onSwapStation: event => {
            handleSwapStation()
        },
        onSearch: event => {
            handleSearchRequest()
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

