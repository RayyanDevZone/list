import React from "react";
import "./Shopping.scss";
import { Link } from "react-router-dom";
import BackButton from "../../../images/return 1.svg";
const Shopping = () => {
  return (
    <div className="shopping">
      <div className="back">
        <Link to="/" id="backbtn">
          <img src={BackButton} alt="back" />
        </Link>
      
      </div>
      <div className="h">
          <h1>Shopping</h1>
        </div>
    </div>
  );
};

export default Shopping;
