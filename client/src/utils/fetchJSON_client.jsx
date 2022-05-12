import React from "react";

export async function fetchJSON_client(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${res.status}: ${res.statusText}`);
  }
  return await res.json();
}
