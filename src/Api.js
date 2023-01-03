const apiUrl = "http://192.168.88.61:8000"
const memberUrl = "/members"


export const getMember = (id) => {
    console.log(apiUrl + memberUrl + "/" + id)
    return new Promise((resolve, reject)=>{
        fetch(apiUrl + memberUrl + "/" + id)
            .then(d => d.json())
            .then(data => resolve(data))
            .catch(data => reject(data))
    }) 
}