import {apiService} from "../BaseService";

export default {

   getMarkupSettings(tenant_id){
       return apiService.Client.get(`/api/${tenant_id}/markups`)
   },

    updateMarkupSettings(tenant_id, payload){
       return apiService.Client.patch(`/api/${tenant_id}/markups`, payload)
   }
}