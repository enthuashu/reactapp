import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// DOM defines the logical structure of documents
// and the way a document is accessed and manipulated with the help of javascript.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
