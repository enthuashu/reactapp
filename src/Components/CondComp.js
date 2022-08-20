import React, { useState, useEffect } from "react";

const CondComp = () => {
  //
  //
  //
  //

  const [isComplete, setisComplete] = useState(false);
  useEffect(() => {
    // Api calling
    setisComplete(true);
  }, []);

  return (
    <div>
      {isComplete === true ? (
        <>
          <h1>Full Stack Developer @VCBay | MERN Stack Developer | DSA</h1>
          <p>Location: Gorakhur</p>
        </>
      ) : (
        <>
          <h1>Your Profile is incomplete</h1>
          <p>Complete Profile Information</p>
        </>
      )}
      <button onClick={() => setisComplete(!isComplete)}>Edit Profile</button>
    </div>
  );
};

export default CondComp;
