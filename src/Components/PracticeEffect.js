import React, { useState, useEffect } from "react";

const PracticeEffect = () => {
  const [username, setusername] = useState("");

  useEffect(() => {
    alert("hey");
  }, []);

  return (
    <div>
      <h1> Hello {username}</h1>
    </div>
  );
};

export default PracticeEffect;
