
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="d-lg-none d-flex list container-fluid w-100  justify-content-center  Outfit-Regular" style={{height:60}}>
    <li ><Link to="/" className="link">
        Home</Link></li>
    <li><Link to="/Aboutme" className="link  ">
        About</Link></li>
    <li><Link to="/Services" className="link">
        Services</Link></li>
    <li><Link to="/Gallery" className="link ">
        Gallery</Link></li>
    <li><Link to="/Contactme" className="link">
        Contact</Link></li>
  </ul>    
  )
}

export default Nav