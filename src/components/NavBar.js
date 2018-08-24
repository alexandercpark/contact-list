import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <div className="contact-navbar">
      <Link to='/contacts'>All Contacts</Link>
      <Link to='/add'>Add Contact</Link>
    </div>
  )
}

export default NavBar;