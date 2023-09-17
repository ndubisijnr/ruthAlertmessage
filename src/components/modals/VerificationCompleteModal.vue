<template>
  <Layout>
<template v-slot:children>
  <div class="card_success">
    <div class="card_body">
      <img src="../../assets/verification_success.svg"  class="mobile"/>
      <router-link :to="`/dashboard/${getUser?.access_token?.slice(0,20)}`"> <div class="sublink">
        <span class="sublink_link">Continue</span>
      </div></router-link>

    </div>
  </div>
  </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue"
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";

export default {
  name:"VerificationCompleteModal",
  components:{
    Layout,
    OnBoardingButton
  },

  methods:{
  cancel(){
    this.$emit('cancel', false)
  },

},
  computed:{
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage?.user)
      }
    }
  },


}
</script>

  <style scoped>
  a{
    text-decoration: none;
  }

.modal_child{
  display: flex;
  width: 46.875rem;
  padding: 2.25rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid  #DEE2E6;
  background:  #FFF;

  /* Shadow / Small */
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
  margin: 100px auto;
  position: relative;
}



  a{
    text-decoration: none;
  }

  .mobile{
    width: 80%
  }
  .card_wrapper{
    padding: 0;
    display:flex;
    align-items: center;
    justify-content:center;
    height: 30rem;
    width: 100%;
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
    height: auto;
    /* z-index: 9999999999; */
    margin-top: 50px;
    border-radius: 0.5rem;
    background: transparent;
    /* shadow-2 */
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
    text-align: center;
    padding: 2rem;
    background: #FFF;
  }




  @media screen and (max-width: 1024px){
    .card{
      margin: 12rem 1rem;
      width: 100%;
    }

  }

  .card_body{
    /* margin:1.19rem 0; */
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
    cursor: pointer;
  }

  .sublink_link{
    color:  var(--app-default-primary);
    text-align: center;

    /* 16px/bold */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 175% */
  }

  @media (max-width: 1024px) {
    .card_success{
      width: 90%;
    }

    .card_body{
      width: 100%;
    }

    .mobile{
      width: 100%;
    }

  }



@media (max-width: 1024px) {
  .modal_child{
    width: 90%;

  }

  .child_footer{
    justify-content: center;
  }


}

@media (max-width:500px) {
  .inner_child_footer{
    flex-direction: column;
  }
}
</style>
