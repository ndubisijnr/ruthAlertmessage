import {apiService} from "./BaseService";

export default {

    getTravelAgent(tenant_id,) {
        return apiService.Client.get(`/api/${tenant_id}/business/travel-agents`)
    },

    VerifyBusiness(tenant_id,payload) {
        return apiService.Client.patch(`api/${tenant_id}/business/verify`, payload)
    },


}