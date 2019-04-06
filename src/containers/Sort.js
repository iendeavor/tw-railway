import { connect } from 'react-redux'

import Sort from '../components/Sort'
import { SET_SORT } from '../constants/actionTypes'
import { SORT_BY } from '../constants/keys'

const mapStateToProps = state => {
    return {
        [SORT_BY]: state.sort[SORT_BY],
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeSort: value => {
            dispatch({
                type: SET_SORT,
                payload: {
                    [SORT_BY]: value,
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

export default connect(mapStateToProps, mapDispatchToProps)(Sort)

