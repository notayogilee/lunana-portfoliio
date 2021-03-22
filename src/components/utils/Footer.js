import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  IconButton,
  Typography
} from '@material-ui/core'
import hero from '../../images/hero HP@2x.png'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.common.black,
    height: 370,
    width: '100%',
    position: 'relative',
    bottom: 0
  },
  copyright: {
    color: theme.palette.common.white,
    position: 'absolute',
    display: 'block',
    margin: 'auto',
    bottom: '30px',
    left: '46.6%'
  },
  hero: {
    position: 'absolute',
    top: '49px',
    right: '24.2%',
    height: '134px',
    width: '134px'
  },
  follow: {
    width: "266px",
    position: 'absolute',
    bottom: '138px',
    right: '392.5px',
    color: theme.palette.common.white
  },
  line: {
    width: '95px'
  },
  text: {
    width: '75px',
    textAlign: 'center'
  },
  social: {
    color: theme.palette.common.white,
    position: 'absolute',
    bottom: '91.75px',
    right: '21.5%',
    width: '266px',

  },
  icon: {
    color: theme.palette.common.white,
    padding: 0,
    width: '27px',
    height: '27px'
  }
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <footer className={classes.mainContainer}>
      <Grid container direction="column">
        <Grid item>
          <img src={hero} alt="hero" className={classes.hero} />
        </Grid>

        <Grid item className={classes.follow}>
          <Grid container alignItems="center" justify="space-evenly">
            <Grid item className={classes.line}>
              <hr />
            </Grid>

            <Grid item className={classes.text}>
              <Typography variant="subtitle1">follow</Typography>
            </Grid>

            <Grid item className={classes.line}>
              <hr />
            </Grid>

          </Grid>

        </Grid>


        <Grid item>
          <Grid container justify="space-between" spacing={4} className={classes.social}>
            <Grid item>
              <IconButton className={classes.icon}>
                <i class="fab fa-instagram fa-lg"></i>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}>
                <i class="fab fa-linkedin-in fa-lg"></i>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}>
                <i class="fab fa-github fa-lg"></i>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}>
                <i className="fab fa-behance fa-lg"></i>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <p className={classes.copyright}>
        &#169; luanaduart 2021
      </p>

    </footer>
  )
}

export default Footer
