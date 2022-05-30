import express from "express";
import request from "supertest";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { LoginApi } from "../loginApi.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoDbClient = new MongoClient(process.env.MONGODB_URL);
const database = mongoDbClient.db("test_db");

beforeAll(async () => {
  await mongoDbClient.connect().then(async () => {
    console.log("Connected to MongoDB");
    await database.collection("user_test").deleteMany({});
    app.use("/api/login", LoginApi(database));
  });
});
afterAll(() => {
  mongoDbClient.close();
});

describe("LoginApi", () => {
  it("should add a user", async () => {

    const name = "leetboi94";
    const intro = true;
    const walk = false;
    const points = 0;
    const finishedCapsules = [];
    const user = { name, intro, walk, points, finishedCapsules };

    await request(app);
    await request(app).post("/api/login/").send(user).expect(200);

    expect(
      (
        await request(app).get("/api/login").query({ name }).expect(200)
      ).body.map(({ name }) => name)
    ).toContain(name);
  });
})