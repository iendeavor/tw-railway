import { connect } from 'react-redux'

import { SET_DATE } from '../constants/actionTypes'
import { TODAY, TOMORROW, DEPARTURE_DATE } from '../constants/keys'
import Date_ from '../components/Date'
import { handleChangeDate } from '../constants/actionCreators'
import store from '../store'


const removeTime = date => date.toISOString().slice(0, 10)

const mapStateToProps = state => {
    return {
        yyyymmdd: removeTime(state.date[DEPARTURE_DATE]),
        isToday: removeTime(state.date[DEPARTURE_DATE]) === removeTime(state.date[TODAY]),
        isTomorrow: removeTime(state.date[DEPARTURE_DATE]) === removeTime(state.date[TOMORROW]),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeDate: event => {
            handleChangeDate(event.target.value)
        },
        onSetToday: event => {
            handleChangeDate(store.getState().date[TODAY])
        },
        onSetTomorrow: event => {
            handleChangeDate(store.getState().date[TOMORROW])
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Date_)

