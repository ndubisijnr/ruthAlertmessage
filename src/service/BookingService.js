import {apiService} from "./BaseService";

export default {

    getBookings(tenant_id, page, payload) {
        return apiService.Client.post(`/api/${tenant_id}/booking/all?page=${page}`, payload)
    },

    getBookingsSummary(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary`)
    },

    getAgentBookingsSummary(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

}