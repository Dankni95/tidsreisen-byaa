import express from "express";
import request from "supertest";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { QuizApi } from "../quizApi.js";

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
        await database.collection("quiz").insertOne({
            //Insert en quiz capsule her
        });
        app.use("/api/login", QuizApi(database));
    });
});
afterAll(async () => {
    await mongoDbClient.connect().then(async () => {
        await database.collection("quiz").deleteMany({});
        app.use("/api/quiz", QuizApi(database));
    });
    mongoDbClient.close();
});

describe("QuizApi", () => {
    it('should get quiz capsule from database', async () => {

    });
})