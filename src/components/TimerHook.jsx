// import React, { Fragment, useEffect, useState } from "react";

// const TimerHook = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const s = setInterval(() => {
//       setCounter((c) => c + 1);
//     }, 1000);

//     return () => clearInterval(s);
//   }, [counter]);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Counter: {counter}</h1>
//     </div>
//   );
// };

// export default TimerHook;

import React, { Fragment, useEffect, useState } from "react";

const TimerHook = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      // console.log("Infinite loop bug");
      setTime((time) => time + 1);
      console.log(time+1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [time]);



  return (
    <Fragment>
      <center>
        <h1>counter: {time}</h1>
        {/* <button onClick={handleSound}>sound</button> */}
      </center>
    </Fragment>
  );
};

export default TimerHook;
