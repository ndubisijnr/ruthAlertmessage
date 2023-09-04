<template>
  <layout v-slot:children>
    <div v-if="stage === 'success'" class="improvise">
      <div class="login_card">
        <div style="text-align: center">
          <img src="../../../assets/invite_success.gif" width="180" height="180" />
        </div>
        <div >
          <div class="get_started">
            <p class="lets_get_started_h success-h">Password reset successful!</p>
            <p class="lets_get_started_p success-p">The password to your account has been rest successful </p>
          </div>
          <a href="/login"><on-boarding-button border="none" :id="'Go to login'" text-node="Next" ></on-boarding-button></a>

        </div>
      </div>

    </div>

    <div v-else class="improvise">
      <div class="login_card">
        <div >
          <div class="get_started">
            <p class="lets_get_started_h">Set a new password</p>
            <p class="lets_get_started_p">Kindly enter and set up a new password for your account.</p>
          </div>
          <div style="margin-bottom: 2.5rem">

            <on-boarding-input label="New password"  :type="'password'" :id="'new_password'" @inputValue="value => model.password = value"></on-boarding-input>


            <on-boarding-input label="Confirm password" :type="'password'" :id="'confirm_password'" @inputValue="value => this.password_confirmation = value"></on-boarding-input>

          </div>
          <on-boarding-button :loading="getLoading" border="none" :id="'login'" text-node="Next" @click="handleReset" ></on-boarding-button>

        </div>
      </div>

    </div>
  </layout>

</template>

<script>
import Layout from "./Layout.vue";
import OnBoardingInput from "../../../components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../../../components/Buttons/OnBoardingButton.vue";
import AuthRequest from "../../../model/AuthRequest";
import storeUtils from "../../../utils/storeUtils";
import router from "../../../router";
import {RuthdoAlert} from "ruthly";
export default {
  name: "PasswordAndSuccessOnboarding",
  components: {
    Layout,
    OnBoardingInput,
    OnBoardingButton
  },
  data() {
    return {
      model:AuthRequest.changePassword,
      password_confirmation:null
    }
  },
  methods:{
    handleReset(){
      const oldPassword = router.currentRoute.value.query.email

      this.model.current_password = oldPassword

      if(this.model.password === this.password_confirmation){
        storeUtils.fireAway().auth?.handleChangeNewUserPassword()
      }else{
        RuthdoAlert({title:'Password does not match', icon:'error'})
      }

    },

  },

  getLoading() {
    return storeUtils.fireAway().auth?.getLoading
  },
  stage(){
    return storeUtils.fireAway().auth?.getStage
  }
}
</script>


<style scoped>
.success-h{
  font-size: 2.5rem !important;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-align: center;
  margin-bottom: 1rem;
}

.success-p{
  font-size: 1rem !important;
  font-weight: 300;

}
.card-header{
  display: flex;
  align-items: center;
  margin-bottom: 5.25rem;
}
.improvise{
  display: flex;
  align-items: start;
  width: 31.5rem;
  height: auto;
  justify-content: center;
  padding: 2.5rem;
  background-color: white;
}

@media (max-width: 1024px) {
  .improvise{
    width: 100%;
    height: auto;
  }

}


.otp-area{
  height: 39.5rem;
}
.remember_me{
  display: flex;
  justify-content: end;
  margin-bottom:2.5rem;
}
.login_card{
  background-color: #FFF;
}

.otp-div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  width: 100%;
}

.otp{
  /* width: 100%; */
  outline: none;
  /* margin:auto 5px; */
  padding-left: 20px;
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid #555555;
  border-radius: 8px;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .otp{
    width: 2.75rem;
    height: 2.75rem;
  }
}

.otp:focus{
  outline: none;
  border-bottom:1px solid #555555;
}

.resend{
  color:  #89128A;
  /* subtext/medium/14px */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  border:none;
  background: transparent;
  cursor: pointer;
}
.resend_code{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.0035rem;
  text-align: center;
  margin-top:1rem;
}

@media (max-width: 1024px) {
  .login_card{
    padding: 1rem;
    width: 100%;
  }
}

.fgpassword{
  color: #89128A;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem; /* 135.714% */
}

.remember_me_span{
  color: var(--black-text-03, #444854);
  font-family: 'Product Sans';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.125rem; /* 120% */
}

.get_started{
}


.lets_get_started_p{
  color:  #444854;
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: 0.002rem;
  margin-bottom: 2.5rem;
}

.lets_get_started_h{
  color:  #1D1E2C;
  font-family: 'Product Sans' Black;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}



.domain_account_h{
  color: var(--black-text-01, #1D1E2C);
  /* Headings/48px/bold */
  font-family: 'Product Sans';
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.5rem; /* 150% */
  display: inline-block;
}

.domain_account{
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .domain_account{
    display: block;
    height: auto;
    width: 100%;
    text-align: center;
  }
}

.experence{
  display: flex;
  gap:1rem;
  align-items: center;
  margin-top: 1rem;
  /*position: absolute;*/
}

@media (max-width: 1024px) {
  .experence{
    justify-content: center;
  }
}
.subdomain{
  color: var(--main-branding-primary, #89128A);
  /* Headings/48px/bold */
  font-family: 'Product Sans';
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.5rem;
}

</style>