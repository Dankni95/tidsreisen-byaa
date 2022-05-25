import { Router } from "express";

export function HistoryApi(mongoDb) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const history = await mongoDb
      .collection("history")
      .find({})
      .map(({ _id, name, category, story }) => ({
        _id,
        name,
        category,
        story,
      }))
      .toArray();
    res.json(history);
  });

  return router;
}
