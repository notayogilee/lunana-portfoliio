import React from 'react'
import Tag from './Tag'
import Links from './Links'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '97px',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100
  },
  linkContainer: {
    position: 'absolute',
    width: 276,
    height: 22,
    top: 75,
    left: 1158
  },
  tag: {
    position: 'absolute',
    top: '75px',
    left: '393px',
    width: '99px',
    height: '26px'

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
    <>
      <div className={classes.tag}>
        <Tag />
      </div>

      <div className={classes.linkContainer}>
        <Links />
      </div>
    </>
  )
}

export default Header
