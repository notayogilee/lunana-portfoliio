import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography
} from '@material-ui/core'
import hero from '../../images/HERO - GIF@2x.png'

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
