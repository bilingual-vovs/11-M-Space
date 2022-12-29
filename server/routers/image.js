import { Router } from 'express'
import { exists } from "fs"
import { resolve } from 'path'

export const router = Router()

router.use((req, res)=>{
    try{
        const id = /[^/]*$/.exec(req.url).join()
        exists(resolve(`./images/${id}`), (img)=>{
            if (img) res.sendFile(resolve(`./images/${id}`))
            else res.sendFile(resolve(`./images/NotFound.png`))
        })
    }
    catch{
        res.sendFile(resolve(`./images/NotFound.png`))
    }
    
})