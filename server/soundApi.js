import { Router } from "express";

export function SoundApi(mongoDb) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const quiz = await mongoDb
      .collection("sound")
      .find({})
      .map(({ _id, title, sound }) => ({
        _id,
        title,
        sound,
      }))
      .toArray();
    res.json(quiz);
  });

  return router;
}
