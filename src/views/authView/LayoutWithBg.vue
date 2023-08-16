<template>
  <div class="wrapper">
      <div class="top-angle"></div>
      <div class="bottom-angle"></div>

      <div style="margin: 2rem;">
          <div class="inner_wrapper">
              <div class="logo_area">
                <img src="../../assets/TravelYakataLogo.svg" />
              </div>
              
              <slot name="children"></slot>

              <img src="../../assets/SignUp/EmailVerification/airplane.svg" class="airplane_group"/>

          </div>
      </div>

     
  </div>

</template>

<script>

export default {
  name:"LayoutWithBg",

}
</script>

<style  scoped>
@import url('https://fonts.cdnfonts.com/css/apercu');

.airplane_group{
  position: absolute;
  bottom: 0;
  left:6.88rem;
  width:23.0rem; 
}

.bottom-angle{
  width: 69.45238rem;
  height: 27.51469rem;
  transform: rotate(150.931deg);
  flex-shrink: 0;
  position: fixed;
  top: 68%;
  right: -20%;
  bottom: -10%;
  background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);
  z-index: 1
}

.top-angle {
  width: 69.45238rem;
  height: 27.51469rem;
  transform: rotate(150.931deg);
  flex-shrink: 0;
  background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);;
  position: fixed;
  top: 0;
  left: -35%;
  z-index: 1;

}
.wrapper{
  min-height: 100vh;
  background: #F8F1F8;
  display: inline-block;
  width: 100%; 
  /* border:solid;   */
  position: relative;
}



.inner_wrapper{
  position: relative;
  padding: 3.5rem;
  border-radius: 1rem;
  background:  #F8F9FB; 
  z-index: 5;
  width: 100%; 
  height: 52.00rem;
}

.logo_area{
  width:12rem;
  height: 3.25rem;
}
</style>