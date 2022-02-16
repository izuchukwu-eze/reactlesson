import React from "react";
import iphonePicture from "../images/logo.png";
import "./Task7.css";

const Task7 = () => {
  const getText = () => <p>text</p>;

  return (
    <div className="">
      {getText()}
      <img src={iphonePicture} />
    </div>
  );
};

export default Task7;
