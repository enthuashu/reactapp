import React from "react";
import Components from "./Subcompoents/component1";

const Practicetest = ({ title, settitle }) => {
  return (
    <div>
      <Components title={title} settitle={settitle} />
    </div>
  );
};

export default Practicetest;
