import React from 'react'
import PostalCodesDownshift from './PostalCodesDownshift'

const App = () => {
  return (
    <div>

      <PostalCodesDownshift />
      <p>some text to show</p>
    </div>
  )
}

// <DownshiftPopper />
      // <DownshiftMultiple />





// function IntegrationDownshift(props) {
//   const { classes } = props

//   return (
//     <div className={classes.root}>

//       <div className={classes.divider} />
//       <DownshiftMultiple classes={classes} />
//       <div className={classes.divider} />

//     </div>
//   )
// }

// IntegrationDownshift.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default App
