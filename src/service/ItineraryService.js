import {apiService} from "@/service/BaseService";
export default {
    getItineraryHistory(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/itinerary`)
    },

    submitRequest(tenant_id, payload){
         return apiService.Client.post(`api/${tenant_id}/itinerary/request`, payload)
    },

    getItineraryRequest(tenant_id, itineraryType, status,page){
        return apiService.Client.get(`api/${tenant_id}/itinerary/requests?type=${itineraryType}&status=${status}&page=${page}`)
    },

    getItineraryRequestManager(tenant_id, user_id, itineraryType,status, page){
        return apiService.Client.get(`api/${tenant_id}/itinerary/requests/manager/${user_id}?type=${itineraryType}&status=${status}&page=${page}`)
    },

    replyItineraryRequestService(tenant_id, id, payload){
        return apiService.Client.patch(`api/${tenant_id}/itinerary/request/${id}`, payload)
    },

    getItineraryRequestDetails(tenant_id, id){
        return apiService.Client.get(`api/${tenant_id}/itinerary/request/${id}`)
    },

    approveItineraryRequest(tenant_id, id, payload){
        return apiService.Client.patch(`api/${tenant_id}/itinerary/request/${id}`, payload)
    },

    sendIteneryEmail(tenant_id,booking_reference){
        return apiService.Client.get(`/api/${tenant_id}/itinerary/email/${booking_reference}`)
    },

    cancelItenery(tenant_id,booking_reference){
        return apiService.Client.patch(`/api/${tenant_id}/itinerary/cancel/${booking_reference}`)
    },

    getItinerarySummary(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/itinerary/summary`)
    }

   
}