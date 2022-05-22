import { Router } from "express";

export function LoginApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    let { user } = req.signedCookies;
    let { name } = req.query;

    if (name !== undefined) user = name;

    console.log("this " + user);

    const userData = await mongoDatabase
      .collection("user")
      .find({ name: user.toLowerCase() })
      .map(({ name, intro, walk }) => ({
        name,
        intro,
        walk,
      }))
      .limit(1)
      .toArray();
    res.json(userData);
  });

  router.post("/", async (req, res) => {
    const { user, force } = req.body;

    if (force === true) {
      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    } else {
      mongoDatabase
        .collection("user")
        .insertOne({ name: user.toLowerCase(), intro: true, walk: false });

      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    }
  });

  return router;
}
