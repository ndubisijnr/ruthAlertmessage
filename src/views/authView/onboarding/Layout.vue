<template>
  <div class="wrapper" :style="{backgroundColor:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)}">
    <div class="m5-0">
      <div class="inner_wrapper">
        <div class="select_account_type">
          <div class="logo_area">
            <!-- users logo or travel_yakata_logo -->
            <img v-if="getTenant.logo"
                 :src="getTenant.logo"
                 alt="TenantLogo"
                 style="width: 12.0625rem; height: 5.95919rem"
            />
            <p v-else class="tenant_name">{{getTenant.name}}</p>
          </div>
          <div style="justify-content: center;display: flex;width: 100%;">
            <slot name="children"></slot>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {lightenColor} from "@/mixins/themeUtils";
import storeUtils from "@/utils/storeUtils";
export default {
  name: "Layout",
  data(){
    return{
      lightenColor
    }
  },
  computed:{
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    getTenant(){
      return storeUtils.fireAway().global.Tenant
    },

    custom_theme(){
      return storeUtils.fireAway().theme.getCustom_theme
    }
  },
  async beforeCreate() {
    if (!storeUtils.fireAway().global.tenantLoaded) {
      const res = await storeUtils.fireAway().global?.getTenant();
      if (!res.length) {
        this.$router.push("/domain-error");
      }
    }
  },
}
</script>

<style  scoped>
@import url('https://fonts.cdnfonts.com/css/apercu');
.tenant_name{
  font-size: 2.5rem;
  font-weight: 700;
  background: #fff;
  padding: .7rem;
  border-radius: 0.5rem;
  /* shadow-2 */
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
  text-align: center;
  width: auto;
}

.m5-0{
  margin: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* margin-top: 4.96rem; */
  position: relative;
  /* height: 52.00rem; */
  height: 52.00rem;
  padding: 3.5rem;
  gap: 327px;

}

@media (max-width: 1024px) {
  .select_account_type{
    max-width: 100%;
    flex-direction: column;
    padding: 1rem;
    justify-content: start;
    gap: 1rem;
    height: auto;

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
  background: var(--app-default-secondary-linear-gradaint1);
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
  background: linear-gradient(91deg, #F8F1F8 0%, #F1E0F1 100%);;
  position: fixed;
  top: 0;
  left: -35%;
  z-index: 1;

}
.wrapper{
  min-height: 100vh;
  //background: var(--app-defautl-primary-light);
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
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