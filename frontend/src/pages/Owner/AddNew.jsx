import React from "react";
import OwnerSideBar from "../../component/OwnerSidebar";
import { useFormik } from "formik";
import PropertySchema from "../../schema/PropertySchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slider from "../../component/Slider";

function AddOwnerProp() {
    const navigate = useNavigate();

    const propFrm = useFormik({
        initialValues: {
            title: "",
            address: "",
            property_type: "",
            rent: "",
            deposit: "",
            image: "",
            amenities: {
                wifi: false,
                airConditioner: false,
                parking: false,
                tv: false,
                kitchen: false,
                gym: false,
                pool: false,
                security: false,
                balcony: false,
                heating: false,
            },
        },


        validationSchema: PropertySchema,
        onSubmit: (values) => {
            console.log(values);
            axios.post(`${import.meta.env.VITE_API_URL}/property`, values, {
                headers: {
                    Authorization: localStorage.getItem("owner-token"),

                },
            })
                .then((res) => {
                    console.log(res.data);
                    alert("Property added successfully");
                    navigate("/owner/my-property");
                })
                .catch((err) => {
                    console.log(err);
                    alert("Error adding property");
                });

        },
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <Slider data={<h1 className="text-white">Add Property</h1>} />

        <div
            className="container"
            style={{ marginBottom: "100px", marginTop: "100px" }}
        >
            <form onSubmit={propFrm.handleSubmit}>
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <OwnerSideBar />
                    </div>

                    <div className="col-md-9">

                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                        <h4 className="main-color fw-bolder">Add New Property</h4>
                                <div className="my-4">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        name="title"
                                        onChange={propFrm.handleChange}
                                        type="text"
                                        id="title"
                                        placeholder="Title"
                                        className={`form-control ${propFrm.errors.title && propFrm.touched.title
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                    />
                                    {propFrm.errors.title && propFrm.touched.title && (
                                        <small className="text-danger">
                                            {propFrm.errors.title}
                                        </small>
                                    )}
                                </div>
                                <div className="my-4">
                                    <label htmlFor="address" className="form-label">
                                        Property Address
                                    </label>
                                    <input
                                        name="address"
                                        onChange={propFrm.handleChange}
                                        type="text"
                                        id="address"
                                        placeholder="Enter Property Address"
                                        className={`form-control ${propFrm.errors.address && propFrm.touched.address
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                    />
                                    {propFrm.errors.address && propFrm.touched.address && (
                                        <small className="text-danger">
                                            {propFrm.errors.address}
                                        </small>
                                    )}
                                </div>
                                <label
                                    htmlFor="propertyType"
                                    className="form-label"
                                >
                                    Property Type
                                </label>
                                <select
                                    name="property_type"  // ✅ fix here
                                    value={propFrm.values.property_type}
                                    onChange={propFrm.handleChange}
                                    onBlur={propFrm.handleBlur}
                                    id="propertyType"
                                    className={`form-control ${propFrm.errors.property_type && propFrm.touched.property_type
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                >

                                    <option value="">Select</option>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Independent House">Independent House</option>
                                    <option value="Townhouse">Townhouse</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Duplex">Duplex</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Hostel">Hostel</option>
                                    <option value="Penthouse">Penthouse</option>
                                    <option value="Flat ">Flat </option>
                                    <option value="Raw House">Raw House</option>
                                    <option value="Farmhouse">Farmhouse</option>
                                </select>

                                {propFrm.errors.property_type && propFrm.touched.property_type && (
                                    <small className="text-danger">{propFrm.errors.property_type}</small>
                                )}


                                <div className="my-4">
                                    <label
                                        htmlFor="rent"

                                    >
                                        Rent
                                    </label>
                                    <input
                                        name="rent"
                                        onChange={propFrm.handleChange}
                                        type="text"
                                        id="rent"
                                        placeholder="Enter rent"
                                        className={`form-control ${propFrm.errors.rent && propFrm.touched.rent
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                    />
                                    {propFrm.errors.rent && propFrm.touched.rent && (
                                        <small className="text-danger">{propFrm.errors.rent}</small>
                                    )}
                                </div>
                                <div className="my-4">
                                    <label htmlFor="deposit" className="form-label">
                                        Security Deposit
                                    </label>
                                    <input
                                        name="deposit"
                                        type="text"
                                        onChange={propFrm.handleChange}
                                        onBlur={propFrm.handleBlur}
                                        value={propFrm.values.deposit}
                                        id="deposit"
                                        placeholder="Enter deposit"
                                        className={`form-control ${propFrm.errors.deposit && propFrm.touched.deposit ? "is-invalid" : ""
                                            }`}
                                    />
                                    {propFrm.errors.deposit && propFrm.touched.deposit && (
                                        <small className="text-danger">{propFrm.errors.deposit}</small>
                                    )}
                                </div>

                                <div className="my-4">
                                    <label htmlFor="">Amenities</label>
                                    <div className="d-flex flex-wrap gap-3 mt-2">
                                        {[
                                            { id: "wifi", icon: "fas fa-wifi", label: "Wifi" },
                                            { id: "airConditioner", icon: "fas fa-snowflake", label: "Air Conditioner" },
                                            { id: "parking", icon: "fas fa-parking", label: "Parking" },
                                            { id: "tv", icon: "fas fa-tv", label: "TV" },
                                            { id: "kitchen", icon: "fas fa-utensils", label: "Kitchen" },
                                            { id: "gym", icon: "fas fa-dumbbell", label: "Gym" },
                                            { id: "pool", icon: "fas fa-swimming-pool", label: "Pool" },
                                            { id: "security", icon: "fas fa-shield-alt", label: "Security" },
                                            { id: "balcony", icon: "fas fa-couch", label: "Balcony" },
                                            { id: "heating", icon: "fas fa-fire", label: "Heating" },
                                        ].map((amenity) => (
                                            <div className="form-check" key={amenity.id}>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={amenity.id}
                                                    name={`amenities.${amenity.id}`}
                                                    onChange={propFrm.handleChange}
                                                    checked={propFrm.values.amenities[amenity.id]}
                                                />
                                                <label className="form-check-label" htmlFor={amenity.id}>
                                                    <i className={amenity.icon}></i> {amenity.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-custom text-light py-3 px-4 ">
                                    Add Property
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default AddOwnerProp;
