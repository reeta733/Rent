import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "../../component/Slider";
import { useFormik } from "formik";
import OwnerEditProfileSchema from "../../schema/OwnerEditProfileSchema";
import { useNavigate } from "react-router-dom";
import OwnerSideBar from "../../component/OwnerSidebar";

const OwnerEditProfile = () => {
  const navigate = useNavigate();
  const [owner, setOwner] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    gender: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/owner-profile`, {
        headers: { Authorization: localStorage.getItem("owner-token") },
      })
      .then((response) => {
        setOwner(response.data.result[0]);
      })
      .catch((error) => {
        console.error("Error fetching owner profile:", error);
      });
  }, []);

  const UpdateFrm = useFormik({
    enableReinitialize: true,
    initialValues: owner,
    validationSchema: OwnerEditProfileSchema,
    onSubmit: (values) => {
      axios
        .put(`${import.meta.env.VITE_API_URL}/owner-profile`, values, {
          headers: { Authorization: localStorage.getItem("owner-token") },
        })
        .then((response) => {
          console.log("Profile updated successfully:", response.data);
          navigate("/owner/profile");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
          alert("Failed to update profile. Please try again.");
        });
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Edit Profile</h1>} />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <OwnerSideBar />
          </div>

          <div className="col-md-9">
            <h4 className="mb-4">Edit Your Information</h4>

            <form onSubmit={UpdateFrm.handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.name}
                />
                {UpdateFrm.touched.name && UpdateFrm.errors.name && (
                  <div className="text-danger">{UpdateFrm.errors.name}</div>
                )}
              </div>

              {/* Email (Read-only) */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={UpdateFrm.values.email}
                  readOnly
                />
                {UpdateFrm.touched.email && UpdateFrm.errors.email && (
                  <div className="text-danger">{UpdateFrm.errors.email}</div>
                )}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.phone}
                />
                {UpdateFrm.touched.phone && UpdateFrm.errors.phone && (
                  <div className="text-danger">{UpdateFrm.errors.phone}</div>
                )}
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-control"
                  placeholder="Enter your address"
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.address}
                />
                {UpdateFrm.touched.address && UpdateFrm.errors.address && (
                  <div className="text-danger">{UpdateFrm.errors.address}</div>
                )}
              </div>

              {/* City */}
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                  placeholder="Enter your city"
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.city}
                />
                {UpdateFrm.touched.city && UpdateFrm.errors.city && (
                  <div className="text-danger">{UpdateFrm.errors.city}</div>
                )}
              </div>

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="gender-male"
                    name="gender"
                    value="male"
                    onChange={UpdateFrm.handleChange}
                    checked={UpdateFrm.values.gender === "male"}
                  />
                  <label className="form-check-label" htmlFor="gender-male">
                    Male
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="gender-female"
                    name="gender"
                    value="female"
                    onChange={UpdateFrm.handleChange}
                    checked={UpdateFrm.values.gender === "female"}
                  />
                  <label className="form-check-label" htmlFor="gender-female">
                    Female
                  </label>
                </div>

                {UpdateFrm.touched.gender && UpdateFrm.errors.gender && (
                  <div className="text-danger">{UpdateFrm.errors.gender}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Update Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerEditProfile;
