import {defineStore} from "pinia"
import Domains from "../service/settingsService/Domains";
import {catchErrorHandler} from "../mixins/ErrorHandler";
import storeUtils from "../utils/storeUtils";
import Account from "../service/settingsService/Account";
import AuthRequest from "../model/AuthRequest";
import SettingsRequest from "../model/SettingsRequest";
import Teams from "../service/settingsService/Teams";
import Notification from "../service/settingsService/Notification";
import Markup from "../service/settingsService/Markup";
import {RuthdoAlert} from "ruthly";
import Payment from "../service/settingsService/Payment";



export const useSettingsStore = defineStore('settingsStore', {
    state:()=>({
        loading:false,
        teamLoading:false,
        rolesLoading:false,
        domainLoading:false,
        verificationLoading:false,
        markupLoading:false,
        notificationLoading:false,
        domains:null,
        personalProfile:null,
        businessProfile:null,
        allRoles:null,
        permissions:null,
        notifications:null,
        markup:null,
        members:null,
        domainAvaliability:null,
        domainSuccess:false,
        banks:null,
        bankAccount:null,
        deleteLoading:false,

    }),

    getters:{
        getLoading:state => state.loading,
        getTeamLoading:state => state.teamLoading,
        getRolesLoading:state => state.rolesLoading,
        getDomainLoading:state => state.domainLoading,
        getDomains:state => state.domains,
        getPersonalProfile:state => state.personalProfile,
        getBusinessProfile:state => state.businessProfile,
        getAllRoles:state => state.allRoles,
        getPermissions:state => state.permissions,
        getNotifications:state => state.notifications,
        getMarkup:state => state.markup,
        getMembers:state => state.members,
        getDomainAvaliability:state => state.domainAvaliability,
        getDomainSuccess:state => state.domainSuccess,
        getBanks: state => state.banks,
        getBankAccount: state => state.bankAccount,
        getDeleteLoading: state => state.deleteLoading

    },

    actions:{

        async getDomainsAction(){
            const user = JSON.parse(localStorage?.user)
            if(user.account_type === 'super_admin' || user.account_type === 'admin'){
                this.domainLoading = true
                try{
                    const response = await Domains.getDomains(storeUtils.fireAway().global?.getTenant_id)
                    let responseData = response.data
                    if(responseData.success){
                        this.domainLoading = false
                        this.domains = responseData.data
                    }

                }catch{
                    this.domainLoading = false
                    // do nothing
                }

            }else{
                //
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

        async updateBusinessProfileAction(payload=SettingsRequest.updateBusinessProfile){
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

        async updateProfileAction(payload=SettingsRequest.updateProfileInfo){

            this.loading = true

            try{
                const response = await Account.updateProfileInfo(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:"Success", icon:"success"})
                    // standby
                }

            }catch(err){
                this.loading = false
                catchErrorHandler(err)
                // do nothing
            }

        },

        async addTeamMembers(payload=SettingsRequest.inviteNewMember){
            this.teamLoading = true

            try{
                const response = await Teams.invite(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.teamLoading = false
                    await storeUtils.fireAway().global?.commitError('false')
                    await storeUtils.fireAway().settings?.readAllMembers()
                    // standby
                }

            }catch(err){
                this.teamLoading = false
                await storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
                await storeUtils.fireAway().global?.commitError(null)

                // do nothing
            }

        },

        async updateTeamMember(payload){
            this.teamLoading = true

            try{
                const response = await Teams.updateInvite(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.teamLoading = false
                    await storeUtils.fireAway().settings?.readAllMembers()
                    RuthdoAlert({title:'success', icon:'success'})
                    // standby
                }

            }catch(err){
                this.teamLoading = false
                catchErrorHandler(err)
                await storeUtils.fireAway().global?.commitError(null)

                // do nothing
            }

        },

        async createRole(payload=SettingsRequest.createRole){
            this.rolesLoading = true
            try{
                const response = await Teams.createARole(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.rolesLoading = false
                    await storeUtils.fireAway().global?.commitError('false')
                    await RuthdoAlert({title:responseData.data, icon:'success'})
                    await storeUtils.fireAway().settings?.readAllRoles()
                    // standby
                }
            }catch(err){
                this.rolesLoading = false
                await storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
            }

        },

        async updateRole(payload=SettingsRequest.updateRole){
            this.rolesLoading = true
            try{
                const response = await Teams.updateARole(storeUtils.fireAway().global?.getTenant_id,payload)
                let responseData = response.data
                if(responseData.success){
                    this.rolesLoading = false
                    await storeUtils.fireAway().global?.commitError('false')
                    await RuthdoAlert({title:'Success', icon:'success'})
                    await storeUtils.fireAway().settings?.readAllRoles()
                    await storeUtils.fireAway().global?.commitError(null)

                    // standby
                }
            }catch(err){
                console.log(err)
                this.rolesLoading = false
                storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
                await storeUtils.fireAway().global?.commitError(null)

            }

        },

        async deleteRole(id){
            this.rolesLoading = true
            try{
                const response = await Teams.deleteARole(storeUtils.fireAway().global?.getTenant_id,id)
                let responseData = response.data
                if(responseData.success){
                    this.rolesLoading = false
                    await storeUtils.fireAway().global?.commitError('false')
                    await RuthdoAlert({title:responseData.data, icon:'success'})
                    await storeUtils.fireAway().settings?.readAllRoles()
                    await storeUtils.fireAway().global?.commitError(null)

                    // standby
                }
            }catch(err){
                this.rolesLoading = false
                storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
            }

        },

        async readAllRoles(){
            this.rolesLoading = true

            try{
                const response = await Teams.getAllRoles(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.rolesLoading = false
                    this.allRoles = responseData.data
                }

            }catch{
                this.rolesLoading = false
                // do nothing
            }

        },

        async readAllMembers(){
            this.teamLoading = true
            try{
                const response = await Teams.getAllTeamMembers(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.teamLoading = false
                    this.members = responseData.data
                }

            }catch{
                this.teamLoading = false
                // do nothing
            }

        },

        async readAllPermissions(){
            this.rolesLoading = true

            try{
                const response = await Teams.getAllPermission(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.rolesLoading = false
                    this.permissions = responseData.data
                }

            }catch{
                this.rolesLoading = false
                // do nothing
            }

        },

        async readAllNotification(){
            this.loading = true

            try{
                const response = await Notification.getAllNotifications(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    this.notifications = responseData.data
                }

            }catch{
                this.loading = false
                // do nothing
            }

        },

        async readMarkupSettings(){
            try{
                const response = await Markup.getMarkupSettings(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    this.markup = responseData.data
                }

            }
            catch{
                this.loading = false
                // do nothing
            }

        },

        async updateNotification(payload){
            try{
                const response = await Notification.updateNotificationSettings(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.notifications = responseData.data
                    // do nothing
                }

            }
            catch{
                this.loading = false
                // do nothing
            }
        },

        async createDomain(payload=SettingsRequest.createDomain){
            this.loading = true
            try{
                const response = await Domains.createDomain(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:"Success", icon:'success'})
                    storeUtils.fireAway().global?.commitError('false')
                    await storeUtils.fireAway().settings?.getDomainsAction()
                    await storeUtils.fireAway().global?.commitError(null)
                    // location.reload()
                }

            }
            catch(err){
                this.loading = false
                storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
                await storeUtils.fireAway().global?.commitError(null)

            }
        },

        async makePrimaryDomain(id, payload=SettingsRequest.makePrimaryDomain){
            try{
                const response = await Domains.makePrimaryDomain(storeUtils.fireAway().global?.getTenant_id, id)
                let responseData = response.data
                if(responseData.success){
                    RuthdoAlert({title:responseData.data, icon:'success'})
                }

            }
            catch(err){
                this.loading = false
                catchErrorHandler(err)
            }
        },

        async dns(type){
            this.loading = true
            try{
                const response = await Domains.dns(storeUtils.fireAway().global?.getTenant_id, type)
                let responseData = response.data
                this.loading = false
                if(responseData.success){
                    //do nothing
                }

            }
            catch(err){
                this.loading = false
                catchErrorHandler(err)
            }
        },

        async checkIfConnectedDomain(domain){
            this.loading = true
            try{
                const response = await Domains.checkIfConnected(storeUtils.fireAway().global?.getTenant_id, domain)
                let responseData = response.data
                this.loading = false
                if(responseData.success){
                    let createModel = SettingsRequest.createDomain
                    createModel.domain = domain
                    await storeUtils.fireAway().settings?.createDomain(createModel)
                }else{
                    RuthdoAlert({title:responseData.data, icon:'error'})
                }
            }
            catch(err){
                this.loading = false
                catchErrorHandler(err)
            }
        },

        async deleteDomain(id){
            this.domainLoading = true
            try{
                const response = await Domains.deleteDomain(storeUtils.fireAway().global?.getTenant_id, id)
                let responseData = response.data
                if(responseData.success){
                    this.domainLoading = false
                    RuthdoAlert({title:responseData.data, icon:'success'})
                }

            }
            catch(err){
                this.domainLoading = false
                catchErrorHandler(err)
            }
        },

        async deleteBank(id){
            this.deleteLoading = true
            try{
                const response = await Payment.delete(storeUtils.fireAway().global?.getTenant_id, id)
                let responseData = response.data
                if(responseData.success){
                    this.deleteLoading = false
                    storeUtils.fireAway().global?.commitError('false')
                    RuthdoAlert({title:'Success', icon:'success'})
                    await storeUtils.fireAway().settings?.readBanksAccount()
                    setTimeout(() =>{
                        storeUtils.fireAway().global?.commitError(null)
                    },500)
                }
            }
            catch(err){
                this.deleteLoading = false
                catchErrorHandler(err)
            }
        },

        async checkDomainAvaliability(domain){
            this.domainLoading = true
            try{
                const response = await Domains.checkDomain(storeUtils.fireAway().global?.getTenant_id, domain)
                let responseData = response.data
                if(responseData.success){
                    this.domainLoading = false
                    if(responseData.data === 'AVAILABLE'){
                        this.domainSuccess = true
                    }else{
                        this.domainAvaliability = responseData.data
                    }
                }

            }
            catch(err){
                this.domainLoading = false
                catchErrorHandler(err)
            }
        },

        commitDomainAvaliability(value){
            this.domainAvaliability = value
            this.domainSuccess = false
        },

        async readBanks(){
            try{
                const response = await Payment.bank_list(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.banks = responseData.data?.data
                }

            }
            catch(err){
                catchErrorHandler(err)
            }
        },

        async addBank(payload = SettingsRequest.addBank){
            this.loading = true
            try{
                const response = await Payment.add(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:"Success", icon:"success"})
                    storeUtils.fireAway().global?.commitError('false')
                    await storeUtils.fireAway().settings?.readBanksAccount()
                    setTimeout(() =>{
                        storeUtils.fireAway().global?.commitError(null)
                    },500)
                    //
                }

            }
            catch(err){
                this.loading = false
                storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
                setTimeout(() =>{
                    storeUtils.fireAway().global?.commitError(null)
                },500)
            }
        },

        async updateBank(payload = SettingsRequest.updateBank){
            this.loading = true
            try{
                const response = await Payment.update(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:"Success", icon:"success"})
                    storeUtils.fireAway().global?.commitError('false')
                    await storeUtils.fireAway().settings?.readBanksAccount()
                    setTimeout(() =>{
                        storeUtils.fireAway().global?.commitError(null)
                    },500)
                    //
                }

            }
            catch(err){
                this.loading = false
                storeUtils.fireAway().global?.commitError('true')
                catchErrorHandler(err)
                setTimeout(() =>{
                    storeUtils.fireAway().global?.commitError(null)
                },500)
            }
        },

        async updateMarkup(payload = SettingsRequest.updateMarkup){
            this.loading = true
            try{
                const response = await Markup.updateMarkupSettings(storeUtils.fireAway().global?.getTenant_id, payload)
                let responseData = response.data
                if(responseData.success){
                    this.loading = false
                    RuthdoAlert({title:"Success", icon:"success"})
                    await storeUtils.fireAway().settings?.readMarkupSettings()
                    //
                }

            }
            catch(err){
                this.loading = false
                // catchErrorHandler(err)
            }
        },

        async readBanksAccount(){
            try{
                const response = await Payment.banks(storeUtils.fireAway().global?.getTenant_id)
                let responseData = response.data
                if(responseData.success){
                    this.bankAccount = responseData.data
                }

            }
            catch(err){
                catchErrorHandler(err)
            }
        },

    }

})