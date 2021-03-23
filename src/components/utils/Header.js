import React from 'react'
import Tag from './Tag'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 100,
    width: '100%',
    position: 'relative'
  },
  linkContainer: {
    width: 276,
    // marginRight: 486
  },
  tag: {
    position: 'absolute',
    left: 393,
    margin: 0
  },
  links: {
    position: 'absolute',
    right: 486
  },
  link: {
    color: theme.palette.common.black
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-end"
      className={classes.mainContainer} >
      <Grid item className={classes.tag}>
        <Link to="/" underline="none" className={classes.link} >
          <Tag />
        </Link>
      </Grid>
      <Grid item className={classes.links}>
        <Grid
          container
          justify="space-between"
          className={classes.linkContainer}
        >
          <Grid item>
            <Link to="/work" underline="none" className={classes.link}>
              <Typography>
                work
          </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/about" underline="none" className={classes.link} >
              <Typography>
                about
          </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/more" underline="none" className={classes.link}>
              <Typography>
                more
          </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Header
