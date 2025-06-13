import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://fakestoreapi.com";

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