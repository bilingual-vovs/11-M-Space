import express from "express";
import {router as membersRouter} from "./routers/members.js"
import {router as imageRouter} from "./routers/image.js"

const app = express()

app.use("/members", membersRouter)
app.use("/image", imageRouter)

app.listen(8000)