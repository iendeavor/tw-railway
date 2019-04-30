import React from 'react'
import { withTranslation } from 'react-i18next';
import { Snackbar } from '@material-ui/core'

const Message = ({
    open,
    message,
    onExitingMessage,
    onRemovingMessage,
    t,
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
          message={<span>{ message && t(message) }</span>}
        >
        </Snackbar>
    )
}

export default withTranslation()(Message)

