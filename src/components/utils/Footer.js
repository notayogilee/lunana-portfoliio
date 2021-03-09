import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.common.black,
    height: 370,
    width: '100%',
    position: 'relative',
    bottom: 0
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.mainContainer}>
      Footer
    </footer>
  )
}

export default Footer
