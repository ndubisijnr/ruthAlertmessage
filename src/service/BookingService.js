import {apiService} from "./BaseService";

export default {

    getBookings(tenant_id,user_id, payload) {
        return apiService.Client.post(`/api/${tenant_id}/booking/all`, payload)
    },

    getAgentsBookings(tenant_id,user_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/booking/all/${user_id}?`, payload)
    },

    getBookingsSummary(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary`)
    },

    getAgentBookingsSummary(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

}