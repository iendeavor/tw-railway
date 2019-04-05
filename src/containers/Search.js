import { connect } from 'react-redux'
import { SEARCH } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, ON_DATE } from '../constants/keys'

import Search from '../components/Search'
import store from '../store'


const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)

