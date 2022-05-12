import express from "express";
import * as path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { MongoClient } from "mongodb";
import {QuizApi} from "./quizApi.js";
import {HistoryApi} from "./historyApi.js";


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//MONGODB//
const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("Connected to MongoDB");
  app.use(
      "/api/quiz",
      QuizApi(mongoClient.db(process.env.MONGODB_DATABASE || "quiz_db"))
  );
  app.use(
      "/api/history",
      HistoryApi(mongoClient.db(process.env.MONGODB_DATABASE || "quiz_db"))
  );
});

app.post("/api/login", (req, res) => {
  const { user } = req.body;
  console.log(user);
  res.cookie("user", user, { signed: true });
  res.sendStatus(200);
});

app.use(express.static(path.resolve("..", "dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
