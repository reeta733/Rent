import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewProperty = () => {
    let [allProp, setAllProp] = useState([])
    let params = useParams()
    let id = params.id;



    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/property/admin/${id}`)
            .then(response => {
                console.log(response.data);
                setAllProp(response.data)

            });
    }, []);

    return (
        <div className="container">
            <div className="page-inner">

                <div className="row">
                    <div className="col-md-12">
                        <h1>View Property</h1>
                    </div>
                    <div className="col-md-12">
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Title</th>
                                    <th>Address</th>
                                    <th>Property Type</th>
                                    <th>Rent</th>
                                    <th>Deposit</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProp.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{item.address}</td>
                                                <td>{item.property_type}</td>
                                                <td>{item.rent}</td>
                                                <td>{item.deposit}</td>
                                               

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

export default ViewProperty