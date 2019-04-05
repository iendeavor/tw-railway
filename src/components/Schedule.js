import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles, Icon, Grid, Button, Chip, Link } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { getName } from '../resources/stations'


const Schedule = ({train_type_name, from, to, duration, arrival, departure, type, price, has_nursing_room, is_bike_allowed, has_wheel_chair, isDaily, note}) => {
    const ICON_STYLE = {
        height: '1.8rem',

    }
    const BIKE_SPACE_STYLE = {
        ...ICON_STYLE,
        width: '2.5rem',
        color: 'green',
    }
    const NURSING_ROOM_STYLE = {
        ...ICON_STYLE,
        width: '2rem',
        color: 'red',
    }
    const WHEEL_CHAIR_STYLE = {
        ...ICON_STYLE,
        width: '2rem',
        color: 'blue'
    }

    const renderHeader = () => (
        <Grid
          item
          xs={12}
        >
            <Grid
              container
              justify='space-between'
            >
                <Grid
                  item
                >
                    { price && `$${price}NTD` }
                </Grid>
                <Grid
                  item
                >
                    { duration }
                </Grid>
            </Grid>
        </Grid>
    )

    const renderFooter = () => {
        if (has_nursing_room || is_bike_allowed || has_wheel_chair || note) {
            return (
                <React.Fragment>
                    <hr
                      style={ {'background-color': '#555', width: '100%', height: '0.05rem', border: 'none'} }
                    />
                    <Grid
                      item
                      xs={12}
                    >
                        {has_nursing_room && <Icon style={ NURSING_ROOM_STYLE } className={ clsx('fas fa-baby') } />}
                        {is_bike_allowed && <Icon style={ BIKE_SPACE_STYLE } className={ clsx('fas fa-bicycle') } />}
                        {has_wheel_chair && <Icon style={ WHEEL_CHAIR_STYLE } className={ clsx('fas fa-wheelchair') } />}
                        <span style={ {fontSize: '.8rem'} }>{ note }</span>
                    </Grid>
                </React.Fragment>
            )
        }
    }

    const renderStop = (time, name) => (
        <Grid
          item
          xs={12}
        >
            <Grid
              container
              justify='space-between'
            >
                <Grid
                  item
                  xs={3}
                >
                    <Button
                      style={{width: '100%'}}
                    >
                        { time }
                    </Button>
                </Grid>
                <Grid
                  item
                  xs={9}
                >
                    <Button
                      style={{width: '100%'}}
                    >
                        { name }
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )

    const renderStops = stops => (
        stops.map(stop => {
            return renderStop(stop.time, stop.name)
        })
    )

    return (
        <Grid
          container
          justify='center'
          alignItems='center'
        >
            { renderHeader() }

            {  renderStops([
                    {time: departure, name: getName(from)},
                    {time: arrival, name: getName(to)}],
            )}

            { renderFooter() }
        </Grid>
    )
}

Schedule.propTypes = {
    train_type_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    has_wheel_chair: PropTypes.bool,
    has_nursing_room: PropTypes.bool,
    is_bike_allowed: PropTypes.bool,
    is_daily: PropTypes.bool,
    note: PropTypes.string,
}

export default Schedule

