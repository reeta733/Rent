import React, { useState } from "react";
import { useFormik } from "formik";
import ContactSchema from "../../schema/ContactSchema";
import axios from "axios";
import { API_URL } from "../../constant/API_URL";
import Slider from "../../component/Slider";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { pid, oid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const submitValues = { ...values, pid, oid };
        const token = localStorage.getItem("access-token") || "";

        const response = await axios.post(
          `${API_URL}/owner/contact`,
          submitValues,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        toast.success("Message sent successfully!");
        resetForm();
        navigate("/myaccount");
      } catch (err) {
        console.error("Failed to send message:", err);
        toast.error("Failed to send message.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Contact us</h1>} />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="contact-info">
              <div className="address mt-2">
                <i className="icon-room"></i>
                <h4 className="mb-2">Location:</h4>
                <p>43 Raymouth Rd. Baltemoer,<br />London 3910</p>
              </div>
              <div className="open-hours mt-4">
                <i className="icon-clock-o"></i>
                <h4 className="mb-2">Open Hours:</h4>
                <p>Sunday–Friday:<br />11:00 AM – 11:00 PM</p>
              </div>
              <div className="email mt-4">
                <i className="icon-envelope"></i>
                <h4 className="mb-2">Email:</h4>
                <p>info@Untree.co</p>
              </div>
              <div className="phone mt-4">
                <i className="icon-phone"></i>
                <h4 className="mb-2">Call:</h4>
                <p>+1 1234 55488 55</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <h2>Contact Us</h2>
              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <div className="invalid-feedback">{formik.errors.username}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className={`form-control ${formik.touched.message && formik.errors.message ? "is-invalid" : ""}`}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="invalid-feedback">{formik.errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-custom text-light rounded-5 py-3 px-4 mt-3 mb-3"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
