import axios from "axios";



const Client = axios.create({
    baseURL: "https://b2b-api-dev.tiqwa.com/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
});

export const appClientImgUpload = axios.create({
    baseURL:"https://b2b-api-dev.tiqwa.com/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
    }
});

Client.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.token ?  "Bearer" + " " + localStorage.token : null;
    return config
})

Client.interceptors.response.use(async response => {
    return response
});

appClientImgUpload.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer" + " " + localStorage.token;
    return config
})




export const apiService = {
    Client: Client,
}