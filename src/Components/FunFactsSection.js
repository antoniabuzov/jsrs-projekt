import React from 'react';
import "../Components/css/FunFacts.css"

function FunFactsSection() {
  return (
    <section className="fun-facts-section">
      <div className="container">
        <div className="box py-2">
          <div className="row text-center">
            <div className="col-md-6 col-lg-3">
              <div className="fun-facts-item">
                <h2 className="style-1">800k</h2>
                <p>people that ordered</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="fun-facts-item">
                <h2 className="style-2">500+</h2>
                <p>flowers to choose from</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="fun-facts-item">
                <h2 className="style-3">30+</h2>
                <p>countries</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="fun-facts-item">
                <h2 className="style-4">60+</h2>
                <p>skilled florists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunFactsSection;
