import React, { createContext } from "react";
import { fetchJSON_client, fetchJSON } from "../helpers/http.jsx";

export const DatabaseContext = createContext({
  async listHistory() {
    return await fetchJSON_client("/api/history");
  },
  async listQuiz(query) {
    return await fetchJSON("/api/quiz?" + new URLSearchParams(query))
  }
});
