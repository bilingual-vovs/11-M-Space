import { Router } from "express";
import { getMembers, getAllMembers } from '../DB/getter.js'
import console from "powered-log"

export const router = Router()

router.use((req, res)=>{
    console.log(req.url)
    if (req.url !== "/"){
        const id = Number(/\b\d+(?!\w)/.exec(req.url).join())
        getMembers(id)
            .then((data)=>{
                res.setHeader("Access-Control-Allow-Origin", "http://192.168.1.113:3000")
                res.json(data)
            })
            .catch((err)=>{ 
                console.err(err)
                
            })
    }
    else{
        getAllMembers()
            .then((data)=>{
                console.obj(data)
                res.setHeader("Access-Control-Allow-Origin", "http://192.168.1.113:3000")
                res.json(data)
            })
            .catch((err)=>{ 
                console.err(err)
                
            })
    }
    
})

