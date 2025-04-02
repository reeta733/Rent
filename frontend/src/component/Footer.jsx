import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul className="list-unstyled links">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li>
                  <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                </li>
              </ul>
            </div>
           
          </div>
        
          <div className="col-lg-4">
            <div className="widget">
              <h3>Sources</h3>
              <ul className="list-unstyled float-start links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Vision</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
              <ul className="list-unstyled float-start links">
                <li><a href="#">Partners</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Creative</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className="col-lg-4">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Our Vision</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>

              <ul className="list-unstyled social">
                <li>
                  <a href="#"><span className="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span className="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span className="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span className="icon-pinterest"></span></a>
                </li>
                <li>
                  <a href="#"><span className="icon-dribbble"></span></a>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
      

        <div className="row mt-5">
          <div className="col-12 text-center">
         

            <p>
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              . All Rights Reserved. &mdash; Designed with love by
              <a href="https://untree.co">Untree.co</a>
         
            </p>
            <div>
              Distributed by
              <a href="https://themewagon.com/" target="_blank">themewagon</a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Footer