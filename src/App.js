import "./App.css";
import Sound from "./components/Sound";
import TimerHook from "./components/TimerHook";


function App() {
  return (
    <div className="App">
      <TimerHook />
      <Sound/>
      {/* <audio id="snare" src="snare-2.mp3" controls></audio> */}
    </div>
  );
}

export default App;
