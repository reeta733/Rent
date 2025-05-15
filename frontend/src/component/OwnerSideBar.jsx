import React from 'react'
import { NavLink } from 'react-router-dom'

const OwnerSideBar = () => {
  return (
    

      <>
        <div className="alert  alert-success fw-bold main-color text-center">
          <p className="m-0">Hello</p>
          <p>{localStorage.getItem("owner-name")}</p>
        </div>
        <div className="alert alert-success main-color text-center">
          <h6>My Properties</h6>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/owner/profile">
              <i className="fas fa-user  alert-success main-color "></i><spam className=' fw-bold main-color'> Profile</spam>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/owner/my-property">
              <i className="fas fa-home  alert-success main-color  "></i><spam className=' fw-bold main-color'> My Properties</spam>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/owner/add-property">
              <i className="fas fa-plus-circle  alert-success main-color "></i> <spam className=' fw-bold main-color'>Add Property</spam>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/owner/requests">
              <i className="fas fa-handshake  alert-success main-color "></i>  <spam className=' fw-bold main-color'>Rent-out</spam>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/owner/requests">
              <i className="fas fa-sign  alert-success main-color "></i> <spam className=' fw-bold main-color'>For-Rent</spam> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              <i className="fa fa-sign-out-alt  alert-success main-color "></i> <spam className=' fw-bold main-color'>Logout</spam> 
            </NavLink>
          </li>
        </ul>
      </>
     
    
  )
}

export default OwnerSideBar
