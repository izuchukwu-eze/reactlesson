import React from "react";
import iphonePicture from "../images/logo.png";
// import "./Task9.css";

const Task9 = () => {
  return (
    <div className="my-products">
      <img src={iphonePicture} />
      <div className="my-product-description">
        <h3>
          <a href="#">Cubitt Smart Watch CT2S Waterproof Fitness Tracker</a>
        </h3>

        <p className="product-deduction">$629.99</p>
        <h2>$629.99</h2>
        <footer>2-day Delivery</footer>
      </div>
    </div>
  );
};

export default Task9;
