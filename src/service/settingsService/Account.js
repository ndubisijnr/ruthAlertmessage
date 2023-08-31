import {apiService} from "../BaseService";

export default {
    getPersonalProfile(tenant_id, id){
        return apiService.Client.get(`/api/${tenant_id}/user/profile/${id}`)
    },

    getBusinessProfile(tenant_id, id){
        return apiService.Client.get(`/api/${tenant_id}/business/profile/${id}`)
    },

    updateProfileInfo(tenant_id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user/profile`, payload)
    },

    uploadProfilePhoto(tenant_id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user`, payload)
    },

    deactivateAccount(tenant_id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/user`, payload)
    },

    updateBusinessProfile(tenant_id, payload){
        return apiService.Client.patch(`/api/${tenant_id}/business`, payload)
    },

}