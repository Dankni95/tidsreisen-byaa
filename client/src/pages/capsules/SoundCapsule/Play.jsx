import React from "react";
import { useLoading } from "../../../helpers/useLoading";
import { fetchJSON } from "../../../helpers/http";
import { BiSleepy } from "react-icons/bi";
const Play = () => {
  const { data, error, loading, reload } = useLoading(() =>
    fetchJSON("/api/sound")
  );
  if (loading) {
    return <h1>Loading..</h1>;
  }

  const test = () => {
    const beeb = new Audio("data:audio:ogg;base64," + data[0].sound);
    beeb.play();
  };

  test();

  console.log(data[0].sound);
  return (
    <div>
      <button>Test</button>
    </div>
  );
};

export default Play;
