<script>
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import Layout from "@/components/modals/Layout.vue";
import SettingsRequest from "@/model/SettingsRequest";
import {ellipsis} from "@/mixins/lettersExtractor";
import storeUtils from "@/utils/storeUtils";

export default {
  name: "EmailItinerary",
  components: {Layout, OnBoardingButton},
  props:['booking_reference'],
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

    sendEmail(){
    
        storeUtils.fireAway().flight?.handleSendItineneryEmail(this.booking_reference)
      
    },

    select(value, i){
      this.activeSelected = true
      this.activeSelectedIndex = value
      this.model.role_id = i.id
    },

    checkComma(){
      if(this.inputValue.includes(',')) {
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
      return storeUtils.fireAway().flight?.getLoading
    },

    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
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

<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Email Itinerary</p>
        <img src="../../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>


      <div class="main">
        <div class="modal-body">

          <div class="email-area">
            <div class="on_boarding_input">
              <label class="label" :class="{'focused':isFocused}">Email Address</label>
              <input id="invite-input" :class="{'focused':isFocused}" v-model="inputValue" @focus="handleFocus" @focusout="handleFocusOut"  type="email" class="formInput" placeholder="Start by typing an email address" />
          
            </div>

          </div>

        </div>

        <div class="modal-footer">
          <on-boarding-button border="none" :loading="getLoading" @click="sendEmail" :disabled="getLoading" btn-width="100%" text-node="Send"></on-boarding-button>
        </div>

      </div>




    </div>


  </layout>
</template>
<style scoped>
.role-options-wrapper{
  height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
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

.notice{
  display: inline-flex;
  padding: 1rem 1.1875rem 1rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid  #FAF0AB;
  background: #FEFCF1;
  color:  #575A65;
  margin-bottom: .5rem;

  /* caption/12px/regular */
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
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
  margin: 20px auto;
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
  border: 1px solid var(--app-default-primary);
  border-radius: 0.375rem;
  outline: var(--app-default-primary);

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