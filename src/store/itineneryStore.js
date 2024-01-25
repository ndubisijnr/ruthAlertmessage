import {defineStore} from "pinia"
import storeUtils from "../utils/storeUtils";
import ItineraryService from "../service/ItineraryService";
import router from "../router";
import { RuthdoAlert } from "ruthly";

export const useItineneryStore = defineStore('itineneryStore', {
    state:()=>({
        loading:false,
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
        getItineraryRequestDetails:state => state.itineraryRequestDetails,
        getItinerarySummaryState:state => state.itinerarySummary,
        getRequestingDetailsLoading:state => state.requestingDetailsLoading,
    },
    
    actions:{
       async getItinerarySummaryAction(){
        this.summaryLoading = true
        try{
            const response = await ItineraryService.getItinerarySummary(storeUtils.fireAway().global?.getTenant_id)
            let responseData = response.data
            if(responseData.success){
                this.summaryLoading = false
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
                RuthdoAlert({title:responseData.data, type:'success'})
            }
        }catch(errr){
            this.loading = false
        }
     
       },


       async getItineraryRequestAction(payload){
        this.requestingDetailsLoading = true
        try{
            const response = await ItineraryService.getItineraryRequest(storeUtils.fireAway().global?.getTenant_id, payload)
            let responseData = response.data
            if(responseData.success){
                this.requestingDetailsLoading = false
                this.itineraryRequest = responseData.data
            }
        }catch(errr){
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
                RuthdoAlert({title:responseData.date, icon:'success'})
                console.log(responseData)
            }
        }catch(errr){
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
                this.itineraryRequest = responseData.data
            }
        }catch(errr){
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
                router.push({name:"SupportDetails"})
            }
        }catch(errr){
            this.requestingDetailsLoading = false
        }
       
       },

       getRefundAction(){
        return ItineraryService
       }

       
    },

})