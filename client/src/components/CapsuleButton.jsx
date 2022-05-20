import React from "react";
import Button from "react-bootstrap/Button";

export const CapsuleButtonYellow = (props) => {
  return (
    <>
      <button id="button-capsules-yellow">{props.buttonText}</button>
    </>
  );
};

export const CapsuleButtonGreen = (props) => {
  return (
    <>
      <button onClick={props.onClick} id="button-capsules-green">
        {props.buttonText}
      </button>
    </>
  );
};
