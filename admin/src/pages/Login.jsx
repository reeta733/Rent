import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import AdminLoginSchema from "../schema/AdminLoginSchema";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  let loginFrm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: AdminLoginSchema,
    onSubmit: (formData) => {
      axios
        .post("http://localhost:3000/api/v1/admin/login", formData)
        .then((response) => {
          console.log(response.data);

          if (response.data.success === true) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            navigate("/dashboard");
          } else {
            if (response.data.errType === 1) {
              setErrMsg("This Email ID and Password is Incorrect!");
            } else if (response.data.errType === 2) {
              setErrMsg("This Password is Incorrect!");
            } else if (response.data.errType === 3) {
              setErrMsg(
                "You are Deactivated now. Please Contact our Support Team!"
              );
            }
          }
        })
        .catch((error) => {
          console.error("Login request failed:", error);
          setErrMsg("Something went wrong. Please try again.");
        });
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          <div className="card bg-dark">
            <div className="card-header">
              <h4 className="text-light">Admin Login</h4>
            </div>
            <div className="card-body">
              {errMsg && <p className="text-danger text-center">{errMsg}</p>}
              <form onSubmit={loginFrm.handleSubmit}>
                <div className="my-4">
                  <label className="text-light">Username</label>
                  <input
                    name="username"
                    type="text"
                    className={`form-control ${
                      loginFrm.errors.username && loginFrm.touched.username
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter Your Username"
                    value={loginFrm.values.username}
                    onChange={loginFrm.handleChange}
                    onBlur={loginFrm.handleBlur}
                  />
                  {loginFrm.errors.username && loginFrm.touched.username && (
                    <small className="text-danger">
                      {loginFrm.errors.username}
                    </small>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-light">Password</label>
                  <input
                    name="password"
                    type="password"
                    className={`form-control ${
                      loginFrm.errors.password && loginFrm.touched.password
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter Your Password"
                    value={loginFrm.values.password}
                    onChange={loginFrm.handleChange}
                    onBlur={loginFrm.handleBlur}
                  />
                  {loginFrm.errors.password && loginFrm.touched.password && (
                    <small className="text-danger">
                      {loginFrm.errors.password}
                    </small>
                  )}
                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-light">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
