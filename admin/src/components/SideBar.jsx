import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">

        <div className="logo-header" data-background-color="dark">
          <NavLink to="/" className="logo">
            <img
              src="/assets/img/kaiadmin/logo_light.svg"
              alt="navbar brand"
              className="navbar-brand"
              height="20"
            />
          </NavLink>
          <div className="nav-toggle ">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>

      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">


            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Components</h4>
            </li>

            <li className="nav-item">
              <NavLink data-bs-toggle="collapse" to="#sidebarLayouts1">
                <i className="fas fa-th-list"></i>
                <p>Owners</p>
                <span className="caret"></span>
              </NavLink>
              <div className="collapse" id="sidebarLayouts1">
                <ul className="nav nav-collapse">
                  <li>
                    <NavLink to="/owner/add">
                      <span className="sub-item">Add</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/owner/list">
                      <span className="sub-item">List</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink data-bs-toggle="collapse" to="#sidebarLayouts2">
                <i className="fas fa-th-list"></i>
                <p>Seekers</p>
                <span className="caret"></span>
              </NavLink>
              <div className="collapse" id="sidebarLayouts2">
                <ul className="nav nav-collapse">
                  <li>
                    <NavLink to="/seeker/add">
                      <span className="sub-item">Add</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/seeker/list">
                      <span className="sub-item">List</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink  to='/logout'>
                <i className="fas fa-bars"></i>
                <p>Logout</p>
              </NavLink>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li>
                    <NavLink to="#subnav1">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </NavLink>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <NavLink to="#">
                            <span className="sub-item">Level 2</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <span className="sub-item">Level 2</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink data-bs-toggle="collapse" to="#subnav2">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </NavLink>
                    <div className="collapse" id="subnav2">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <NavLink to="#">
                            <span className="sub-item">Level 2</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="sub-item">Level 1</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar