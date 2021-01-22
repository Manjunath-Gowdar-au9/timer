import "./App.css";
import TimerHook from "./components/TimerHook";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Circle from "./components/Circle";

import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { ImHeart } from "react-icons/im";

function App() {
  return (
    <div className="App">
      <TimerHook />
      <br />
      <br />
      <hr
        style={{
          borderTop: "1px solid blue",
          marginLeft: "60px",
          marginRight: "60px",
        }}
      />
      <br />
      <br />
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={[
            ["#FEFE06", 0.1],
            ["#FE9101", 0.1],
            ["#FE0000", 0.1],
            ["#C5007C", 0.1],
            ["#64009F", 0.1],
            ["#0010AB", 0.1],
            ["#0060B1", 0.1],
            ["#00DBDE", 0.1],
            ["#0EAF01", 0.1],
            ["#91C20B", 0.1],
          ]}
          onComplete={() => [true]}>
          {Circle}
        </CountdownCircleTimer>
      </div>
      <br />
      <br />
      <br />
      <IconContext.Provider
        value={{ color: "red", className: "global-class-name" }}>
        
      <p style={{ color: "whitesmoke" }}>
        Dedicated to Nithya with lots of <span/> < FaRegHeart /><ImHeart/>{" "}
      </p>
          
        
      </IconContext.Provider>
    </div>
  );
}

export default App;
