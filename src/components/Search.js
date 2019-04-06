import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'


const Search = ({ onSearch }) => {
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
                  onClick={ onSearch }
                  variant='contained'
                  color='secondary'
                >
                    <SearchIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default Search

