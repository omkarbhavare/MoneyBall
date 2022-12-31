import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container' >
      <div className='navbar'>
      <Link to="/">HomePage</Link>
      <Link to="/news">News</Link>
      
      </div>
    </div>
  )
}

export default Navbar
