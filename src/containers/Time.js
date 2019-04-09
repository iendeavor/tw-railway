import { connect } from 'react-redux'

import Time from '../components/Time'
import KEYS from '../constants/keys'
import CREATORS from '../constants/actionCreators'


const mapStateToProps = state => {
    return {
        selectedDepartureTime: state.time[KEYS.departureTime],
        selectedArrivalTime  : state.time[KEYS.arrivalTime],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetDepartureTime: event => {
            CREATORS.handleSetDepartureTime(event.target.value)
        },
        onSetArrivalTime: event => {
            CREATORS.handleSetArrivalTime(event.target.value)
        },
        onResetTime: event => {
            CREATORS.handleSetDepartureTime(null)
            CREATORS.handleSetArrivalTime(null)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)

