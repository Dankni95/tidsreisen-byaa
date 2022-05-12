import React from "react";

export async function deleteJSON(url, object) {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(object),
  });
  if (!res.ok) {
    throw new Error(`Failed to delete ${res.status}: ${res.statusText}`);
  }
}
