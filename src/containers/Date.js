import { connect } from 'react-redux'

import { SET_DATE } from '../constants/actionTypes'
import { ON_DATE } from '../constants/keys'
import Date_ from '../components/Date'


const toYYYYMMDD = date => date.toISOString().slice(0, 10)
const getToday = () => new Date()
const getTomorrow = () => new Date(getToday() / 1 + (86400 * 1000))

const mapStateToProps = state => {
    return {
        yyyymmdd: toYYYYMMDD(state.date[ON_DATE]),
        isToday: toYYYYMMDD(state.date[ON_DATE]) === toYYYYMMDD(getToday()),
        isTomorrow: toYYYYMMDD(state.date[ON_DATE]) === toYYYYMMDD(getTomorrow()),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeDate: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    date: new Date(event.target.value),
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleSetToday: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    date: getToday(),
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        handleSetTomorrow: event => {
            dispatch({
                type: SET_DATE,
                payload: {
                    date: getTomorrow(),
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Date_)

