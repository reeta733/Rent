import React from 'react';

const Details = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Property Details */}
        <div className="col-md-8">
          <div className='card m-1 p-3'>
            <h3>Title</h3>
            <h5>&#8377; 15,000.00</h5>
            <p><i className="fa fa-map-marker" aria-hidden="true"></i> Nipania, Indore</p>

            <div className='row'>
              <div className='col-md-5'>
                <img 
                  src='assets/images/img_7.jpg' 
                  className='img-fluid' 
                  alt='Property' 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
              </div>
              <div className='col-md-7'>
                <div className='px-2 py-3 bg-dark text-light'>
                  <p className='m-0 p-0'>
                    <i className="fa fa-bed" aria-hidden="true"></i> Beds |
                    <i className="fa fa-bath" aria-hidden="true"></i> Washroom |
                    <i className="fa fa-caret-square-o-up" aria-hidden="true"></i> Furniture |
                    <i className="fa fa-wifi" aria-hidden="true"></i> Wifi
                  </p>
                </div>

                {/* Property Features */}
                <div className='row mt-4'>
                  <div className="col-md-4">
                    <p className='m-0 p-0'>Build-Up Area</p>
                    <p className='m-0 p-0 fw-bold'>1240 sqft</p>
                  </div>
                  <div className="col-md-4">
                    <p className='m-0 p-0'>Floors</p>
                    <p className='m-0 p-0 fw-bold'>3</p>
                  </div>
                  <div className="col-md-4">
                    <p className='m-0 p-0'>Facing</p>
                    <p className='m-0 p-0 fw-bold'>East</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Contact Section */}
        <div className="col-md-4">
          <div className='card m-1 p-3'>
            <h3>Owner Contact</h3>
            <p><b>Owner Name:</b> Rahul Sharma</p>
            <p><b>Phone:</b> +91-98765 43210</p>
            <p><b>Email:</b> rahulsharma@email.com</p>
            <button className='btn btn-primary w-100'>Send Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
