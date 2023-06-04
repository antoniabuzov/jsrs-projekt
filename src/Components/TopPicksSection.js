import React from 'react';
import Flowers1 from "../Components/img/flowers-1.jpg"
import Flowers2 from "../Components/img/flowers-2.jpg"
import Flowers3 from "../Components/img/flowers-3.jpg"
import Flowers4 from "../Components/img/flowers-4.jpg"
import "./css/Flowers.css"

function TopPicksSection() {
  return (
    <section className="top-picks-section section-padding" id="top-picks">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title text-center">
              <h2 className="title">top picks</h2>
              <p className="sub-title">Find the right flowers for you</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="flowers-item">
              <a href="#" className="link">
                <div className="flowers-item-inner">
                  <div className="img-box">
                    <img src={Flowers1} alt="flower-img" />
                  </div>
                  <h3 className="title">Lily One Love</h3>
                  <div className="rating">
                    <span className="average-rating">(4.9)</span>
                    <span className="average-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="reviews">(230)</span>
                  </div>
                  <div className="price">12€</div>
                </div>
              </a>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-3">
            <div className="flowers-item">
              <a href="#" className="link">
                <div className="flowers-item-inner">
                  <div className="img-box">
                    <img src={Flowers2} alt="flower-img" />
                  </div>
                  <h3 className="title">Lily One Love</h3>
                  <div className="rating">
                    <span className="average-rating">(4.9)</span>
                    <span className="average-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="reviews">(230)</span>
                  </div>
                  <div className="price">12€</div>
                </div>
              </a>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-3">
            <div className="flowers-item">
              <a href="#" className="link">
                <div className="flowers-item-inner">
                  <div className="img-box">
                    <img src={Flowers3} alt="flower-img" />
                  </div>
                  <h3 className="title">Lily One Love</h3>
                  <div className="rating">
                    <span className="average-rating">(4.9)</span>
                    <span className="average-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="reviews">(230)</span>
                  </div>
                  <div className="price">12€</div>
                </div>
              </a>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-3">
            <div className="flowers-item">
              <a href="#" className="link">
                <div className="flowers-item-inner">
                  <div className="img-box">
                    <img src={Flowers4} alt="flower-img" />
                  </div>
                  <h3 className="title">Lily One Love</h3>
                  <div className="rating">
                    <span className="average-rating">(4.9)</span>
                    <span className="average-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="reviews">(230)</span>
                  </div>
                  <div className="price">12€</div>
                </div>
              </a>
            </div>
          </div>

          
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <a href="#" className="btn btn-theme">view all flowers</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopPicksSection;
