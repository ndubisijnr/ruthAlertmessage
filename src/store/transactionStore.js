import { defineStore } from 'pinia'
import TransactionService from '../service/TransactionService'
import storeUtils from '../utils/storeUtils'
import TravelAgentsService from '../service/TravelAgentsService'
import {catchErrorHandler} from "@/mixins/ErrorHandler";
import {RuthdoAlert} from "ruthly";


export const useTransactionStore = defineStore('transactionStore', {
    state: () => ({
        loading: false,
        transactions:null,
        singleTransactions:null,
        userWallet:null,
        transactionSummary:null,
        isWalletSetupSuccess:false
    }),

    getters: {
        getUserWallet:state => state.userWallet,
        getLoading: state => state.loading,
        getSingleTransaction: state => state.singleTransaction,
        getTransactions: state => state.transactions,
        getTransactionSummary:state => state.transactionSummary,
        getIsWalletSetupSuccess:state => state.isWalletSetupSuccess  
    },

    actions: {
       
        handleGetUserWallet(user_id){
            this.loading = true
            return TravelAgentsService.getUserWallet(storeUtils.fireAway().global?.getTenant_id, user_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                   this.userWallet = responseData.data 
                    // do nothing
                }else{
                    this.loading = false
                }
            }).catch(e => {
                this.loading = false
                catchErrorHandler(e)
            })
        },

        handleGetTransactionSummary(){
            return TransactionService.getTransactionSummary(storeUtils.fireAway().global?.getTenant_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.transactions = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

        handleGetUserTransaction(){
            return TransactionService.getTransactions(storeUtils.fireAway().global?.getTenant_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.transactions = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },

        handleGetATransaction(id){
            return TransactionService.getATransactions(storeUtils.fireAway().global?.getTenant_id, id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.singleTransaction = responseData.data 
                    // do nothing
                }
            }).catch(e => {
                catchErrorHandler(e)
            })
        },


        async walletSetup(payload){
            this.loading=true
            try{
                const response = await TransactionService.walletSetup(storeUtils.fireAway().global?.getTenant_id, payload)
                this.loading=false
                if(response.data.success){
                    RuthdoAlert({title:'Success', icon:'success'})
                    this.isWalletSetupSuccess = true
                }
            }catch (err){
                this.loading=false
                catchErrorHandler(err)
            }

        }


    }
})