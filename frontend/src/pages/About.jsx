import React from 'react';
import Slider from '../component/Slider';

const About = () => {
  return (
    <>
     <Slider data={<h1 className="text-white">About</h1>} />
    <div className="container py-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        {/* About Section */}
        <div className="col-md-6">
          <h2 className="fw-bold">Who We Are</h2>
          <p>
            Welcome to Rent, your trusted platform for finding and renting properties. 
            We are dedicated to connecting property owners with seekers, making the process 
            seamless and efficient. Our mission is to simplify property rentals and provide 
            a user-friendly experience for everyone.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <img

            src="/assets/images/img_8.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="row mt-5">
        {/* Our Mission */}
        <div className="col-md-6">
          <h2 className="fw-bold">Our Mission</h2>
          <p>
            Our mission is to revolutionize the rental market by providing a platform that 
            is easy to use, transparent, and reliable. We aim to empower property owners 
            and seekers with the tools they need to make informed decisions.
          </p>
        </div>

        {/* Our Vision */}
        <div className="col-md-6">
          <h2 className="fw-bold">Our Vision</h2>
          <p>
            We envision a world where finding a rental property is as simple as a few clicks. 
            By leveraging technology and innovation, we strive to create a community where 
            trust and convenience are at the forefront of every interaction.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        {/* Contact Information */}
        <div className="col-md-12 text-center">
          <h2 className="fw-bold">Get in Touch</h2>
          <p>
            Have questions or need assistance? Feel free to reach out to us at:
          </p>
          <p>
            <strong>Email:</strong> support@rent.com <br />
            <strong>Phone:</strong> +1 234 567 890
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;