import {apiService} from "../BaseService"

export  default {
    getTemplate(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/customizations/templates`)
    },

    getCustomizationSettings(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/customizations`)
    },

    saveCustomizationSettings(tenant_id, payload){
        return apiService.Client.post(`api/${tenant_id}/customizations`, payload)
    }
}