import {apiService} from "@/service/BaseService";
export default {
    getItineraryHistory(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/itinerary`)
    },

    submitRequest(tenant_id, payload){
         return apiService.Client.post(`api/${tenant_id}/itinerary/request`, payload)
    },

    getItineraryRequest(tenant_id, itineraryType){
        return apiService.Client.get(`api/${tenant_id}/itinerary/requests?type=${itineraryType}`)
    },

    getItineraryRequestManager(tenant_id, user_id, itineraryType){
        return apiService.Client.get(`api/${tenant_id}/itinerary/requests/manager/${user_id}?type=${itineraryType}`)
    },

    getItineraryRequestDetails(tenant_id, id){
        return apiService.Client.get(`api/${tenant_id}/itinerary/request/${id}`)
    },

    sendIteneryEmail(tenant_id,booking_reference){
        return apiService.Client.get(`/api/${tenant_id}/itinerary/email/${booking_reference}`)
    },

    cancelItenery(tenant_id,booking_reference){
        return apiService.Client.patch(`/api/${tenant_id}/itinerary/cancel/${booking_reference}`)
    }

   
}