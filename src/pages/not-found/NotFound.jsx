import React from "react";
import {  useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <button onClick={()=> navigate("/")}>go home</button>
      <button onClick={()=> navigate(-1)}>go back</button>
    </div>
  );
};

export default NotFound;
