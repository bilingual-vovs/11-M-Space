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
                res.setHeader("Access-Control-Allow-Origin", "https://fabulous-crostata-85474d.netlify.app")
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
                res.setHeader("Access-Control-Allow-Origin", "https://fabulous-crostata-85474d.netlify.app")
                res.json(data)
            })
            .catch((err)=>{ 
                console.err(err)
                
            })
    }
    
})

