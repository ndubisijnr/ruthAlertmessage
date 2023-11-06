<template>
  <div v-show="inModal" class="layout-modal">
    <div class="delete-card-option">
      <div class="card-header">
        <p class="card-header-h">Confirm Action</p>
      </div>

      <div style="margin: 2rem">
        <p class="are-you-sure">Are you sure you want to delete this bank account?</p>

        <p class="are-you-sure-p">You're about to remove this bank {{bankName?.bank_name}}; This action is irreversible.</p>
      </div>

      <div class="card-footer">
        <p @click="cancelAction">Cancel</p>
        <on-boarding-button :loading="deleteLoading" :disabled="deleteLoading" @click="deleteBankAction" btn-width="11.0625rem" border="none" background="#F04444" text-node="Yes, Delete"></on-boarding-button>
      </div>

    </div>

  </div>

  


  <div class="table-container">
    <table class="table">
      <thead class="th">
        <tr v-for="h in fields" :key="h.key" class="table-cell table-header">
          <th class="table-label">{{ h.label }}</th>
        </tr>
      </thead>
      <tbody class="tr" v-if="data?.length > 0">
        <tr v-for="h in fields" :key="h.key" class="table-cell">
          <td  @click="table_row_onclick_action(j)" class="table-row" v-for="(j, index) in isPaginate ? paginate(data, currentPage, itemsPerPage) : filteredResult.length > 0 ? filteredResult : data">
               <!-- template {domain status}  -->
               <span class="connected" :class="{'pending':j.active !== 1}" v-if="h.label.toLowerCase() === 'status'">{{ j.active === 1 ? 'Connected ': 'Pending' }}</span>

               <span  v-else-if="h.label === 'Member Status'" :style="j.status === 'pending' ? {color:'#F1D302'} : j.status === 'active' ? {color: '#159D54'} : {color:'#F04444'}">
                 <svg v-if="j.status === 'pending'" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#F1D302"/>
                 </svg>

                 <svg v-else-if="j.status === 'active'" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#159D54"/>
                </svg>

                 <svg v-else xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#F04444"/>
                </svg>

                 {{ j.status }}</span>


            <!-- template {domain is_primary}  -->

            <span v-else-if="h.label.toLowerCase() === 'domain name' && j.is_primary === 1">
              {{ j.domain}} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15 8.25C14.8011 8.25 14.6103 8.32902 14.4697 8.46967C14.329 8.61032 14.25 8.80109 14.25 9V13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9C9.19891 3.75 9.38968 3.67098 9.53033 3.53033C9.67098 3.38968 9.75 3.19891 9.75 3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25Z" fill="black"/>
                  <path d="M12.0004 3.75H13.1854L8.46794 8.46C8.39765 8.52972 8.34185 8.61267 8.30377 8.70407C8.2657 8.79546 8.24609 8.89349 8.24609 8.9925C8.24609 9.09151 8.2657 9.18954 8.30377 9.28093C8.34185 9.37233 8.39765 9.45528 8.46794 9.525C8.53766 9.5953 8.62062 9.65109 8.71201 9.68917C8.8034 9.72724 8.90143 9.74685 9.00044 9.74685C9.09945 9.74685 9.19748 9.72724 9.28888 9.68917C9.38027 9.65109 9.46322 9.5953 9.53294 9.525L14.2504 4.815V6C14.2504 6.19891 14.3295 6.38968 14.4701 6.53033C14.6108 6.67098 14.8015 6.75 15.0004 6.75C15.1994 6.75 15.3901 6.67098 15.5308 6.53033C15.6714 6.38968 15.7504 6.19891 15.7504 6V3C15.7504 2.80109 15.6714 2.61032 15.5308 2.46967C15.3901 2.32902 15.1994 2.25 15.0004 2.25H12.0004C11.8015 2.25 11.6108 2.32902 11.4701 2.46967C11.3295 2.61032 11.2504 2.80109 11.2504 3C11.2504 3.19891 11.3295 3.38968 11.4701 3.53033C11.6108 3.67098 11.8015 3.75 12.0004 3.75Z" fill="black"/>
                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#7B61FF"/>
                </svg> <span class="primary">Primary</span>
            </span>


            <!-- template {actions}  -->
            <div v-else-if="h.label.toLowerCase() === 'action'">
              <span @click="currentActionIndex = index, show=!show" style="cursor: pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none">
                      <path d="M3.86744 2.58888C3.86751 2.83416 3.81928 3.07706 3.72549 3.3037C3.63169 3.53034 3.49418 3.73629 3.32079 3.90979C3.14741 4.08329 2.94155 4.22093 2.71497 4.31487C2.48838 4.40881 2.24552 4.4572 2.00024 4.45728C1.75495 4.45736 1.51206 4.40913 1.28541 4.31533C1.05877 4.22154 0.852823 4.08402 0.679326 3.91064C0.505829 3.73725 0.368183 3.53139 0.274244 3.30481C0.180305 3.07823 0.131915 2.83536 0.131836 2.59008C0.131677 2.09471 0.32831 1.61956 0.678478 1.26917C1.02865 0.918777 1.50366 0.721839 1.99904 0.72168C2.49441 0.721521 2.96955 0.918154 3.31995 1.26832C3.67034 1.61849 3.86728 2.09351 3.86744 2.58888Z" fill="black"/>
                      <path d="M2.00001 10.8665C3.03124 10.8665 3.86721 10.0305 3.86721 8.99928C3.86721 7.96805 3.03124 7.13208 2.00001 7.13208C0.968786 7.13208 0.132812 7.96805 0.132812 8.99928C0.132812 10.0305 0.968786 10.8665 2.00001 10.8665Z" fill="black"/>
                      <path d="M2.00001 17.2781C3.03124 17.2781 3.86721 16.4421 3.86721 15.4109C3.86721 14.3797 3.03124 13.5437 2.00001 13.5437C0.968786 13.5437 0.132812 14.3797 0.132812 15.4109C0.132812 16.4421 0.968786 17.2781 2.00001 17.2781Z" fill="black"/>
                    </svg>
             </span>

              <div class="menu" v-show="currentActionIndex === index && show">
                <!-- template {team} -->
                <div v-if="h.id === 'member'">
                  <p class="menu-item">Edit Member</p>
                  <p class="menu-item deactivate">Deactivate Member</p>

                </div>

                 <!-- template {agent_team} -->
                 <div v-if="h.id === 'team'">
                  <p class="menu-item" @click="viewAgent(j)">View Agent</p>
                  <p class="menu-item deactivate" @click="confirmDeactiveAgent">Deactivate Agent</p>

                </div>

                <!-- template {roles} -->
                <div v-if="h.id === 'role'">
                  <p class="menu-item" @click="editRole(j)">Edit Role</p>
<!--                  <p class="menu-item deactivate" >Delete Role</p>-->

                </div>


                <div v-if="h.id === 'travel_agent_action'">
                  <p class="menu-item deactivate">Deactivate Agent</p>

                </div>

              </div>

            </div>



            <!-- template {team member full name}  -->

            <span  v-else-if="h.label.toLowerCase() === 'name'">{{j.first_name}} {{j.last_name}}</span>


            <!-- template {bookings user fullname} -->

            <span  v-else-if="h.label === 'Customer’s Name'">{{j.contact_first_name}} {{j.contact_last_name}}</span>

             <!-- template {bookings status} -->

             <span v-else-if="h.label === 'Status_'" :style="j.status === 'reserved' ? {'text-transform':'Capitalized', 'color':'#F1D302'} : j.status === 'issued' ? {'text-transform':'Capitalized', 'color':'#159D54'} : {'text-transform':'Capitalized', 'color':'#F04444'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                 <circle cx="3" cy="3" r="3" :fill="j.status === 'reserved' ? '#F1D302' : j.status === 'issued' ? '#159D54' : '#F04444' "/>
              </svg> {{j.status}}  <svg style="margin-left: 20px;cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none">
                <path d="M3.86719 2.58888C3.86727 2.83416 3.81904 3.07706 3.72524 3.3037C3.63145 3.53034 3.49393 3.73629 3.32055 3.90979C3.14716 4.08329 2.9413 4.22093 2.71472 4.31487C2.48814 4.40881 2.24527 4.4572 1.99999 4.45728C1.75471 4.45736 1.51181 4.40913 1.28517 4.31533C1.05853 4.22154 0.852579 4.08402 0.679082 3.91064C0.505585 3.73725 0.367938 3.53139 0.274 3.30481C0.180061 3.07823 0.131671 2.83536 0.131592 2.59008C0.131433 2.09471 0.328066 1.61956 0.678234 1.26917C1.0284 0.918777 1.50342 0.721839 1.99879 0.72168C2.49416 0.721521 2.96931 0.918154 3.3197 1.26832C3.67009 1.61849 3.86703 2.09351 3.86719 2.58888Z" fill="#1D1E2C"/>
                <path d="M2.00001 10.8662C3.03124 10.8662 3.86721 10.0303 3.86721 8.99904C3.86721 7.96781 3.03124 7.13184 2.00001 7.13184C0.968786 7.13184 0.132812 7.96781 0.132812 8.99904C0.132812 10.0303 0.968786 10.8662 2.00001 10.8662Z" fill="#1D1E2C"/>
                <path d="M2.00001 17.2783C3.03124 17.2783 3.86721 16.4424 3.86721 15.4111C3.86721 14.3799 3.03124 13.5439 2.00001 13.5439C0.968786 13.5439 0.132812 14.3799 0.132812 15.4111C0.132812 16.4424 0.968786 17.2783 2.00001 17.2783Z" fill="#1D1E2C"/>
              </svg>
            </span>

            <!-- template {team member agent type}  -->

            <span  v-else-if="h.label.toLowerCase() === 'status'">{{j.type}}</span>


            <!-- template {agent balance}  -->

            <span v-else-if="h.label.toLowerCase() === 'wallet balance'">₦ {{j.wallet.balance}}</span>


            <!-- template {roles number}  -->
            <span  v-else-if="h.label.toLowerCase() === 'no.of member'">{{j?.users?.length}}</span>

            <!-- template {roles number}  -->
            <span v-else-if="h.key === 'created_at'">{{convertToWord(j?.created_at)}}</span>

             <!-- template {is_coporate number}  -->
             <span v-else-if="h.key === 'is_corporate'">{{ j.is_corporate === 'true' ? 'Coorporate' : 'Personal' }}</span>


            <!-- template {permission number}  -->
            <span v-else-if="h.label.toLowerCase() === 'no.of permission'">{{j?.permissions?.length}}</span>


            <span v-else> {{ j[h.key]}}</span>

          </td>
      </tr>
    </tbody>
    <div class="empty_area" v-else>
      <slot name="emptyIcon"></slot>
      <p>{{ emptyMessage }}</p>
    </div>
  </table>

    <div v-show="isPaginate" class="paginate" v-if="getTotalPage > 1">
      <div style="width: 100%">Total Pages: {{getTotalPage}}</div>
      <div class="paginate_num">
        <img src="../../assets/Icons/Settings/leftArrows.svg" @click="currentPage=currentPage - 1" />
        <div @click="currentPage=i" :class="{'activePage':i===currentPage}" class="pag_item" v-for="i in getTotalPage">
          <span >{{i}}</span>
        </div>
        <img src="../../assets/Icons/Settings/rightArrow.svg" @click="currentPage=currentPage + 1"/>
      </div>
    </div>
  </div>

</template>

<script>
import {convertToWord} from "../../mixins/lettersExtractor";
import paginate from "../../mixins/paginate";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import SettingsRequest from "../../model/SettingsRequest";
import storeUtils from "../../utils/storeUtils";
import router from "../../router";

export default {
  name: "DomainTable",
  props:['data', 'fields','isPaginate','emptyMessage'],
  components:{OnBoardingButton},
  data(){
    return{
      convertToWord,
      currentPage:1,
      itemsPerPage:20,
      paginate,
      currentActionIndex:null,
      show:false,
      filteredResult:[],
      inModal:false,
      model:SettingsRequest.updateRole,


    }
  },

  methods:{
    readAgent(obj){
      localStorage.userWallet = JSON.stringify(obj.wallet)
      storeUtils.fireAway().travelAgent?.handleGetUser(obj)
    },
    editRole(obj){
      this.model.name = obj?.name
      this.model.permission_ids = obj?.permissions.map(item => item.id)
      this.$emit('updatingRole', true)

    },

    table_row_onclick_action(obj){
      if(this.getCurrentRoute.toLowerCase() === 'travel agents'){
        this.readAgent(obj)
      }

    },
    

    confirmDeactiveAgent(){
      this.$emit('agentDeactive', true)
    },

    viewAgent(obj){
      this.$emit('emitviewAgent', {showing:true, obj:obj})
    }

  },

  computed:{
    getTotalPage(){
        return Math.ceil(Number(this.data?.length) / Number(this.itemsPerPage))
    },

    getCurrentRoute(){
      return router.currentRoute.value.name
    }
}
}
</script>

<style scoped>

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
  /*background: #00000065;*/
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



.menu-item{
  /*border: solid;*/
  text-align: left;
  margin: 1.31rem;
  text-transform: capitalize;
  cursor: pointer;
}
.activePage{
  border-left: 0.6px solid  #E5E9F2;
  background:  #E5E9F2;
}
.paginate_num{
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.pag_item{
  width: 2.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: 0.6px solid var(--secondarytext-default-text-textfield, #E5E9F2);
}

.paginate{
  display: flex;
  background: #ffffff;
  height: 3.5rem;
  padding: 0.875rem 0.75rem 0.625rem 0.75rem;
  justify-content: space-evenly;
  align-items: center;
  gap: 42.625rem;
  flex-shrink: 0;
}
.table-container {
  /* width: 68.625rem; */
  overflow-x: scroll;
  justify-content: center;
  margin-top: 0.25rem;
  /*margin-bottom: 13rem;*/

}

@media (max-width: 1024px) {
  .table-container{
    overflow-x: scroll;
    width: max-content;
  }
}

.primary{
  color: #7B61FF;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
  padding-left: 0.25rem;
}

.connected{
  border-radius: 1.5rem;
  background: #F2FDF7;
  display: inline-flex;
  padding: 0.375rem 0.625rem;
  align-items: flex-start;
  gap: 0.625rem;
  color: #159D54;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
  width: auto !important;
}

.pending{
  border-radius: 1.5rem;
  background: rgba(202, 80, 16, 0.05);
  color: #CA5010;
  display: inline-flex;
  padding: 0.375rem 0.625rem;
  align-items: flex-start;
  gap: 0.625rem;
}

.table {
  /* border-collapse: collapse; */
  width: 100%;
  margin: 0 auto;

}

.table-label{
  color:  #1D1E2C;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  text-align: start;
  width: 100%;
  padding-left: 1rem;
}

.th {
  display: flex;

}

.table-header {
  flex: 1;
  background-color: #EFF2F7;
  text-align: left;
  font-weight: bold;
  display: flex;
  height: 3.5rem;
  align-items: center;
  gap: 13.75rem;
  width: 100%;
}

.tr {
  display: flex;
  width: auto;
  height: auto;
  background: white;
}



.table-cell {
  flex: 1;

}

.table-row {
  display: flex;
  align-items: center;
  justify-content: start;
  /*width: 100%;*/
  height: 3.5rem;
  text-align: justify-all;
  text-transform:lowercase;
  color:  #1D1E2C;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */

}

.table-row span {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  text-transform: capitalize;
  padding-left: 1rem;

}

.table-row span:hover{
  cursor: pointer;
}

@media (max-width: 1024px) {
  .tr{
    width: auto;
  }
}

::-webkit-scrollbar{
  display: none;
}

</style>