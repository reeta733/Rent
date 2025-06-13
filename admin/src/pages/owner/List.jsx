import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const List = () => {
  let [allOwner, setAllOwner] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/owner`).then((response) => {
      // console.log(response.data);
      setAllOwner(response.data);
    });
  }, []);

  let changeStatus = (obj) => {
    let s = obj.status == 1 ? 0 : 1;
    axios
      .put(`http://localhost:3000/api/v1/owner/${obj._id}`, { status: s })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1>Owner List Page</h1>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>View Property</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allOwner.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <NavLink
                          to={`/view-property/${item._id}`}
                          className="btn btn-sm py-2 px-3 btn-rounded btn-primary"
                        >
                          View Property
                        </NavLink>
                      </td>
                      <td>
                        <button
                          onClick={() => changeStatus(item)}
                          className={
                            "btn rounded-5 " +
                            (item.status == 1 ? "btn-success" : "btn-danger")
                          }
                        >
                          {item.status == 1 ? "Active" : "Deactivate"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
