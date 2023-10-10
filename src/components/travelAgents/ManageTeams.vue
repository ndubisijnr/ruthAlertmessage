<template>
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
                <DomainTable :fields="membersFields" :data="getAgentTeams" empty-message="No Team Members Found">

                </DomainTable>
            </div>
        </div>

    </Index>

</template>

<script>
import Index from '../../views/travelAgents/Index.vue';
import storeUtils from '../../utils/storeUtils';
import DomainTable from '../tables/DomainTable.vue';

export default{
    name:"Manage_Teams",

    components:{
        Index,
        DomainTable
    },

    data(){
        return{
            membersFields:[
        {key:"name", label:"Name"},
        {key:"email", label:"Email Address"},
        {key:"type", label:"Role"},
        {key:"created_at", label:"Date Added"},
        {key:"status", label:"Member Status"},
        // {key:"Action", label:"Action",id:"member"},
      ],
        }
    },

    methods:{},

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