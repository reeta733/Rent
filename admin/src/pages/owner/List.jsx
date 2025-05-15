import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const List = () => {
  let [allOwner, setAllOwner] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/owner`)
      .then(response => {
        // console.log(response.data);
        setAllOwner(response.data);
      });
  }, []);



  return (
    <div className="container">
      <div className="page-inner">

        <div className="row">
          <div className="col-md-12">
            <h1>Owner List Page</h1>
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>View Property</th>
                </tr>
              </thead>
              <tbody>
                {
                  allOwner.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td><NavLink to={`/view-property/${item._id}`} className='btn btn-sm btn-rounded btn-success'>View Property</NavLink></td>

                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </div>
  )
}

export default List