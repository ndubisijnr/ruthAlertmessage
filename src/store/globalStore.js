import {defineStore} from "pinia"
import AuthService from "../service/AuthService";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import {toValue} from "vue";

export const useGlobalStore = defineStore('globalStore', {
    state:()=>({
        isSkipping:false,
        tenant_id:null,
        tenant:null,
        verificationType:'docs',
        error:null

    }),

    getters:{
        getIsSkipping:state => state.isSkipping,
        getTenant_id:state => state.tenant_id ? state.tenant_id : localStorage.tenant_id,
        Tenant:state => state.tenant,
        getVerificationType: state => state.verificationType,
        getError:state => state.error,


    },

    actions:{
        commitIsSkipping(value){
            this.isSkipping = value
        },
        commitError(value){
            this.error = value
        },

        commitVerificationType(value){
            this.verificationType = value
        },

        async getTenant(){
            // const hostname = location.href
            // let newHostName;
            // if(hostname.includes('www')){
            //     //split off www
            //     const x = hostname?.split('.').filter((item, index) => {
            //         return index !== 0
            //     })
            //     // split off / (ending trails)
            //     newHostName = x?.toLocaleString()?.replace(',', '.')?.split('/')[0]
            // }else{
            //     newHostName = hostname?.split('//')[1]?.split('/')[0]
            // }

            try{
                const response = await AuthService.getTenantId('travelease.localhost')
                let responseData = response.data
                if(responseData.success){
                    this.tenant_id = responseData.data[0].id
                    localStorage.tenant_id = responseData.data[0].id
                    this.tenant = responseData.data[0]
                }

            }catch{
                // do nothing
            }

        }
    }

})