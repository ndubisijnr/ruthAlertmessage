<template>
    <layout>
<!--      <template v-slot:sub-child>-->
<!--          <div class="domain_account">-->
<!--              <div class="domain_account_h"> Sign In to Get <br />-->
<!--                <span class="subdomain">Started</span></div>-->

<!--              <div class="experence">-->
<!--                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none"-->
<!--                      xmlns="http://www.w3.org/2000/svg">-->
<!--                      <rect x="0.316467" width="21.2658" height="20" rx="4" fill="#89128A" />-->
<!--                      <g clip-path="url(#clip0_328_1436)">-->
<!--                      <path-->
<!--                          d="M9.43086 12.2661L16.4121 5.69971L17.4868 6.70971L9.43086 14.2861L4.59744 9.74042L5.67137 8.73042L9.43086 12.2661Z"-->
<!--                          fill="white" />-->
<!--                      </g>-->
<!--                      <defs>-->
<!--                      <clipPath id="clip0_328_1436">-->
<!--                          <rect width="18.2278" height="17.1429" fill="white" transform="translate(1.83594 1.4292)" />-->
<!--                      </clipPath>-->
<!--                      </defs>-->
<!--                  </svg>-->
<!--                  <span>Experience travel-booking like never before</span> -->
<!--              </div> -->
<!--            </div>-->
<!--      </template>-->
      <template v-slot:children>
        <div class="improvise">
          <div class="login_card">
            <div >
              <div class="get_started">
                <p class="lets_get_started_h">Log In</p>
                <p class="lets_get_started_p">Log in to access your account.</p>
              </div>
              <div>

                <on-boarding-input-vue label="Email Address" @inputValue="(value) => model.email = value" :type="'email'"></on-boarding-input-vue>


                <on-boarding-input-vue label="Password" :type="'password'" :id="'login_password'" @inputValue="(value) => model.password = value"></on-boarding-input-vue>

                <div class="remember_me">
                  <div style="display: flex;align-items: center;gap:0.62rem">
                    <input type="checkbox" />
                    <span class="remember_me_span">Remember me</span>
                  </div>

                  <span class="fgpassword">Forgot Password ?</span>

                </div>


                <on-boarding-button border="none" @click="handleClick" :id="'login'" text-node="Next" :disabled="!model.password || !model.email"></on-boarding-button>
              </div>
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

export default {
  name: "Logon",

  components: {
    Layout,
    OnBoardingButton,
    OnBoardingInputVue
  },

  data() {
    return {
      model: {
        firstName: null,
        lastName: null,
        password:null,
        email:null
      },
      remember_me: false,
    }
  },

  methods:{
    handleClick(){
      router.push({name:"BusinessInfo", query:{user:'showfaketkshbb3n0948wbzjn!ndjdbtokenbdubf3848hPej!#293sn3ij3'}})
    },
  }
}
</script>

<style scoped>
.improvise{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.remember_me{
  display: flex;
  justify-content: space-between;
  margin-bottom:2.5rem;
}
.login_card{
  background-color: #FFF;
  padding: 4rem;
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
  margin-top:2.5rem;
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
    width: 17.25rem;
  border: solid;
  height: auto;
}

@media (max-width: 1024px) {
  .domain_account{
    display: none;
  }
}

.experence{
    display: flex;
    gap:1rem;
    align-items: center;
    margin-top: 1rem;
    position: absolute;
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

