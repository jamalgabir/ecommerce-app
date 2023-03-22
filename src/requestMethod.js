import axios from "axios";

const BASE_URL = "https://ecommerce--app.herokuapp.com/";
const token = "hello"??JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;
export const puplicReuest = axios.create({
    baseURL:BASE_URL,

});

export const userReuest = axios.create({
    baseURL:BASE_URL,
    header: {token:`Bearer ${token}` },
    
    
})
