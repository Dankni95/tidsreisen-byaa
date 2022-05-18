import { Router } from "express";

export function QuizApi(mongoDb) {
  const router = new Router();

    router.get("/", async (req, res) => {
        const quiz = await mongoDb
            .collection("quiz")
            .find({ })
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
