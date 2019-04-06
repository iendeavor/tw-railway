import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Card, Icon, Grid, Button } from '@material-ui/core'
import KEYS from '../constants/keys'

import { getName } from '../resources/stations'


const Schedule = ({train_type_name, from, to, duration, arrival, departure, type, price, has_nursing_room, is_bike_allowed, has_wheel_chair, isDaily, note, index, onAddingFilter, onRemovingFilter}) => {
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
                      style={ {'backgroundColor': '#555', width: '100%', height: '0.05rem', border: 'none'} }
                    />
                    <Grid
                      item
                      xs={12}
                    >
                        {has_nursing_room && (
                            <Button
                              size='small'
                              onClick={ () => onAddingFilter(KEYS.nursingRoom) }
                            >
                                <Icon style={ NURSING_ROOM_STYLE } className={ clsx('fas fa-baby') } />
                            </Button>
                        )}
                        {is_bike_allowed && (
                            <Button
                              size='small'
                              onClick={ () => onAddingFilter(KEYS.bikeSpace) }
                            >
                                <Icon style={ BIKE_SPACE_STYLE } className={ clsx('fas fa-bicycle') } />
                            </Button>
                        )}
                        {has_wheel_chair && (
                            <Button
                              size='small'
                              onClick={ () => onAddingFilter(KEYS.wheelChair) }
                            >
                                <Icon style={ WHEEL_CHAIR_STYLE } className={ clsx('fas fa-wheelchair') } />
                            </Button>
                        )}
                        <span style={ {fontSize: '.8rem'} }>{ note }</span>
                    </Grid>
                </React.Fragment>
            )
        }
    }

    const renderStop = (time, name) => (
        <Grid
          key={time}
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
        <Card
          style={ {margin: '1rem 0 0 0',
                   padding: '.3rem',
                   'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} }
        >
            <Grid
              container
              justify='center'
              alignItems='center'
              key={ departure + arrival + '-' + index }
            >
                { renderHeader() }

                {  renderStops([
                        {time: departure, name: getName(from)},
                        {time: arrival, name: getName(to)}],
                )}

                { renderFooter() }
            </Grid>
        </Card>
    )
}

Schedule.propTypes = {
    index: PropTypes.number.isRequired,

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

    onAddingFilter: PropTypes.func.isRequired,
    onRemovingFilter: PropTypes.func.isRequired,
}

export default Schedule

