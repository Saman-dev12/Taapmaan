import React from "react";

const Error = (props) => {
  return (
    <div className="error">
      <h1>{props.message}</h1>
    </div>
  );
};

export default Error;
