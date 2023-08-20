import {defineStore} from "pinia"
import AuthRequest from "../model/AuthRequest";
import AuthService from "../service/AuthService";
import {catchErrorHandler} from "../mixins/ErrorHandler";

export const useGlobalStore = defineStore('globalStore', {
    state:()=>({
        isSkipping:false

    }),

    getters:{
        getIsSkipping:state => state.isSkipping
    },

    actions:{
        commitIsSkipping(value){
            this.isSkipping = value
        },

        async getTenant(){
            const hostname = window.location.url
            try{
                const response = await AuthService.getTenantId('nnbffg.localhost')
                console.log(response.data)

            }catch (err){
                catchErrorHandler(err)
            }

        }
    }

})