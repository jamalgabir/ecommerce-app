import axios from "axios";

const BASE_URL = "https://apiecommerce.herokuapp.com/api";
//const token =JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken||null;

export const puplicReuest = axios.create({
    baseURL:BASE_URL,

});

export const userReuest = axios.create({
    baseURL:BASE_URL,
    
    headers: {token:`Bearer ${'You can write token here'}`}
    
    
});