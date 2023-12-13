<template>
    <div v-if="inModal" class="layout-modal">
    <div class="delete-card-option">
      <div class="card-header">
        <p class="card-header-h">Confirm Action</p>
      </div>

      <div style="margin: 2rem">
        <p class="are-you-sure">Are you sure you want to deactivate this team member?</p>

        <p class="are-you-sure-p">You're about to remove an invited user; the user will be unable to join until you send a new invitation. This action is irreversible.</p>
      </div>

      <div class="card-footer">
        <p @click="cancelAction">Cancel</p>
        <on-boarding-button :loading="deleteLoading" :disabled="deleteLoading" @click="deleteBankAction" btn-width="11.0625rem" border="none" background="#F04444" text-node="Deactivate"></on-boarding-button>
      </div>

    </div>
  </div>
  <div v-if="viewingAgent"  class="layout-modal">
    <div class="veiw-agent-card-option">
      <div class="card-header">
        <p class="card-header-h">Personal Information</p>
      </div>

      <div class="inner_head">
            <div class="profile" :style="agentPayload?.logo ? {backgroundImage:`url(${agentPayload?.logo})`} : null">
              <div v-if="!agentPayload?.logo">
                <p style="text-transform: capitalize;">{{ getFirstLettersOfFirstAndLastName(agentPayload?.first_name + ' ' + agentPayload?.last_name) }}</p>
              </div>
            </div>
            <div>
              <p class="upload_business_logo">{{agentPayload?.first_name + ' ' + agentPayload?.last_name}}</p>
              <div style="margin-bottom: 1rem; display: flex;gap:1.06rem;">
                <p v-if="agentPayload?.phone" class="size_limit">{{agentPayload?.phone}}</p>
                <p v-else class="size_limit">-------</p>
                 <p class="account_type" v-if="agentPayload?.is_corporate === 'true'">Corporate Manager</p>
                 <p class="account_type" v-else>Personal Manager</p>
              </div>
              <p class="size_limit">{{ agentPayload?.email }}</p>

            </div>
          </div>



    </div>
  </div>
    <Index v-slot:children>
        <div>
            <div>
                <p>Teams</p>
            </div>

            <div>
                <div class="search_filter">
            <div class="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#9DA8B6"/>
                  <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="#9DA8B6"/>
                </svg>
                <input type="search" style="outline: none;border: none;width: 19.4rem" placeholder="Search by IDs, names etc"/>
            </div>
          </div>
                <DomainTable :fields="membersFields" @emitviewAgent="payload" @agentDeactive="value => inModal=value" :data="getAgentTeams" empty-message="No Team Members Found">

                </DomainTable>
            </div>
        </div>

    </Index>

</template>

<script>
import Index from '../../views/travelAgents/Index.vue';
import storeUtils from '../../utils/storeUtils';
import DomainTable from '../tables/BaseTable.vue';
import OnBoardingButton from '../Buttons/OnBoardingButton.vue';

export default{
    name:"Manage_Teams",


    components:{
        Index,
        DomainTable,
        OnBoardingButton
    },

    data(){
        return{
            inModal:false,
            agentPayload:null,
            viewingAgent:false,
            membersFields:[
        {key:"name", label:"Name"},
        // {key:"email", label:"Email Address"},
        {key:"type", label:"Role"},
        {key:"created_at", label:"Date Added"},
        {key:"status", label:"Member Status"},
        {key:"Action", label:"Action",id:"team"},
      ],
        }
    },

    methods:{
        cancelAction(){
            this.inModal = !this.inModal
            this.viewingAgent =  !this.viewingAgent
        }, 

        viewAgent(payload){
            this.agentPayload = payload.obj
            this.viewingAgent = payload.showing
        }
    },

    computed:{
        getAgentTeams(){
            return storeUtils.fireAway().travelAgent?.getAgentTeams
        }
    },

    mounted(){
        const travelAgent = JSON.parse(localStorage.travelAgent)
        storeUtils.fireAway().travelAgent?.readAgentMembers(travelAgent.id)
    }

}

</script>

<style scoped>
.veiw-agent-card-option{
    display: flex;
    padding: 1.5rem 4.5rem 1.5rem 1.5rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 1px 0px #BBB;
  background:  #F9FAFC;
    
}

.empty_area{
  justify-content: center;
  align-items: center;
  display: flex;
  height: 200px;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
}
.deactivate{
  color: #F04444;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}
.menu{
  display: inline-flex;
  /*padding: 1.5rem;*/
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  width: 12.87rem;
  position: absolute;

  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.layout-modal{
  background: #00000065;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  position: fixed;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-card-option{
  width: 34rem;
  height: 23.25rem;
  border-radius: 0.5rem;
  background:  #FFF;
  position: relative;
  /* Shadows / Modals */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

.card-header{
  display: flex;
  width: 34rem;
  height: 4.5rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  align-items: center;
  flex-shrink: 0;
  background:  #F9FAFC;
  justify-content: space-between;
}

.card-header-h{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
}

.card-footer{
  display: flex;
  align-items: center;
  gap:2.9rem;
  justify-content: flex-end;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 100%;
}


.filter{
  display: flex;
  gap: 1.25rem;
}

.search_filter{
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-span{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.search{
  display: flex;
  width: 15.4375rem;
  padding: 0.5rem 5rem 0.5rem 1.25rem;
  align-items: center;
  gap: 1.0625rem;
  flex-shrink: 0;
  outline:none;
  border-radius: 0.375rem;
  border: 0.6px solid #E5E9F2;
  background: #FFF;
}

.wallet_balance{
    color: var(--3, #6A8297);
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.manage_wallet_main_wrapper{
}

.filter-div{
  background: #FFFFFF;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.balance{
    color: var(--3, #6A8297);
font-family:'Product Sans';
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.user-name{
  color: #000;
  /* Headings/32px/bold */
  font-family: 'Product Sans';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.625rem; /* 131.25% */
  text-transform: capitalize;
}

</style>