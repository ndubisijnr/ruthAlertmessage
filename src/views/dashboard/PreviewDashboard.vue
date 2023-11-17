<template>
  <layout v-slot:child-content>
    <div class="dashboard_wrapper">
      <div class="mb" v-if="getCurrentRoute === 'Dashboard'">
        <div>
          <div v-if="getCurrentRoute === 'Dashboard'">
            <!--          <h3 class="user-name" > Hello {{getUser?.first_name}} </h3>-->

            <div class="get-started" :style="{background:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)}" v-show="!getBusinessProfile?.id_document && !getBusinessProfile?.cac_document">
              <div class="with-tiqwa">
                <div>
                  <h3 class="with-tiqwa-h">Hello {{getUser?.first_name}}, get started with Tiqwa 🎉</h3>
                  <p class="with-tiqwa-p">Please complete your setup to access your full TIQWA services, </p>
                </div>
                <div style="display: flex;gap: 1rem;height: 2.5rem">
                  <router-link :to="`/settings/${getUser?.access_token?.slice(0,20)}#Verification`"><on-boarding-button btn-width="10rem" color="#FFF" height="2.5rem" text-node="Complete Profile"></on-boarding-button></router-link>
                  <!--           <on-boarding-button btn-width="8rem" color="#2C6CAC" border="none" height="2.5rem" text-node="Skip for later" background="transparent"></on-boarding-button>-->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="create-booking-process">



          <slot name="booking_children"></slot>



        </div>


      </div>
    </div>
  </layout>

</template>

<script>
import NavBar from "../../components/dashboardComponents/NavBar.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import DashboardStatsCard from "../../components/dashboardComponents/DashboardStatsCard.vue";
import users from '../../assets/Cards/users.svg'
import card from '../../assets/Cards/overviecard.png'
import Layout from "../Layout.vue";
import RouteNav from "../../components/RouteNav.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
import {lightenColor} from "@/mixins/themeUtils";


export default {
  name: "PreviewDashboard",
  components:{NavBar,OnBoardingButton,DashboardStatsCard,Layout,RouteNav},
  data(){
    return{
      users:users,
      card,
      showing:false,
      currentProgressIndex:1,
      lightenColor
    }
  },

  methods:{

  },

  computed: {
    getCurrentRoute(){
      return router.currentRoute.value.name
    },

    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.getCustom_theme
    },


    getBookingSum(){
      return storeUtils.fireAway().booking?.getBookingSummary
    },

    getLoadingBooking(){
      return storeUtils.fireAway().booking?.getLoadingBooking
    },

    getFlightResult(){
      return storeUtils.fireAway().flight.getFlightResults
    }
  },
}
</script>

<style scoped>
@import "style.css";


.dashboard_wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>