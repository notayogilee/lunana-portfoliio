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
    width: 1920,
    position: 'absolute',
    top: '2170px'
  },
  tag: {
    position: 'absolute',
    top: '55px',
    left: '393px',
    color: theme.palette.common.white,
    height: '57.44px',
    width: '130.7px'
  },
  linkContainer: {
    height: '140px',
    width: '96px',
    position: 'absolute',
    top: '141px',
    left: '432px',
    color: theme.palette.common.white
  },
  link: {
    fontFamily: 'Raleway Dots',
    fontWeight: 400,
    color: theme.palette.common.white
  },
  copyright: {
    fontFamily: 'Raleway Dots',
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
    fontFamily: 'Raleway Dots',
    width: "266px",
    position: 'absolute',
    bottom: '138px',
    right: '392.5px',
    color: theme.palette.common.white,
  },
  line: {
    fontFamily: 'Raleway Dots',
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
      <Link to="/" underline="none">
        <div className={classes.tag}>
          <Tag />
        </div>
      </Link>

      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.linkContainer}
      >
        <Grid item>
          <Link to="/work">
            <Typography variant="h4" className={classes.link}>
              work
          </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/about">
            <Typography variant="h4" className={classes.link}>
              about
          </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/more">
            <Typography variant="h4" className={classes.link}>
              more
          </Typography>
          </Link>
        </Grid>
      </Grid>

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
              <Typography variant="subtitle1" style={{ fontFamily: 'Raleway Dots' }}>follow</Typography>
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
