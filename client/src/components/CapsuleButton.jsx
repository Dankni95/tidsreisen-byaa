import React from "react";
import Button from "react-bootstrap/Button";

export const CapsuleButtonYellow = (props) => {
  return (
    <>
      <Button id="button-capsules-yellow">{props.buttonText}</Button>
    </>
  );
};

export const CapsuleButtonGreen = (props) => {
  return (
    <>
      <Button id="button-capsules-green">{props.buttonText}</Button>
    </>
  );
};
