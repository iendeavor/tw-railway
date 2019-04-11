import React from 'react'
import { Snackbar } from '@material-ui/core'

const Message = ({
    open,
    message,
    onExitingMessage,
    onRemovingMessage,
}) => {
    return (
        <Snackbar
          open={ open }
          anchorOrigin={ {
              vertical: 'bottom',
              horizontal: 'center',
          } }
          autoHideDuration={ 2000 }
          onClose={ onRemovingMessage }
          onExit={ onExitingMessage }
          message={<span>{ message }</span>}
        >
        </Snackbar>
    )
}

export default Message

