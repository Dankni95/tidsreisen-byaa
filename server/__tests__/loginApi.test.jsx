import express from "express";
import request from "supertest";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { LoginApi } from "../loginApi.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));

const mongoDbClient = new MongoClient(process.env.MONGODB_URL);
const database = mongoDbClient.db("test_db");

beforeAll(async () => {
  await mongoDbClient.connect().then(async () => {
    console.log("Connected to MongoDB");
    await database.collection("user").deleteMany({});
    app.use("/api/login", LoginApi(database));
  });
});
afterAll(() => {
  mongoDbClient.close();
});

describe("LoginApi", () => {
  it("should add a user", async () => {

    const user = "leetboi94";
    const intro = true;
    const walk = false;
    const points = 0;
    const finishedCapsules = [];
    const testUser = { user, intro, walk, points, finishedCapsules };

    const name = "leetboi94";

    await request(app);
    await request(app).post("/api/login/").send(testUser).expect(200);

    expect(
      (
        await request(app).get("/api/login/").query({name}).expect(200)
      ).body.map(({ name }) => name)
    ).toContain(user);
  });

  it('should update user by adding finished capsule', async () => {
    
  });

  it('should not update user, capsule already done', async () => {

  });
})