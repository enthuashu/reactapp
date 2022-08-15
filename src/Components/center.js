import React from "react";

const center = () => {
  console.log("hello from the center component");
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="test"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>
    </>
  );
};

export default center;
