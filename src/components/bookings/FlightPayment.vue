<template>
    <FlightPaymentModal :reference="getBookedFlight.reference" :balance="getWallet.balance" :user="getUser?.first_name + ' ' + getUser?.last_name " v-if="isPaying" @close="close"></FlightPaymentModal>

  <booking-index v-slot:booking_children>
    <div class="flight_wrapper  animate__animated animate__fadeIn">
        <!-- {{ getBookedFlight }} -->

    <div class="progress-or">
                <div class="progress-or-item" v-for="(i, index) in bookingProgress">
                  <p class="stage" :class="{'activeStage':getBookingStage === i || progressNav.includes(i)}">{{ i }}</p>
                  <div style="display: flex;align-items: center;justify-content: start">
                    <div class="circle" :class="{'activeProgress': getBookingStage === i || progressNav.includes(i)}">{{index + 1}}</div>
                    <div class="line" v-if="index !== bookingProgress.length - 1">
                      <div :class="{'progress':progressNav.includes(i)}"></div>
                    </div>
                  </div>
                </div>
        </div>

      <itenary-details-component :get-user="getUser" :get-booked-flight="getBookedFlight"></itenary-details-component>

        <!-- <div style="margin: 2.5rem 0;">
            <p class="text">Flight Details</p>
      
            <div class="payment-wrapper">
                <div>

                    <div style="width: 100%" v-for="(x, itemindex) in getSelectedFlight?.outbound" :key="itemindex">
                        <div class="actual-result-item">
                            <div class="logo-area">
                            <img :src="x.airline_details.logo" class="logo" />
                            <p class="flight-name">{{x.airline_details.name}}</p>
                            </div>
                            <div class="actual-result-item-info">
                            <div>
                                <p class="time">  {{ convertTo12HourFormat(x.departure_time) }}</p>
                                <p class="dest">{{getCityByCityCode(x.airport_from) }}  ({{x.airport_from}})</p>
                            </div>
                            <div class="more-flight-info">
                                <span class="duration">{{convertDurationToWords(getSelectedFlight?.total_duration)}}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                                <path d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z" fill="#9DA8B6"/>
                                </svg>
                                <span class="stops">{{getSelectedFlight?.outbound_stops + getSelectedFlight?.inbound_stops === 0 ? 'Direct' : `${getSelectedFlight?.outbound_stops + getSelectedFlight?.inbound_stops}-Stops`}}</span>
                            </div>
                            <div>
                                <p class="time">  {{ convertTo12HourFormat(x.arrival_time) }}</p>
                                <p class="dest">{{getCityByCityCode(x.airport_to) }}  ({{x.airport_to}})</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

            <div class="payment-wrapper" v-if="getSelectedFlight?.inbound.length > 0">
                <div>

                    <div style="width: 100%"  v-if="getSelectedFlight?.inbound.length > 1" v-for="(x, itemindex) in getSelectedFlight?.inbound" :key="itemindex">
                        <div class="actual-result-item" v-if="itemindex === i?.inbound.length - 1">
                            <div class="logo-area">
                            <img :src="getSelectedFlight?.inbound[0]?.airline_details.logo" class="logo" />
                            <p class="flight-name">{{getSelectedFlight?.inbound[0]?.airline_details.name}}</p>
                            </div>
                            <div class="actual-result-item-info">
                            <div>
                                <p class="time">  {{ convertTo12HourFormat(getSelectedFlight?.inbound[0]?.departure_time) }}</p>
                                <p class="dest">{{getCityByCityCode(getSelectedFlight?.inbound[0]?.airport_from) }}  ({{getSelectedFlight?.inbound[0]?.airport_from}})</p>
                            </div>
                            <div class="more-flight-info">
                                <span class="duration">{{convertDurationToWords(getSelectedFlight?.total_duration)}}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                                <path d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z" fill="#9DA8B6"/>
                                </svg>
                                <span class="stops">{{getSelectedFlight?.outbound_stops + getSelectedFlight?.inbound_stops === 0 ? 'Direct' : `${getSelectedFlight?.outbound_stops + getSelectedFlight?.inbound_stops}-Stops`}}</span>
                            </div>
                            <div>
                                <p class="time">  {{ convertTo12HourFormat(x.arrival_time) }}</p>
                                <p class="dest">{{getCityByCityCode(x.airport_to) }}  ({{x.airport_to}})</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

            </div>
            </div>
        </div>
        </div>
        </div> -->
    </div>

    </booking-index>
</template>


<script>
import BookingIndex from "../../views/dashboard/Index.vue"
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import FlightPaymentModal from "../modals/FlightPaymentModal.vue";
import storeUtils from "../../utils/storeUtils";
import { convertDurationToWords, convertTo12HourFormat, convertToWord } from "../../mixins/flightUtil";
import { formatAmount } from "../../mixins/flightUtil";
import EmailItinerary from "@/components/modals/itinaryModals/EmailItinerary.vue";
import ChooseASeat from "@/components/modals/itinaryModals/ChooseASeat.vue";
import CancelItinerary from "@/components/modals/itinaryModals/CancelItinerary.vue";
import Issurance from "@/components/modals/itinaryModals/Issurance.vue";
import Void from "@/components/modals/itinaryModals/Void.vue";
import Exchange from "@/components/modals/itinaryModals/Exchange.vue";
import Refund from "@/components/modals/itinaryModals/Refund.vue";
import Others from "@/components/modals/itinaryModals/Others.vue";
import ItenaryDetailsComponent from "@/components/flightItenaryTemplate/ItenaryDetailsComponent.vue";

export default{
    name: "Flight Payment",
    components:{BookingIndex,ItenaryDetailsComponent,Others,OnBoardingButton,Void,Exchange,Refund, Issurance, FlightPaymentModal,EmailItinerary, ChooseASeat,CancelItinerary},
    data(){
        return{
            isPaying:false,
            convertDurationToWords,
            convertToWord,
            convertTo12HourFormat,
            formatAmount,
            bookingProgress:['Flight Result','Traveller’s Info','Payment Confirmation'],
            toogleFareRules:false,
            activeAction:null,
            actionClicked:false,

        }
    },

    methods:{
      showAction(e, action){
        e.stopPropagation()
        this.activeAction=action,
        this.actionClicked=!this.actionClicked
      },
  
      close(value){
            this.isPaying = value
            this.isEmailTemplate = value
            this.isChooseSeat = value
            this.isCancel = value
            this.isIssurance = value
            this.isRefund = value
            this.isVoiding = value
            this.isExchange=value
            this.isOthers = value
        },

      getAirportNamesByCityCode(city_code){
          const airports = JSON.parse(localStorage?.airports)
          if(airports){
            const airportName = airports.filter(it => it.city_code === city_code)[0]?.name
            return airportName
          }
        },

      getCityByCityCode(city_code){
      const airports = JSON.parse(localStorage?.airports)
      if(airports){
        const cityName = airports.filter(it => it.city_code === city_code)[0]?.city
        return cityName
      }
    },

      clearStorage(){
      const user = JSON.parse(localStorage?.user)
      localStorage.progressNav = JSON.stringify([])
      localStorage.removeItem('bookedFlight')
      localStorage.removeItem('selectedFlight')
      localStorage.removeItem('flightResults')
      localStorage.bookingStage = "Flight Search"
      window.location = `/dashboard/${user?.access_token?.slice(0,20)}`
    }
    },

    computed:{
       getWallet(){
        return storeUtils.fireAway().flight?.getWallet
       },

       getBookingStage(){
            return storeUtils.fireAway().flight?.getBookingStage
        },

        progressNav(){
            return storeUtils.fireAway().flight?.getProgressNav
        },

       getUser(){
        const user = JSON.parse(localStorage?.user)
        return user
       },
       getBookedFlight(){
        if(!localStorage.bookedFlight) return;
        return JSON.parse(localStorage?.bookedFlight)
       },
       getSelectedFlight(){
      return storeUtils.fireAway()?.flight?.getSelectedFlight
    },
    },

    mounted(){
        storeUtils.fireAway().flight?.handleGetWallet()
        storeUtils.fireAway().flight?.handleGetItineraryRequest()
        storeUtils.fireAway().flight?.handleGetFlightDetails(this.getBookedFlight?.reference)
    }
}

</script>


<style scoped>
@import "../../views/dashboard/style.css";
.filter-items:hover ~ .filter-by-modal {
  display: flex;
}
.filter-by-modal-p:hover{
  font-size: 1.2rem;
}

.filter-by-modal-p{
  display: flex;
  width: 13.4375rem;
  padding: 0.625rem 1.25rem;
  align-items: center;
  gap: 0.875rem;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  background: #FFF;
  color: #222;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.filter-by-modal{
  flex-direction: column;
  position: absolute;
  z-index: 999999;
  display: flex;
  left: 0;
  /* m6 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  //bottom: 0;
  background: #fff;
}

.itinerary-p{
  color:  #575A65;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.action_wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
}
.action_items{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background:  #EAF0F7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action_plate{
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
.fare_rules{
  display: inline-flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-1, #D5E2EE);
  background: #F9FAFC;
  width: 100%;
  margin-top: 2rem;
 
}
.fare_rule_h{
    color: var(--black-text-01, #1D1E2C);

    /* Subtext/14px/Regular */
    font-family:'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
}
.fare_rule_p{
  color: var(--black-text-03, #444854);
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */
}
.key{
    color: var(--black-text-03, #444854);
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.value{
    color: var(--black-text-03, #444854);

    /* 16px/bold */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 175% */
}

.flight_wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background: #FFF;

    /* Shadows / Modals */
    box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
    padding-bottom: 6.75rem;
    margin-bottom: 5.13rem;

}
.payment-wrapper-body{
    width: 95%;
    margin: 1.5rem;
    display: inline-flex;
    flex-direction: column;
    gap: 2rem;
}
.booking-summary-item{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--secondarytext-default-text-textfield, #E5E9F2);
    background: #FFF;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}
.payment-wrapper-header{
    text-align: center;
}
.payment-wrapper{
    width: 47.1875rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 1px solid var(--secondarytext-default-text-textfield, #E5E9F2);
    background: var(--Color, #FFF);
    /* margin: 0 11.5rem 3rem 11.44rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text{
    color: #2D3139;
    /* bold/24px */
    font-family: 'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 116.667% */
    margin-bottom: 1rem;
}

.text-1{
    color: var(--black-text-04, #575A65);
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    margin-top: 0.5rem;
}
.actual-result-item-info{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.time{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
}

.dest{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
}



.more-flight-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stops{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
}

.actual-result-item{
  width: 100%;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  background: #FFF;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  padding-left:1.5rem;
  padding-right: 1.5rem;
}

.duration{
  color:  #1D1E2C;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}
.flight-name{
  color:  #444854;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}

.logo{
  width: 2rem;
  height: 2rem;
}

.logo-area{
  display: flex;
  width: 15.1875rem;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
}

</style>