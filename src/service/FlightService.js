import {apiService} from "./BaseService";

export default {

    doSearch(tenant_id, payload) {
        return apiService.Client.post(`/api/${tenant_id}/flight/search`, payload)
    },

    airports() {
        return apiService.Client.get(`/api/airports`)
    },

    details(tenant_id,flight_id) {
        return apiService.Client.get(`/api/${tenant_id}/flight/${flight_id}`)
    },

    airlines(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

    price(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

    pay(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

    book(tenant_id,flight_id, payload) {
        return apiService.Client.post(`/api/${tenant_id}/flight/book/${flight_id}`, payload)
    },

    
    wallet(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/${user_id}?`)
    }




}