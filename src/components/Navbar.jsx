import React from 'react'
function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary d-lg-none">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        
        <div className="justify-content-center" >
          <div className="navbar-nav justify-content-center">
            <a className="mx-3 nav-link active" aria-current="page" href="#">Dashboard</a>
            <a className="mx-3 nav-link" href="#">Applications</a>
            <a className="mx-3 nav-link" href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>  
  )
}

export default Navbar