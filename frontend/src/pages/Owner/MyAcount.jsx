import React, { useEffect, useState } from "react";
import axios from "axios";

const MyAcount = () => {
  const [owner, setOwner] = useState({});

  useEffect(() => {

    axios
      .get(`${import.meta.env.VITE_API_URL}/ownerprofile`, {
        headers: { Authorization: localStorage.getItem("owner-token") },

      })
      .then((response) => {
        setOwner(response.data.result[0]);
        console.log(response.data.result[0])
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (


    <div
      className="container"
      style={{ marginBottom: "100px", marginTop: "100px" }}
    >
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="alert alert-primary text-center">
            <p className="m-0">Hello</p>
            <p>{localStorage.getItem("owner-name")}</p>
          </div>
          <div className="alert alert-secondary text-center">
            <h6>My Properties</h6>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/owner/profile">
                <i className="fas fa-user"></i> Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/owner/my-properties">
                <i className="fas fa-home"></i> My Properties
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/owner/add-property">
                <i className="fas fa-plus-circle"></i> Add Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/owner/requests">
                <i className="fas fa-handshake"></i> Rent-out
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/owner/requests">
                <i className="fas fa-sign"></i> For-Rent
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/logout">
                <i class="fa fa-sign-out-alt"></i> Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h4>My Personal Information</h4>
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{owner.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{owner.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{owner.phone}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{owner.address}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{owner.city}</td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAcount;