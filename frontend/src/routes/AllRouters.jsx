import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  SeekerLogin,
  SeekerSignup,
  Seekerlogout,
  OwnerLogin,
  OwnerSignup,
  Ownerlogout,
  MyAcount,
  Details,
  Profile
} from '../pages';

import SeekerProtectedRoute from '../routes/SeekerProtectedRoute';
import OwnerProtectedRoute from '../routes/OwnerProtectedRoute';

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path='' element={<Home />} />
      <Route path='details' element={<Details />} />
      <Route path='seeker/login' element={<SeekerLogin />} />
      <Route path='seeker/signup' element={<SeekerSignup />} />
      <Route path='owner/login' element={<OwnerLogin />} />
      <Route path='owner/signup' element={<OwnerSignup />} />

      {/* Seeker Protected */}
      <Route element={<SeekerProtectedRoute />}>
        <Route path='seeker/profile' element={<Profile />} />
        <Route path='seeker/logout' element={<Seekerlogout />} />
      </Route>

      {/* Owner Protected */}
      <Route element={<OwnerProtectedRoute />}>
        <Route path='owner/my-account' element={<MyAcount />} />
        <Route path='owner/logout' element={<Ownerlogout />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
