import {defineStore} from "pinia"
import AuthService from "../service/AuthService";
import {catchErrorHandler} from "../mixins/ErrorHandler";

export const useGlobalStore = defineStore('globalStore', {
    state:()=>({
        isSkipping:false,
        tenant_id:null,

    }),

    getters:{
        getIsSkipping:state => state.isSkipping,
        getTenant_id:state => state.tenant_id

    },

    actions:{
        commitIsSkipping(value){
            this.isSkipping = value
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
                const response = await AuthService.getTenantId('akaraltd.localhost:5173')
                let responseData = response.data
                if(responseData.success){
                    this.tenant_id = responseData.data[0].id
                }

            }catch (err){
                catchErrorHandler(err)
            }

        }
    }

})