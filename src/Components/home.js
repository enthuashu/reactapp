import React from "react";

const home = () => {
  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>
        Hello from the Inline CSS
      </h1>
      <h1 className="test">Hello from the file css</h1>
    </>
  );
};

export default home;
