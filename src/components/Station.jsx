import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import { Button, Grid, InputLabel, Select } from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import SearchIcon from '@material-ui/icons/Search'


const Station = ({
    countries,
    fromStations,
    toStations,
    selectedFromCountry,
    selectedFromStation,
    selectedToCountry,
    selectedToStation,
    onSwapStation,
    onSetFromCountry,
    onSetFromStation,
    onSetToCountry,
    onSetToStation,
    onSearch,
    t,
}) => {
    return (
        <Grid
          container
        >
            <Grid
              item
              xs={12}
            >
                <Grid
                  container
                  alignItems='flex-end'
                  justify='space-between'
                >
                    <Grid
                      item
                      xs={6}
                    >
                        <InputLabel shrink>
                            { t('label_fromCountry') }
                        </InputLabel>

                        <Select
                          native
                          key={ selectedFromCountry }
                          defaultValue={ selectedFromCountry }
                          onChange={ onSetFromCountry }
                          style={ {width: '100%'} }
                        >
                        {
                            countries.map(option => {
                                return (
                                    <option
                                      key={ option.id }
                                      value={ option.id }
                                    >
                                        { t(option.name.toLowerCase()) }
                                    </option>
                                )
                            })
                        }
                        </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                    >
                        <InputLabel shrink>
                            { t('label_fromStation') }
                        </InputLabel>

                        <Select
                          native
                          key={ selectedFromStation }
                          defaultValue={ selectedFromStation }
                          onChange={ onSetFromStation }
                          style={ {width: '100%'} }
                        >
                        {
                            fromStations.map(option => {
                                return (
                                    <option
                                      key={ option.id }
                                      value={ option.id }
                                    >
                                        { t(option.name.toLowerCase()) }
                                    </option>
                                )
                            })
                        }
                        </Select>
                    </Grid>
                </Grid>

                <Grid
                  container
                  alignItems='flex-end'
                  justify='space-between'
                >
                    <Grid
                      item
                      xs={6}
                    >
                        <InputLabel shrink>
                            { t('label_toCountry') }
                        </InputLabel>

                        <Select
                          native
                          key={ selectedToCountry }
                          defaultValue={ selectedToCountry }
                          onChange={ onSetToCountry }
                          style={ {width: '100%'} }
                        >
                        {
                            countries.map(option => {
                                return (
                                    <option
                                      key={ option.id }
                                      value={ option.id }
                                    >
                                        { t(option.name.toLowerCase()) }
                                    </option>
                                )
                            })
                        }
                        </Select>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                    >
                        <InputLabel shrink>
                            { t('label_toStation') }
                        </InputLabel>

                        <Select
                          native
                          key={ selectedToStation }
                          defaultValue={ selectedToStation }
                          onChange={ onSetToStation }
                          style={ {width: '100%'} }
                        >
                        {
                            toStations.map(option => {
                                return (
                                    <option
                                      key={ option.id }
                                      value={ option.id }
                                    >
                                        { t(option.name.toLowerCase()) }
                                    </option>
                                )
                            })
                        }
                        </Select>
                    </Grid>
                </Grid>

                <Grid
                  container
                  alignItems='flex-end'
                  justify='flex-end'
                >
                    <Grid
                      item
                    >
                        <Button
                          onClick={ onSwapStation }
                          variant='text'
                          color='primary'
                          size='small'
                        >
                            <SwapHorizIcon />
                        </Button>
                    </Grid>

                    <Grid
                      item
                    >
                        <Button
                          onClick={ onSearch }
                          variant='contained'
                          color='secondary'
                          size='small'
                        >
                            <SearchIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Station.propTypes = {
    countries:           PropTypes.array.isRequired,
    fromStations:        PropTypes.array.isRequired,
    toStations:          PropTypes.array.isRequired,
    selectedFromStation: PropTypes.string.isRequired,
    selectedToStation:   PropTypes.string.isRequired,
    selectedFromCountry: PropTypes.string.isRequired,
    selectedToCountry:   PropTypes.string.isRequired,

    onSwapStation: PropTypes.func.isRequired,
    onSetFromCountry: PropTypes.func.isRequired,
    onSetFromStation: PropTypes.func.isRequired,
    onSetToCountry: PropTypes.func.isRequired,
    onSetToStation: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default withTranslation()(Station)

