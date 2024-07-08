import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const SidebarNavigation = () => {
  return (
    <div className='col-lg-2 d-none d-lg-block bg-black height-100  '>
      <div className='d-flex flex-column justify-content-center height-100 ' style={{fontFamily:'Outfit-Regular'}}> 
        <NavLink className={({ isActive }) =>`text-decoration-none nav h5 cursor-pointer ${isActive ? 'text-s' : 'text-light'}`} to='/'><div className='p-2 text-start'><i class="bi bi-house-door-fill"></i> Home</div></NavLink>
        <NavLink className={({ isActive }) =>`text-decoration-none nav h5 cursor-pointer ${isActive ? 'text-s' : 'text-light'}`} to='/Aboutme'><div className='p-2 text-start'><i class="bi bi-person-fill"></i> About Me</div></NavLink>
        <NavLink className={({ isActive }) =>`text-decoration-none nav h5 cursor-pointer ${isActive ? 'text-s' : 'text-light'}`} to='/Services'><div className='p-2 text-start '><i class="bi bi-list-check"></i> Services</div></NavLink>
        <NavLink className={({ isActive }) =>`text-decoration-none nav h5 cursor-pointer ${isActive ? 'text-s' : 'text-light'}`} to='/Gallery'><div className='p-2 text-start '><i class="bi bi-images"></i> Gallery</div></NavLink>
        <NavLink className={({ isActive }) =>`text-decoration-none nav h5 cursor-pointer ${isActive ? 'text-s' : 'text-light'}`} to='/Contactme'><div className='p-2 text-start '><i class="bi bi-wechat"></i> Contact Me</div></NavLink>
      </div>
    </div>
  )
}

export default SidebarNavigation