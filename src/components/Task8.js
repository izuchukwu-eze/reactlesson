import React from "react";
import iphonePicture from "../images/logo.png";
import asusLaptopPicture from "../images/laptop.webp";
import yellowappleiphone from "../images/yellow apple-iphone-11.webp";
import promaxphone from "../images/pro-maxphone.webp";

import "./Task8.css";

const products = [
  {
    id: 1,
    image: iphonePicture,
    title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
    discount: 699.99,
    price: 629.99,
    deliveryDuration: "2-day Delivery",
  },
  {
    id: 2,
    image: yellowappleiphone,
    title: "Apple iPhone 11 64GB Yellow Fully Unlocked",
    discount: 440.99,
    price: 320.99,
    deliveryDuration: "2-day Delivery",
  },
  {
    id: 3,
    image: promaxphone,
    title: "Cubitt Smart Watch CT2S Waterproof Fitness Tracker",
    discount: 510.0,
    price: 469.99,
    deliveryDuration: "1-week Delivery",
  },
  {
    id: 4,
    image: asusLaptopPicture,
    title: "ASUS VivoBook 15 Thin and Light Laptop 15.6” FHD Display",
    discount: 699.99,
    price: 629.99,
    deliveryDuration: "1-day Delivery",
  },
];

const Task8 = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <img src={product.image} alt={product.title} />
          <div className="product-description">
            <h3>
              <a href={`/product/${product.id}`}>{product.title}</a>
            </h3>

            <p className="product-discount">${product.discount}</p>
            <h2 className="product-price">${product.price}</h2>
            <p className="delivery-duration">{product.deliveryDuration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task8;
