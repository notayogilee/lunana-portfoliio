import React from 'react'
import {
  Typography
} from '@material-ui/core'

const Tag = () => {
  return (
    <Typography component="div" variant="h6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
      <div style={{ fontSize: '23px', fontWeight: 500, marginRight: '6px' }}>&lt;</div>
      <div style={{ fontWeight: 300 }}>L</div>
        D<div style={{ fontSize: '25px', fontWeight: 900, marginLeft: '6px' }}>/</div>
      <div style={{ fontSize: '25px', fontWeight: 900, marginLeft: '6px' }}>&gt;</div>
    </Typography>
  )
}

export default Tag
