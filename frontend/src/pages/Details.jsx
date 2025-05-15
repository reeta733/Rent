import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import DetailsModal from "../component/DetailsModal";
import { useNavigate } from "react-router-dom";
import Slider from "../component/Slider";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ownerName, setOwnerName] = useState("");
  const [ownerNum, setOwnerNum] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const [popUpInfo, setPopUpInfo] = useState({});

  useEffect(() => {
    {
      localStorage.getItem("owner-token")
        ? setPopUpInfo({
            show: false,
            title: "Click 'Contact' to contact owner ",
            nav: "/contact",
          })
        : localStorage.getItem("access-token")
        ? setPopUpInfo({
            show: false,
            title: "Click 'Contact' to contact owner ",
            nav: "/contact/",
          })
        : setPopUpInfo({
            show: false,
            title: "Message",
            msg: "You are not logged in to see property owner details",
            nav: "/owner/login",
          });
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
      .then((result) => {
        const propertyData = result.data[0];
        setProperty(propertyData);
        console.log(propertyData);

        // Set owner details
        if (propertyData.owner_id) {
          setOwnerName(propertyData.owner_id.name || "---");
          setOwnerNum(propertyData.owner_id.phone || "000");
          setEmail(propertyData.owner_id.email || "---");
          setPopUpInfo((curr)=>{ return {...curr, nav : "/contact/"+propertyData._id+"/"+propertyData.owner_id._id}})
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching property details:", err);
        setLoading(false);
      });
  }, [id]);
useEffect(() => {
    {
      localStorage.getItem("owner-token")
        ? setPopUpInfo({
            show: false,
            title: "Click 'Contact' to contact owner ",
            nav: "/contact",
          })
        : localStorage.getItem("access-token")
        ? setPopUpInfo({
            show: false,
            title: "Click 'Contact' to contact owner ",
            nav: "/contact/",
          })
        : setPopUpInfo({
            show: false,
            title: "Message",
            msg: "You are not logged in to see property owner details",
            nav: "/owner/login",
          });
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  let contact = () => {
  // navigate("/contact")
  //   }

  const amenityIcons = {
    wifi: { icon: "fas fa-wifi", label: "Wifi" },
    airConditioner: { icon: "fas fa-snowflake", label: "AC" },
    parking: { icon: "fas fa-parking", label: "Parking" },
    tv: { icon: "fas fa-tv", label: "TV" },
    kitchen: { icon: "fas fa-utensils", label: "Kitchen" },
    gym: { icon: "fas fa-dumbbell", label: "Gym" },
    pool: { icon: "fas fa-swimming-pool", label: "Pool" },
    security: { icon: "fas fa-shield-alt", label: "Security" },
    balcony: { icon: "fas fa-couch", label: "Balcony" },
    heating: { icon: "fas fa-fire", label: "Heating" },
  };

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (!property) {
    return <div className="text-center my-5">Property not found.</div>;
  }

  return (
    <>
      <Slider data={<h1 className="text-white">Details</h1>} />

      <div className="container my-4">
        <div className="row">
          {/* Property Details */}
          <div className="col-lg-8 col-md-7 col-12 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <h3 className="mb-1">{property.title}</h3>
              <h5 className="text-success">
                ₹ {property.rent ? property.rent.toFixed(2) : ""}
              </h5>
              <p className="text-muted">
                <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                {property.address}
              </p>
              <p className="text-muted">
                <i className="fa fa-tag me-2" aria-hidden="true"></i>
                {property.property_type}
              </p>

              <div className="row">
                <div className="col-sm-6 col-12 mb-3">
                  <img
                    src={property.image || "/assets/images/img_4.jpg"}
                    className="img-fluid rounded"
                    alt="Property"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "250px",
                    }}
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <h6 className="mt-2 mb-2">Amenities:</h6>
                  {property.amenities ? (
                    <div className="d-flex flex-wrap gap-2">
                      {Object.entries(amenityIcons).map(
                        ([key, value]) =>
                          property.amenities[key] && (
                            <span
                              key={key}
                              className="badge bg-light border text-dark"
                            >
                              <i className={`${value.icon} me-1`}></i>
                              {value.label}
                            </span>
                          )
                      )}
                    </div>
                  ) : (
                    <p className="text-muted">No amenities available</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Owner Contact Section */}
          <div className="col-lg-4 col-md-5 col-12 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <h4>Owner Contact</h4>
              <p>
                <b>Name:</b>{" "}
                {localStorage.getItem("owner-token")
                  ? ownerName
                  : localStorage.getItem("access-token")
                  ? ownerName
                  : "Login to view"}
              </p>
              <p>
                <b>Contact:</b>{" "}
                {localStorage.getItem("owner-token")
                  ? `+91 ${ownerNum}`
                  : localStorage.getItem("access-token")
                  ? `+91 ${ownerNum}`
                  : "Login to view"}
              </p>
              <p>
                <b>Email:</b>{" "}
                {localStorage.getItem("owner-token")
                  ? email
                  : localStorage.getItem("access-token")
                  ? email
                  : "Login to view"}
              </p>
              
          {localStorage.getItem("owner-token") ? (
            <button
              onClick={() => setPopUpInfo({ ...popUpInfo, show: true })}
              className="btn  btn-custom btn-rounded rounded-5 text-light col-md-3 py-3 mt-3 btn-sm"
            >
              Message
            </button>
          ) : localStorage.getItem("access-token") ? (
            <button
              onClick={() => setPopUpInfo({ ...popUpInfo, show: true })}
              className="btn  btn-custom btn-rounded rounded-5 text-light col-md-3 py-3 mt-3"
            >
              Message
            </button>
          ) : (
            <button
              onClick={() => setPopUpInfo({ ...popUpInfo, show: true })}
              className="btn btn-custom text-light rounded-5 py-2 px-2 mt-3  btn-hover"
            >
              Contact
            </button>
          )}
            </div>
          </div>
          <DetailsModal
            show={show}
            info={popUpInfo}
            setPopUpInfo={setPopUpInfo}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
