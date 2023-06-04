import React from 'react';
import "./css/Contacts.css"

function ContactSection() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-title">
              <p className="sub-title">Get In Touch</p>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon-box"></div>
                <h3>Address</h3>
                <p>Matice Hrvatske 24, Split, Hrvatska</p>
              </div>
              <div className="contact-item">
                <div className="icon-box"></div>
                <h3>Phone</h3>
                <p>091 345 4275</p>
              </div>
              <div className="contact-item">
                <div className="icon-box"></div>
                <h3>E-mail</h3>
                <p>info@flowershop.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form box">
              <h2 className="form-title">Leave a Message</h2>
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-block btn-theme btn-form">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
