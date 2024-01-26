import { apiService } from "../BaseService";

export default {

    getMarkupSettings(tenant_id, num, keyword) {
        return apiService.Client.get(`/api/${tenant_id}/markups?page=${num}${!keyword ? '' : `&keyword=${keyword}`}`)
    },

    updateMarkupSettings(tenant_id, payload) {
        return apiService.Client.patch(`/api/${tenant_id}/markups`, payload)
    }
}