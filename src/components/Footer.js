import React from 'react'

import Message from '../containers/Message'


const Header = props => {
    return (
        <React.Fragment>
            <Message />
            <div
              style={{height: '5rem'}}
            />
        </React.Fragment>
    )
}

export default Header

