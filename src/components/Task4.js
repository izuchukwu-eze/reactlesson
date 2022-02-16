import React from "react";
import "./Task4.css";

const BlackStartingRow = () => {
  return (
    <div className="row">
      <span className="box black" />
      <span className="box white" />
      <span className="box black" />
      <span className="box white" />
      <span className="box black" />
      <span className="box white" />
    </div>
  );
};
const WhiteStartingRow = () => {
  return (
    <div className="row">
      <span className="box white" />
      <span className="box black" />
      <span className="box white" />
      <span className="box black" />
      <span className="box white" />
      <span className="box black" />
    </div>
  );
};

function Task4() {
  const row = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container">
      {row.map((rowItem, index) => {
        // if (index % 2 === 0) {
        //   return <BlackStartingRow key={rowItem} />;
        // }
        // return <WhiteStartingRow key={rowItem} />;
        return index % 2 === 0 ? (
          <BlackStartingRow key={rowItem} />
        ) : (
          <WhiteStartingRow key={rowItem} />
        );
      })}
    </div>
  );
}

export default Task4;
