import React from "react";
import { NavLink } from "react-router-dom";

const SeekerSideBar = () => {
  return (
    <>
      {/* <div className="alert alert-secondary text-center">
        <div className="alert alert-primary text-center">
          <p className="m-0">Hello</p>
          <p>{localStorage.getItem("seeker-name")}</p>
        </div>
        <div className="alert alert-secondary text-center">
          <h6>My Properties</h6>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/profile">
              <i className="fas fa-user"></i> Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/my-properties">
              <i className="fas fa-home"></i> My Properties
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/add-property">
              <i className="fas fa-plus-circle"></i> Add Property
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/requests">
              <i className="fas fa-handshake"></i> Rent-out
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/requests">
              <i className="fas fa-sign"></i> For-Rent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link custom-green" to="/logout">
              <i className="fa fa-sign-out-alt custom-green"></i> Logout
            </NavLink>
          </li>
        </ul>
      </div> */}
                <div className="col-md-3 mb-4">
            <div className="alert alert-primary text-center">
              <p className="m-0">Hello</p>
              <p>{localStorage.getItem("name")}</p>
            </div>
            {/* <div className="alert alert-secondary text-center">
              <h6>My Properties</h6>
            </div> */}
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link custom-green  " href="/seeker/profile">
                  <i className="fas fa-user"></i> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-green" href="/seeker/my-properties">
                  <i className="fas fa-home"></i> My Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-green" href="/seeker/add-property">
                  <i className="fas fa-plus-circle"></i> Add Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-green" href="/seeker/requests">
                  <i className="fas fa-handshake"></i> Rent-out
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-green" href="/seeker/requests">
                  <i className="fas fa-sign"></i> For-Rent
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-green" href="/seeker/profile">
                  <i className="fa fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </div>
    </>
  );
};

export default SeekerSideBar;
