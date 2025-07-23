import axios from "axios";

const BASE_URL = "https://apiecommerce.herokuapp.com";
//const token =JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken||null;

export const puplicReuest = axios.create({
    baseURL: BASE_URL,
});

export const userReuest = axios.create({
    baseURL: BASE_URL,
    headers: { 
        "Content-Type": "application/json"
    }
});

// Add request interceptor for better error handling
puplicReuest.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

userReuest.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);