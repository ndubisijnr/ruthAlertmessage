import {apiService, appClientImgUpload} from "./BaseService";
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

    initiateForgotPassword(tenant_id,payload) {
        return apiService.Client.post(`/api/${tenant_id}/auth/forgot_password`,payload)
    },

    resetPassword(tenant_id,payload) {
        return apiService.Client.post(`/api/${tenant_id}/auth/reset_password`,payload)
    },

    getTenantId(hostname){
        return apiService.Client.get(`/api/tenant/${hostname}`)
    },

    updateBusinessProfile(tenant_id, payload){
        return apiService.Client.patch(`api/${tenant_id}/business`,payload)
    },

    upload(tenant_id, payload){
        return appClientImgUpload.post(`api/${tenant_id}/business/upload`, payload)
    },

    getBusinessProfile(tenant_id){
        return apiService.Client.get(`api/${tenant_id}/business`)
    },

    changeInvitedUserPassword(tenant_id, payload){
        return apiService.Client.post(`/api/${tenant_id}/auth/change_invited_password`, payload)
    },

     changePassword(tenant_id,payload){
        return apiService.Client.post(`/api/${tenant_id}/auth/change_password`,payload)
    },

    deActivateAccount(tenant_id, user_id, payload){
        return apiService.Client.patch(`api/${tenant_id}/user/profile/${user_id}`, payload)
    }



}