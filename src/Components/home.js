import React from "react";

const home = () => {
  let name;
  let profileviews;
  let impressions;
  let position;

  // api calling
  // for
  // getting
  // logged in
  // user details  e.g. current api
  name = "Satyam Mishra";
  position = "App Developer";
  profileviews = 0;
  impressions = 0;

  const handleclick = () => {
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
    console.log("hello from the jsx");
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
        View More
      </button>
    </>
  );
};

export default home;
