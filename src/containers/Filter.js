import { connect } from 'react-redux'

import Filter from '../components/Filter'
import {
    ADD_FILTER,
    REMOVE_FILTER,
} from '../constants/actionTypes'
import {
    WHEEL_CHAIR,
    BIKE_SPACE,
    NURSING_ROOM,
} from '../constants/keys'

const mapStateToProps = state => {
    return {
       selectedValues: Array.from(state.filter.selectedValues),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddingFilter: value => {
            dispatch({
                type: ADD_FILTER,
                payload: {
                    value: value,
                },
                meta: {
                    debounce: {
                        time: 300,
                        leading: true,
                    },
                },
            })
        },
        onRemovingFilter: value=> {
            dispatch({
                type: REMOVE_FILTER,
                payload: {
                    value: value,
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

