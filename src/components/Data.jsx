import React from "react";
import "./Data.css";

const Data = (props) => {
  return (
    <div className="data">
      <div className="icon">
        <img src={props.data.iconURL} alt="" />
      </div>
      <div className="temp">
        <h1>{props.data.temperature_C}</h1>
        <span>C°</span>
      </div>
    </div>
  );
};

export default Data;
