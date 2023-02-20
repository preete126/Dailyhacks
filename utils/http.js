import Axios from "axios"

const axios = Axios.create({
    baseURL:"http://localhost:9000",
    headers:{
        "Content-Type":"application/json"
    }
})


export default axios