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
      .map(({ name, intro, walk, points, finishedCapsules }) => ({
        name,
        intro,
        walk,
        points,
        finishedCapsules,
      }))
      .limit(1)
      .toArray();

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
      mongoDatabase.collection("user").insertOne({
        /* FIXME removed 'name: user.toLowerCase()' because it was not unique and both
         *  bruno and Bruno were stored in database as bruno and therefor both got the same
         *  capsule post i.e., until we fix so name field is unique we can store both
         *  bruno and Bruno and if logged in as Bruno only Bruno will receive the correct post */
        name: user,
        intro: true,
        walk: false,
        points: 0,
        finishedCapsules: [],
      });

      res.clearCookie();
      res.cookie("user", user, { signed: true });
      res.sendStatus(200);
    }
  });

  router.put("/updateuser", (req, res) => {
    const { points, user, finishedCapsules } = req.body;
    console.log(finishedCapsules);
    mongoDatabase.collection("user").updateOne(
      {
        name: user.name,
        finishedCapsules: {
          $ne: finishedCapsules,
        },
      },
      {
        $inc: {
          points: points,
        },
        $push: {
          finishedCapsules: finishedCapsules,
        },
      }
    );
    res.sendStatus(200);
  });

  return router;
}
