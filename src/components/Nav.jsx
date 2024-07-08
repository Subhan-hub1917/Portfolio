
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="list container-fluid w-100 d-lg-none d-flex justify-content-center" style={{height:60}}>
    <li><Link to="/" className="link">
        Home</Link></li>
    <li><Link to="/Aboutme" className="link  ">
        About Me</Link></li>
    <li><Link to="/Services" className="link">
        Services</Link></li>
    <li><Link to="/Gallery" className="link ">
        Gallery</Link></li>
    <li><Link to="/Contactme" className="link">
        Contact Me</Link></li>
  </ul>    
  )
}

export default Nav