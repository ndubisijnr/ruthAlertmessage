<template>
    <div
        v-if="getTenantLoaded"
        class="wrapper"
        :style="{
            background: custom_theme
                ? lightenColor(custom_theme?.color)
                : lightenColor(default_theme.color),
        }"
    >
        <div
            class="top-angle"
            :style="{
                background: custom_theme
                    ? toGradient(custom_theme.color, '220')
                    : toGradient(default_theme.color, '220'),
            }"
        ></div>
        <div
            class="bottom-angle"
            :style="{
                background: custom_theme
                    ? toGradient(custom_theme.color, '107')
                    : toGradient(default_theme.color, '107'),
            }"
        ></div>

        <div class="m5-0">
            <div class="inner_wrapper">
                <div class="select_account_type">
                    <div class="logo_area">
                        <!-- users logo or travel_yakata_logo -->
                        <img v-if="getTenant.logo"
                            :src="getTenant.logo"
                             alt="TenantLogo"
                             class="logo"
                        />
                        <p v-else class="tenant_name">{{getTenant.name}}</p>
                    </div>


                      <slot name="sub-child"></slot>

                      <slot name="children"></slot>



                </div>
            </div>
        </div>
    </div>
    <div class="splash animate__animated animate__fadeInDown" v-else>
        <SpinnerLoader :width="'10rem'"></SpinnerLoader>
        <!-- <img style="width:8rem;position: absolute;"  src="../../assets/Cards/logo.svg" /> -->
    </div>
</template>

<script>
import storeUtils from "../../utils/storeUtils";
import { toGradient, lightenColor } from "@/mixins/themeUtils";
import SpinnerLoader from "../../components/loaders/SpinnerLoader.vue";
import router from "@/router";

export default {
    name: "CompleteRegistrationLayout",

    components: {
        SpinnerLoader,
    },

    data() {
        return {
            toGradient,
            lightenColor,
        };
    },

    computed: {
        default_theme() {
            return storeUtils.fireAway().theme.getDefault_theme;
        },

        custom_theme() {
            return storeUtils.fireAway().theme.getCustom_theme;
        },

        getTenant(){
          return storeUtils.fireAway().global.Tenant
        },

        getTenantLoaded() {
            return storeUtils.fireAway().global.getTenantLoaded;
        },
    },

    async beforeCreate() {
        if (!storeUtils.fireAway().global.tenantLoaded) {
            const res = await storeUtils.fireAway().global?.getTenant();
            if (!res.length) {
                this.$router.push("/domain-error");
            }
        }
    },
  beforeMount() {
    if(localStorage.token) router.push({name:'Dashboard',params: {token:localStorage.token.slice(0,20)}})
  },

  mounted() {
    const favicon = document.getElementById("faviconIcon");
    const title = document.getElementById("app_title");


    if (this.getFavicon) favicon.href = this.getFavicon;
    if (this.getTenant) title.textContent = this.getTenant.name;
  }
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/apercu");
.logo{
  max-width: 6rem;
  max-height: 2.35713rem;
}
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
.splash {
    width: 100%;
    height: 100vh;
    position: fixed;
    background: #fff;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.m5-0 {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
}
@media (max-width: 1024px) {
    .m5-0 {
        margin: 0rem;
        min-height: 100vh;
        align-items: start;
    }
}

.select_account_type {
    width: 100%;
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    /* margin-top: 4.96rem; */
    position: relative;
    /* height: 52.00rem; */
    height: 52rem;
    padding: 3.5rem;
    gap: 327px;
}

@media (max-width: 1024px) {
    .select_account_type {
        width: 100%;
        flex-direction: column;
        padding: 1rem;
        justify-content: start;
        gap: 0;
        height: auto;

    }
}

.bottom-angle {
    width: 69.45238rem;
    height: 27.51469rem;
    transform: rotate(150.931deg);
    flex-shrink: 0;
    position: fixed;
    top: 70%;
    right: -20%;
    bottom: -10%;
    /*background:var(--app-default-secondary-linear-gradaint1);*/
    z-index: 1;
}

@media (max-width: 1024px) {
    .bottom-angle {
        right: -40%;
    }
}

.top-angle {
    width: 69.45238rem;
    height: 27.51469rem;
    transform: rotate(150.931deg);
    flex-shrink: 0;
    /*background: var(--app-default-secondary-linear-gradaint2);*/
    position: fixed;
    top: 0;
    left: -35%;
    z-index: 1;
}

.wrapper {
    min-height: 100vh;
    /*background: var(--app-defautl-primary-light);*/
    display: inline-block;
    width: 100%;
    position: relative;
}

.inner_wrapper {
    position: relative;
    border-radius: 1rem;
    background: transparent;
    z-index: 5;
    width: 100%;
    height: 52rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo_area {
    position: absolute;
    top: 0;
    float: left;
    margin: .5rem 0;
}

@media (max-width: 1024px) {
    .logo_area {
        position: relative;
        float: none;
    }
    .inner_wrapper {
        height: auto;
        width: 100%;
        display: inline-block;
        align-items: start;
    }
}
</style>
