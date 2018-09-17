import React, { Component } from "react";
import { view } from "react-easy-state";
import clock from "./clock";

export class StopWatch extends Component {
  render() {
    console.log("store:::",clock)
    const { time, toggle, reset, isTicking } = clock;
    const label = isTicking ? "Stop" : "Start";
    console.log("time", time);
    return (
      <div>
        <div>
          {time.seconds}
          <small>{time.fraction}</small>
        </div>
        <button onClick={toggle}>{label}</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

// function StopWatch () {
//   const { time, toggle, reset, isTicking } = clock
//   const label = isTicking ? 'Stop' : 'Start'

//   return (
//     <div>
//       <div>{time.seconds}<small>{time.fraction}</small></div>
//       <button onClick={toggle}>{label}</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

export default view(StopWatch);
