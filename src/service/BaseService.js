import axios from "axios";
import storeUtils from "@/utils/storeUtils";
import {catchErrorHandler} from "../mixins/ErrorHandler";


const Client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
});


export const appClientImgUpload = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
    }
});

Client.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.token ? "Bearer" + " " + localStorage.token : null;
    return config
})

Client.interceptors.response.use(async response => {return response}, error => {
    console.log(error)
    // this needs to be && not || 
    if (error.response.status !== 200 || error.response.status !== 201) catchErrorHandler(error);

    if (error.response.status === 403) storeUtils.fireAway().global.commitUnauthorised(true);

    return error
}
);

appClientImgUpload.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer" + " " + localStorage.token;
    return config
})




export const apiService = {
    Client: Client,
}
