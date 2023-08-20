import {defineStore} from "pinia"
import AuthService from "../service/AuthService";
import AuthRequest from "../model/AuthRequest";
export const useGlobalStore = defineStore('globalStore', {
    state:()=>({
        loading:false

    }),

    getters:{
        getLoading:state => state.loading

    },

    actions:{
       async register(payload=AuthRequest.register){
            const response = await AuthService.initiateRegister(payload)

        }
    }

})