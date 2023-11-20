import {apiService} from "../BaseService"
import {appClientImgUpload} from "../BaseService";

export  default {
    getCustomizationSettings(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/customizations`)
    },

    saveCustomizationSettings(tenant_id, payload){
        return apiService.Client.post(`api/${tenant_id}/customizations`, payload)
    },

    getAllTemplates(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/customizations/templates`)
    }
}