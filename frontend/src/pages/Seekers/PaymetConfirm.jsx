import React, { useState } from 'react';
import Slider from "../../component/Slider";
import SeekerSideBar from "../../component/SeekerSidebar";
import { usePDF } from 'react-to-pdf';
import './Invoice.css';

const PaymentConfirm = () => {
  const [showInvoice, setShowInvoice] = useState(true);
  const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });

    let genPdf = ()=>{
        toPDF();
    }


  return (
    <>
      <Slider data={<h1 className="text-white">Payment Confirmation</h1>} />

      <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
        <div className="row">
          {/* Sidebar */}
        
            <SeekerSideBar />
          

          {/* Main Content */}
          <div className="col-md-9 d-flex justify-content-center">
            <div className="card w-100" style={{ maxWidth: "500px" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Payment Confirmation</h5>
                <p className="card-text">Your payment has been successfully processed.</p>
                <div className="alert alert-info">
                  <p>
                    Your Payment was successful. To download your invoice
                    <button onClick={genPdf} className="btn btn-dark ms-2">Click Here</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Section to be Printed */}
        {showInvoice && (
          <div className="invoice mt-5" ref={targetRef}>
            <div className="invoice-box">
              <div className="invoice-head">Payment Receipt</div>
              <h3 className="invoice-logo">Study-Hive</h3>
              <p className="invoice-sub-logo">A Smart Room and Hostel Finder for Students</p>

              <table>
                <tbody>
                  <tr className="top">
                    <td colSpan="2">
                      <table>
                        <tbody>
                          <tr>
                            <td className="title">
                              {/* Company logo placeholder */}
                            </td>
                            <td>
                              Invoice #: 123<br />
                              Created: January 1, 2023<br />
                              Due: February 1, 2023
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr className="information">
                    <td colSpan="2">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              Sparksuite, Inc.<br />
                              12345 Sunny Road<br />
                              Sunnyville, TX 12345
                            </td>
                            <td>
                              Acme Corp.<br />
                              John Doe<br />
                              john@example.com
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr className="heading">
                    <td>Payment Method</td>
                    <td>Check #</td>
                  </tr>

                  <tr className="details">
                    <td>Check</td>
                    <td>1000</td>
                  </tr>

                  <tr className="heading">
                    <td>Item</td>
                    <td>Price</td>
                  </tr>

                  <tr className="item">
                    <td>Website design</td>
                    <td>$300.00</td>
                  </tr>

                  <tr className="item">
                    <td>Hosting (3 months)</td>
                    <td>$75.00</td>
                  </tr>

                  <tr className="item last">
                    <td>Domain name (1 year)</td>
                    <td>$10.00</td>
                  </tr>

                  <tr className="total">
                    <td></td>
                    <td><strong>Total: $385.00</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentConfirm;
