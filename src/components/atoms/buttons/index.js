import React from "react";
import "./button.scss";

const Buttton = ({ title, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {title}
    </button>
  );
};

export default Buttton;
