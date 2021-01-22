

import React, { Fragment, useEffect, useState } from "react";

const TimerHook = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0];

    const intervalID = setInterval(() => {
      setTime((time) => time + 1);
      console.log(time + 1);
      audioEl.play();
    }, 60000);
    return () => clearInterval(intervalID);
  }, [time]);

  return (
    <Fragment>
      <center>
        <h1 style={{color:"#D0EFF5"}}>{time} : Minutes has Finished </h1>
        <audio controls className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
        <p style={{color:'white'}}>click on the play button</p>
      </center>
    </Fragment>
  );
};

export default TimerHook;
