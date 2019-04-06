import { connect } from 'react-redux'

import Schedule from '../components/Schedule'
import CREATORS from '../constants/actionCreators'


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddingFilter: value => {
            CREATORS.handleAddingFilter(value)
        },
        onRemovingFilter: value=> {
            CREATORS.handleRemovingFilter(value)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)

