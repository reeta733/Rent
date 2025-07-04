import React, { useEffect, useState } from 'react';
import OwnerSideBar from '../../component/OwnerSideBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Messages = () => {
  const [allMsg, setAllMsg] = useState([]);
  const { oid, pid } = useParams();
  console.log("Owner ID:", oid);
  console.log("Property ID:", pid);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/contact`)
      .then((response) => {
        const filteredMessages = response.data.filter(msg =>
          msg?.oid?._id === oid && msg?.pid?._id === pid
        );
        setAllMsg(filteredMessages);
      })
      .catch((err) => {
        console.error("Failed to fetch messages:", err);
      });
  }, [oid, pid]);


  return (
    <div className="container my-4" style={{ minHeight: "750px", paddingTop: "120px" }}>
      <div className="row">
        <div className="col-md-3">
          <OwnerSideBar />
        </div>
        <div className="col-md-8 offset-md-1">
          <h4>My Messages</h4>
          <table className="table table-bordered table-hover table-secondary">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Property Details</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(allMsg) && allMsg.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">No messages found.</td>
                </tr>
              ) : (
                Array.isArray(allMsg) && allMsg.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{index + 1}</td>
                    <td>{item?.oid?.name || ''}</td>
                    <td>{item?.email || ''}</td>
                    <td>{item?.message || ''}</td>
                    <td>{item?.oid?.details || ''}</td>
                    <td>{item?.pid?.address || ''}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
