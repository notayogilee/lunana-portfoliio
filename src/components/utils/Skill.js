import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'
import unhovered from '../../images/Artwork 1@2x.png'

const useStyles = makeStyles((theme) => ({
  imageSection: {
    height: '410px',
    width: '293px',
    position: 'relative'
  },
  imageText: {
    height: '115px',
    width: '293px',
    paddingTop: '26px',
    fontWeight: 'bold',
    background: theme.palette.common.grey,
    animation: `$removeColor 0.6s ${theme.transitions.easing.easeInOut}`
  },
  text: {
    fontFamily: 'Raleway',
    fontWeight: 100,
    animation: `$thinText 0.6s ${theme.transitions.easing.easeInOut}`
  },
  line: {
    position: 'absolute',
    background: theme.palette.common.white,
    height: '4px',
    width: '50px',
    bottom: 0,
    left: '121.5px',
    borderRadius: '5px',
    transform: 'translateY(2px)',
    animation: `$lineShrink 0.75s ${theme.transitions.easing.easeOut}`
  },
  shadow: {
    position: 'absolute',
    background: theme.palette.common.blue,
    opacity: 0,
    height: '98px',
    width: '259px',
    top: '445px',
    left: '17px',
    animation: `$hideShadow 0.6s ${theme.transitions.easing.easeInOut}`
  },
  bottomBlock: {
    position: 'absolute',
    background: theme.palette.common.blue,
    height: '10px',
    width: 0,
    left: '17px',
    top: '566px',
    animation: `$hideBlock 0.6s ${theme.transitions.easing.easeOut}`
  },
  "@keyframes removeColor": {
    "0%": {
      background: theme.palette.common.blue
    },
    "100%": {
      background: theme.palette.common.grey
    },
  },
  "@keyframes thinText": {
    "0%": {
      fontWeight: 700
    },
    "100%": {
      fontWeight: 100
    },
  },
  "@keyframes lineShrink": {
    "0%": {
      background: theme.palette.common.black,
      width: '259px',
      left: '17px'
    },
    "100%": {
      background: theme.palette.common.white,
      width: '50px',
      left: '121.5px'
    },
  },
  "@keyframes hideShadow": {
    "0%": {
      opacity: 0.25,
      transform: 'translateY(0)',
    },
    "100%": {
      opacity: 0,
      transform: 'translateY(-30px)',
    }
  },
  "@keyframes hideBlock": {
    "0%": {
      width: '259px',

    },
    "100%": {
      width: 0,
      transform: 'translateX(130px)'
    }
  }
}))

const Skill = ({ label }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (

    <Grid
      container
      direction="column"
    >
      <Grid item className={classes.imageSection}>
        <img src={unhovered} alt="digital" className={classes.image} />
        <div className={classes.line}></div>
        <div className={classes.shadow}></div>
        <div className={classes.bottomBlock}></div>
      </Grid>
      <Grid item className={classes.imageText}>
        <Typography variant="h3" align="center" className={classes.text}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Skill

