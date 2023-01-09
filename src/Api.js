export const apiUrl = "http://192.168.31.26:8000"
export const memberUrl = "/members"
export const getImgUrl = (id) => apiUrl + "/images/" + id + ".png"


export const getMember = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(apiUrl + memberUrl + "/" + id)
            .then(d => d.json())
            .then(data => resolve(data))
            .catch(data => reject(data))
    }) 
}