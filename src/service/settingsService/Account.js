import {apiService} from "./BaseService";

export default {
    getPersonalProfile(tenant_id, id){
        return apiService.Client.get(`/api/${tenant_id}/user/profile/${id}`)
    },

    getBusinessProfile(tenant_id, id){
        return apiService.Client.get(`/api/${tenant_id}/business/profile/${id}`)
    },

    updateProfileInfo(tenant_id, id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user/profile/${id}`, payload)
    },

    uploadProfilePhoto(tenant_id, id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user/profile/${id}`, payload)
    },

    deactivateAccount(tenant_id, id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user/profile/${id}`, payload)
    },

    updateBusinessProfile(tenant_id, id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user/profile/${id}`, payload)
    },

}