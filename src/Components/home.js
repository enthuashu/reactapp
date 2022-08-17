import React, { useState } from "react";

const Home = () => {
  const [counter, setcounter] = useState(0);
  const starttimer = () => {
    let i = 1;
    setInterval(() => {
      setcounter(i);
      i++;
    }, 1000);
  };

  const stoptimer = () => {};
  const resettimer = () => {};
  return (
    <>
      <h1 style={{ color: "grey" }}>
        Timer : <span style={{ color: "blue" }}>{counter} seconds</span>
      </h1>

      <div className="row">
        <div className="col">
          <button
            style={{ backgroundColor: "green", color: "white" }}
            className="btn-primary"
            onClick={() => starttimer()}
          >
            Start Timer
          </button>
        </div>
        <div className="col">
          <button
            style={{ backgroundColor: "red", color: "white" }}
            className="btn-primary"
            onClick={() => stoptimer()}
          >
            Stop timer
          </button>
        </div>
        <div className="col">
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            className="btn-primary"
            onClick={() => resettimer()}
          >
            Reset timer
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
