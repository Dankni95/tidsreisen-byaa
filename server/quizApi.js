import { Router } from "express";

export function QuizApi(mongoDb) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const quiz = await mongoDb

      .collection("quiz")
      .find({})
      .map(({ _id, title, category, questions }) => ({
        _id,
        title,
        category,
        questions,
      }))
      .toArray();
    res.json(quiz);
  });

  return router;
}
