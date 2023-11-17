<template>
    <div class="wrapper" :style="{background:custom_theme ? lightenColor(custom_theme?.color) : lightenColor(default_theme.color)}">
        <div class="top-angle" :style="{background:custom_theme ? toGradient(custom_theme.color,'220') : toGradient(default_theme.color, '220')}"></div>
        <div class="bottom-angle" :style="{background:custom_theme ? toGradient(custom_theme.color, '107') : toGradient(default_theme.color,'107')}"></div>

        <div class="m5-0">
            <div class="inner_wrapper">
                <div class="select_account_type">
                    <div class="logo_area">
                        <!-- users logo or travel_yakata_logo -->
                        <img src="../../assets/TravelYakataLogo.png" style="width: 12.0625rem;height: 5.95919rem;" />
                    </div>

                    <slot name="sub-child"></slot>
                   
                    <slot name="children"></slot>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import storeUtils from "../../utils/storeUtils";
import {toGradient, lightenColor} from "@/mixins/themeUtils";

export default {
    name:"CompleteRegistrationLayout",

    data(){
      return{
        toGradient,
        lightenColor
      }
    },

    computed:{
      default_theme(){
        return storeUtils.fireAway().theme.getDefault_theme
      },

      custom_theme(){
        return storeUtils.fireAway().theme.getCustom_theme
      }
    },

    mounted() {
      if(!localStorage.tenant_id){
        storeUtils.fireAway().global?.getTenant()
      }

      if(localStorage.tenant_id) storeUtils.fireAway().theme.getCustomization()
    }

}
</script>

<style  scoped>
@import url('https://fonts.cdnfonts.com/css/apercu');

.m5-0{
  margin: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
}
@media (max-width: 1024px) {
  .m5-0{
    margin: 0rem;
    min-height: 100vh;
    align-items: start;
  }
}

.select_account_type{
    width: 100%;
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    /* margin-top: 4.96rem; */
    position: relative;
    /* height: 52.00rem; */
    height: 52.00rem;
    padding: 3.5rem;
    gap: 327px;
    border: solid;

}

@media (max-width: 1024px) {
    .select_account_type{
        max-width: 100%;
        flex-direction: column;
        padding: 1rem;
        justify-content: start;
        gap: 1rem;
        height: auto;
      display: block;

    }
}



.bottom-angle{
    width: 69.45238rem;
    height: 27.51469rem;
    transform: rotate(150.931deg);
    flex-shrink: 0;
    position: fixed;
    top: 70%;
    right: -20%;
    bottom: -10%;
    //background:var(--app-default-secondary-linear-gradaint1);
    z-index: 1
}

@media (max-width: 1024px) {
  .bottom-angle{
    right: -40%;
  }
}

.top-angle {
  width: 69.45238rem;
  height: 27.51469rem;
  transform: rotate(150.931deg);
  flex-shrink: 0;
  //background: var(--app-default-secondary-linear-gradaint2);
  position: fixed;
  top:0;
  left: -35%;
  z-index: 1;

}

.wrapper{
    min-height: 100vh;
    //background: var(--app-defautl-primary-light);
    display: inline-block;
    width: 100%; 
    position: relative;
}



.inner_wrapper{
    position: relative;
    border-radius: 1rem;
    background:  transparent; 
    z-index: 5;
    width: 100%; 
    height: 52.00rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo_area{
    position: absolute;
    top: 0;
    float: left;
}

@media (max-width: 1024px) {
  .logo_area{
    position: relative;
    float: none;
  }
  .inner_wrapper{
    height: auto;
    width: 100%;
    display: inline-block;
    align-items: start;
  }
}
</style>