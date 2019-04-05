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
    LABEL,
} from '../constants/filter'

const mapStateToProps = state => {
    return {
       selectedValues: Array.from(state.filter.selectedValues),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddingFilter: value => {
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
        handleRemovingFilter: value=> {
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

