import { defineStore } from 'pinia'
import TravelAgentsService from "../service/TravelAgentsService";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";
import TravelAgentRequest from "../model/TravelAgentRequest";
import router from "../router";
import {RuthdoAlert} from "ruthly";

export const useTravelAgentStore = defineStore('travelAgentStore', {
    state: () => ({
        loading: false,
        users:null,
        travelAgents:null
    }),

    getters: {
        getUser:state => state.users,
        getTravelAgents:state => state.travelAgents,
        getLoading: state => state.loading,
    },

    actions: {

        handleGetTravelAgent(){
            this.loading = true
            return TravelAgentsService.getTravelAgent(storeUtils.fireAway().global?.getTenant_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    this.users = responseData
                }
            }).catch(e => {
                this.loading = false
                catchErrorHandler(e)
            })
        },

        handleGetUser(obj){
            const user = JSON.parse(localStorage?.user)
            localStorage.travelAgent = JSON.stringify(obj)
            router.push({path:`/agents/document-verification/${user?.access_token?.slice(0,20)}`}).then()
        },

        handleVerifyBusiness(payload=TravelAgentRequest.verifyBusiness){
            return TravelAgentsService.VerifyBusiness(storeUtils.fireAway().global?.getTenant_id, payload).then(async response => {
                let responseData = response.data
                if(responseData.success){
                    RuthdoAlert({title:'Successful', icon:'success'})
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

    }
})
