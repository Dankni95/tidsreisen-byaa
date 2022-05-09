import React from "react";
import Button from "react-bootstrap/Button";
import Maps from "../Maps"
const StartPage = () => {
  return (
    <div>
      <h1>Start page</h1>
      <Maps></Maps>
      <Button variant="primary">Testing bootstrap</Button>
    </div>
  );
};

export default StartPage;
