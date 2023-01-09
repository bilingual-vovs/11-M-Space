import express from "express";
import {router as membersRouter} from "./routers/members.js"
import {router as imageRouter} from "./routers/image.js"
import console from "powered-log"
import { port, host } from "./Settings.js"

const app = express()

app.use("/", (req, res, next) =>{
    console.log(`app.js || Request to "${req.url}"`, "blue")
    next()
})

app.use("/members", membersRouter)
app.use("/images", imageRouter)

app.listen(8000, host, () => {
    console.log(`Server started on port ${port}`, "Green")
})
