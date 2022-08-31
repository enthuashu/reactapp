import React, { useState, useEffect } from "react";
import axios from "axios";

const Onlineusers = () => {
  const [users, setusers] = useState([]);

  const fetchusers = async () => {
    const response = await axios.get("/allusers"); // called api
    console.log(response);
  };

  useEffect(() => {
    fetchusers();
  }, []);

  return (
    <div>
      <h1>Ashu</h1>
      <h1>Satyam</h1>
      <h1>AbhaSatyam</h1>
      <h1>Arpita</h1>
      <h1>Aditya</h1>
    </div>
  );
};

export default Onlineusers;
