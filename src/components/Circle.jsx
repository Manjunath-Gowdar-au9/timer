import React from "react";
import "./Styles.css";



const Circle = ({ remainingTime }) => {
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  export default Circle