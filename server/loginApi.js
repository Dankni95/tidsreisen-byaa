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
      .find({ name: user })
      .map(({ name, intro, walk }) => ({
        name,
        intro,
        walk,
      }))
      .limit(1)
      .toArray();

    console.log("userdata from api: " + userData.toString());
    res.json(userData);
  });

  router.post("/", async (req, res) => {
    const { user, force } = req.body;
    console.log(force);
    if (force === true) {
      res.clearCookie("user");
      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    } else {
      mongoDatabase
        .collection("user")
        .insertOne({ name: user.toLowerCase(), intro: true, walk: false });

      res.clearCookie();
      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    }
  });

  return router;
}
