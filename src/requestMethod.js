import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const token =JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken;
console.log(token)
export const puplicReuest = axios.create({
    baseURL:BASE_URL,

});

export const userReuest = axios.create({
    baseURL:BASE_URL,
    
    headers: {token:`Bearer ${token}`}
    
    
});