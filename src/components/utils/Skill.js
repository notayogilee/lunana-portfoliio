import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Zoom
} from '@material-ui/core'
import unhovered from '../../images/Artwork 1@2x.png'
import hovered from '../../images/category hover@2x.png'

const useStyles = makeStyles((theme) => ({
  image: {
    height: '410px',
    width: '293px',
    position: 'relative'
  },
  imageText: {
    height: '115px',
    width: '293px',
    paddingTop: '26px',
    background: theme.palette.common.grey
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
}))

const Skill = ({ label }) => {
  const classes = useStyles()
  const theme = useTheme()

  const [hover, setHover] = useState(false)
  const [textBackground, setTextBackground] = useState(theme.palette.common.grey)
  const [lineWidth, setLineWidth] = useState('50px');
  const [lineColor, setLineColor] = useState(theme.palette.common.white);

  const handleMouseEnter = () => {
    setHover(true)
    setTextBackground(theme.palette.common.blue)
    setLineWidth('259px')
    setLineColor(theme.palette.common.black)
  }

  const handleMouseLeave = () => {
    setHover(false)
    setTextBackground(theme.palette.common.grey)
    setLineWidth('50px')
    setLineColor(theme.palette.common.white)
  }

  return (

    <Grid
      container
      direction="column"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid item className={classes.image}>
        <img
          src={hover ? hovered : unhovered} alt="digital" />
        <div
          className={classes.line}
          style={{ width: lineWidth, backgroundColor: lineColor }}
        ></div>
      </Grid>
      <Grid
        item
        className={classes.imageText}
        style={{ background: textBackground }}
      >
        <Typography variant="h3" align="center">
          {label}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Skill

