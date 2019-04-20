import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, Grid, Button } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'


const History = ({
    histories,
    onRestoreHistory
}) => {
    return (
        <Grid
          container
        >
            <InputLabel shrink>
                History
            </InputLabel>

            { histories.map((history, index) => {
                return (
                    <Grid
                      item
                      xs={12}
                      key={index}
                    >
                        { history.fromStation } - { history.toStation }
                        <Button
                          onClick={ () => onRestoreHistory(index) }
                        >
                            <RestoreIcon />
                        </Button>
                    </Grid>
                )
            })}
        </Grid>
    )
}

History.propTypes = {
    histories: PropTypes.arrayOf(PropTypes.shape({
        fromStation: PropTypes.string.isRequired,
        toStation: PropTypes.string.isRequired,
    })),
    onRestoreHistory: PropTypes.func.isRequired
}

export default History

