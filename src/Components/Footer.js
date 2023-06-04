import React from 'react';
import "./css/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <h3 className="footer-logo"><span>flower</span>shop</h3>
                <ul>
                  <li><a href="">about</a></li>
                  <li><a href="">what we offer</a></li>
                  <li><a href="">become a florist</a></li>
                  <li><a href="">best sellers</a></li>
                  <li><a href="">blog</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <h3>order</h3>
                <ul>
                  <li><a href="">get the app</a></li>
                  <li><a href="">testimonials</a></li>
                  <li><a href="">pricing</a></li>
                  <li><a href="">faq</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <h3>more</h3>
                <ul>
                  <li><a href="">training</a></li>
                  <li><a href="">details</a></li>
                  <li><a href="">become a dev</a></li>
                  <li><a href="">help and support</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <h3>get in touch</h3>
                <ul>
                  <li><a href=""><i className="fab fa-facebook social-icon"></i> facebook</a></li>
                  <li><a href=""><i className="fab fa-twitter social-icon"></i> twitter</a></li>
                  <li><a href=""><i className="fab fa-instagram social-icon"></i> instagram</a></li>
                  <li><a href=""><i className="fab fa-youtube social-icon"></i> youtube</a></li>
                  <li><a href=""><i className="fab fa-linkedin social-icon"></i> linkedin</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="m-0 py-4 text-center">© 2023 Antonia Buzov</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
