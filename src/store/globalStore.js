import { defineStore } from "pinia"
import AuthService from "../service/AuthService";
import { catchErrorHandler } from "../mixins/ErrorHandler";
import { toValue } from "vue";

// function wait(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
// await wait(5000);

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        isSkipping: false,
        tenant_id: null,
        tenant: null,
        verificationType: 'docs',
        error: null,
        isUnauthorised: false,
        tenantLoaded: false,
        tenantLoadedError: null,
        notification:null,
        notificationLoading:false,
        loading:false
    }),

    getters: {
        getIsSkipping: state => state.isSkipping,
        getTenant_id: state => state.tenant_id,
        Tenant: state => state.tenant,
        getVerificationType: state => state.verificationType,
        getError: state => state.error,
        getIsUnauthorised: state => state.isUnauthorised,
        getTenantLoaded: state => state.tenantLoaded,
        getTenantLoadedError: state => state.tenantLoadedError,
        getNotificationLoading:state => state.notificationLoading,
        getLoading:state => state.loading,
        getNotification:state => state.notification,
    },

    actions: {



        commitIsSkipping(value) {
            this.isSkipping = value
        },
        commitError(value) {
            this.error = value
        },

        commitUnauthorised(value) {
            this.isUnauthorised = value
        },

        commitVerificationType(value) {
            this.verificationType = value
        },

        async getTenant() {
            const hostname = location.href

            let newHostName;
            if (hostname.includes('www')) {
                //split off www
                const x = hostname?.split('.').filter((item, index) => {
                    return index !== 0
                })
                // split off / (ending trails)
                newHostName = x?.toLocaleString()?.replace(',', '.')?.split('/')[0]
            } else {
                newHostName = hostname?.split('//')[1]?.split('/')[0]
            }

            // 'focus_travels.localhost'
            // import.meta.env.APP_ENV

            try {
                let tenantDomain = import.meta.env.VITE_ENV === 'dev' ? import.meta.env.VITE_DEFAULT_DOMAN : newHostName
                const response = await AuthService.getTenantId(tenantDomain)
                let responseData = response.data
                if (responseData.success) {
                    this.tenant_id = responseData.data[0].id
                    this.tenant = responseData.data[0]
                    // localStorage.tenant_id = responseData.data[0].id
                    this.tenantLoaded = true
                    return responseData.data
                }

            } catch (err) {
                this.tenantLoadedError = err.data
                return err
                // do nothing
            }
        },

        async getNotifications(){
            this.notificationLoading = true
            try{
                const response =  await AuthService.getNotifications(this.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.notificationLoading = false
                    this.notification = responseData.data
                }

            }catch{
                this.notificationLoading = false
            }

        },

        async markNotificationsAsRead(payload){
            this.loading = true
            try{
                const response =  await AuthService.setNotificationStatus(this.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                }

            }catch{
                this.loading = false
            }

        },

    }

})