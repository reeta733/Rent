import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';


const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  },[]);

  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-panel">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
