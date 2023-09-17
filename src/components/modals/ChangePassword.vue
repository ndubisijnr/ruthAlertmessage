<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Change Password</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="wrapper">
        <div>
          <on-boarding-input id="old password"  width="100%" label="Current Password" type="password" @inputValue="(value) => model.current_password = value"></on-boarding-input>

          <on-boarding-input id="current password" width="100%"  label="New Password" type="text"  @inputValue="value => {model.password = value, check()}"></on-boarding-input>

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
        <div class="modal-footer">
          <on-boarding-button border="none" @click="handleChangePassword" :loading="getLoading" :disabled="getLoading" btn-width="100%" text-node="Proceed"></on-boarding-button>
          <on-boarding-button @click="close" btn-width="100%" color="#000" text-node="Cancel" background="transparent" border="none"></on-boarding-button>
        </div>

      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "./Layout.vue";
import AuthRequest from "../../model/AuthRequest";
import storeUtils from "../../utils/storeUtils";
import OnBoardingInput from "../Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
export default {
  name: "ChangePassword",
  components:{Layout,OnBoardingInput,OnBoardingButton},
  data(){
    return{
      model:AuthRequest.changePassword,
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
    close(){
      storeUtils.fireAway().global?.commitError(null)
      this.activeSelectedIndex = null
      this.$emit('close', false)
    },

    check(){

      this.showTip = true
      const input = document.getElementById('current password').value
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

    handleChangePassword(){
      if(this.canProceed && this.passwordGood) {
        storeUtils.fireAway().auth?.handleChangePassword()
      }else{
        const password_checker_div = document.getElementById('password-checker')
        password_checker_div.classList.add('animate__shakeX')
        setTimeout(() => {
          password_checker_div.classList.remove('animate__shakeX')
        },500)
      }
    }
  },

  computed:{
    getLoading(){
      return storeUtils.fireAway().auth?.getLoading
    }
  }
}
</script>

<style scoped>
.wrapper{
  margin: 2rem;
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


@media (max-width: 1024px) {
  .modal{
    margin: 20px auto;
    width: 90%;
  }
}
</style>