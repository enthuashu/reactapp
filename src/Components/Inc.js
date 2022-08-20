import React, { useEffect, useState } from "react";

const Inc = () => {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log("counter value changed!"); // sideeffect function
  }, [counter]); // sideeffect of what?
  return (
    <div>
      <h1>{counter}</h1>
      {/* <p> High </p>  if >10
      <p> Medium </p> if <10 and >5
      <p> Low </p> if <5 */}
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
