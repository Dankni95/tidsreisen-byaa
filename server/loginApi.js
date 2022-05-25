import { Router } from "express";

export function LoginApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    let { user } = req.signedCookies;
    let { name } = req.query;

    if (name !== undefined) user = name;

    const userData = await mongoDatabase
      .collection("user")
      .find({ name: user })
      .map(({ name, intro, walk, points, level, finishedCapsules }) => ({
        name,
        intro,
        walk,
        points,
        level,
        finishedCapsules
      }))
      .limit(1)
      .toArray();

    res.json(userData);
  });

  router.post("/", async (req, res) => {
    const { user, force } = req.body;

    if (force === true) {
      res.clearCookie("user");
      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    } else {
      mongoDatabase
        .collection("user")
          //HARDKODET POENG OG LEVEL FOR Å TESTE
        .insertOne({ name: user.toLowerCase(), intro: true, walk: false, points: 50, level: 2, finishedCapsules: [] });

      res.clearCookie();
      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    }
  });

    router.put("/updateuser", (req, res) => {
        const { points, user } = req.body;
        mongoDatabase.collection("user").updateOne(
            { name: user.name },
            {
                $inc: {
                    points: points
                },
            }
        );
        res.sendStatus(200);
    });

  return router;
}
