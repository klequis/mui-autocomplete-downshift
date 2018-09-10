import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import withRoot from './withRoot'
import PostalCodes from './PostalCodes'

const App = () => {
  return (
    <div>

      <PostalCodes />
      <p>some text to show</p>
    </div>
  )
}

// export default App

// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps, authActions)
// )(withRoot(App))

const styles = {}

export default withStyles(styles)(withRoot(App))