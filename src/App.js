import React, { useState } from "react";
import Navbar from "./Components/navbar"; // this returns navbar html code
// import Center from "./Components/center"; // this returns center html code
import Footer from "./Components/footer"; // this returns footer html code
import "./App.css";
import Practicetest from "./Components/Practicetest";
import PracticeEffect from "./Components/PracticeEffect";
import Inc from "./Components/Inc";
import CondComp from "./Components/CondComp";

const App = () => {
  const [title, settitle] = useState("Parent");
  return (
    <>
      <CondComp />
    </>
  );
};

export default App; // frontend
