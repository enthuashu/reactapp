import React from "react";

const Components = ({ title, settitle }) => {
  return (
    <div>
      <h1> Sub subcomponent</h1>
      <h1> The title is {title}</h1>
      <button onClick={() => settitle("Child component 2")}>Change Name</button>
    </div>
  );
};

export default Components;
