import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'
import hovered from '../../images/category hover@2x.png'

const useStyles = makeStyles((theme) => ({
  imageSection: {
    height: '410px',
    width: '293px',
    position: 'relative'
  },
  image: {
    animation: `$colorImage 0.5s ${theme.transitions.easing.easeIn}`
  },
  imageText: {
    height: '115px',
    width: '293px',
    paddingTop: '26px',
    background: theme.palette.common.blue,
    animation: `$addColor 0.6s ${theme.transitions.easing.easeInOut}`
  },
  line: {
    position: 'absolute',
    background: theme.palette.common.black,
    height: '4px',
    width: '259px',
    bottom: 0,
    left: '121.5px',
    borderRadius: '5px',
    transform: 'translate( -105px, 2px)',
    animation: `$lineGrow 0.75s ${theme.transitions.easing.easeInOut}`
  },
  text: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    animation: `$boldText 0.6s ${theme.transitions.easing.easeInOut}`
  },
  shadow: {
    position: 'absolute',
    background: theme.palette.common.blue,
    opacity: 0.25,
    height: '98px',
    width: '259px',
    top: '445px',
    left: '17px',
    animation: `$showShadow 0.6s ${theme.transitions.easing.easeInOut}`
  },
  bottomBlock: {
    position: 'absolute',
    background: theme.palette.common.blue,
    height: '10px',
    width: '259px',
    left: '17px',
    top: '566px',
    animation: `$showBlock 0.75s ${theme.transitions.easing.easeInOut}`
  },
  "@keyframes colorImage": {
    "0%": {
      filter: 'grayscale(100%)'
    },
    "100%": {
      filter: 'grayscale(0)'
    },
  },
  "@keyframes boldText": {
    "0%": {
      fontWeight: 100
    },
    "100%": {
      fontWeight: 700
    },
  },
  "@keyframes addColor": {
    "0%": {
      background: theme.palette.common.grey
    },
    "100%": {
      background: theme.palette.common.blue
    },
  },
  "@keyframes lineGrow": {
    "0%": {
      background: theme.palette.common.white,
      width: '50px',
      left: '228px'
    },
    "100%": {
      background: theme.palette.common.black,
      width: '259px',
      left: '121.5px'
    }
  },
  "@keyframes showShadow": {
    "0%": {
      opacity: 0,
      transform: 'translateY(-30px)'
    },
    "100%": {
      opacity: 0.25,
      transform: 'translateY(0)'
    }
  },
  "@keyframes showBlock": {
    "0%": {
      width: 0,
      transform: 'translateX(130px)'
    },
    "100%": {
      width: '259px',
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
        <img src={hovered} alt="digital" className={classes.image} />
        <div className={classes.line}> </div>
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

