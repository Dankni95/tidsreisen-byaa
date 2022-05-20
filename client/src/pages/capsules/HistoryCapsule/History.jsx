import React, { useContext } from "react";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { Loading } from "../../../components/Loading.jsx";
import imageSawEffect from "./sag-effekt.png";
import iben from "./Iben.png";
import { StoryCard } from "./StoryCard.jsx";

export function History() {
  const { listHistory } = useContext(DatabaseContext);
  const { data, error, loading, reload } = useLoading(
    async () => await listHistory()
  );

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
      <img
        style={{ marginTop: "7rem", zIndex: "1", position: "absolute" }}
        src={iben}
        alt="bilde av figur"
      />
      {loading && <Loading />}
      {error && <div>{error.toString()}</div>}
      {data && (
        // dette er parenten til hele siden
        <div className={"p-4"}>
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
