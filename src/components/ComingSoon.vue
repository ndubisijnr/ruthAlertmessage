<template>
  <div class="coming-soon">
    <div>
      <img src="../../src/assets/Cards/LAUNCH.svg">
    </div>
    <div>
      <p class="coming-soon-p">Coming Soon</p>
      <p class="coming-soon-p2">Our {{page}} services are coming up soon. Stay tuned to an awesome experience! </p>
    </div>
    <div>
      <router-link :to="`/bookings/create_new_booking/${getUser?.access_token?.slice(0,20)}`"><on-boarding-button btn-width="11.25rem" height="3.5rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="Create Booking"></on-boarding-button></router-link>
    </div>
  </div>

</template>

<script>
import OnBoardingButton from "./Buttons/OnBoardingButton.vue";
export default {
  name: "ComingSoon",
  props:['page'],
  components:{OnBoardingButton},
  computed:{
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.coming-soon{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(.9);

}
.coming-soon-p{
  color:  #0E0842;
  text-align: center;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.coming-soon-p2{
  color: #575A65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  width: 24.125rem;
}
</style>