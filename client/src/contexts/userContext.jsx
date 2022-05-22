import React, { createContext } from "react";
import { fetchJSON_client } from "../helpers/http.jsx";

export const UserContext = createContext({
  async getUser() {
    return await fetchJSON_client("/api/login");
  },
});
