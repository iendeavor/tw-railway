import { connect } from 'react-redux'

import Message from '../components/Message'
import CREATORS from '../constants/actionCreators'


const mapStateToProps = state => {
    console.log(state)
    return {
        open: state.message.open,
        message: state.message.message,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onExitingMessage  : CREATORS.handleRemovingMessage,
        onRemovingMessage : CREATORS.handleRemovingMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

