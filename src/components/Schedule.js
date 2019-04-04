import React from 'react'
import { connect } from 'react-redux'
import { Grid, Card, Breadcrumbs, Link } from '@material-ui/core'

import { LIMITED_EXPRESS, EXPRESS } from '../constants/train'
import { WHEEL_CHAIR } from '../constants/filter'


const getSchedule = schedule => {
    return schedule.via.map((v, i) => {
        return (
            <Grid
              container
              key={i}
            >
                <Grid
                  item
                  xs={8}
                >
                    <Breadcrumbs separator=">">
                        <Link>
                            { v.from }
                        </Link>
                        <Link>
                            { v.to }
                        </Link>
                    </Breadcrumbs>
                </Grid>

                <Grid
                  item
                  xs={4}
                >
                    { v.duration }
                </Grid>
            </Grid>
        )
    })
}

const getSchedules = schedules => {
    return schedules.map((schedule, i) => {
        return (
            <Grid
              item
              key={i}
              xs={12}
            >
                <Card>
                    { getSchedule(schedule) }
                </Card>
            </Grid>
        )
    })
}

const mapStateToProps = state => {
    return {
        schedules: [
            {
                via: [
                    {
                        from: 'Taichung',
                        to: 'Changhua',
                        departure: '05:58',
                        arrival: '08:27',
                        duration: '02:29',
                        number: '371',
                    },
                    {
                        from: 'Changhua',
                        to: 'Kaushung',
                        departure: '08:45',
                        arrival: '09:15',
                        duration: '00:30',
                        number: '247',
                    },
                ],
            },
            {
                via: [
                    {
                        from: 'Taipei',
                        to: 'Taichung',
                        departure: '05:58',
                        arrival: '08:27',
                        duration: '02:29',
                        number: '371',
                    },
                    {
                        from: 'Taichung',
                        to: 'Kaushung',
                        departure: '08:45',
                        arrival: '09:15',
                        duration: '00:30',
                        number: '247',
                    },
                ],
            },
        ],
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const Schedule = props => {
    return (
        <Grid
          container
        >
            { getSchedules(props.schedules) }
        </Grid>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)

