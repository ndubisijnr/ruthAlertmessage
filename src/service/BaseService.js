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

Client.interceptors.request.use(config => {
    config.headers.Authorization = null
    return config
})

Client.interceptors.response.use(async response => {
    return response
});



export const apiService = {
    Client: Client,
    // Merchant: Merchant,
}
