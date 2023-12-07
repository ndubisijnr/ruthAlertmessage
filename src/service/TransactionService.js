import {apiService} from "./BaseService";

export default {
    getTransactionSummary(tenant_id) {
        return apiService.Client.get(`/api/${tenant_id}/business/travel-agents`)
   
    },
   

    getTransactions(tenant_id) {
        return apiService.Client.post(`/api/${tenant_id}/wallet/transactions`)
    },

    getATransactions(tenant_id, id) {
        return apiService.Client.get(`/api/${tenant_id}/wallet/transaction/${id}`)
    },

    walletSetup(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/wallet/setup`,payload)
    }
}