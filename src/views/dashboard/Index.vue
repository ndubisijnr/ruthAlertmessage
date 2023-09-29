<template>
   <layout v-slot:child-content>
     <div style="padding-right: 5rem;padding-left: 5rem;">
     <h3 class="user-name"> Hello {{getUser?.first_name}} </h3>

     <div class="get-started" v-show="!getBusinessProfile?.id_document && !getBusinessProfile?.cac_document">
       <div class="with-tiqwa">
         <div>
           <h3 class="with-tiqwa-h">Get started with Tiqwa 🎉</h3>
           <p class="with-tiqwa-p">Please complete your setup to access your full TIQWA services, </p>
         </div>
         <div style="display: flex;gap: 1rem;height: 2.5rem">
           <router-link :to="`/settings/${getUser?.access_token?.slice(0,20)}#Verification`"><on-boarding-button btn-width="10rem" color="#FFF" height="2.5rem" text-node="Complete Profile"></on-boarding-button></router-link>
<!--           <on-boarding-button btn-width="8rem" color="#2C6CAC" border="none" height="2.5rem" text-node="Skip for later" background="transparent"></on-boarding-button>-->
         </div>
       </div>
     </div>

     <div class="create-booking-process">

       <route-nav v-if="getCurrentRoute !== 'Dashboard'"></route-nav>

       <div class="travel_type_booking" >
         <div class="progress-or" v-if="getCurrentRoute !== 'Dashboard'">
           <div class="progress-or-item" v-for="(i, index) in bookingProgress">
             <p class="stage" :class="{'activeStage':getBookingStage === i || progressNav.includes(i)}">{{ i }}</p>
             <div style="display: flex;align-items: center;justify-content: start">
               <div class="circle" :class="{'activeProgress': getBookingStage === i || progressNav.includes(i)}">{{index + 1}}</div>
               <div class="line" v-if="index !== bookingProgress.length - 1 || getBookingStage === i">
                 <div :class="{'progress':progressNav.includes(i)}"></div>
               </div>
             </div>
           </div>
         </div>

        <div class="info_wrapper" v-if="getCurrentRoute !== 'Dashboard' && getCurrentRoute !== 'Flight Payment'"> 
          <div class="booking-info">
            <div class="search-info-area">
              <p class="search-info">{{ getFlightResult[0]?.inbound.length > 0 ? 'Round Trip' : 'One Way' }}</p>
              <p class="search-info">{{ getFlightResult[0]?.price_summary[0]?.quantity }} Passengers</p>
              <p class="search-info">{{ getFlightResult[0]?.outbound[0]?.cabin_type }}</p>
            </div>
            <router-link :to="`/dashboard/${getUser?.access_token?.slice(0,20)}`"> <on-boarding-button @click="doSearch('Search for Flight')" btn-width="7.26981rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="Edit Search"></on-boarding-button></router-link>
          </div>
          <div class="dest-abv">
            <p class="dest-abv-it">{{getCityByCityCode(getFlightResult[0]?.outbound[0]?.airport_from) }}  ({{getFlightResult[0]?.outbound[0]?.airport_from}})</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49964 11.9991C1.49964 12.198 1.57865 12.3887 1.71931 12.5294C1.85996 12.67 2.05072 12.7491 2.24964 12.7491H19.9391L15.2186 17.4681C15.1489 17.5378 15.0936 17.6206 15.0559 17.7117C15.0181 17.8028 14.9987 17.9004 14.9987 17.9991C14.9987 18.0977 15.0181 18.1953 15.0559 18.2864C15.0936 18.3775 15.1489 18.4603 15.2186 18.5301C15.2884 18.5998 15.3712 18.6551 15.4623 18.6928C15.5534 18.7306 15.651 18.75 15.7496 18.75C15.8483 18.75 15.9459 18.7306 16.037 18.6928C16.1281 18.6551 16.2109 18.5998 16.2806 18.5301L22.2806 12.5301C22.3505 12.4604 22.4059 12.3776 22.4437 12.2865C22.4815 12.1954 22.501 12.0977 22.501 11.9991C22.501 11.9004 22.4815 11.8027 22.4437 11.7116C22.4059 11.6205 22.3505 11.5377 22.2806 11.4681L16.2806 5.46805C16.2109 5.39832 16.1281 5.34301 16.037 5.30527C15.9459 5.26753 15.8483 5.24811 15.7496 5.24811C15.651 5.24811 15.5534 5.26753 15.4623 5.30527C15.3712 5.34301 15.2884 5.39832 15.2186 5.46805C15.1489 5.53778 15.0936 5.62057 15.0559 5.71168C15.0181 5.80279 14.9987 5.90044 14.9987 5.99905C14.9987 6.09767 15.0181 6.19532 15.0559 6.28643C15.0936 6.37754 15.1489 6.46032 15.2186 6.53005L19.9391 11.2491H2.24964C2.05072 11.2491 1.85996 11.3281 1.71931 11.4687C1.57865 11.6094 1.49964 11.8001 1.49964 11.9991Z" fill="#1D1E2C"/>
            </svg>
            <p class="dest-abv-it">{{getCityByCityCode(getFlightResult[0]?.outbound.length > 0 ?  getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to : getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to) }}  ({{getFlightResult[0]?.outbound.length > 0 ?  getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to : getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to}})</p>
            <!-- getFlightResult[0]?.outbound[0]?.airport_to -->
          </div>
        </div>

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
export default {
  name: "Dashboard",
  components:{NavBar,OnBoardingButton,DashboardStatsCard,Layout,RouteNav},
  data(){
    return{
      users:users,
      card,
      showing:false,
      bookingProgress:['Flight Result','Traveller’s Info','Payment Confirmation'],
      currentProgressIndex:1,
    }
  },

  methods:{
    getCityByCityCode(city_code){
      const airports = JSON.parse(localStorage?.airports)
      if(airports){
        const cityName = airports.filter(it => it.city_code === city_code)[0]?.city
        return cityName
      }
    },
  },

  computed: {
    getCurrentRoute(){
      return router.currentRoute.value.name
    },
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },
    getBookingStage(){
      return storeUtils.fireAway().booking?.getBookingStage
    },

    getBookingSum(){
      return storeUtils.fireAway().booking?.getBookingSummary
    },

    getLoadingBooking(){
      return storeUtils.fireAway().booking?.getLoadingBooking
    },

    progressNav(){
      return storeUtils.fireAway().booking?.getProgressNav
    },

    getFlightResult(){
      return storeUtils.fireAway().flight.getFlightResults
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }

    },
  },
}
</script>

<style scoped>
@import "style.css";

.dest-abv-it{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 133.333% */
}

.booking-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
  
}

.info_wrapper{
  margin: 0 1.5rem;
}

a{
  text-decoration: none;
}

.create-booking-process{
  width: 100%;
  margin-top: 1.5rem;
}

.travel_type_booking{
  width: 100%;

}

.double-revenue-display{
 display: flex;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.search-info-area{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-info{
  display: flex;
  padding: 0.625rem 1.25rem;
  align-items: flex-start;
  width: auto !important;
  gap: 0.625rem;
  border-radius: 31.25rem;
  background: #EFF2F7;
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}


 .inner-cards{
   display: inline-flex;
   gap: 20px;
   justify-content: space-between;
   overflow-x: scroll;
   width: 100%;
 }

.cards{
  margin-top: 48px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

::-webkit-scrollbar{
  display: none;
}

.no-revenue-yet{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;
}

.revenue{
  width: 100%;
  border-radius: 1rem;
  background: #FFF;
  padding: 2.25rem 0rem 2.3125rem 0rem;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 23.25rem;

}

.no-revenue-yet-p{
  width: 15.75rem;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

}

.no-revenue-yet-h{
  color:  #1D1E2C;
  text-align: center;
  /* Headings/18px/Medium */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 144.444% */

}


.with-tiqwa-h{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem; /* 166.667% */
}

.with-tiqwa{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left:2rem;
  margin-top: 1rem;
  width: 24.5rem;
  height: 7.125rem;
}

.with-tiqwa-p{
  color: #2D3139;
  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.user-name{
  color: #000;
  /* Headings/32px/bold */
  font-family: 'Product Sans';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.625rem; /* 131.25% */
  text-transform: capitalize;
}

.get-started{
  width: 100%;
  height: 10.625rem;
  background-image: url("../../assets/home_background_blue.svg");
  margin: 2.5rem 0 4rem 0;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-color: var(--app-defautl-primary-light);
}

@media (max-width: 1024px) {
  .get-started{
    height: 12.625rem;
    margin: 1rem 0;
    background-position: top;
  }

  .double-revenue-display{
    flex-direction: column;
    margin-bottom:1.25rem;
  }
}
</style>