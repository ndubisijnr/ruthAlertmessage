import { apiService } from "./BaseService";
import storeUtils from "../utils/storeUtils";
export default {
    // post requests
    async postRequest(val, tenant = null) {
        const res = await apiService.Client.post(`api${tenant ? `/${storeUtils.fireAway().global?.getTenant_id}` : ''}/${val.path}`, val.payload, val?.config)
        return res
    },
    // get requests
    async getRequest(val, tenant = null) {
        const res = await apiService.Client.get(`api${tenant ? `/${storeUtils.fireAway().global?.getTenant_id}` : ''}/${val.path}${val.payload ? val.payload : ''}`)
        return res
    },
    // put requests
    async putRequest(val, tenant = null) {
        const res = await apiService.Client.put(`api${tenant ? `/${storeUtils.fireAway().global?.getTenant_id}` : ''}/${val.path}`, val?.payload)
        return res
    },
    // put requests
    async patchRequest(val, tenant = null) {
        const res = await apiService.Client.patch(`api${tenant ? `/${storeUtils.fireAway().global?.getTenant_id}` : ''}/${val.path}`, val?.payload)
        return res
    },
}