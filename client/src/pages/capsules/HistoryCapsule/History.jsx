import React, { useContext, useState } from "react";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { Loading } from "../../../components/Loading.jsx";
import imageSawEffect from "./sag-effekt.png";
import { StoryCard } from "./StoryCard.jsx";
import { NotLoggedIn } from "../../../components/NotLoggedIn.jsx";

export function History({ username }) {
  const [error, setEror] = useState();
  const { listHistory } = useContext(DatabaseContext);
  const {
    data,
    error: errorHistory,
    loading,
    reload,
  } = useLoading(async () => await listHistory());

  if (loading) {
    return <Loading />;
  }

  if (errorHistory) {
    setEror(errorHistory);
    return <div>{error.toString()}</div>;
  }

  if (username !== [] || username === null || username === undefined) {
    return <NotLoggedIn />;
  }

  return (
    <div
      style={{
        backgroundColor: "#F2F1E8",
        height: "100vh",
      }}
    >
      <img
        style={{ right: "0%", position: "absolute" }}
        src={imageSawEffect}
        alt="bilde av vann sag effekt bakgrunn"
      />
      {data && (
        // dette er parenten til hele siden
        <div>
          {data?.map((historyCapsule, index) => {
            return (
              <div key={index}>
                <StoryCard
                  loading={loading}
                  error={error}
                  historyCapsule={historyCapsule}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
