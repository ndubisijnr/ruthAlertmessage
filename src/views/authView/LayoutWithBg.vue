<template>
  <div class="wrapper">
      <div class="top-angle"></div>
      <div class="bottom-angle"></div>

      <div class="marger">
          <div class="inner_wrapper">
              <div class="logo_area">
                <img src="../../assets/TravelYakataLogo.png" style="width: 12.0625rem;height: 5.95919rem;"/>
              </div>
              
              <slot name="children"></slot>

              <img src="../../assets/SignUp/EmailVerification/airplane.svg" class="airplane_group"/>

          </div>
      </div>

     
  </div>

</template>

<script>

import storeUtils from "../../utils/storeUtils";

export default {
  name:"LayoutWithBg",
  mounted() {
    if(!localStorage.tenant_id){
      storeUtils.fireAway().global?.getTenant()
    }
  }

}
</script>
<style  scoped>
@import url('https://fonts.cdnfonts.com/css/apercu');

.marger{
  margin: 2rem;
}

@media (max-width: 1024px) {
  .marger{
    margin: 0.5rem;
  }

}

.airplane_group{
  position: absolute;
  bottom: 0;
  left:6.88rem;
  width:23.0rem;
}

@media (max-width: 1024px) {
  .airplane_group{
    left: 0;
  }
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
  background: var(--app-default-secondary-linear-gradaint1);
  z-index: 1
}

.top-angle {
  width: 69.45238rem;
  height: 27.51469rem;
  transform: rotate(150.931deg);
  flex-shrink: 0;
  background:var(--app-default-secondary-linear-gradaint2);
  position: fixed;
  top: 0;
  left: -35%;
  z-index: 1;

}
.wrapper{
  min-height: 100vh;
  background: var(--app-default-primary);
  display: inline-block;
  width: 100%;
  /*border:solid;*/
  position: relative;
}



.inner_wrapper{
  position: relative;
  padding: 3.5rem;
  border-radius: 1rem;
  background:  var(--app-defautl-primary-light);
  z-index: 5;
  width: 100%;
  height: 52.00rem;
  /*border: solid;*/
}

@media (max-width: 1024px) {
  .inner_wrapper{
    padding: 0.5rem;
  }
}

/*.logo_area{*/
/*  width:12rem;*/
/*  height: 3.25rem;*/
/*}*/
</style>

<!--<style  scoped>-->
<!--@import url('https://fonts.cdnfonts.com/css/apercu');-->

<!--.airplane_group{-->
<!--  position: absolute;-->
<!--  bottom: 0;-->
<!--  left:6.88rem;-->
<!--  width:23.0rem; -->
<!--}-->

<!--.bottom-angle{-->
<!--  width: 69.45238rem;-->
<!--  height: 27.51469rem;-->
<!--  transform: rotate(150.931deg);-->
<!--  flex-shrink: 0;-->
<!--  position: fixed;-->
<!--  top: 68%;-->
<!--  right: -20%;-->
<!--  bottom: -10%;-->
<!--  background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);-->
<!--  z-index: 1-->
<!--}-->

<!--.top-angle {-->
<!--  width: 69.45238rem;-->
<!--  height: 27.51469rem;-->
<!--  transform: rotate(150.931deg);-->
<!--  flex-shrink: 0;-->
<!--  background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);;-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: -35%;-->
<!--  z-index: 1;-->

<!--}-->
<!--.wrapper{-->
<!--  min-height: 100vh;-->
<!--  background: #F8F1F8;-->
<!--  display: inline-block;-->
<!--  width: 100%; -->
<!--  /* border:solid;   */-->
<!--  position: relative;-->
<!--}-->



<!--.inner_wrapper{-->
<!--  position: relative;-->
<!--  padding: 3.5rem;-->
<!--  border-radius: 1rem;-->
<!--  background:  #F8F9FB; -->
<!--  z-index: 5;-->
<!--  width: 100%; -->
<!--  height: 52.00rem;-->
<!--}-->

<!--.logo_area{-->
<!--  width:12rem;-->
<!--  height: 3.25rem;-->
<!--}-->
<!--</style>-->