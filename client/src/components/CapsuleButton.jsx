import React from "react";

export const CapsuleButtonYellow = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type={props.submit}
        value={props.exists}
        id="button-capsules-yellow"
      >
        {props.buttonText}
      </button>
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
