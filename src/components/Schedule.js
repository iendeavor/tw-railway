import React from 'react'
import { connect } from 'react-redux'
import { Grid, Card, Breadcrumbs, Link } from '@material-ui/core'

import { LIMITED_EXPRESS, EXPRESS } from '../constants/train'
import { WHEEL_CHAIR } from '../constants/filter'


const mapStateToProps = state => {
    return {
        station: {
            via: [
                {
                    from: 'Taipei',
                    to: 'Taichung',
                    departure: '05:58',
                    arrival: '08:27',
                    duration: '02:29',
                    number: '371',
                    type: LIMITED_EXPRESS,
                },
                {
                    from: 'Taichung',
                    to: 'Kaushung',
                    departure: '08:45',
                    arrival: '09:15',
                    duration: '00:30',
                    number: '247',
                    type: EXPRESS,
                },
                {
                    from: 'Kaushung',
                    to: 'Taitung',
                    departure: '09:27',
                    arrival: '10:57',
                    duration: '01:30',
                }
            ],
            accessibility: [WHEEL_CHAIR],
            duration: '04:59',
        },
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const Schedule = props => {
    const via = props.station.via.map((v, i) => (
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
    ))


    return (
        <Card
          style={ {width: '100%'} }
        >
            {via}
        </Card>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)

