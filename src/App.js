import React, { useState } from "react";
import Navbar from "./Components/navbar"; // this returns navbar html code
// import Center from "./Components/center"; // this returns center html code
import Footer from "./Components/footer"; // this returns footer html code
import "./App.css";
import Practicetest from "./Components/Practicetest";

const App = () => {
  const [title, settitle] = useState(" Theory");
  return (
    <>
      {/* <Navbar /> */}
      <Practicetest title={title} />
      {/* <Footer /> */}
    </>
  );
};

export default App; // frontend
