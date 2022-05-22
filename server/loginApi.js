import { JSONCookie } from "cookie-parser";
import { Router } from "express";

export function LoginApi(mongoDatabase) {
  const router = new Router();


  router.get("/", async (req, res) => {
    const { user } = req.signedCookies;

    console.log(user);

    const userData = await mongoDatabase
      .collection("user")
      .find({ name: user.toLowerCase() })
      .map(({ name, intro, walk }) => ({
        name,
        intro,
        walk
      }))
      .limit(1)
      .toArray();
    res.json(userData);
  });



  router.post("/", async (req, res) => {
    const { user } = req.body;

    const userExist = await mongoDatabase
      .collection("user")
      .find({name: user.toLowerCase()})
      .map(({name, intro, walk}) => ({
       name,
        intro,
        walk
      }))
      .limit(1)
      .toArray();

    if(userExist.length > 0) res.sendStatus(500)
    else{
    mongoDatabase
      .collection("user")
      .insertOne({ name: user.toLowerCase(), intro: true, walk: false });

      res.cookie("user", user, { signed: true });
      res.sendStatus(200)
  }}
  );

  return router;
}