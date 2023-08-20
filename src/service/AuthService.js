import {apiService} from "./BaseService";
export default {

    initiateLogin() {
        return
    },

    initiateRegister(tenant_id, payload) {
        return apiService.Client.post(`api/${tenant_id}/auth/register`,payload)
    },

    initiateVerifyEmail() {
        return
    },

    initiateResendVerifyEmail() {
        return
    },

    getTenantId(hostname){
        return apiService.Client.get(`/api/tenant/${hostname}`)
    }


}