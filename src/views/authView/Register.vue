
<template>
  <layout>
    <template v-slot:sub-child>
      <div class="domain_account">
          <div class="domain_account_h"> Sign Up to your <br />
            <span class="subdomain">Subdomain</span> account</div>

          <div class="experence">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.316467" width="21.2658" height="20" rx="4" fill="#89128A" />
                  <g clip-path="url(#clip0_328_1436)">
                  <path
                      d="M9.43086 12.2661L16.4121 5.69971L17.4868 6.70971L9.43086 14.2861L4.59744 9.74042L5.67137 8.73042L9.43086 12.2661Z"
                      fill="white" />
                  </g>
                  <defs>
                  <clipPath id="clip0_328_1436">
                      <rect width="18.2278" height="17.1429" fill="white" transform="translate(1.83594 1.4292)" />
                  </clipPath>
                  </defs>
              </svg>
              <span>Experience travel-booking like never before</span> 
          </div> 
        </div>
    </template>
    <template v-slot:children>
      <div class="page_wrapper_inner_div">
         <div>
            <div>
              <router-link to="/login"><p class="login">Already have an account? <span class="log_in"> Log In</span></p></router-link>
            </div>
            <div class="get_started">
              <p class="lets_get_started_h">Let’s get you started</p>
              <p class="lets_get_started_p">Create your business account in few steps. It will only take a minute.</p>
            </div>
            <div>
              <div class="grouped_input">
                <on-boarding-input-vue :error="error ? error.first_name : null" width="100%" label="first Name" @inputValue="(value) => model.first_name = value"
                  :type="'text'"> </on-boarding-input-vue>

                <on-boarding-input-vue width="100%" :error="error ? error.first_name : null"  label="last Name" @inputValue="(value) => model.last_name = value"
                  :type="'text'"> </on-boarding-input-vue>
              </div>
              <on-boarding-input-vue :width="'100%'" :error="error ? error.email : null" label="Email Address" @inputValue="(value) => model.email = value" :type="'email'">
              </on-boarding-input-vue>

              <on-boarding-input-vue v-show="getCurrentRoute.user_type === 'cooperate_manager'" width="100%" :error="error ? error.business_name : null" label="Business Name" @inputValue="(value) => model.business_name = value" :type="'text'">
              </on-boarding-input-vue>

              <on-boarding-input-vue width="100%"  label="Password" :type="'password'" :id="'yourPassword'" @inputValue="(value) => {model.password = value, check()}"></on-boarding-input-vue>

              <div class="password_checker">
                <p class="password_must_contain">Password must contain :</p>

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

              <div class="terms_and_conditions">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none"
                  v-show="!agreed_condition" @click="agreed_condition = !agreed_condition" style="cursor:pointer">
                  <rect x="0.816406" y="0.5" width="20.2658" height="19" rx="3.5" fill="white" stroke="#C0CCDA" />
                </svg>
                <svg width="22" height="20" viewBox="0 0 22 20" @click="agreed_condition = !agreed_condition"  style="cursor:pointer" fill="none"
                  v-show="agreed_condition" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.316467" width="21.2658" height="20" rx="4" fill="#89128A" />
                  <g clip-path="url(#clip0_328_1436)">
                    <path
                      d="M9.43086 12.2661L16.4121 5.69971L17.4868 6.70971L9.43086 14.2861L4.59744 9.74042L5.67137 8.73042L9.43086 12.2661Z"
                      fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_328_1436">
                      <rect width="18.2278" height="17.1429" fill="white" transform="translate(1.83594 1.4292)" />
                    </clipPath>
                  </defs>
                </svg>

                <span class="terms_conditions">I agree to Tiqwa’s <span class="terms_conditions bold">Terms & Conditions</span> and <span class="terms_conditions bold">Privacy Policy </span></span>


              </div>

              <on-boarding-button :loading="loading" border="none" @click="handleClick" :id="'login'" btnWidth="100%" text-node="Sign Up" :disabled="!agreed_condition"></on-boarding-button>
            </div>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from './Layout.vue'
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import OnBoardingInputVue from '../../components/Inputs/OnBoardingInput.vue';
import router from "../../router/index"
import AuthRequest from "../../model/AuthRequest";
import storeUtils from "../../utils/storeUtils";

export default {
  name: "Register",
  components: {
    Layout,
    OnBoardingButton,
    OnBoardingInputVue
  },
  data() {
    return {
      errorObj:{
        first_name:null,
        last_name:null,
        email:null,
        password:null,
        type:null,
        business_name:null,
      },

      model:AuthRequest.register,
      agreed_condition: false,
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
    handleClick(){
      if(this.agreed_condition && this.canProceed && this.passwordGood) {
        storeUtils.fireAway().auth?.commitErrors(this.errorObj)
        storeUtils.fireAway().auth?.register()
      }else{
        const password_checker_div = document.getElementById('password-checker')
        password_checker_div.classList.add('animate__shakeX')
        setTimeout(() => {
          password_checker_div.classList.remove('animate__shakeX')
        },500)
      }
    },

    check(){

      this.showTip = true
      const input = document.getElementById('yourPassword').value
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
  },
  computed:{
    loading(){
      return storeUtils.fireAway().auth?.getLoading
    },
    error(){
      return storeUtils.fireAway().auth?.getErrors
    },
    getCurrentRoute(){
      return router.currentRoute.value.params
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none !important;
}
.page_wrapper_inner_div{
  width:35.8125rem;
  margin:6.50rem 5.5rem;
  background-color: #FFF;
  padding: 2rem;
  height: auto;
}

@media (max-width: 1024px) {
  .page_wrapper_inner_div{
    width:100%;
    height: auto;
    padding: 1rem;
    margin:0;
}
}


.domain_account_h{
    color:  #1D1E2C;
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
    width: 27.4375rem;
}
@media (max-width: 1024px) {
  .domain_account{
    width: 100%;
  }
}


.experence{
    display: flex;
    gap:1rem;
    align-items: center;
    margin-top: 1rem;
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


.get_started{
  margin-top:2rem;
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

.lets_get_started_p{
  color:  #444854;
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: 0.002rem;
  margin-bottom: 1.5rem;
}

.lets_get_started_h{
  color:  #1D1E2C;
  font-family: 'Product Sans' Black;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
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
.grouped_input {
  display: inline-flex;
  width: 100%;
  gap:1.5rem;
  /* border:solid; */
}
@media (max-width:1024px) {
  .grouped_input{
    width: 100%;
  }
}

.login {
  color: #575A65;
  text-align: right;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: solid; */
}

.log_in {
  color: #89128A;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.terms_and_conditions{
  width:26.25rem;
  /* border:solid; */
  display:inline-flex;
  align-items: center;
  gap: 0.53em;
}

@media (max-width: 1024px) {
  .terms_and_conditions{
    width: 100%;
  }
}



.password_checker {
  display: inline-block;
  /* flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; */
  /* border:solid; */
  width:28rem;
  margin:1rem auto;
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


.on_boarding_button{
   /* border:solid; */
   margin-top: 1rem;
}

.terms_conditions{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.0035rem;
}

.bold{
  font-weight: 700 !important;
}


</style>