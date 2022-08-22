import React from "react";

const Onlineusers = () => {
  const testarray = [
    "Ashu",
    "Aditya",
    "Ashish",
    "Abhay",
    "Shivam",
    "Shivang",
    "Satyam",
  ];

  return (
    <div>
      {testarray.map((candidate) => {
        return (
          <>
            <img height="20px" width="20px" src="https://picsum.photos/200" />
            <h1 style={{ color: "red" }}> {candidate} </h1>
          </>
        );
      })}
    </div>
  );
};

export default Onlineusers;
