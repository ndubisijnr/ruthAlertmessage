import {defineStore} from "pinia"
import AuthService from "../service/AuthService";
import AuthRequest from "../model/AuthRequest";
import storeUtils from "../utils/storeUtils";
import router from "../router";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import {RuthdoAlert} from "ruthly";
export const useAuthStore = defineStore('authStore', {
    state:()=>({
        loading:false,
        token:null,
        errors:null,
        user:null,
        businessProfile:null

    }),

    getters:{
        getLoading:state => state.loading,
        getErrors:state => state.errors,
        User:state => state.user,

    },

    actions:{

       commitErrors(obj){
            this.errors = obj
        },

       async register(payload=AuthRequest.register){
           this.loading = true
            console.log(this.errors)
            if(router.currentRoute.value.params.user_type === "cooperate_manager"){
                payload.is_corporate = true
            } else {
                payload.is_corporate = false
            }

            try {

                const response = await AuthService.initiateRegister(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if (responseData.success) {
                    this.loading = false
                    await router.push({name: "OtpCard", query: {email: AuthRequest.register.email}})
                }
            }catch (err){
                this.loading = false
                catchErrorHandler(err, this.errors)
                console.log(this.errors)

            }

        },

       async login(payload=AuthRequest.login){
            this.loading = true
            try {

                const response = await AuthService.initiateLogin(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if (responseData.success) {
                    this.loading = false
                     localStorage.user = JSON.stringify(responseData.data)
                      this.token = responseData.data.access_token
                      localStorage.token = responseData.data.access_token
                    console.log(responseData)
                     if(responseData.data.is_corporate === 'true'){
                         await router.push({name: "BusinessInfo", params: {token:responseData.data.access_token.slice(0,20)}})
                     }else{
                         await router.push({name: "UploadDocs", params: {token:responseData.data.access_token.slice(0,20)}})
                     }
                }
            }catch (err){
                this.loading = false
                catchErrorHandler(err)
            }

        },

       async resendOtp(payload = AuthRequest.resendVerifyEmail){
            payload.email = router.currentRoute.value.query.email
            try{
                this.loading = true
                const response = await AuthService.initiateResendVerifyEmail(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:responseData.data, icon:'success'})
                }
            }
            catch (err) {
                this.loading = false
                catchErrorHandler(err,  payload.email)
            }

        },

       async verifyEmail(payload = AuthRequest.verifyEmail){
            payload.email = router.currentRoute.value.query.email
            try{

                this.loading = true
                const response = await AuthService.initiateVerifyEmail(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data

                if(responseData.success){
                    this.loading = false
                    await router.push({name:"SuccessRegistrationCard", params:{token:responseData.data?.access_token?.slice(0,20)}})
                    this.token = responseData.data?.access_token
                    this.user=responseData.data
                    localStorage.user=JSON.stringify(responseData.data)
                }
            }
            catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        },


       async updateBusinessProfile(payload = AuthRequest.businessProfile){
            try{

                this.loading = true
                const response = await AuthService.updateBusinessProfile(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data

                if(responseData.success){
                    const user = JSON.parse(localStorage?.user)
                    this.loading = false
                    await router.push({name:"UploadDocs", params:{token:this.token ? this.token.slice(0,20): user.access_token.slice(0,20)}})
                    this.businessProfile = responseData.data
                    localStorage.businessProfile=JSON.stringify(responseData.data)
                }
            }
            catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        },


        async getBusinessProfile(){
            try{
                const response = await AuthService.getBusinessProfile(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data

                if(responseData.success){
                    this.businessProfile = responseData.data
                    localStorage.businessProfile=JSON.stringify(responseData.data)
                }
            }
            catch (err) {
                catchErrorHandler(err)
            }
        },

        async handleUploadProfilePic(payload){
            try{
                this.loading = true
                const response = await AuthService.upload(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data

                if(responseData.success){
                    this.loading = false
                    console.log(responseData)
                }
            }
        catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        }




    }

})