import React from "react";
import { MyFindingsCard } from "../components/MyFindingsCard.jsx";

export function MyFindings({ user }) {
  return (
    <div id={"container"} className={"container"}>
      <MyFindingsCard user={user} />
    </div>
  );
}
