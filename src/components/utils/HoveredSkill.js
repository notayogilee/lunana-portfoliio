import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography,

} from '@material-ui/core'
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
    background: theme.palette.common.blue
  },
  line: {
    position: 'absolute',
    background: theme.palette.common.black,
    height: '4px',
    width: '259px',
    bottom: 0,
    left: '121.5px',
    borderRadius: '5px',
    transform: 'translateY(2px)',
    transform: 'translateX(-105px)'
  },
  shadow: {
    position: 'absolute',
    background: theme.palette.common.blue,
    opacity: 0.25,
    height: '98px',
    width: '259px',
    top: '35px',
    left: 0
  },
  bottomBlock: {
    position: 'absolute',
    background: theme.palette.common.blue,
    height: '10px',
    width: '259px',
    left: 0,
    top: '156px'
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
      <Grid item className={classes.image}>
        <img src={hovered} alt="digital" />
        <div className={classes.line}>
          <div className={classes.shadow}></div>
          <div className={classes.bottomBlock}></div>
        </div>
      </Grid>
      <Grid item className={classes.imageText}>
        <Typography variant="h3" align="center">
          {label}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Skill

