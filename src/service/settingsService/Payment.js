import {apiService} from "./BaseService";

export default {

    banks(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/bank`)
    },
    a_Account(tenant_id,id){
        return apiService.Client.get(`/api/${tenant_id}/bank/${id}`)
    },
    bank_list(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/bank/bank-listing`)
    },
    delete(tenant_id, id){
        return apiService.Client.delete(`/api/${tenant_id}/bank/${id}`)
    },
    add(tenant_id){
        return apiService.Client.post(`/api/${tenant_id}/bank`)
    },
    update(tenant_id){
        return apiService.Client.patch(`/api/${tenant_id}/bank`)
    },
    transfer(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/user/transfer`, payload)
    },
    wallet(tenant_id,id){
        return apiService.Client.get(`/api/${tenant_id}/user/wallet/${id}?`)
    },
}