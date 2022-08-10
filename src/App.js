import React from "react";
import Navbar from "./Components/navbar"; // this returns navbar html code
import Center from "./Components/center"; // this returns center html code
import Footer from "./Components/footer"; // this returns footer html code

const App = () => {
  return (
    <>
      <h1>Hello from the Parent Component</h1>
      <Navbar />
      <Center />
      <Footer />
    </>
  );
};

export default App; // frontend
