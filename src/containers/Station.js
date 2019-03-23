import { connect } from 'react-redux'

import Station from '../components/Station'
import { SEARCH, SWAP_STATION, SET_FROM_STATION, SET_TO_STATION } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, ON_DATE, STATIONS } from '../constants/keys'
import store from '../store'

const mapStateToProps = state => {
    return {
        from: state.station[FROM_STATION] + '',
        to: state.station[TO_STATION] + '',
        stations: state.station[STATIONS],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSetFromStation: event => {
            dispatch({
                type: SET_FROM_STATION,
                payload: {
                    [FROM_STATION]: event.target.value,
                },
            })
        },
        handleSetToStation: event => {
            dispatch({
                type: SET_TO_STATION,
                payload: {
                    [TO_STATION]: event.target.value,
                },
            })
        },
        handleSwapStation: event => {
            dispatch({
                type: SWAP_STATION,
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleSearch: event => {
            dispatch({
                type: SEARCH,
                payload: {
                    [FROM_STATION]: store.getState().station[FROM_STATION],
                    [TO_STATION]: store.getState().station[TO_STATION],
                    [ON_DATE]: store.getState().date[ON_DATE],
                },
                meta: {
                    debounce: {
                        time: 500,
                    },
                },
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

