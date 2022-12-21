import { Router } from "express";
import { getMembers } from '../DB/getter.js'
import console from "powered-log"

export const router = Router()

router.use((req, res)=>{
    const id = Number(/\b\d+(?!\w)/.exec(req.url).join())
    getMembers(id)
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{ 
            console.err(err)
        })
})

