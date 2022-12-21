import { Router } from 'express'
import { exists } from "fs"
import { resolve } from 'path'

export const router = Router()

router.use((req, res)=>{
    const id = Number(/\b\d+(?!\w)/.exec(req.url).join())
    exists(resolve(`./images/${id}.jpg`), (img)=>{
        if (img) res.sendFile(resolve(`./images/${id}.jpg`))
        else res.send("Not found! :(")
    })
})