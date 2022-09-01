import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const token = "hello"??JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;
export const puplicReuest = axios.create({
    baseURL:BASE_URL,

});

export const userReuest = axios.create({
    baseURL:BASE_URL,
    header: {token:`Bearer ${token}` },
    
    
})