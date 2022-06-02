import express from "express";
import request from "supertest";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { UserState } from "../UserState.js";
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
        app.use("/api/update-state", LoginApi(database));
    });
});
afterAll(() => {
    mongoDbClient.close();
});