import React, { useContext, useEffect } from "react";
import { MyFindingsCard } from "../components/MyFindingsCard.jsx";
import { Loading } from "../components/Loading.jsx";
import { ErrorModal } from "../components/ErrorModal.jsx";
import { User } from "../application.jsx";

export function MyFindings({ loading, error }) {
  /*const { user, setUser } = useContext(User);
  const { name, intro, walk, points, finishedCapsules } = user;

  const setUserFunc = () => {
    setUser({
      name,
      intro,
      walk,
      points,
      finishedCapsules,
    });
  };
  useEffect(() => {
    return async () => {
      await setUserFunc;
    };
  }, [user]);

  console.log(user);*/

  // loading and error from user fetch
  return (
    <div className={"container"} id={"container"}>
      {loading && <Loading />}
      {error && <ErrorModal error={error} />}
      <MyFindingsCard />
    </div>
  );
}
