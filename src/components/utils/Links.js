import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '22px',
    width: '276px'
  },
  link: {
    textAlign: 'left',
    // font: 'normal normal normal 18px/22px Programme Primitive',
    color: theme.palette.common.black,
    cursor: 'pointer',
    height: '22px',
    width: '43px'
  }
}))

const Links = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Grid
      container
      justify="space-between"
    >
      <Grid item>
        <Link to="/work" >
          <Typography className={classes.link}>
            work
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/about">
          <Typography className={classes.link}>
            about
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/more">
          <Typography className={classes.link} >
            more
          </Typography>
        </Link>
      </Grid>

    </Grid>
  )
}

export default Links
