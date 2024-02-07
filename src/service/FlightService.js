import { apiService } from "./BaseService";

export default {

    doSearch(tenant_id, payload) {
        return apiService.Client.post(`/api/${tenant_id}/flight/search`, payload)
    },

    multiCitySearch(tenant_id, payload) {
        return apiService.Client.post(`/api/${tenant_id}/flight/multi_city/search`, payload)
    },

    chargeWallet(tenant_id, payload){
      return apiService.Client.post(`/api/${tenant_id}/flight/charge`, payload)
    },

    airports() {return apiService.Client.get(`/api/airports`)},

    details(tenant_id, flight_id) {
        return apiService.Client.get(`/api/${tenant_id}/flight/${flight_id}`)
    },

    airlines() {
        return apiService.Client.get(`/api/airlines`)
    },

    price(tenant_id, user_id) {
        return apiService.Client.get(`/api/${tenant_id}/booking/summary/${user_id}?`)
    },

    pay(tenant_id, booking_refrence) {
        return apiService.Client.post(`/api/${tenant_id}/flight/pay/${booking_refrence}?`)
    },

    book(tenant_id, flight_id, payload) {
        return apiService.Client.post(`/api/${tenant_id}/flight/book/${flight_id}`, payload)
    },


    wallet(tenant_id, user_id) {
        return apiService.Client.get(`/api/${tenant_id}/wallet/${user_id}?`)
    },

    confirmBookingPrice(tenant_id, booking_id) {
        return apiService.Client.get(`/api/${tenant_id}/flight/confirm/${booking_id}`)
    },

    issueTicket(tenant_id, booking_reference) {
        return apiService.Client.get(`/api/${tenant_id}/flight/issue/${booking_reference}`)

    }




}