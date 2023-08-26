import {defineStore} from "pinia"
import Domains from "../service/settingsService/Domains";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";
import Account from "../service/settingsService/Account";
import AuthRequest from "../model/AuthRequest";
import SettingsRequest from "../model/SettingsRequest";
import Teams from "../service/settingsService/Teams";



export const useSettingsStore = defineStore('settingsStore', {
    state:()=>({
        loading:false,
        domains:null,
        personalProfile:null,
        businessProfile:null,
        allRoles:null,
        permissions:null

    }),

    getters:{
        getLoading:state => state.loading,
        getDomains:state => state.domains,
        getPersonalProfile:state => state.personalProfile,
        getBusinessProfile:state => state.businessProfile,
        getAllRoles:state => state.allRoles,


    },

    actions:{

        async getDomainsAction(){
            try{
                const response = await Domains.getDomains(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.domains = responseData.data
                }

            }catch{
                // do nothing
            }

        },

        async getPersonalProfileAction(){
            const userid = JSON.parse(localStorage?.businessProfile)

            try{
                const response = await Account.getPersonalProfile(storeUtils.fireAway().global?.getTenant_id,userid.id)
                let responseData = response.data
                if(responseData.success){
                    this.personalProfile = responseData.data
                }

            }catch{
                // do nothing
            }

        },

        async getBusinessProfileAction(){
            try{
                const response = await Account.getBusinessProfile(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.businessProfile = responseData.data
                }

            }catch{
                // do nothing
            }

        },

        async updateBusinessProfileAction(payload=AuthRequest.businessProfile){
            const userid = JSON.parse(localStorage?.businessProfile)

            this.loading = true
            try{
                const response = await Account.updateBusinessProfile(storeUtils.fireAway().global?.getTenant_id,userid.id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false

                    // standby
                }

            }catch{
                this.loading = false

                // do nothing
            }

        },

        async addTeamMembers(payload=SettingsRequest.inviteNewMember){
            this.loading = true

            try{
                const response = await Teams.invite(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false

                    // standby
                }

            }catch{
                this.loading = false

                // do nothing
            }

        },

        async readAllRoles(){
            this.loading = true

            try{
                const response = await Teams.getAllRoles(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    this.allRoles = responseData.data
                }

            }catch{
                this.loading = false
                // do nothing
            }

        },

        async readAllPermissions(){
            this.loading = true

            try{
                const response = await Teams.getAllPermission(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    this.permissions = responseData.data
                }

            }catch{
                this.loading = false
                // do nothing
            }

        },

    }

})