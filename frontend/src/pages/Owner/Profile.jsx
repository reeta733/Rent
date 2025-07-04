import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../../component/Slider";
import OwnerSideBar from "../../component/OwnerSidebar";

const OwnerProfile = () => {
  const [owner, setOwner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/owner-profile`, {
        headers: { Authorization: localStorage.getItem("owner-token") },
      })
      .then((res) => {
        if (res.data.success && res.data.result.length > 0) {
          setOwner(res.data.result[0]);
        } else {
          setError("Failed to fetch owner profile.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Slider data={<h1 className="text-white">Owner Profile</h1>} />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <OwnerSideBar />
          </div>

          <div className="col-md-9">
            <div className="card shadow-sm p-4">
              {loading ? (
                <div className="text-center">Loading...</div>
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <>
                  <h4 className="mb-4">Welcome, {owner.name} 👋</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Email:</strong> {owner.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Phone:</strong> {owner.phone}
                    </li>
                    <li className="list-group-item">
                      <strong>Address:</strong> {owner.address}
                    </li>
                    <li className="list-group-item">
                      <strong>City:</strong> {owner.city}
                    </li>
                   
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
