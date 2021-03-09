import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 2070,
    width: '100%'
  }
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>
      Landing
    </div>
  )
}

export default Landing
