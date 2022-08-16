import React, { useState } from "react";

const Home = () => {
  const [name, setname] = useState("Ashutosh");
  //  const [name,setname] = useState("Ashutosh")
  // first argument represents Value, second argument is used to update the value

  let profileviews;
  let impressions;
  let position;

  // api calling
  // for
  // getting
  // logged in
  // user details  e.g. current api

  position = " Developer";
  profileviews = 0;
  impressions = 0;

  const handleclick = () => {
    setname("Satyam");
  };
  return (
    <>
      <h1>{name} </h1>
      <p>{position}</p>
      <p>Who viewed your profile : {profileviews} </p>
      <p>Imprssions on your post : {impressions} </p>
      <button
        onClick={() => {
          handleclick();
        }}
        className="btn btn-primary"
      >
        Change Name
      </button>
    </>
  );
};

export default Home;
