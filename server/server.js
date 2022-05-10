import express from "express"
import * as path from "path"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

dotenv.config()


const app = express()
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(express.static("../client/build/"))

app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/build/index.html"))
    } else {
        next()
    }
})


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`http://localhost:${server.address().port}`);
});
