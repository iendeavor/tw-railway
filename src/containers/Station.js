import { connect } from 'react-redux'

import Station from '../components/Station'
import KEYS from '../constants/keys'
import CREATORS from '../constants/actionCreators'

const mapStateToProps = state => {
    return {
        selectedFrom: state.station[KEYS.fromStation] + '',
        selectedTo: state.station[KEYS.toStation] + '',
        stations: state.station[KEYS.stations],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFromStation: event => {
            CREATORS.handleSetFromStation(event.target.value)
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

