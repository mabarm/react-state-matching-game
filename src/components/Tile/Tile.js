import React from 'react'

import './Tile.css'

const Tile = (props) => {
 const color=props.selected||props.matched?{backgroundColor:props.color}:null;
  return (
    <div style={color} className='Tile'>
    </div>
  )
}

export default Tile
