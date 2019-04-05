import { connect } from 'react-redux'

import ScheduleList from '../components/ScheduleList'
import { SCHEDULES } from '../constants/keys'


const mapStateToProps = state => {
    return {
        [SCHEDULES]: state.schedule[SCHEDULES],
    }
}

export default connect(mapStateToProps)(ScheduleList)

