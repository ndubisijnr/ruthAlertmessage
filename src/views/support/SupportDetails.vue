<script>
import Layout from "@/views/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import FlightPayment from "@/components/bookings/FlightPayment.vue";
import ItenaryDetailsComponent from "@/components/flightItenaryTemplate/ItenaryDetailsComponent.vue";
import router from "@/router";
import { formatAmount, convertTo12HourFormat, convertToWord, getYYYYMMDDFormat } from "../../mixins/flightUtil";
import storeUtils from "../../utils/storeUtils";
export default {
  name: "SupportDetails",
  components:{OnBoardingButton, Layout,FlightPayment,ItenaryDetailsComponent},
  data(){
    return{
      data:null,
      formatAmount,
      convertTo12HourFormat,
      convertToWord,
      getYYYYMMDDFormat
    }
  },

  methods:{
    goBack(){
      router.push({name:"Bookings_Details"})
    },
     printAction(){
       storeUtils.fireAway().print?.commitPrintLoading(true, this.data)
       if(this.getTemplateId === 1) router.push({name:'Template1'})
       if(this.getTemplateId === 2) router.push({name:'Template2'})
       if(this.getTemplateId === 3) router.push({name:'Template3'})
    }
    
  },

  computed: {
    getFlights() {
      if (!this.data) return;
      return this.data?.flight?.passengers
    },
    airlineDetails() {
      if (!this.data) return; 
      return this.data?.flight
    },
    getUser() {
      if (localStorage.user) {
        return JSON.parse(localStorage.user)
      }
    },
    getTemplateId(){    
      if(storeUtils.fireAway().theme.custom_theme) return storeUtils.fireAway().theme.custom_theme.template_id;
      return storeUtils.fireAway().theme.custom_theme.template_id;

    },  
  },

  mounted() {
    if(!localStorage.managedBookings) return;
    this.data = JSON.parse(localStorage.managedBookings)
  }
}
</script>

<template>
  <layout v-slot:child-content>
   
    <div class="overall">
    
        <div class="wrapper">
        <div class="breadcrumb">
          <p @click="goBack" class="breadcrumb_list">Manage Flight Bookings</p>
          <svg style="margin-top:0.50rem;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.49998 2.77474C7.65831 2.77474 7.81664 2.83307 7.94164 2.95807L13.375 8.39141C14.2583 9.27474 14.2583 10.7247 13.375 11.6081L7.94164 17.0414C7.69998 17.2831 7.29998 17.2831 7.05831 17.0414C6.81664 16.7997 6.81664 16.3997 7.05831 16.1581L12.4916 10.7247C12.8916 10.3247 12.8916 9.67474 12.4916 9.27474L7.05831 3.84141C6.81664 3.59974 6.81664 3.19974 7.05831 2.95807C7.18331 2.8414 7.34164 2.77474 7.49998 2.77474Z" fill="#575A65"/>
          </svg>
            <p class="breadcrumb_list">{{ data?.contact_first_name }} {{data?.contact_last_name}}</p>
        </div>

         <div style="display: flex; justify-content: space-between;margin-top: 1.5rem">
           <p class="flight_details">Itinerary Support details</p>
           <on-boarding-button @click="printAction" btn-width="9.31rem" height="2.5rem" text-node="Print Itinerary"></on-boarding-button>
         </div>

          <div>
            <p class="travel_section_info">Travellers Information</p>
            <div class="travel_section_info_box">
              <div v-for="(i, index) in getFlights" style="display: flex;gap: 5.81rem">
                <section>
                  <p class="key">Customer {{ index + 1 }} Name</p>
                  <p class="value">{{i.first_name}} {{i.last_name}}</p>
                </section>
                <section>
                  <p class="key">Category</p>
                  <p class="value">{{i.passenger_type}}</p>
                </section>
              </div>

            </div>
          </div>

          <div>
            <p class="travel_section_info">Payment Details</p>
            <div class="travel_section_info_box">
              <div style="display: flex;justify-content: space-between;width: 70%">
                <div>
                  <p class="key">Payment Date</p>
                  <p class="value">{{convertToWord(airlineDetails?.created_at)}} {{ convertTo12HourFormat(airlineDetails?.created_at) }}</p>
                </div>
                <div>
                  <p class="key">Pnr Number</p>
                  <p class="value">{{airlineDetails?.pnr}}</p>
                </div>
                <div>
                  <p class="key">Amount</p>
                  <p class="value">₦{{formatAmount(airlineDetails?.amount)}}</p>
                </div>
                <div>
                  <p class="key">Anchor Ref</p>
                  <p class="value">{{airlineDetails?.reference}}</p>
                </div>
                <div>
                  <p class="key">status</p>
                  <p class="value">{{airlineDetails?.status}}</p>
                </div>
              </div>

            </div>
          </div>
          <div>
            <p class="travel_section_info">Itinerary Details</p>

            <div>

            </div>
          </div>
         
      </div>
      
      <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 3rem;">
            <ItenaryDetailsComponent :get-booked-flight="airlineDetails" :id="data?.id" :get-user="getFlights ? getFlights[0] : []"></ItenaryDetailsComponent>
          </div>
      </div>
  </layout>
</template>

<style scoped>
.overall{
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;
}

.breadcrumb{
  display: flex;
  gap: 0.41rem;
}

.key{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 200% */
  text-transform: capitalize;

}

.value{
  color: #444854;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 133%; /* 1.33rem */
  text-transform: capitalize;
}

.wrapper{
  /*width: 100%;*/
  height: auto;
  position: relative;
  /*padding: 0 5.5rem;*/
  width: 90rem;
  margin-bottom: 5.5rem;

}

.travel_section_info{
  color:  #2C6CAC;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  margin-top: 2rem;
}

.travel_section_info_box{
  display: flex;
  width: 100%;
  /* height: 7.5625rem; */
  margin-top: 0.75rem;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--secondarytext-default-text-textfield, #E5E9F2);
}

.flight_details{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 100% */
}

.breadcrumb_list{
  color: #575A65;
  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-top:0.50rem;
}
</style>