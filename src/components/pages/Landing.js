import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid
} from '@material-ui/core'
import hero from '../../images/HERO - GIF@2x.png'
import unhovered from '../../images/Artwork 1@2x.png'
import about from '../../images/about index@2x.png'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 2070,
    width: '100%',
    position: 'relative'
  },
  hi: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '218px',
    width: '199px',
    top: '284px',
    left: '382px',
    zIndex: 1,
    fontWeight: 'bold',
    fontSize: '180px'
  },
  introBox: {
    position: 'absolute',
    height: '136px',
    width: '136px',
    top: '262px',
    left: '508px',
    backgroundColor: theme.palette.primary.main
  },
  hero: {
    position: 'absolute',
    height: '469px',
    width: '330px',
    top: '227px',
    right: '448px'
  },
  intro: {
    position: 'absolute',
    height: '140px',
    width: '509px',
    top: '508px',
    left: '392px',
    color: theme.palette.common.black,
    fontFamily: 'Raleway',
    fontSize: '48px',
    fontWeight: 'bold'
  },
  text: {
    fontWeight: 900,
    lineHeight: '3rem'
  },
  workSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    height: '237px',
    width: '87px',
    top: '530px',
    right: '361px'
  },
  work: {
    transform: 'rotate(90deg)',
    fontWeight: 700
  },
  main: {
    height: '576px',
    width: '1133px',
    position: 'absolute',
    top: '883px',
    left: '394px'
  },
  image: {
    height: '410px',
    width: '293px',
    position: 'relative'
  },
  imageText: {
    height: '115px',
    width: '293px',
    paddingTop: '26px',
    background: '#e6e6e6'
  },
  line: {
    position: 'absolute',
    background: theme.palette.common.white,
    height: '4px',
    width: '50px',
    bottom: 0,
    left: '121.5px',
    borderRadius: '5px',
    transform: 'translateY(2px)'
  },
  aboutSection: {
    position: 'absolute',
    height: '343px',
    width: '999px',
    top: '1593px',
    left: '461px'
  },
  aboutImage: {
    position: 'absolute',
    bottom: '5px',
    left: 0,
    height: '287px',
    width: '287px'
  },
  aboutBox: {
    position: 'absolute',
    top: 0,
    left: '134px',
    background: '#00FFFF 0% 0% no-repeat padding-box', // ask about this
    mixBlendMode: 'multiply', // ask about this - really cool
    height: '195px',
    width: '195px'
  },
  aboutTitle: {
    position: 'absolute',
    top: '13px',
    right: 0,
    height: '158px',
    width: '730px'
  },
  aboutText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '140px',
    width: '506px'
  },
  more: {
    fontWeight: 700,
    marginLeft: '10px',
    color: theme.palette.common.black,
    textDecoration: 'underline'
  }
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>

      <Typography variant="h1" component="div" className={classes.hi}>hi!</Typography>

      <div className={classes.intro}>
        <Typography variant="h4" className={classes.text} component="div">I am Luana Duarte.</Typography>
        <Typography variant="h4" className={classes.text} component="div">I create awesome designs</Typography>
        <Typography variant="h4" className={classes.text} component="div">for digital and print media.</Typography>
      </div>

      <div className={classes.introBox}></div>
      <div className={classes.hero}>
        <img src={hero} alt="hero" />
      </div>

      <Grid container className={classes.main} justify="space-between" alignItems="flex-start" spacing={0}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.image}>
              <img src={unhovered} alt="digital" />
              <div className={classes.line}></div>
            </Grid>
            <Grid item className={classes.imageText}>
              <Typography variant="h3" align="center">
                digital
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.image}>
              <img src={unhovered} alt="graphic" />
              <div className={classes.line}></div>
            </Grid>
            <Grid item >
              <Typography variant="h3" align="center" className={classes.imageText}>
                graphic
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.image}>
              <img src={unhovered} alt="frontend" />
              <div className={classes.line}></div>
            </Grid>
            <Grid item>
              <Typography variant="h3" align="center" className={classes.imageText}>
                frontend
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.aboutSection}>
        <div className={classes.aboutImage}>
          <img src={about} alt="about" />
        </div>
        <div className={classes.aboutBox}></div>
        <Typography component="div" variant="h2" className={classes.aboutTitle}>
          digital / graphic designer and front-end developer
        </Typography>
        <div>
          <Typography component="div" variant="h4" className={classes.aboutText}>
            I have worked in a wide range of projects. Curiosity, creativity and versatility drives me...
            <Link to="more"><span className={classes.more}>more</span></Link>
          </Typography>
        </div>
      </div>

      <div className={classes.workSection}>
        <Typography variant="h3" component="div" className={classes.work}>work</Typography>
        <div>
          <Typography variant="h4" style={{ fontFamily: 'Raleway', fontWeight: 900 }}>V</Typography>
        </div>
      </div>
    </div>
  )
}

export default Landing
