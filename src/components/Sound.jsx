import React from "react";

const Sound = () => {
  const handleButton = () => {
    console.log("button sound");
  };

  return (
    <div>
      <hr></hr>
      hello sound <br></br>
      <button onClick={handleButton}>sound</button>
    </div>
  );
};

export default Sound;
