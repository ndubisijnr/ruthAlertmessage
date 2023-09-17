import {apiService} from "./BaseService";

export default {

    doSearch(tenant_id) {
        return apiService.Client.get(`/api/${tenant_id}/flight/search`)
    },

    airports(tenant_id) {
        return apiService.Client.get(`/api/${tenant_id}/airports`)
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

    book(tenant_id,flight_id) {
        return apiService.Client.get(`/api/${tenant_id}/flight/book/${flight_id}`)
    },




}