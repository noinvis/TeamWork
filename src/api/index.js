import axios from "axios";

// axios instance
export const api = axios.create({
    baseURL: "https://dummyjson.com"
})

// api.interceptors.request.use(()=>{})