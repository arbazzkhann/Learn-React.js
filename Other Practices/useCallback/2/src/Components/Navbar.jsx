import React, { memo } from 'react'
import { useCallback } from 'react';

const Navbar = ({adj}) => {
    console.log("Navbar is rendered.");

  return (
    <div>I am a {adj} Navbar</div>
  )
}

export default memo(Navbar)