import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Breadcrumbs, Link } from '@material-ui/core'

import { LIMITED_EXPRESS, EXPRESS } from '../constants/train'
import { WHEEL_CHAIR } from '../constants/filter'
import { FROM_STATION, TO_STATION, DEPARTURE, ARRIVAL, COST } from '../constants/keys'
import { getName } from '../resources/stations'


const Schedule = props => {
    return (
        <Grid
          container
          justify='center'
        >
            <Grid
              item
              xs={12}
            >
                <Breadcrumbs separator=">">
                    <Link>
                        { props.schedule[DEPARTURE] }
                    </Link>
                    <Link>
                        { props.schedule[ARRIVAL] }
                    </Link>
                </Breadcrumbs>
                <Breadcrumbs separator=">">
                    <Link>
                        { getName(props.schedule[FROM_STATION]) }
                    </Link>
                    <Link>
                        { getName(props.schedule[TO_STATION]) }
                    </Link>
                </Breadcrumbs>
            </Grid>

            <Grid
              item
              xs={4}
            >
            </Grid>
        </Grid>
    )
}

Schedule.propTypes = {
    schedule: PropTypes.object.isRequired,
}

export default Schedule

