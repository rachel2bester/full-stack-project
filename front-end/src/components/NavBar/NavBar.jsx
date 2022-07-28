import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="nav-bar">
        <Link to="" style={{textDecoration: 'none'}} className="nav-bar__home">Courseology</Link>
        <Link to="/create-course" style={{textDecoration: 'none'}} className="nav-bar__home">New Course</Link>
    </div>
  )
}

export default NavBar