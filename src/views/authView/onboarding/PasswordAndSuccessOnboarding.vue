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

            <on-boarding-input label="New password" width="100%"  :type="'password'" :id="'new_password'" @inputValue="value => {model.password = value, check()}"></on-boarding-input>


            <on-boarding-input label="Confirm password" width="100%" :type="'password'" :id="'confirm_password'" @inputValue="value => this.password_confirmation = value"></on-boarding-input>
            <div class="password_checker">
              <p class="password_must_contain">New password must contain :</p>

              <div class="containes animate__animated" id="password-checker">
                <div class="checker" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-if="a_z" fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#159D54" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-else fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#9DA8B6" />
                  </svg>
                  <span>Lower-case</span>
                </div>
                <div class="checker">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-if="num" fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#159D54" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-else fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#9DA8B6" />
                  </svg>
                  <span>At least 1 number</span>
                </div>
                <div class="checker">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-if="A_Z" fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#159D54" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-else fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#9DA8B6" />
                  </svg>
                  <span>Upper-case</span>
                </div>
                <div class="checker">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-if="passwordGood" fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#159D54" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" v-else fill="none">
                    <path
                        d="M6.00923 0.00922367H6C2.68615 0.00922367 0 2.69331 0 6.00461C0 9.30669 2.68615 12 6 12C9.30462 11.9908 12 9.30669 12 6.00461C11.9908 2.69331 9.30462 0.00922367 6 0L6.00923 0.00922367ZM8.88923 3.83705C9.19385 4.05842 9.24923 4.49193 9.01846 4.80553L6.33231 8.3751V8.36587C5.86154 8.97464 4.98462 9.08532 4.36615 8.61491C4.32 8.57802 4.27385 8.54112 4.22769 8.495L2.84308 7.11145L2.83385 7.10223C2.55692 6.82552 2.55692 6.39201 2.83385 6.1236C3.10154 5.84689 3.53539 5.84689 3.81323 6.1236L4.82862 7.1382L4.81939 7.12898C4.99477 7.30423 5.29015 7.30423 5.46554 7.11975C5.47477 7.10131 5.49323 7.08286 5.50246 7.06441L7.85631 3.90992H7.84708C8.06861 3.60553 8.50246 3.54097 8.80708 3.76234L8.88923 3.83705Z"
                        fill="#9DA8B6" />
                  </svg>
                  <span>Minimum of 8 characters</span>
                </div>
              </div>
            </div>

          </div>
          <on-boarding-button btn-width="100%" :loading="getLoading" border="none" :id="'login'" text-node="Next" @click="handleReset" ></on-boarding-button>

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
      password_confirmation:null,
      a_z:false,
      A_Z:false,
      special:false,
      num:false,
      showTip:false,
      passwordGood:false,
      canProceed:false,
    }
  },
  methods:{

    check(){

      this.showTip = true
      const input = document.getElementById('new_password').value
      // const button = document.getElementById('login')
      const regex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
      const regex_a_z = /^(?=.*[a-z])/
      const regexA_Z = /^(?=.*[A-Z])/
      const regexNum = /\d+/;
      const all_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

      if(regex_a_z.test(input)){
        this.a_z = true
      }
      else{
        this.a_z = false
      }

      if(regexA_Z.test(input)){
        this.A_Z = true
      }
      else{
        this.A_Z = false
      }

      if(regex.test(input)){
        this.special = true
      }
      else{
        this.special = false
      }

      if(regexNum.test(input)){
        this.num = true
      }
      else{
        this.num = false
      }

      if(all_regex.test(input)){
        this.canProceed= true
      }
      else{
        this.canProceed = false
      }

      if(input.length >= 8){
        this.passwordGood = true
      }
      else{
        this.passwordGood = false
      }

    },

    handleReset(){
      const oldPassword = router.currentRoute.value.params.inviteToken

      this.model.current_password = oldPassword

      if(this.model.password === this.password_confirmation){
        if(this.canProceed && this.passwordGood){
          storeUtils.fireAway().auth?.handleChangeNewUserPassword()
        }else{
          const password_checker_div = document.getElementById('password-checker')
          password_checker_div.classList.add('animate__shakeX')
          setTimeout(() => {
            password_checker_div.classList.remove('animate__shakeX')
          },500)
        }
      }else{
        RuthdoAlert({title:'Password does not match', icon:'error'})
      }

    },

  },

  computed:{
    getLoading() {
      return storeUtils.fireAway().auth?.getLoading
    },
    stage(){
      return storeUtils.fireAway().auth?.getStage
    }
  }


}
</script>


<style scoped>

.password_checker {
  display: inline-block;
  /* flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; */
  /* border:solid; */
  width:28rem;
  margin:1rem auto;
}

.password_must_contain{
  color: #2D3139;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.containes{
  /* border:solid; */
  display:inline-flex;
  color:  #1D1E2C;
  gap:0.5rem;

  /* caption/12px/regular */
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  margin-top:0.75rem;

}

@media (max-width:1024px) {
  .containes{
    flex-direction: column;

  }
  .checker span{
    font-size: 1rem;
  }
}

.checker{
  /* border:solid orange; */
  display: inline-flex;
  align-items: center;
  gap:0.25rem;
}

.checker span{
  font-size: 0.75rem;
}

@media (max-width:1024px) {
  .password_checker{
    width:100%;
  }
}

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