import React from 'react'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import { Card, InputLabel, Grid, Button } from '@material-ui/core'


const History = ({
    histories,
    onSearch,
    t,
}) => {
    return (
        <React.Fragment>
            <InputLabel shrink>
                { t('label_history') }
            </InputLabel>

            <Grid
              container
              justify='center'
            >
                { histories.map((history, index) => {
                    return (
                    <Button
                      key={index}
                      onClick={ () => onSearch(history.fromStation, history.toStation, history.departureDate) }
                      color='primary'
                      variant='text'
                      size='small'
                      style={{
                        width: '100%',
                      }}
                    >
                        <Card
                          key={index}
                          style={{
                            width: '100%',
                            margin: '.5rem 0',
                            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)',
                          }}
                        >
                            <p>
                              { history.departureDate }
                            </p>
                            <p>
                              { t(history.fromStationName.toLowerCase()) }
                            </p>
                            <p>
                              { t(history.toStationName.toLowerCase()) }
                            </p>
                        </Card>
                    </Button>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

History.propTypes = {
    histories: PropTypes.arrayOf(PropTypes.shape({
        fromStation: PropTypes.string.isRequired,
        toStation: PropTypes.string.isRequired,
        fromStationName: PropTypes.string.isRequired,
        toStationName: PropTypes.string.isRequired,
        departureDate: PropTypes.string.isRequired
    })),
    onSearch: PropTypes.func.isRequired
}

export default withTranslation()(History)

