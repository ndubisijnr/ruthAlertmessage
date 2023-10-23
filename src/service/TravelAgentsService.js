import {apiService} from "./BaseService";

export default {

    getTravelAgent(tenant_id,) {
        return apiService.Client.get(`/api/${tenant_id}/business/travel-agents`)
    },

    VerifyBusiness(tenant_id,payload) {
        return apiService.Client.patch(`api/${tenant_id}/business/verify`, payload)
    },

    getUserWallet(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/${user_id ? user_id : null}?`)
    },

    getTransactionSummary(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/transactions/summary/${user_id}?`)
    },

    getUserTransactions(tenant_id, user_id){
        return apiService.Client.post(`/api/${tenant_id}/wallet/transactions/${user_id}?`)
    },

    getATransactions(tenant_id, id){
        return apiService.Client.get(`/api/${tenant_id}/wallet/transaction/${id}`)
    },

    fundTransfer(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/wallet/transfer`, payload)
    },
    getAgentsTeamMembers(tenant_id, user_id){
        return apiService.Client.get(`/api/${tenant_id}/user/${user_id}?`)
    },

    createAccountOfficer(tenant_id, travel_agent_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/account_officer/${travel_agent_id}`, payload)
    },

    getAccountOfficer(tenant_id, travel_agent_id){
        return apiService.Client.get(`/api/${tenant_id}/account_officer/${travel_agent_id}`)
    },

    updateAccountOfficer(tenant_id, travel_agent_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/account_officer/${travel_agent_id}`, payload)
    },

    updateAccountOfficerStatus(tenant_id, travel_agent_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/account_officer/${travel_agent_id}`, payload)
    },


}