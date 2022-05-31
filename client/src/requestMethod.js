import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
export const puplicReuest = axios.create({
    baseURL:BASE_URL,

});

export const userReuest = axios.create({
    baseURL:BASE_URL,
    header: {token: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmJiNWRmNjY0MGQwMmJmZWQyZWNmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTI5NTQ0OSwiZXhwIjoxNjUxMzgxODQ5fQ.04M1rBdmNXCD2Xg_Gd1yBPswGCORsgLCdi_iF4v4XM0"}` },
    
})