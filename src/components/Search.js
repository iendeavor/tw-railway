import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import { SEARCH } from '../constants/actionTypes'


const mapStateToProps = state => { return {} }

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: event => {
            dispatch({
                type: SEARCH,
            })
        }
    }
}

const Search = props => {
    return (
        <Button
          variant='contained'
          size='small'
          color='secondary'
          onClick={ props.handleSearch }
          style={ {width: '100%'} }
        >
            Search
        </Button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

