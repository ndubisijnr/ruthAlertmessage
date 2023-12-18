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
        businessProfile:null,
        stage: 'email',
        wasCustomization:false



    }),

    getters:{
        getLoading:state => state.loading,
        getErrors:state => state.errors,
        User:state => state.user,
        getStage:state => state.stage,
        getIfWasCustomization:state => state.wasCustomization

    },

    actions:{

       commitStage(value){
           this.stage = value
       },

       commitErrors(obj){
            this.errors = obj
        },

       async register(payload=AuthRequest.register){
           this.loading = true
            if(router.currentRoute.value.params.user_type === "cooperate_manager"){
                payload.is_corporate = 'true'
            } else {
                payload.is_corporate = 'false'
            }

            try {
                const response = await AuthService.initiateRegister(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if (responseData.success) {
                    this.loading = false
                    await router.push({name: "RegisterOtpCard", query: {email: AuthRequest.register.email}})
                }
            }catch (err){
                this.loading = false
                console.log(err)
                catchErrorHandler(err, this.errors)
            }

        },

       async login(payload=AuthRequest.login){
            this.loading = true
            try {

                const response = await AuthService.initiateLogin(storeUtils.fireAway().global.getTenant_id, payload)
                let responseData = response.data
                if (responseData.success) {
                    if(responseData.customizations) this.wasCustomization = true;
                    localStorage.user = JSON.stringify(responseData.data)
                    this.token = responseData.data.access_token
                    localStorage.token = responseData.data.access_token
                    await storeUtils.fireAway().auth?.getBusinessProfile()
                    await storeUtils.fireAway().settings?.getDomainsAction()
                    localStorage.bookingStage = 'Flight Search'
                    localStorage.progressNav = JSON.stringify([])
                    localStorage.theme = JSON.stringify(responseData.data.customizations)
                    this.loading = false
                    if(responseData.data.account_type === 'super_admin'){
                        await router.push({name: "Dashboard", params: {token:responseData.data.access_token.slice(0,20)}})

                    }else{
                    if(!this.businessProfile.cac_document && !this.businessProfile.id_document){
                        if(responseData.data.account_type === 'manager'){
                            await router.push({name: "UploadDocs", params: {token:responseData.data.access_token.slice(0,20)}})
                        }else{
                            await router.push({name: "BusinessInfo", params: {token:responseData.data.access_token.slice(0,20)}})
                        }
                    }else{
                        await router.push({name: "Dashboard", params: {token:responseData.data.access_token.slice(0,20)}})
                    }
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
                    this.token = responseData.data?.access_token
                    this.user=responseData.data
                    localStorage.user=JSON.stringify(responseData.data)
                    localStorage.token = responseData.data?.access_token
                    await storeUtils.fireAway().auth?.getBusinessProfile()
                    await storeUtils.fireAway().settings?.getDomainsAction()
                    this.loading = false
                    if(responseData.data.account_type === 'super_admin'){
                        await router.push({name: "Dashboard", params: {token:responseData.data.access_token.slice(0,20)}})
                    }else{
                        if(!this.businessProfile.cac_document && !this.businessProfile.id_document){
                            if(responseData.data.account_type === 'manager'){
                                await router.push({name: "UploadDocs", params: {token:responseData.data.access_token.slice(0,20)}})
                            }else{
                                await router.push({name: "BusinessInfo", params: {token:responseData.data.access_token.slice(0,20)}})
                            }
                        }else{
                            await router.push({name: "Dashboard", params: {token:responseData.data.access_token.slice(0,20)}})
                        }
                    }
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
                    await RuthdoAlert({title:'Successful', icon:'success'})
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
                await storeUtils.fireAway().auth?.getBusinessProfile()
                location.reload()
            }
        }
    catch (err) {
            this.loading = false
            catchErrorHandler(err)
        }
    },

       async handleForgotPassword(payload=AuthRequest.forgotPassword){
        try{
            this.loading = true
            const response = await AuthService.initiateForgotPassword(storeUtils.fireAway().global?.getTenant_id,payload)
            let responseData = response.data

            if(responseData.success){
                this.loading = false
                this.stage = 'otp'
                await router.push({name:'OtpCard', query:{email:payload.email}})
            }
        }
        catch (err) {
            this.loading = false
            catchErrorHandler(err)
        }
    },

        async handleResetPassword(payload=AuthRequest.resetPassword){
        try{
            this.loading = true
            const response = await AuthService.resetPassword(storeUtils.fireAway().global?.getTenant_id,payload)
            let responseData = response.data

            if(responseData.success){
                this.loading = false
                this.stage = 'success'
            }
        }
        catch (err) {
            this.loading = false
            catchErrorHandler(err)
        }
    },

        async handleChangePassword(payload=AuthRequest.changePassword){
            try{
                this.loading = true
                const response = await AuthService.changePassword(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data

                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:'Success', icon:'success'})
                }
            }
            catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        },


        async handleChangeNewUserPassword(payload=AuthRequest.changePassword){
            try{
                this.loading = true
                const response = await AuthService.changeInvitedUserPassword(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data

                if(responseData.success){
                    this.loading = false
                    this.stage = 'success'
                }
            }
            catch (err) {
                this.loading = false
                catchErrorHandler(err)
            }
        },


    }

})