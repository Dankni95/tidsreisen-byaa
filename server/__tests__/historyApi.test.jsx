import express from "express";
import request from "supertest";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { HistoryApi } from "../historyApi.js";

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
        await database.collection("history").insertOne({
            //Insert en history capsule her
        });
        app.use("/api/history", HistoryApi(database));
    });
});
afterAll(async () => {
    await mongoDbClient.connect().then(async () => {
        await database.collection("history").deleteMany({});
        app.use("/api/history", HistoryApi(database));
    });
    mongoDbClient.close();
});

describe("HistoryApi", () => {
    it('should get history capsule from database', async () => {

    });
})