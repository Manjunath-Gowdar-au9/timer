import "./App.css";
import TimerHook from "./components/TimerHook";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="App">
    
      <TimerHook />
      <br/>
      <br/>
      <hr style={{borderTop:"1px solid blue", marginLeft:"60px",marginRight:"60px"}} />
      <br />
      <br />
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={[

            ["#00DBDE", 0.33],
            ["#4158D0", 0.33],
            ["#FC00FF", 0.33],
          ]}
          onComplete={() => [true]}>
          {Circle}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default App;
