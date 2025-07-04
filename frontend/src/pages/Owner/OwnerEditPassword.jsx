import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OwnerSideBar from "../../component/OwnerSidebar";
import Slider from "../../component/Slider";
import OwnerEditPassSchema from "../../schema/OwnerEditPassSchema";

const EditPassword = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const UpdateFrm = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: OwnerEditPassSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/owner-profile/edit-password`, values, {
          headers: {
            Authorization: localStorage.getItem("owner-token"),
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            toast.success("Password updated successfully!");
            resetForm();
            setErrMsg("");
            navigate("/owner/my-account");
          } else if (res.data.errType === 1) {
            setErrMsg("Your old password is incorrect.");
          } else {
            setErrMsg("Something went wrong. Please try again.");
          }
        })
        .catch((err) => {
          console.error("Password update failed", err);
          toast.error("Failed to update password.");
        });
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Edit Password</h1>} />
      <ToastContainer />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <OwnerSideBar />
          </div>

          <div className="col-md-9">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-4">Change Your Password</h4>

              {errMsg && (
                <div className="alert alert-danger">{errMsg}</div>
              )}

              <form onSubmit={UpdateFrm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="oldPassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Enter your old password"
                    onChange={UpdateFrm.handleChange}
                    onBlur={UpdateFrm.handleBlur}
                    value={UpdateFrm.values.oldPassword}
                  />
                  {UpdateFrm.touched.oldPassword && UpdateFrm.errors.oldPassword && (
                    <small className="text-danger">{UpdateFrm.errors.oldPassword}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter your new password"
                    onChange={UpdateFrm.handleChange}
                    onBlur={UpdateFrm.handleBlur}
                    value={UpdateFrm.values.newPassword}
                  />
                  {UpdateFrm.touched.newPassword && UpdateFrm.errors.newPassword && (
                    <small className="text-danger">{UpdateFrm.errors.newPassword}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your new password"
                    onChange={UpdateFrm.handleChange}
                    onBlur={UpdateFrm.handleBlur}
                    value={UpdateFrm.values.confirmPassword}
                  />
                  {UpdateFrm.touched.confirmPassword && UpdateFrm.errors.confirmPassword && (
                    <small className="text-danger">{UpdateFrm.errors.confirmPassword}</small>
                  )}
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPassword;
