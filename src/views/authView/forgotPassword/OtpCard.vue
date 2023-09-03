<template>
  <layout v-slot:children>

        <div v-if="stage === 'otp'" class="improvise otp-area">
      <div class="login_card">
        <div class="card-header" @click="commitStage('email')"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z" fill="#292D32"/>
        </svg> Back
        </div>
        <div >
          <div class="get_started">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <path d="M0 28.6875L36 7.3125L72 28.6875V60.1875H0V28.6875Z" fill="#CC4E56"/>
              <path d="M7.87441 1.6875H64.1243C65.3618 1.6875 66.3743 2.69997 66.3743 3.93752V43.3124C66.3743 44.5499 65.3618 45.5624 64.1243 45.5624H7.87441C6.63686 45.5624 5.62439 44.5499 5.62439 43.3124V3.93752C5.62453 2.70011 6.637 1.6875 7.87441 1.6875Z" fill="white"/>
              <path d="M59.4 6.18754L63 1.6875H64.125C65.3626 1.6875 66.375 2.69997 66.375 3.93752V6.18754H59.4ZM30.1501 6.18754L33.7501 1.6875H41.625L38.025 6.18754H30.1501ZM5.62512 6.18754V3.93752C5.62512 2.69997 6.63759 1.6875 7.87514 1.6875H13.5002L9.90007 6.18754H5.62512Z" fill="#3181FA"/>
              <path d="M71.9999 66.9374C71.9999 68.7936 70.4811 70.3124 68.6248 70.3124H3.37503C1.51877 70.3126 0 68.7936 0 66.9374V28.6875L36 44.4375L72 28.6875L71.9999 66.9374Z" fill="#FF8F96"/>
              <path d="M71.9998 66.9375C71.9998 68.7938 70.4811 70.3125 68.6248 70.3125H3.37503C1.51877 70.3127 0 68.7938 0 66.9375V60.1875L71.9998 28.6875V66.9375Z" fill="#F0434F"/>
              <path d="M22.8935 21.6563L23.3436 24.0188L19.7436 18.3938L14.6811 26.2687C14.6249 26.9999 17.8873 27.5624 21.9374 27.5624C25.9874 27.5624 29.2498 26.9999 29.2498 26.2687L24.8061 19.6875L22.8935 21.6563ZM23.3436 18.5624C24.1311 18.5624 24.7498 17.9437 24.7498 17.1562C24.7498 16.3687 24.1311 15.75 23.3436 15.75C22.5561 15.75 21.9374 16.3687 21.9374 17.1562C21.9374 17.9437 22.5561 18.5624 23.3436 18.5624ZM34.8749 18H57.3748C57.9935 18 58.4998 17.4937 58.4998 16.875C58.4998 16.2563 57.9935 15.75 57.3748 15.75H34.8749C34.2562 15.75 33.7499 16.2563 33.7499 16.875C33.7499 17.4937 34.256 18 34.8749 18ZM57.3748 20.25H34.8749C34.2562 20.25 33.7499 20.7563 33.7499 21.375C33.7499 21.9937 34.2562 22.5001 34.8749 22.5001H57.3748C57.9935 22.5001 58.4998 21.9937 58.4998 21.375C58.4998 20.7562 57.9935 20.25 57.3748 20.25ZM51.7497 24.7499H34.8749C34.2562 24.7499 33.7499 25.2562 33.7499 25.8749C33.7499 26.4936 34.2562 26.9999 34.8749 26.9999H51.7499C52.3686 26.9999 52.8749 26.4936 52.8749 25.8749C52.8747 25.2562 52.3686 24.7499 51.7497 24.7499Z" fill="#DFE5ED"/>
              <path d="M44.7755 6.18754L48.3754 1.6875H56.2504L52.6504 6.18754H44.7755ZM15.5255 6.18754L19.1255 1.6875H27.0004L23.4004 6.18754H15.5255Z" fill="#FF5247"/>
            </svg>
            <p class="lets_get_started_h">We sent you a password reset code,</p>
            <p class="lets_get_started_p">A password reset code has been sent to your email, enter the 5-digits code in it below to continue.</p>
          </div>
          <div style="margin-bottom: 2.5rem">

            <div class="card_body">
              <div class="otp-div">
                <input type="text" maxlength="1" class="otp"  />
                <input type="text" maxlength="1" class="otp" />
                <input type="text" maxlength="1" class="otp" />
                <input type="text" maxlength="1" class="otp" />
                <input type="text" maxlength="1" class="otp" />
              </div>
            </div>

          </div>

          <on-boarding-button border="none" @click="commitStage('password')" :id="'otp'" text-node="Continue" ></on-boarding-button>

          <p class="resend_code">Resend code {{timerCount > 0 ? `in ${timerCount} seconds` : 'now?'}} <button @click="resend"  class="resend"  :class="{'disabledBtn':timerCount > 0 || getLoading}" :disabled="timerCount > 0 || getLoading">Resend code</button></p>
        </div>
      </div>

    </div>


        <div v-else-if="stage === 'password'" class="improvise">
          <div class="login_card">
            <div class="card-header" @click="commitStage('otp')"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z" fill="#292D32"/>
            </svg> Back </div>
            <div >
              <div class="get_started">
                <p class="lets_get_started_h">Set a new password</p>
                <p class="lets_get_started_p">Kindly enter and set up a new password for your account.</p>
              </div>
              <div style="margin-bottom: 2.5rem">

                <on-boarding-input label="New password"  :type="'password'" :id="'new_password'" @inputValue="value => model2.password = value"></on-boarding-input>


                <on-boarding-input label="Confirm password" :type="'password'" :id="'confirm_password'" @inputValue="value => model2.password_confirmation = value"></on-boarding-input>

              </div>
              <on-boarding-button border="none" :id="'login'" text-node="Next" @click="handleReset" ></on-boarding-button>

            </div>
          </div>

        </div>

        <div v-else class="improvise">
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


  </layout>
</template>

<script>
import router from "../../../router";

var confirmPassword;

import Layout from "./Layout.vue";
import OnBoardingInput from "../../../components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../../../components/Buttons/OnBoardingButton.vue";
import AuthRequest from "../../../model/AuthRequest";
import storeUtils from "../../../utils/storeUtils";
import StartTimer from "../../../mixins/countDown";
import {RuthdoAlert} from "ruthly";

export default {
  name: "OtpCard",
  components: {
    Layout,
    OnBoardingInput,
    OnBoardingButton
  },
  data() {
    return {
      model1: AuthRequest.resendVerifyEmail,
      model2: AuthRequest.resetPassword,
      model:AuthRequest.forgotPassword,
      timerCount: 0,
      otpValue: null,
      confirmPassword: null

    }
  },

  methods: {
    initiate(){
      storeUtils.fireAway().auth?.handleForgotPassword()
    },

    handleReset(){
      this.model2.email = router.currentRoute.value.query.email
      this.model.token = this.otpValue
      storeUtils.fireAway().auth?.handleResetPassword()
    },

    commitStage(value){
      storeUtils.fireAway().auth?.commitStage(value)
    },

    tab() {
      //Initial references
      const input = document.querySelectorAll(".otp");
      const inputField = document.querySelector(".otp-div");

      if (input && inputField) {
        console.log('true')
        // const submitButton = document.getElementById("submit");
        let inputCount = 0,
            finalInput = "";

        //Update input
        const updateInputConfig = (element, disabledStatus) => {
          element.disabled = disabledStatus;
          if (!disabledStatus) {
            element.focus();
          } else {
            element.blur();
          }
        };

        input.forEach((element) => {
          element.addEventListener("keyup", (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
            let {value} = e.target;

            if (value.length == 1) {
              updateInputConfig(e.target, true);
              if (inputCount <= 4 && e.key != "Backspace") {
                finalInput += value;
                if (inputCount < 4) {
                  updateInputConfig(e.target.nextElementSibling, false);
                }
              }
              inputCount += 1;
            } else if (value.length == 0 && e.key == "Backspace") {
              finalInput = finalInput.substring(0, finalInput.length - 1);
              if (inputCount == 0) {
                updateInputConfig(e.target, false);
                return false;
              }
              updateInputConfig(e.target, true);
              e.target.previousElementSibling.value = "";
              updateInputConfig(e.target.previousElementSibling, false);
              inputCount -= 1;
            } else if (value.length > 1) {
              e.target.value = value.split("")[0];
            }
            // submitButton.classList.add("hide");
          });
        });

        window.addEventListener("keyup", (e) => {
          if (inputCount > 4) {
            // submitButton.classList.remove("hide");
            // submitButton.classList.add("show");
            if (e.key == "Backspace") {
              finalInput = finalInput.substring(0, finalInput.length - 1);
              updateInputConfig(inputField.lastElementChild, false);
              inputField.lastElementChild.value = "";
              inputCount -= 1;
              //   submitButton.classList.add("hide");
            }
            submit()

          }
        });
        const submit = () => {
          let otp = "";
          input.forEach((input) => {
            otp += input.value
          })
          this.otpValue = otp
          this.model2.token = otp
        }

        //Start
        const startInput = () => {
          inputCount = 0;
          finalInput = "";
          input.forEach((element) => {
            element.value = "";
          });
          updateInputConfig(inputField?.firstElementChild, false);

        };
        startInput();
      } else {
        console.log('can\'t see any input')
      }
    },

    resend() {
      StartTimer()
      this.timerCount = 30
      // storeUtils.fireAway().auth?.resendOtp().then(() => {
      //
      // })

    },
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      //immediate: true, // This ensures the watcher is triggered upon creation
    },
  },


  computed: {
    getLoading() {
      return storeUtils.fireAway().auth?.getLoading
    },
    stage(){
      return storeUtils.fireAway().auth?.getStage
    }
  },

  mounted() {
    if(this.stage === 'email'){
      router.push({path:'/forgot/reset/password'})
    }
    this.tab()
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
  height: 33.5rem;
  justify-content: center;
  padding: 2.5rem;
  background-color: white;
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