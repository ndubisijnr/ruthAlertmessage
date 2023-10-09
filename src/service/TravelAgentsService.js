import {apiService} from "./BaseService";

export default {

    getTravelAgent(tenant_id,) {
        return apiService.Client.get(`/api/${tenant_id}/business/travel-agents`)
    },

    VerifyBusiness(tenant_id,payload) {
        return apiService.Client.patch(`api/${tenant_id}/business/verify`, payload)
    },

    getUserWallet(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/${user_id}?`)
    },

    getTransactionSummary(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/transactions/summary/${user_id}?`)
    },

    getUserTransactions(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/transactions/${user_id}?`)
    },

    getATransactions(tenant_id, id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/transaction/${id}`)
    }


}