import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNew = () => {
  const [ownerName, setOwnerName] = useState(null);
  const [seekerName, setSeekerName] = useState(null);

  useEffect(() => {
    setOwnerName(localStorage.getItem("owner-token") ? localStorage.getItem("owner-name") : null);
    setSeekerName(localStorage.getItem("access-token") ? localStorage.getItem("name") : null);
  }, []);

  return (
    <div className="container fixed-top" style={{ top: "20px" }}>
      <nav className='navbar navbar-expand-sm navbar-dark bg-green p-4' style={{ borderRadius: "10px" }}>
        <NavLink className="navbar-brand" style={{ fontSize: "28px" }} to='/'>Property</NavLink>
        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='menu'>
          <ul className='nav navbar-nav'>

            <li className='nav-item'>
              <NavLink className="nav-link px-4" to="/">Home</NavLink>
            </li>

            {/* Owner Navigation */}
            <li className='nav-item dropdown'>
              <a data-bs-toggle="dropdown" className="nav-link px-4 dropdown-toggle" href="#">
                {ownerName ? ownerName : "Owner"}
              </a>
              <div className='dropdown-menu'>
                {ownerName ? (
                  <>
                    <NavLink className="dropdown-item" to="/owner/my-account">My Account</NavLink>
                    <NavLink className="dropdown-item" to="/owner/logout">Logout</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink className="dropdown-item" to="/owner/login">Login</NavLink>
                    <NavLink className="dropdown-item" to="/owner/signup">Signup</NavLink>
                  </>
                )}
              </div>
            </li>

            {/* Seeker Navigation */}
            <li className='nav-item dropdown'>
              <a data-bs-toggle="dropdown" className="nav-link px-4 dropdown-toggle" href="#">
                {seekerName ? seekerName : "Seeker"}
              </a>
              <div className='dropdown-menu'>
                {seekerName ? (
                  <>
                    <NavLink className="dropdown-item" to="/seeker/my-account">My Account</NavLink>
                    <NavLink className="dropdown-item" to="/seeker/logout">Logout</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink className="dropdown-item" to="/seeker/login">Login</NavLink>
                    <NavLink className="dropdown-item" to="/seeker/signup">Signup</NavLink>
                  </>
                )}
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNew;
