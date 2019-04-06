import { connect } from 'react-redux'

import ScheduleList from '../components/ScheduleList'
import KEYS from '../constants/keys'


const mapStateToProps = state => {
    return {
        schedules: state.schedule[KEYS.schedules],
    }
}

export default connect(mapStateToProps)(ScheduleList)

