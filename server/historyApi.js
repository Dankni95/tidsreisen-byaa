import {Router} from "express";

export function HistoryApi(mongoDb) {

    const router = new Router();

    router.get("/", async (req, res) => {
        const quiz = await mongoDb
            .collection("history")
            .find({ })
            .map(({ _id, category, story }) => ({
                _id,
                category,
                story
            }))
            .toArray();
        res.json(quiz);
    });

    return router;
}