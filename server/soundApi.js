import { Router } from "express";

export function SoundApi(mongoDb) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const quiz = await mongoDb
      .collection("sound")
      .find({})
      .map(({ _id, title, sound, category, year, image, id }) => ({
        _id,
        title,
        sound,
        category,
        year,
        image,
        id,
      }))
      .toArray();
    res.json(quiz);
  });

  return router;
}
