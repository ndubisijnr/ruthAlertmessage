import { defineStore } from 'pinia'
import TransactionService from '../service/TransactionService'
import storeUtils from '../utils/storeUtils'
import TravelAgentsService from '../service/TravelAgentsService'


export const useTransactionStore = defineStore('transactionStore', {
    state: () => ({
        loading: false,
        transactions:null,
        singleTransactions:null,
        userWallet:null,
        transactionSummary:null,
    }),

    getters: {
        getUserWallet:state => state.userWallet,
        getLoading: state => state.loading,
        getUserWallet: state => state.userWallet,
        getSingleTransaction: state => state.singleTransaction,
        getTransactions: state => state.transactions,
        getTransactionSummary:state => state.transactionSummary 
    },

    actions: {
       
        handleGetUserWallet(){
            return TravelAgentsService.getUserWallet(storeUtils.fireAway().global?.getTenant_id).then(async response => {
                let responseData = response.data
                if(responseData.success){
                   this.userWallet = responseData.data 
                    // do nothing
                }
            }).catch(e => {
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


    }
})
