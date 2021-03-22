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
      <h1 style={{ textAlign: "center", marginTop: "50%" }}>Landing</h1>
    </div>
  )
}

export default Landing
