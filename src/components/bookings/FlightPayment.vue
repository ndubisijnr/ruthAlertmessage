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

        <div class="payment-wrapper">
           

            <div class="payment-wrapper-header">
                <img src="../../assets/map.svg" />

                <p class="text">Thank you for your booking, {{getUser?.first_name}}</p>

                <p class="text-1">Please confirm all reservation information before completing purchase.</p>
            </div>

            <div class="payment-wrapper-body">

                <div class="booking-summary-item">
                    <p class="key">Booking Reference</p>
                    <p class="value">{{getBookedFlight.reference}}</p>
                </div>
                <div class="booking-summary-item">
                    <p class="key">Payment Amount</p>
                    <p class="value">₦ {{formatAmount(getSelectedFlight?.amount)}}</p>
                </div>
                <div class="booking-summary-item">
                    <p class="key">Booking Creation Date</p>
                    <p class="value">{{ getBookedFlight.created_at }}</p>
                </div>
                <div class="booking-summary-item">
                    <p class="key">Booking Expiry Date</p>
                    <p class="value">{{ getBookedFlight.expires_at }}</p>
                </div>
                <div class="booking-summary-item">
                    <p class="key">Payment Date</p>
                    <p class="value">{{ getBookedFlight.pricing.payable }}</p>
                </div>
                <div class="booking-summary-item">
                    <p class="key">Booking Status</p>
                    <p class="value">{{ getBookedFlight.status }}</p>
                </div>
                <div class="booking-summary-item">
                    <p class="key">Total Price</p>
                    <p class="value">₦ {{formatAmount(getSelectedFlight?.amount)}}</p>
                </div>
            

                <div style="width: 100%;display: flex;flex-direction: column;gap: 1.5rem;">
                    <OnBoardingButton @click="isPaying = true" btn-width="100%" textNode="Pay Now"></OnBoardingButton>
                    <!-- <OnBoardingButton btn-width="100%" color="#2C6CAC" background="transparent" textNode="Print Iternery"></OnBoardingButton> -->
                    <OnBoardingButton @click="clearStorage" btn-width="100%" color="#2C6CAC" border="none" background="transparent" textNode="Create New Booking"></OnBoardingButton>
                </div>

            </div>


         

        </div>
        <div style="width: 47.1875rem;display: flex;justify-content: center;align-items: center;">
            <div class="fare_rules">
                            <div
                                style="width: 100%;display:flex;align-items: center;gap: 0.5rem;margin-bottom: 0.5rem;justify-content: space-between;">
                                <div style="display:flex;align-items: center;gap: 0.5rem;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.07617 19.4238C7.06104 21.409 9.69482 22.5 12.5 22.5C15.3052 22.5 17.9434 21.409 19.9238 19.4238C21.9087 17.4387 23 14.8055 23 12C23 9.19455 21.9087 6.55719 19.9238 4.57617C17.9434 2.59103 15.3052 1.5 12.5 1.5C9.69482 1.5 7.05664 2.59103 5.07617 4.57617C3.09131 6.55719 2 9.19455 2 12C2 14.8055 3.09131 17.4428 5.07617 19.4238ZM11.1875 6.75C11.1875 6.02399 11.7734 5.4375 12.5 5.4375C13.2266 5.4375 13.8125 6.02399 13.8125 6.75V13.3125C13.8125 14.0385 13.2266 14.625 12.5 14.625C11.7734 14.625 11.1875 14.0385 11.1875 13.3125V6.75ZM13.8125 17.25C13.8125 16.524 13.2266 15.9375 12.5 15.9375C11.7734 15.9375 11.1875 16.524 11.1875 17.25C11.1875 17.976 11.7734 18.5625 12.5 18.5625C13.2266 18.5625 13.8125 17.976 13.8125 17.25Z"
                                            fill="#1D1E2C" />
                                    </svg>
                                    <p class="fare_rule_h">Fare Rule</p>
                                </div>

                                <svg style="cursor:pointer" @click="toogleFareRules=!toogleFareRules"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 16.0972L6.35159 10.4488L8.04839 8.75198L12 12.7036L15.9516 8.75198L17.6484 10.4488L12 16.0972ZM12 2.40039C6.69838 2.40039 2.39998 6.69759 2.39998 12.0004C2.39998 17.302 6.69838 21.6004 12 21.6004C17.3016 21.6004 21.6 17.302 21.6 12.0004C21.6 6.69759 17.3016 2.40039 12 2.40039Z"
                                        fill="#1D1E2C" />
                                </svg>
                            </div>

                            <div v-if="toogleFareRules">
                                <li class="fare_rule_p">Penalty Applies - Check Rules</li>
                                <li class="fare_rule_p"> On some airlines, changes are not permitted on a ticket in case
                                    of no-show and the ticket(s) have no value and cannot be refunded</li>
                                <li class="fare_rule_p"> Extra baggaga will result to extra charges</li>
                                <li class="fare_rule_p"> Please ensure that you have a valid visa before your
                                    international travel. Wakanow will not be held liable by airport authorities if you
                                    have not fulfilled your visa requirements.</li>
                                <li class="fare_rule_p"> Tickets to Kuala Lumpur must not exceed 14 days, this simply
                                    means all tickets booked to Kuala Lumpur may be less than 14 days but must not be
                                    more than 14 days.</li>
                                <li class="fare_rule_p"> Egypt Air tickets cannot be booked for one way routes, there
                                    should be a RESTRICTION on bookings, NO ONE WAY on Egypt Air.</li>
                                <li class="fare_rule_p"> If you or anyone accompanying you has a serious health issue,
                                    please call us before booking.</li>
                                <li class="fare_rule_p"> In the case of cancellation, amount paid for insurance will be
                                    non-refundable. This is applicable if insurance is booked along with a ticket.</li>
                                <li class="fare_rule_p"> Refunds will be processed within 6 - 8 weeks</li>
                                <li class="fare_rule_p"> A maximum of one infant is allowed to travel with one adult.
                                </li>
                            </div>
            </div>
        </div>

       

       

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


export default{
    name: "Flight Payment",
    components:{BookingIndex, OnBoardingButton, FlightPaymentModal},
    data(){
        return{
            isPaying:false,
            convertDurationToWords,
            convertToWord,
            convertTo12HourFormat,
            formatAmount,
            bookingProgress:['Flight Result','Traveller’s Info','Payment Confirmation'],
            toogleFareRules:false

        }
    },
    methods:{
  
        close(value){
            this.isPaying = value
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
        const flight = JSON.parse(localStorage?.bookedFlight)
        return flight
       },
       getSelectedFlight(){
      return storeUtils.fireAway()?.flight?.getSelectedFlight
    },
    },
    mounted(){
        storeUtils.fireAway().flight?.handleGetWallet()
    }
}

</script>


<style scoped>
@import "../../views/dashboard/style.css";

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