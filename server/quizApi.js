import { Router } from "express";

export function QuizApi(mongoDb) {
  const router = new Router();

    router.get("/", async (req, res) => {
        const { id } = req.query;
        const correctId = id[0].toUpperCase() + id.slice(1).toLowerCase();
        const quiz = await mongoDb
            .collection("quiz")
            .find({ category: correctId})
            .map(({ _id, category, question_, answers }) => ({
                _id,
                category,
                question_,
                answers
            }))
            .toArray();
        res.json(quiz);
    });

  return router;
}
