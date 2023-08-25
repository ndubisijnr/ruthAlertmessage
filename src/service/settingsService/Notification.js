import {apiService} from "./BaseService";

export default {
   getAllNotifications(tenant_id){
       return apiService.Client.get(`/api/${tenant_id}/notifications`)
   },

    updateNotificationSettings(tenant_id,payload){
       return apiService.Client.patch(`/api/${tenant_id}/notifications`, payload)
    }
}