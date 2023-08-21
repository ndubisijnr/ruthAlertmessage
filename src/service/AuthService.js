import {apiService} from "./BaseService";
export default {

    initiateLogin(tenant_id,payload) {
        return apiService.Client.post(`api/${tenant_id}/auth/login`, payload)
    },

    initiateRegister(tenant_id, payload) {
        return apiService.Client.post(`api/${tenant_id}/auth/register`,payload)
    },

    initiateVerifyEmail(tenant_id,payload) {
        return apiService.Client.post(`api/${tenant_id}/auth/verify_email`,payload)
    },

    initiateResendVerifyEmail(tenant_id,payload) {
        return apiService.Client.post(`api/${tenant_id}/auth/resend_verify_email`,payload)
    },

    getTenantId(hostname){
        return apiService.Client.get(`/api/tenant/${hostname}`)
    },

    updateBusinessProfile(tenant_id, payload){
        return apiService.Client.patch(`api/${tenant_id}/business`,payload)
    },

    upload(tenant_id, payload){
        return apiService.Client.post(`api/${tenant_id}/business/upload`, payload)
    }


}