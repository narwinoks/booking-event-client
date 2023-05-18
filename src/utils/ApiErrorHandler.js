import React from "react";

const ApiErrorHandler = ({ errors }) => {
  return (
    <div>
      {Object.keys(errors).map((key) => (
        <p key={key}>{errors[key]}</p>
      ))}
    </div>
  );
};

export default ApiErrorHandler;
