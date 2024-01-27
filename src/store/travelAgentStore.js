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
        loadingAgents:false,
        users:null,
        travelAgents:null,
        userWallet:null,
        singleTransaction:null,
        transactions:null,
        userTransactions:null,
        agentTeams:null
    }),

    getters: {
        getUser:state => state.users,
        getTravelAgents:state => state.travelAgents,
        getLoading: state => state.loading,
        getLoadingAgents: state => state.loadingAgents,
        getUserWallet: state => state.userWallet,
        getSingleTransaction: state => state.singleTransaction,
        getTransactions: state => state.transactions,
        getUserTransactions:state => state.userTransactions,
        getAgentTeams:state => state.agentTeams
    },

    actions: {

        async readAgentMembers(user_id){
            if(!this.travelAgent)this.loadingAgents = true
            try{
                const response = await TravelAgentsService.getAgentsTeamMembers(storeUtils.fireAway().global?.getTenant_id, user_id)
                let responseData = response.data
                if(responseData.success){
                    this.loadingAgents = false
                    this.agentTeams = responseData.data
                }

            }catch{
                this.loadingAgents = false
                // do nothing
            }

        },

    
        async addAccountOfficers(travel_agent_id, payload){
            this.loading = true
            try{
                const response = await TravelAgentsService.createAccountOfficer(storeUtils.fireAway().global?.getTenant_id, travel_agent_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                }else{
                    this.loading = false
                    RuthdoAlert({title:responseData.data, icon:'error'})
                }

            }catch{
                this.loading = false
                // do nothing
            }

        },

        async updateAccountOfficers(travel_agent_id, payload){
            this.loading = true
            try{
                const response = await TravelAgentsService.updateAccountOfficer(storeUtils.fireAway().global?.getTenant_id, travel_agent_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                }

            }catch{
                this.loading = false
                // do nothing
            }

        },


       
        handleFundsTransfer(payload){
            this.loading = true
            return TravelAgentsService.fundTransfer(storeUtils.fireAway().global?.getTenant_id, payload).then(async response => {
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:responseData.data, icon:'success'})
                }else{
                    this.loading = false
                    RuthdoAlert({title:responseData.data, icon:'error'})
                }
            }).catch(e => {
                this.loading = false
                catchErrorHandler(e)
            })

        },

        handleGetTravelAgent(searchQuery){
            if(!this.user) this.loadingAgents = true
            return TravelAgentsService.getTravelAgent(storeUtils.fireAway().global?.getTenant_id, searchQuery).then(async response => {
                let responseData = response.data
                if(responseData.success){
                    this.loadingAgents = false
                    this.users = responseData
                }
            }).catch(e => {
                this.loadingAgents = false
                catchErrorHandler(e)
            })
        },

        handleGetUser(obj){
            const user = JSON.parse(localStorage?.user)
            localStorage.travelAgent = JSON.stringify(obj)
            router.push({path:`/agents/document-verification/${user?.access_token?.slice(0,20)}`}).then()
        },

        handleVerifyBusiness(payload){
            this.loading = true
            return TravelAgentsService.VerifyBusiness(storeUtils.fireAway().global?.getTenant_id, payload).then(async response => {
                let responseData = response.data
                this.loading = false
                if(responseData.success){
                    RuthdoAlert({title:'Successful', icon:'success'})
                    // do nothing
                }else{
                    RuthdoAlert({title:responseData.data, icon:'error'})
  
                }
            }).catch(e => {
                this.loading = false
                catchErrorHandler(e)
            })
        },

        handleGetUserWallet(payload=TravelAgentRequest.makePayment){
            return TravelAgentsService.getUserWallet(storeUtils.fireAway().global?.getTenant_id, payload).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.userWallet = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

        handleGetTransactionSummary(user_id){
            return TravelAgentsService.getTransactionSummary(storeUtils.fireAway().global?.getTenant_id, user_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.transactions = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

        handleGetUserTransaction(user_id){
            return TravelAgentsService.getUserTransactions(storeUtils.fireAway().global?.getTenant_id, user_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.userTransactions = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

        handleGetATransaction(id){
            return TravelAgentsService.getATransactions(storeUtils.fireAway().global?.getTenant_id, id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.singleTransaction = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },


    }
})
