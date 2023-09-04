<template>
  <layout v-slot:children>
    <div class="improvise otp-area">
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
  </layout>

</template>

<script>
import Layout from "./Layout.vue";
import OnBoardingInput from "../../../components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../../../components/Buttons/OnBoardingButton.vue";
import AuthRequest from "../../../model/AuthRequest";
import storeUtils from "../../../utils/storeUtils";
export default {
  name: "OnBoarding",
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
}
</script>

<style scoped>

</style>