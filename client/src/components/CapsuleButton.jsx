import React from "react";

export const CapsuleButton = (props) => {
  return (
    <>
      <button className={"text-color-capsule-button"}>
        {props.buttonText}
      </button>
    </>
  );
};
