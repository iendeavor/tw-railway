import { connect } from 'react-redux'
import { SEARCH_REQUEST, SEARCH_SUCCESS } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, DEPARTURE_DATE } from '../constants/keys'

import Search from '../components/Search'
import store from '../store'
import { handleSearchRequest, handleSearchSuccess } from '../constants/actionCreators'


const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: event => {
            handleSearchRequest()
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

