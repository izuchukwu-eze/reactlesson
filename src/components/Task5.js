import React from "react";
import "./Task5.css";

const Task5 = () => {
  const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  return (
    <div className="">
      <ul>
        {arr.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task5;
