import React from 'react'

const Tag = () => {
  return (
    <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <span style={{ fontSize: '23px', fontWeight: 500, marginRight: '6px' }}>&lt;</span>
      <span style={{ fontWeight: 300 }}>L</span>
        D<span style={{ fontSize: '25px', fontWeight: 900, marginLeft: '6px' }}>/&gt;</span>
    </h3>
  )
}

export default Tag
