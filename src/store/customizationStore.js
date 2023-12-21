import {defineStore} from "pinia"
import customizationRequest from "@/model/CustomizationRequest";
import customization from "@/service/customization/customization";
import {catchErrorHandler} from "@/mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";
import {RuthdoAlert} from "ruthly";

export const useCustomizationStore = defineStore('customizationStore', {
    state:()=>({
        loading:false,
        default_theme: {
            color:'#2C6CAC',
            color_light:'#EAF0F7',
            template_id:1,
            favicon:null,
            gradient_color:'linear-gradient(277deg, #D5E2EE 26.44%, rgba(213, 226, 238, 0.58) 56.97%, rgba(213, 226, 238, 0.36) 73.28%, rgba(213, 226, 238, 0.67) 99.44%)'
        }, // default app customization settings
        custom_theme: null, // user's saved customization settings
        templates:null,
        loadingCustomization:false,
        favicon:null,

    }),

    getters:{
        getLoading:state => state.loading,
        getDefault_theme:state => state.default_theme,
        getCustom_theme:state => localStorage.theme ? JSON.parse(localStorage?.theme) : state.custom_theme,
        getTemplates:state => state.custom_theme,
        getLoadingCustomization:state => state.loadingCustomization
    },

    actions:{

        commitColor(payload, type){
            if(type === 'color') this.custom_theme.color = payload;
            if(type === 'template') this.custom_theme.template_id = payload;

        },

        commitFile(payload){
            this.favicon = payload
        },

        async getCustomization(){
            if(!this.custom_theme && storeUtils.fireAway().auth.getIfWasCustomization) this.loadingCustomization = true;
            try{
                const response = await customization.getCustomizationSettings(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                this.loadingCustomization = false

                if(responseData.success){
                    this.custom_theme = responseData.data
                    if(responseData.data.favicon){
                        this.favicon = responseData.data.favicon
                    }
                }

            }catch(err){
                this.loadingCustomization = false

                console.log(err)
            }

        },


        async saveCustomization(payload){
            this.loading = true
            try{
                let response;
                if(payload.favicon){

                    response = await customization.saveFaviconCustomizationSettings(storeUtils.fireAway().global?.getTenant_id, payload)

                }else{
                    response = await customization.saveCustomizationSettings(storeUtils.fireAway().global?.getTenant_id, payload)

                }
                let responseData = response.data
                this.loading = false
                if(responseData.success){
                    await this.getCustomization()
                    await RuthdoAlert({title:"Your changes was saved", icon:'success'})
                }

            }catch(err){
                this.loading = false
                catchErrorHandler(err)
            }

        },

        async handleGetTemplate(){
            try{
                const response = await customization.getAllTemplates(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.templates = responseData.data
                }
            }catch (err){
                catchErrorHandler(err)
            }
        }
    }

})