import {Router} from "express";

export function QuizApi(mongoDb) {

    const router = new Router();

    router.get("/", async (req, res) => {
        const quiz = await mongoDb
            .collection("quiz")
            .find({ })
            .map(({ _id, title, category, question_, answers, correct_answer }) => ({
                _id,
                title,
                category,
                question_,
                answers,
                correct_answer
            }))
            .toArray();
        res.json(quiz);
    });

    return router;
}
