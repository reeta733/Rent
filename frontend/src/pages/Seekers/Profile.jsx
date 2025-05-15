import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from '../../component/Slider';
import SeekerSideBar from "../../component/SeekerSidebar";


const Profile = () => {
  const [seeker, setSeeker] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/seekerprofile`, {
        headers: { Authorization: localStorage.getItem("access-token") },
      })
      .then((response) => {
        setSeeker(response.data.result[0]);
        console.log(response.data.result[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Slider data={<h1 className="text-white">Profile</h1>} />

      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <div className="row">
          {/* Sidebar */}
          {/* <div className="col-md-3 mb-4">
            <div className="alert alert-primary text-center">
              <p className="m-0">Hello</p>
              <p>{localStorage.getItem("seeker-name")}</p>
            </div>
            <div className="alert alert-secondary text-center">
              <h6>My Properties</h6>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/seeker/profile">
                  <i className="fas fa-user"></i> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/seeker/my-properties">
                  <i className="fas fa-home"></i> My Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/seeker/add-property">
                  <i className="fas fa-plus-circle"></i> Add Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/seeker/requests">
                  <i className="fas fa-handshake"></i> Rent-out
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/seeker/requests">
                  <i className="fas fa-sign"></i> For-Rent
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/seeker/profile">
                  <i className="fa fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </div> */}
          <SeekerSideBar/>

          {/* Main Content */}
          <div className="col-md-9 ">
            <h4>My Personal Information</h4>
            <table className="table ">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{seeker.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{seeker.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{seeker.phone}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{seeker.address}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{seeker.city}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
