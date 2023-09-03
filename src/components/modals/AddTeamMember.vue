<template>
  <layout v-slot:children>
    <div v-if="getError !== 'false'" class="modal">
    <div class="modal-header">
      <p class="add-team-member">Add Team Member</p>
      <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
    </div>

    <div class="main">
      <div class="modal-body">

        <div class="email-area">
          <div class="on_boarding_input">
            <label class="label" :class="{'focused':isFocused}">Email Address</label>
            <input id="invite-input" @input="checkComma" :class="{'focused':isFocused}" v-model="inputValue" @focus="handleFocus" @focusout="handleFocusOut"  type="email" class="formInput" placeholder="Start by typing an email address" />
            <div class="add-emails" >
              <div class="emails" v-for="(i, index) in emails" :key="index">
                <span >{{ellipsis(i, 18)}}</span>
                <svg @click="removeEmail(index)" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89617 2.6781C6.94224 2.44942 9.05741 2.44942 11.1035 2.6781C12.2453 2.80571 13.1665 3.70532 13.3005 4.85165C13.5452 6.9434 13.5452 9.05653 13.3005 11.1483C13.1665 12.2946 12.2453 13.1942 11.1035 13.3218C9.05741 13.5505 6.94224 13.5505 4.89617 13.3218C3.75436 13.1942 2.83318 12.2946 2.69911 11.1483C2.45446 9.05653 2.45446 6.9434 2.69911 4.85165C2.83318 3.70532 3.75436 2.80571 4.89617 2.6781ZM5.64628 5.64641C5.84155 5.45114 6.15813 5.45114 6.35339 5.64641L7.99984 7.29286L9.64629 5.64641C9.84155 5.45115 10.1581 5.45115 10.3534 5.64641C10.5487 5.84167 10.5487 6.15826 10.3534 6.35352L8.70695 7.99996L10.3534 9.64641C10.5487 9.84167 10.5487 10.1583 10.3534 10.3535C10.1581 10.5488 9.84155 10.5488 9.64628 10.3535L7.99984 8.70707L6.3534 10.3535C6.15813 10.5488 5.84155 10.5488 5.64629 10.3535C5.45103 10.1583 5.45103 9.84167 5.64629 9.64641L7.29274 7.99996L5.64628 6.35351C5.45102 6.15825 5.45102 5.84167 5.64628 5.64641Z" fill="#2D3139"/>
                </svg>
              </div>

            </div>
          </div>

        </div>

        <div class="choose-role">
          <p class="choose-role-p">Choose Role</p>
          <div class="role-options" v-for="(i, index) in getRoles" @click="select(index, i)">
            <svg v-if="activeSelected && activeSelectedIndex === index"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="20" rx="10" fill="#89128A"/>
              <rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
              <rect x="5" y="5" width="10" height="10" rx="5" fill="#89128A"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#C0CCDA"/>
            </svg>
            <div style="display: flex;align-items: center;gap: 0.5rem">
              <img src="../../assets/Image.png" class="role-image"/>
              <div>
                <p class="p-1">{{ i.name }}</p>
                <p class="p-2" v-if="i.name === 'Super Admin'">Admins will have full access as you</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="modal-footer">
        <on-boarding-button border="none" :loading="getLoading" @click="inviteMember" :disabled="getLoading" btn-width="100%" text-node="Add Member"></on-boarding-button>
        <on-boarding-button @click="close" btn-width="100%" color="#000" text-node="Cancel" background="transparent" border="none"></on-boarding-button>
      </div>

    </div>




  </div>

    <div v-if="getError === 'false'" class="invite-success">
      <div class="invite-success-body">
        <img src="../../assets/invite_success.gif" class="invite-gif" />

        <h4 class="invite-h">Invite sent successful!</h4>

        <p class="invite-p">You have successfully sent an invite to your member</p>
      </div>

      <on-boarding-button @click="close" text-node="Continue" background="#F8F1F8" border="none" color="#89128A"></on-boarding-button>
    </div>

  </layout>
</template>

<script>
import Layout from "./Layout.vue";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import {ellipsis} from "../../mixins/lettersExtractor";
import storeUtils from "../../utils/storeUtils";
import SettingsRequest from "../../model/SettingsRequest";
import {RuthdoAlert} from "ruthly";
import InviteSuccessful from "./InviteSuccessful.vue";
export default {
  name: "AddTeamMember",
  components:{
    Layout,
    OnBoardingButton,
    InviteSuccessful
  },
  data(){
    return{
      inputValue:null,
      isFocused:false,
      activeSelected:null,
      activeSelectedIndex:null,
      model:SettingsRequest.inviteNewMember,
      emails:[],
      ellipsis,
      options:[
          {
            type:"Owner",
            can_do:"Admins will have full access as you"
          },
        {
          type:"Viewer",
          can_do:"View product content"
        },
        {
          type:"Support Team",
          can_do:"Attends to customer’s complaints"
        },
      ]
    }
  },
  methods:{
    close(){
      storeUtils.fireAway().global?.commitError(null)
      this.activeSelectedIndex = null
      this.$emit('close', false)
    },

    inviteMember(){
      this.model.emails = this.emails
      if(this.model.emails.length < 1) RuthdoAlert({title:"Please Add Emails", icon:"error"})
      else if(!this.model.role_id) RuthdoAlert({title:"Please Select a role", icon:"error"})
      else(storeUtils.fireAway().settings?.addTeamMembers(this.model))
        //     .then(() => {
        //   if(this.getError === 'false'){
        //     this.close(false)
        //   }
        // }))
    },

    select(value, i){
     this.activeSelected = true
      this.activeSelectedIndex = value
      this.model.role_id = i.id
    },

    checkComma(){
      if(this.inputValue.includes(',')){
        this.emails.push(this.inputValue.replace(',', ''))
        this.inputValue = null
      }
    },

    handleFocus(){
      this.isFocused = true
    },
    handleFocusOut(){
      this.isFocused = false
    },

    removeEmail(value){
      console.log(value)
      this.emails = this.emails.filter((it, index) => {
        return index !== value
      })

    }

  },

  computed:{
    getRoles(){
      return storeUtils.fireAway().settings?.getAllRoles
    },
    getLoading(){
      return storeUtils.fireAway().settings?.loading
    },

    getError(){
      return storeUtils.fireAway().global?.getError
    }
  },

  mounted() {
     storeUtils.fireAway().settings?.readAllRoles()
  }

}
</script>

<style scoped>
.invite-h{
  color:  #1D1E2C;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  width: 15.625rem;
}

.invite-success-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.invite-p{
  color: #444854;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.invite-gif{
  display: flex;
  width: 11.25rem;
  height: 11.25rem;
  justify-content: center;
  align-items: center;
}
.invite-success{
  display: flex;
  width: 30rem;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  border-radius: 0.625rem;
  background: #FFF;
  margin: 100px auto;
}
.role-image{
  width: 2.35294rem;
  height: 2.35294rem;
  flex-shrink: 0;
  border-radius: 360px;
}
.modal-footer{
  padding-bottom: 2.54rem;
  padding-top: 3rem;
}
.p-1{
  color: #212B36;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.p-2{
  color: #637381;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.role-options{
  display: flex;
  width: 35.8125rem;
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  align-items: center;
  gap: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #EFF2F7;
  margin-bottom: 1.25rem;
  margin-top: 1rem;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .role-options{
    width: 100%;
  }
}

.choose-role-p{
  color:  #1D1E2C;

  /* Medium/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.add-emails{
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: start;
  margin-bottom: 1.25rem;
}
.main{
  margin: 2rem;
}

.emails{
  display: flex;
  width: 13.25rem;
  padding: 0.625rem 0.625rem 0.625rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5rem;
  background: var(--bg, #EFF2F7);
}

@media (max-width: 1024px) {
  .emails{
    width: 100%;
  }
}

.add-team-member{
  color:  #1D1E2C;

  /* 18px/bold */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 155.556% */
}
.modal{
  width: 39.8125rem;
  height: auto;
  margin: 50px auto;
  border-radius: 1rem;
  background:  #FFF;

  /* m3 */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

@media (max-width: 1024px) {
  .modal{
    height: auto;
  }
}

.modal-header{
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  /*gap: 22.5625rem;*/
  background:  #F9FAFC;
  width: 100%;
  border-radius: 1rem;

}

.on_boarding_input{
  position:relative;
  width: 100%;
}

.formInput{
  height: 4rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  padding-top: 1.13rem;
  padding-left:1.25rem;
  margin-bottom: 1rem;
  width:100%;
}



/* .groupedformInput{} */

.formInput.focused{
  padding-top: 1.13rem;
  padding-left:1.25rem;
  border: 1px solid #89128A;
  border-radius: 0.375rem;
  outline: #89128A;

}

.error{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  /* Red */
  color: #FF1F1F;
  margin-top: -10px;
  margin-bottom: 16px;

}



.label.focused{
  position:absolute;
  top:-0.5rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:0.88rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-transform: capitalize;
  line-height: 1.5rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in-out .2s;
  background-color: white;
}

.label{
  position:absolute;
  top:.5rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:1rem;
  text-transform: capitalize;
  line-height: 1.7rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in .2s;
}

@media (max-width:1024px) {
  .formInput{
    width:100% !important;
  }
}

@media (max-width: 1024px) {
  .modal{
    margin: 20px auto;
    width: 90%;
  }
}
</style>