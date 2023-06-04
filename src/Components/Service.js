import React from 'react';
import "./css/Services.css"

function Service(props) {
  return (
    <div className="single-service">
      <div className="part-1">
        <h3 className="title">{props.title}</h3>
      </div>
      <div className="part-2">
        <p className="description">{props.description}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

export default Service; 