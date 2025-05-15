import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";
import PropertyProp from "../component/PropertyProp";
import Slider from "../component/Slider";

const Home = () => {
  const [allProperty, setAllProperty] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/property`)
      .then((result) => {
        console.log("API Data:", result.data);
        setAllProperty(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Slider data={<h1 className="text-white">Home</h1>} />

      <div className="section py-5">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="fw-bold main-color">Popular Properties</h2>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <NavLink to="#" className="btn btn-custom text-light rounded-5 py-3 px-4 ms-2 btn-hover">
                View all properties
              </NavLink>
            </div>
          </div>

          <div className="row">
            {allProperty.map((item, index) => (
              <PropertyProp item={item} index={index} />
            ))}
          </div>

          {/* <div
          id="property-nav"
          className="controls mt-5 d-flex justify-content-center gap-3"
          tabIndex="0"
          aria-label="Carousel Navigation"
        >
          <span className="btn btn-custom" tabIndex="-1">
            Prev
          </span>
          <span className="btn btn-custom" tabIndex="-1">
            Next
          </span>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
