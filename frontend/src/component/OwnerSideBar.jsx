import React from "react";
import { NavLink } from "react-router-dom";

const OwnerSideBar = () => {
  const name = localStorage.getItem("owner-name");

  return (
    <div className="card p-3 shadow-sm">
      <div className="alert alert-success fw-bold main-color text-center">
        <p>{name}</p>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/profile">
            <i className="fas fa-user alert-success main-color"></i>
            <span className="fw-bold main-color"> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/edit-profile">
            <i className="fas fa-user-edit alert-success main-color"></i>
            <span className="fw-bold main-color"> Edit Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/my-property">
            <i className="fas fa-home alert-success main-color"></i>
            <span className="fw-bold main-color"> My Properties</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/add-property">
            <i className="fas fa-plus-circle alert-success main-color"></i>
            <span className="fw-bold main-color"> Add Property</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/edit-password">
            <i className="fas fa-key alert-success main-color"></i>
            <span className="fw-bold main-color"> Edit Password</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/messages">
            <i className="fas fa-comments alert-success main-color"></i>
            <span className="fw-bold main-color"> Messages</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/logout">
            <i className="fas fa-sign-out-alt alert-success main-color"></i>
            <span className="fw-bold main-color"> Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default OwnerSideBar;
