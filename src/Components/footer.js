import React from "react";

// html have two types of tags,
// 1.paired tags which are enclosed e.g. <h1>hey ashu</h1>, <div></div>,<p></p> etc
// 2.single tags which don't need enclosing e.g. <img src="photo"> <input type="text" required=true >, <a href="heh" >
//
//
const footer = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
};

export default footer;
