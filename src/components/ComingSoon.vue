<template>
  <div class="coming-soon">
    <div>
      <img src="../../src/assets/LAUNCH.svg">
    </div>
    <div>
      <p class="coming-soon-p">Coming Soon</p>
      <p class="coming-soon-p2">Our Visa services are coming up soon. Stay tuned to an awesome experience! </p>
    </div>
    <div style="margin-top: 2rem;">
      <on-boarding-button text-node="Create Booking"></on-boarding-button>
    </div>
  </div>

</template>

<script>
import OnBoardingButton from "./Buttons/OnBoardingButton.vue";
export default {
  name: "ComingSoon",
  components:{OnBoardingButton}
}
</script>

<style scoped>
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