import React from 'react'
import { Grid, Button } from '@material-ui/core';
import { SEARCH } from '../constants/actionTypes'
import { FROM_STATION, TO_STATION, ON_DATE } from '../constants/keys'
import SearchIcon from '@material-ui/icons/Search'

import store from '../store'


const handleSearch = event => {
    store.dispatch({
        type: SEARCH,
        payload: {
            [FROM_STATION]: store.getState().station[FROM_STATION],
            [TO_STATION]: store.getState().station[TO_STATION],
            [ON_DATE]: store.getState().date[ON_DATE],
        },
        meta: {
            debounce: {
                time: 500,
            },
        },
    })
}

const Search = () => {
    return (
        <Grid
          container
          alignItems='flex-end'
          style={ {height: '100%'} }
          justify='flex-end'
        >
            <Grid
              item
            >
                <Button
                  size='small'
                  onClick={ handleSearch }
                  variant='contained'
                  color='secondary'
                >
                    <SearchIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

export default Search

