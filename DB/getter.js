import {readFile} from 'fs'
import * as url from "url"
import { dbUrl } from "../Settings.js"
import { MongoClient } from "mongodb"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// export const getMembers = (id) => {
//     return new Promise((resolve, reject) => {
//         readFile(__dirname + "members.json", "utf-8", (err, data) => {
//             data = JSON.parse(data)
//             if (err){
//                 reject(err)
//             }
//             else if (data.length <= id || id < 0){
//                 reject("Out of index")
//             }
//             else{
//                 data[id].imgId = id
//                 resolve(data[id])
//             }
//         })
//     })
// }

export const getMembers = (id) => {
    return new Promise((resolve, reject) => {
        try{
            const client = new MongoClient(dbUrl)
            client.connect()
                .then(data => {
                    const chars = data.db("characters").collection('characters')
                    chars.findOne({id:id}).then(resolve).catch(reject)
                })
                .catch(reject)
            client.close()
        }
        catch{
            reject()
        }
    })
}

export const getAllMembers = () =>{
    return new Promise((resolve, reject) => {
        try{
            const client = new MongoClient(dbUrl)
            client.connect()
                .then(data => {
                    const chars = data.db("characters").collection('characters')
                    chars.find().toArray().then(resolve).catch(reject)
                    
                })
                .catch(reject)
            client.close()
        }
        catch{
            reject()
        }
    })
}