import { Router } from "express";
import { getMembers, getAllMembers } from '../DB/getter.js'
import {clientUrl} from "../Settings.js"
import console from "powered-log";

export const router = Router()

const memberNotFound = () => {
    res.setHeader("code", "403")
    res.end()
}

router.use((req, res)=>{
    const memberNotFound = () => {
        console.err("members.js || member not found")
        res.sendStatus(404)
        res.setHeader("code", "403")
        res.end()
    }
    if (req.url !== "/"){
        try{
            const id = Number(/\b\d+(?!\w)/.exec(req.url).join())
            getMembers(id)
                .then((data)=>{
                    res.setHeader("Access-Control-Allow-Origin", clientUrl)
                    if (data !== null) {
                        res.json(data)
                    }
                    else {
                        memberNotFound()
                    }
                })
                .catch((err)=>{ 
                    console.err(err)
                    memberNotFound()
                })
        }
        catch{
            console.err('members.js || Uncought error in member data getting')
            memberNotFound()
        }
    }
    else{
        getAllMembers()
            .then((data)=>{
                res.setHeader("Access-Control-Allow-Origin", clientUrl)
                res.json(data)
            })
            .catch((err)=>{ 
                console.err(err)
            })
    }
    
})

