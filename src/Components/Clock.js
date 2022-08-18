import React, { useState } from "react";

const Practice = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  const [day, setday] = useState(new Date().toLocaleDateString());

  const updatetime = () => {
    settime(new Date().toLocaleTimeString());
  };

  setInterval(() => {
    updatetime();
  }, 1000);
  return (
    <div>
      <h1>
        Current Time is <span style={{ color: "red" }}> {time} </span>
      </h1>
      <h1>
        Current Date is <span style={{ color: "red" }}>{day} </span>
      </h1>
    </div>
  );
};

export default Practice;
