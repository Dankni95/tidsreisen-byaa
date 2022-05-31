import express from "express";
import request from "supertest";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { SoundApi } from "../soundApi.js";

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
        await database.collection("sound").insertOne({
            //Insert en sound capsule her
        });
        app.use("/api/sound", SoundApi(database));
    });
});
afterAll(async () => {
    await mongoDbClient.connect().then(async () => {
        await database.collection("sound").deleteMany({});
        app.use("/api/sound", SoundApi(database));
    });
    mongoDbClient.close();
});

describe("SoundApi", () => {
    it('should get sound capsule from database', async () => {

    });
})
