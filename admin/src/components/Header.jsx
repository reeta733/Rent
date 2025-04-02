import React from 'react'

const Header = () => {
  return (
    <div className="main-header">
          <div className="main-header-logo">
           
            <div className="logo-header" data-background-color="dark">
              <a href="index.html" className="logo">
                <img
                  src="/assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="20"
                />
              </a>
              <div className="nav-toggle">
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
          
          <nav
            className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom"
          >
            <div className="container-fluid">
              <nav
                className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex"
              >
                
              </nav>

              <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                
               
                

                <li className="nav-item topbar-user dropdown hidden-caret">
                  <a
                    className="dropdown-toggle profile-pic"
                    data-bs-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    
                    <span className="profile-username">
                      <span className="op-7">Hi,</span>
                      <span className="fw-bold">Admin</span>
                    </span>
                  </a>
                  
                </li>
              </ul>
            </div>
          </nav>
          
        </div>
  )
}

export default Header