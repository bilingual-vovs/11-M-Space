import {readFile} from 'fs'
import * as url from "url"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const getMembers = (id) => {
    return new Promise((resolve, reject) => {
        readFile(__dirname + "members.json", "utf-8", (err, data) => {
            data = JSON.parse(data)
            if (err){
                reject(err)
            }
            else if (data.length <= id || id < 0){
                reject("Out of index")
            }
            else{
                data[id].imgId = id
                resolve(data[id])
            }
        })
    })
}