<template>
    <layout-with-bg>
        <template v-slot:children>
            <section class="card_wrapper">
                <div class="card_success">
                    <div class="inner_card">
                        <div class="card_head">
                        <img src="../../assets/chain_checked.svg" />
                        </div>
                        <div class="card_body">
                            <p class="sign_up_successfull">Sign Up Successful</p>
                            <p class="welcome_to_tiqwa">
                                Welcome to Travel Yakata. Experience travel-booking like never before.
                               Click on continue and begin your journey on Travel Yakata.
                            </p>
                           <router-link :to="`/verification/business/${getUser?.access_token?.slice(0,20)}`"> <div class="sublink">
                                <span class="sublink_link">Continue</span>
                            </div></router-link>
                        
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </layout-with-bg>
  
</template>

<script>
import LayoutWithBg from "./LayoutWithBg.vue";

export default {
    name:"SuccessRegistrationCard",

    components:{
      LayoutWithBg,
    },

    data(){
        return{}
    },

    methods:{
    

    },

  computed:{
      getUser(){
        if(localStorage.user){
          return JSON.parse(localStorage?.user)
        }
      }
  },

    watch: {},

    mounted(){}
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.card_wrapper{
    padding: 0;
    display:flex;
    align-items: center;
    justify-content:center;
    height: 30rem;
}
.card_head{
    text-align:center;
}
.sign_up_successfull{
    color:  #272833;
    text-align: center;

    /* Headings/32px/bold */
    font-family: 'Product Sans';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.625rem; /* 131.25% */
}

.welcome_to_tiqwa{
    color: #1D1E2C;
    text-align: center;

    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.card_success{
    width: 37.5rem;
    height: 29.25rem;       
    background:  #FFF;
    /* z-index: 9999999999; */
     margin-top: 50px;
    border-radius: 0.5rem;
    /* shadow-2 */
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
}

@media (max-width: 1024px) {
  .card_success{
    width: 100%;
  }

}


@media screen and (max-width: 1024px){
    .card{
        margin: 12rem 1rem;   
        width: 100%;
    }
    
}

.card_body{
    /* margin:1.19rem 0; */
    display:inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap:1.50rem;
}

.inner_card{
    width:28.44rem;
    height:22.88rem;
    margin:3.19rem 4.13rem;
}

@media (max-width: 1024px) {
  .inner_card{
    width:100%;
    height:22.88rem;
    margin:3.19rem 0;
  }

}


.sublink{
    display: flex;
    width:auto;
    padding: 1rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.625rem;
    border: 1px solid var(--app-defautl-primary-light2);
    background: var(--app-defautl-primary-light);
  cursor: pointer;
}

.sublink_link{
    color: #1D1E2C;
    text-align: center;
  cursor: pointer;
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

</style>