import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNew = () => {
  return (
    <div className="container  fixed-top" style={{top : "20px"}}>
        <nav className='navbar navbar-expand-sm navbar-dark bg-green p-4' style={{borderRadius : "10px"}}>
            <NavLink className="navbar-brand" style={{fontSize : "28px"}} to='/'>Property</NavLink>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end' id='menu'>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className="nav-link px-4" to="/">Home</NavLink>
                    </li>
                    {
                        localStorage.getItem("owner-token")
                        ?
                        <li className='nav-item dropdown'>
                        <a data-bs-toggle="dropdown" className="nav-link px-4 dropdown-toggle" href="#">{localStorage.getItem("owner-name")}</a>
                        <div className='dropdown-menu'>
                            <NavLink className="dropdown-item" to="/owner/my-account">My-Account</NavLink>
                            <NavLink className="dropdown-item" to="/owner/logout">Logout</NavLink>
                        </div>
                    </li>
                    :
                    <li className='nav-item dropdown'>
                        <a data-bs-toggle="dropdown" className="nav-link px-4 dropdown-toggle" href="#">Owner</a>
                        <div className='dropdown-menu'>
                            <NavLink className="dropdown-item" to="/owner/login">Login</NavLink>
                            <NavLink className="dropdown-item" to="/owner/signup">Signup</NavLink>
                        </div>
                    </li>
                    }
                    {
                        localStorage.getItem("access-token")
                        ?
                        <li className='nav-item dropdown'>
                        <a data-bs-toggle="dropdown" className="nav-link px-4 dropdown-toggle" href="#">{localStorage.getItem("name")}</a>
                        <div className='dropdown-menu'>
                            <NavLink className="dropdown-item" to="/seeker/my-account">My-Account</NavLink>
                            <NavLink className="dropdown-item" to="/seeker/logout">Logout</NavLink>
                        </div>
                    </li>
                    :
                    <li className='nav-item dropdown'>
                        <a data-bs-toggle="dropdown" className="nav-link px-4 dropdown-toggle" href="#">Seeker</a>
                        <div className='dropdown-menu'>
                            <NavLink className="dropdown-item" to="/seeker/login">Login</NavLink>
                            <NavLink className="dropdown-item" to="/seeker/signup">Signup</NavLink>
                        </div>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default HeaderNew