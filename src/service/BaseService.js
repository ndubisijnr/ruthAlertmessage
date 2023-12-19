import axios from "axios";
import storeUtils from "@/utils/storeUtils";

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
    if(response.status === 403) {
        storeUtils.fireAway().global.commitUnauthorised(true)
    }
    return response
});

appClientImgUpload.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer" + " " + localStorage.token;
    return config
})




export const apiService = {
    Client: Client,
}
