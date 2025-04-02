import React, {useEffect, useState} from 'react'
import axios from 'axios'

const List = () => {
  let [allOwner, setAllOwner] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/owner")
    .then(response=>{
      // console.log(response.data);
      setAllOwner(response.data);
    })
  },[])


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
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allOwner.map((item, index)=>{
                        return(
                          <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
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