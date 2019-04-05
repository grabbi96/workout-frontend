import Axios from "axios"


export const addEvent = (data, history) => dispatch =>{
    console.log(data)
    Axios.post("/api/members/event", data)
    .then(data => {
        console.log(data)
        // history.push("/event")
    })
    .catch(err => {
        console.log(err)
    })
}
