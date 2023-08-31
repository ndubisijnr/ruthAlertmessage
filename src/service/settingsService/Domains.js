import {apiService} from "../BaseService";

export default {
    getDomains(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/domains`)
    },

    deleteDomain(tenant_id, id){
        return apiService.Client.delete(`/api/${tenant_id}/domains/${id}`)
    },

    createDomain(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/domains`, payload)
    },

    makePrimaryDomain(tenant_id, id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/domains/${id}`, payload)
    },

    checkDomain(tenant_id, domain){
        return apiService.Client.get(`/api/${tenant_id}/domains/check/${domain}`)
    },

    checkIfConnected(tenant_id, domain){
        return apiService.Client.get(`/api/${tenant_id}/domains/get_dnsrecords/${domain}`)
    },

    dns(tenant_id,type){
        return apiService.Client.get(`/api/${tenant_id}/domains/dns_config/${type}?`)
    },
}