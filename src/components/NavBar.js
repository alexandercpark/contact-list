import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to='/contacts'>All Contacts</Link>
            </li>
            <li>
              <Link to='/contacts/new'>Add Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;