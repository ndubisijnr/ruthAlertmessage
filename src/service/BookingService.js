import {apiService} from "./BaseService";

export default {

    getBookings(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/all/${user_id}?`)
    },

    getBookingsSummary(tenant_id,user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

}