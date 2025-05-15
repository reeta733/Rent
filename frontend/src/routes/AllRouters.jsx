import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  SeekerLogin,
  SeekerSignup,
  Seekerlogout,
  OwnerLogin,
  OwnerSignup,
  Ownerlogout,
  MyAccount,
  Details,
  Profile,
  AddNew,
  MyProperty,
  Services,
} from "../pages";

import SeekerProtectedRoute from "../routes/SeekerProtectedRoute";
import OwnerProtectedRoute from "../routes/OwnerProtectedRoute";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="" element={<Home />} />

      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="contact/:pid/:oid" element={<Contact />} />
      {/* <Route path="details/:propertyId" element={<Details />} /> */}

      <Route path="/services" element={<Services />} />

      <Route path="details/:id" element={<Details />} />
      <Route path="seeker/login" element={<SeekerLogin />} />
      <Route path="seeker/signup" element={<SeekerSignup />} />
      <Route path="owner/login" element={<OwnerLogin />} />
      <Route path="owner/signup" element={<OwnerSignup />} />

      {/* Seeker Protected */}
      <Route element={<SeekerProtectedRoute />}>
        <Route path="seeker/profile" element={<Profile />} />
        <Route path="seeker/logout" element={<Seekerlogout />} />
      </Route>

      {/* Owner Protected */}
      <Route element={<OwnerProtectedRoute />}>
        <Route path="owner/my-account" element={<MyAccount />} />
        <Route path="owner/my-property" element={<MyProperty />} />
        <Route path="owner/logout" element={<Ownerlogout />} />
        <Route path="owner/my-account" element={<MyAccount />} />
        <Route path="owner/add-property" element={<AddNew />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
