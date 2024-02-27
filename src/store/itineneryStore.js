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
        requestingDetailsLoading:false,
        loadingPnrHistory:false,
        pnrHistory:null,
        currentPnrHistoryChatId:null,
        openPnrHistoryModal:false,
        pnrHistoryChat:null,
        // pnrHistoryChatPreserve:[]
    }),

    getters:{
        getLoading:state => state.loading,
        getPnrHistoryChat:state => state.pnrHistoryChat,
        getLoadingSummary:state => state.summaryLoading,
        getItineraryRequest:state => state.itineraryRequest,
        getItineraryRequestDetails:state => localStorage.ItineraryRequestDetailsData ? JSON.parse(localStorage.ItineraryRequestDetailsData) : state.itineraryRequestDetails,
        getItinerarySummaryState:state => state.itinerarySummary,
        getRequestingDetailsLoading:state => state.requestingDetailsLoading,
        getLoadingPnrHistory:state => state.loadingPnrHistory,
        getPnrHistory:state => state.pnrHistory,
        getCurrentPnrHistoryChatId:state => state.currentPnrHistoryChatId,
        getOpenPnrHistoryModal:state => state.openPnrHistoryModal,
        // getPnrHistoryChatPreserve:state => state.pnrHistoryChatPreserve,


    },
    
    actions:{
        updateCurrentPnrHistoryChatId(id){
            this.currentPnrHistoryChatId = id
        },

        updatePnrHistoryChatPreserve(obj){
            this.pnrHistory.data = [...this.pnrHistory.data, obj]
        },

        updateOpenPnrHistoryModal(value){
            this.openPnrHistoryModal = value
        },

       async getItinerarySummaryAction(status){
        this.summaryLoading = true
        try{
            const response = await ItineraryService.getItinerarySummary(storeUtils.fireAway().global?.getTenant_id,status)
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
                    location.reload()
                },500)
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
            const response = await ItineraryService.submitChat(storeUtils.fireAway().global?.getTenant_id, id, payload)
            let responseData = response.data
            this.loading = false
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
                await router.push({name:'SupportDetails', params:{id:payload}})
            }
        }catch(err){
            this.requestingDetailsLoading = false
        }
       
       },

       async getItineraryPnrHistory(id){
        this.loadingPnrHistory = true
        try{
            const response = await ItineraryService.ItineraryHistory(storeUtils.fireAway().global?.getTenant_id, id)
            let responseData = response.data
            if(responseData.success){
                this.loadingPnrHistory = false
                this.pnrHistory = responseData.data
            }
        }catch(err){
            this.loadingPnrHistory = false
        }

       },


       
    },

})