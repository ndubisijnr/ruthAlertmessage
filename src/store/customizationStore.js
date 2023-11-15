import {defineStore} from "pinia"
import customizationRequest from "@/model/CustomizationRequest";
import customization from "@/service/customization/customization";
import {catchErrorHandler} from "@/mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";

export const useCustomizationStore = defineStore('customizationStore', {
    state:()=>({
        loading:false,
        default_theme: {
            color:'#2C6CAC',
            color_light:'#EAF0F7',
            gradient_color:'linear-gradient(277deg, #D5E2EE 26.44%, rgba(213, 226, 238, 0.58) 56.97%, rgba(213, 226, 238, 0.36) 73.28%, rgba(213, 226, 238, 0.67) 99.44%)'
        }, // default app customization settings
        custom_theme: null, // user's saved customization settings
        templates:null

    }),

    getters:{
        getLoading:state => state.loading,
        getDefault_theme:state => state.default_theme,
        getCustom_theme:state => state.custom_theme,
        getTemplates:state => state.custom_theme
    },

    actions:{
        async getCustomization(){
            try{
                const response = await customization.getCustomizationSettings(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.custom_theme = responseData.data
                }

            }catch(err){
                console.log(err)
            }

        },

        // async getTemplates(){
        //     try{
        //         const response = await customization.getTemplate(storeUtils.fireAway().global?.getTenant_id)
        //         let responseData = response.data
        //         if(responseData.success){
        //             this.templates = responseData.data
        //         }
        //
        //     }catch(err){
        //         catchErrorHandler(err)
        //     }
        //
        // },
        //

        async saveCustomization(){
            this.loading = true
            try{
                const response = await customization.saveCustomizationSettings(storeUtils.fireAway().global?.getTenant_id, customizationRequest.saveCustomization)
                let responseData = response.data
                this.loading = false
                if(responseData.success){
                   this.custom_theme = responseData.data
                }

            }catch(err){
                catchErrorHandler(err)
            }

        }
    }

})