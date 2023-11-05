import React from "react";
import "./Data.css";

const Data = (props) => {
  return (
    <div className="data">
      <div className="iconandtemp">
        <div className="icon">
          <img src={props.data.iconURL} alt="" />
        </div>
        <div className="temp">
          <h1>{props.data.temperature_C}</h1>
          <span>C°</span>
        </div>
      </div>
      <div className="second">
        <div></div>
        <div className="city-name">{props.data.place_name}</div>
        <div className="country">{props.data.country_name}</div>
        <div className="desc">{props.data.description}</div>
      </div>
    </div>
  );
};

export default Data;
