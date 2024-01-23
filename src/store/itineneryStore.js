import {defineStore} from "pinia"
import storeUtils from "../utils/storeUtils";
import ItineraryService from "../service/ItineraryService";
import router from "../router";

export const useItineneryStore = defineStore('itineneryStore', {
    state:()=>({
        loading:false,
        itineraryRequest:null,
        itineraryRequestDetails:null
    }),

    getters:{
        getLoading:state => state.loading,
        getItineraryRequest:state => state.itineraryRequest,
        getItineraryRequestDetails:state => state.itineraryRequestDetails,

    },
    
    actions:{
       async getItineraryRequestAction(payload){
        this.loading = true
        try{
            const response = await ItineraryService.getItineraryRequest(storeUtils.fireAway().global?.getTenant_id, payload)
            let responseData = response.data
            if(responseData.success){
                this.itineraryRequest = responseData.data
            }
        }catch(errr){
            this.loading = false
        }
     
       },

       async getItineraryRequestManagerAction(user_id, payload){
        this.loading = true
        try{
            const response = await ItineraryService.getItineraryRequestManager(storeUtils.fireAway().global?.getTenant_id, user_id, payload)
            let responseData = response.data
            if(responseData.success){
                this.itineraryRequest = responseData.data
            }
        }catch(errr){
            this.loading = false
        }
     
       },

       async getItineraryRequestDetailsAction(payload){
        this.loading = true
        try{
            const response = await ItineraryService.getItineraryRequestDetails(storeUtils.fireAway().global?.getTenant_id, payload)
            let responseData = response.data
            if(responseData.success){
                this.itineraryRequestDetails = responseData.data
                router.push({name:"SupportDetails"})
            }
        }catch(errr){
            this.loading = false
        }
       
       },

       getRefundAction(){
        return ItineraryService
       }

       
    },

})