import React, { useEffect, useState } from "react";

const Inc = () => {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log("counter value changed!"); // sideeffect function
  }, [counter]); // sideeffect of what?
  return (
    <div>
      <h1>{counter}</h1>
      <p>
        {counter >= 10
          ? "High"
          : counter < 10 && counter > 5
          ? "Medium"
          : "Low"}
      </p>

      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => setcounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Inc;
