import {apiService} from "../BaseService";

export default {
    invite(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/user/invite`, payload)
    } ,


    getAllTeamMembers(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/user`)
    },

    getAllRoles(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/role`)
    },

    getAllPermission(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/permissions`)
    },

    getARole(tenant_id, role_id){
        return apiService.Client.get(`/api/${tenant_id}/role/${role_id}`)
    },

    createARole(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/role`, payload)
    },

    updateARole(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/role`, payload)
    },

    deleteARole(tenant_id, id){
        return apiService.Client.delete(`api/${tenant_id}/role/${id}`)
    }



}