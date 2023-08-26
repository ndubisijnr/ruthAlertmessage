import {apiService} from "../BaseService";

export default {
    getDomains(tenant_id){
        return apiService.Client.get(`/api/${tenant_id}/domains`)
    }
}