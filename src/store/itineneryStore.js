import {defineStore} from "pinia"
import storeUtils from "../utils/storeUtils";
import ItineraryService from "../service/ItineraryService";
import router from "../router";
import { RuthdoAlert } from "ruthly";

export const useItineneryStore = defineStore('itineneryStore', {
    state:()=>({
        loading:false,
        summaryLoading:false,
        itineraryRequest:null,
        itineraryRequestDetails:null,
        itinerarySummary:null,
        itinerarySummaryLoading:false,
        requestingDetailsLoading:false
    }),

    getters:{
        getLoading:state => state.loading,
        getLoadingSummary:state => state.summaryLoading,
        getItineraryRequest:state => state.itineraryRequest,
        getItineraryRequestDetails:state => localStorage.ItineraryRequestDetailsData ? JSON.parse(localStorage.ItineraryRequestDetailsData) : state.itineraryRequestDetails,
        getItinerarySummaryState:state => state.itinerarySummary,
        getRequestingDetailsLoading:state => state.requestingDetailsLoading,
    },
    
    actions:{
       async getItinerarySummaryAction(){
        this.summaryLoading = true
        try{
            const response = await ItineraryService.getItinerarySummary(storeUtils.fireAway().global?.getTenant_id)
            this.summaryLoading = false
            let responseData = response.data
            if(responseData.success){
                this.itinerarySummary = responseData.data
            }
        }catch(errr){
            this.summaryLoading = false
        }
     
       },

       async approveItineraryRequestAction(id, payload){
        this.loading = true
        try{
            const response = await ItineraryService.approveItineraryRequest(storeUtils.fireAway().global?.getTenant_id, id, payload)
            let responseData = response.data
            if(responseData.success){
                this.loading = false
                await RuthdoAlert({title:responseData.data, icon:'success'})
                setTimeout(() => {
                    location.replace('/support')
                },500)
                // location.reload()
            }
        }catch(errr){
            this.loading = false
        }
     
       },


       async getItineraryRequestAction(payload, value, page){
        this.requestingDetailsLoading = true
        try{
            const response = await ItineraryService.getItineraryRequest(storeUtils.fireAway().global?.getTenant_id, payload, value,page)
            let responseData = response.data
            if(responseData.success){
                this.requestingDetailsLoading = false
                this.itineraryRequest = responseData
            }
        }catch(err){
            this.requestingDetailsLoading = false
        }
     
       },

       async replyItineraryRequestAction(id, payload){
        this.loading = true
        try{
            this.loading = false
            const response = await ItineraryService.replyItineraryRequestService(storeUtils.fireAway().global?.getTenant_id, id, payload)
            let responseData = response.data
            if(responseData.success){
                RuthdoAlert({title:responseData.data, icon:'success'})
            }
        }catch(err){
            this.loading = false
        }
     
       },

       async getItineraryRequestManagerAction(user_id, payload){
        this.requestingDetailsLoading = true
        try{
            const response = await ItineraryService.getItineraryRequestManager(storeUtils.fireAway().global?.getTenant_id, user_id, payload)
            let responseData = response.data
            if(responseData.success){
                this.requestingDetailsLoading = false
                this.itineraryRequest = responseData
            }
        }catch(err){
            this.requestingDetailsLoading = false
        }
     
       },

       async getItineraryRequestDetailsAction(payload){
        this.requestingDetailsLoading = true
        try{
            const response = await ItineraryService.getItineraryRequestDetails(storeUtils.fireAway().global?.getTenant_id, payload)
            let responseData = response.data
            if(responseData.success){
                this.requestingDetailsLoading = false
                this.itineraryRequestDetails = responseData.data
                localStorage.setItem('ItineraryRequestDetailsData',JSON.stringify(responseData.data))
                await location.replace('/support/details')
            }
        }catch(errr){
            this.requestingDetailsLoading = false
        }
       
       },

       
    },

})