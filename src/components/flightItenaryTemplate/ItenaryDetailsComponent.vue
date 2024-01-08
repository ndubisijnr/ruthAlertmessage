<script>
import {convertDurationToWords, convertTo12HourFormat, convertToWord, formatAmount} from "@/mixins/flightUtil";
import storeUtils from "@/utils/storeUtils";
import CancelItinerary from "@/components/modals/itinaryModals/CancelItinerary.vue";
import Exchange from "@/components/modals/itinaryModals/Exchange.vue";
import Void from "@/components/modals/itinaryModals/Void.vue";
import Refund from "@/components/modals/itinaryModals/Refund.vue";
import EmailItinerary from "@/components/modals/itinaryModals/EmailItinerary.vue";
import Issurance from "@/components/modals/itinaryModals/Issurance.vue";
import Others from "@/components/modals/itinaryModals/Others.vue";
import ChooseASeat from "@/components/modals/itinaryModals/ChooseASeat.vue";
import router from "@/router";

export default{
  name: "ItenaryDetailsComponent",
  components: {ChooseASeat, Others, Issurance, EmailItinerary, Refund, Void, Exchange, CancelItinerary},
  props:['getUser','getBookedFlight','getSelectedFlight'],
  data(){
    return{
      isPaying:false,
      convertDurationToWords,
      convertToWord,
      convertTo12HourFormat,
      formatAmount,
      toogleFareRules:false,
      activeAction:null,
      actionClicked:false,
      isEmailTemplate:false,
      isChooseSeat:false,
      isCancel:false,
      isIssurance:false,
      isVoiding:false,
      isRefund:false,
      isExchange:false,
      isOthers:false
    }
  },

  computed:{
    getCurrentRoute(){
      return router.currentRoute.value.fullPath
    },
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
}
</script>

<template>
  <EmailItinerary @close="close" v-show="isEmailTemplate"></EmailItinerary>
  <ChooseASeat @close="close" v-show="isChooseSeat"></ChooseASeat>
  <CancelItinerary @close="close" v-show="isCancel"></CancelItinerary>
  <issurance :data="getBookedFlight" @close="close" v-show="isIssurance"></issurance>
  <Refund :data="getBookedFlight" @close="close" v-show="isRefund"></Refund>
  <Exchange :data="getBookedFlight"  @close="close" v-show="isExchange"></Exchange>
  <Void :data="getBookedFlight" @close="close" v-show="isVoiding"></Void>
  <Others :data="getBookedFlight" @close="close" v-show="isOthers"></Others>

  <div :style="getCurrentRoute.includes('bookings')  ? {marginLeft: '0',marginTop:'0'} : null">
    <div class="payment-wrapper">
      <div class="payment-wrapper-header">
        <img src="../../assets/tiqwa_.gif"  style="width: 15.5rem;"/>

        <p class="text">Thank you for your booking, {{getUser?.first_name}}</p>

        <p class="text-1">Please confirm all reservation information before completing purchase.</p>
      </div>

      <div class="payment-wrapper-body">

        <div class="booking-summary-item">
          <p class="key">Booking Reference</p>
          <p class="value">{{getBookedFlight?.reference}}</p>
        </div>
        <div class="booking-summary-item">
          <p class="key">Payment Amount</p>
          <p class="value">₦ {{formatAmount(getBookedFlight?.amount)}}</p>
        </div>
        <div class="booking-summary-item">
          <p class="key">Booking Creation Date</p>
          <p class="value">{{ convertToWord(getBookedFlight?.created_at) }} at {{ convertTo12HourFormat(getBookedFlight?.created_at) }}</p>
        </div>
        <div class="booking-summary-item">
          <p class="key">Booking Expiry Date</p>
          <p class="value">{{ convertToWord(getBookedFlight?.expires_at)}}  at  {{convertTo12HourFormat(getBookedFlight?.expires_at)}}</p>
        </div>
      
        <div class="booking-summary-item">
          <p class="key">Booking Status</p>
          <p class="value">{{ getBookedFlight?.status }}</p>
        </div>
        <div class="booking-summary-item">
          <p class="key">Total Price</p>
          <p class="value">₦ {{formatAmount(getBookedFlight?.amount)}}</p>
        </div>


<!--                <div style="width: 100%;display: flex;flex-direction: column;gap: 1.5rem;">-->
<!--                    <OnBoardingButton @click="isPaying = true" btn-width="100%" textNode="Pay Now"></OnBoardingButton>-->
<!--                    &lt;!&ndash; <OnBoardingButton btn-width="100%" color="#2C6CAC" background="transparent" textNode="Print Iternery"></OnBoardingButton> &ndash;&gt;-->
<!--                    <OnBoardingButton @click="clearStorage" btn-width="100%" color="#2C6CAC" border="none" background="transparent" textNode="Create New Booking"></OnBoardingButton>-->
<!--                </div>-->

      </div>
    </div>

    <div style="width: 47.1875rem;display: flex;justify-content: center;align-items: center;">
      <div style="width: 100%;">
        <div class="fare_rules">
          <p>Display Option</p>

        </div>
        <div class="action_plate">
          <div class="action_wrapper">
            <div class="action_items" @click="e => showAction(e, 'view_itinerary')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.9999 11.7502C12.8099 11.7502 12.6199 11.6802 12.4699 11.5302C12.1799 11.2402 12.1799 10.7602 12.4699 10.4702L20.6699 2.27023C20.9599 1.98023 21.4399 1.98023 21.7299 2.27023C22.0199 2.56023 22.0199 3.04023 21.7299 3.33023L13.5299 11.5302C13.3799 11.6802 13.1899 11.7502 12.9999 11.7502Z" fill="#2C6CAC"/>
                <path d="M22.0002 7.55C21.5902 7.55 21.2502 7.21 21.2502 6.8V2.75H17.2002C16.7902 2.75 16.4502 2.41 16.4502 2C16.4502 1.59 16.7902 1.25 17.2002 1.25H22.0002C22.4102 1.25 22.7502 1.59 22.7502 2V6.8C22.7502 7.21 22.4102 7.55 22.0002 7.55Z" fill="#2C6CAC"/>
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p" @click="e => showAction(e, 'view_itinerary')">View Itinerary</p>
            <div style="position: relative" v-show="activeAction === 'view_itinerary' && actionClicked">
              <div class="filter-by-modal">
                <p class="filter-by-modal-p">Print Itinerary</p>
                <p class="filter-by-modal-p" @click="isEmailTemplate=true">Email Itinerary</p>
              </div>
            </div>

          </div>
          <div class="action_wrapper" >
            <div class="action_items" @click="e => showAction(e, 'special_request')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 22.3194C7.72 22.3194 7.42998 22.2494 7.16998 22.1094C6.59998 21.8094 6.25 21.2094 6.25 20.5694V19.1495C3.23 18.8395 1.25 16.6194 1.25 13.4394V7.43945C1.25 3.99945 3.56 1.68945 7 1.68945H17C20.44 1.68945 22.75 3.99945 22.75 7.43945V13.4394C22.75 16.8794 20.44 19.1894 17 19.1894H13.23L8.96997 22.0295C8.67997 22.2195 8.34 22.3194 8 22.3194ZM7 3.17944C4.42 3.17944 2.75 4.84944 2.75 7.42944V13.4295C2.75 16.0095 4.42 17.6795 7 17.6795C7.41 17.6795 7.75 18.0195 7.75 18.4295V20.5595C7.75 20.6895 7.83 20.7495 7.88 20.7795C7.93001 20.8095 8.03001 20.8395 8.14001 20.7695L12.59 17.8095C12.71 17.7295 12.86 17.6795 13.01 17.6795H17.01C19.59 17.6795 21.26 16.0095 21.26 13.4295V7.42944C21.26 4.84944 19.59 3.17944 17.01 3.17944H7Z" fill="#2C6CAC"/>
                <path d="M11.9998 12.1104C11.5898 12.1104 11.2498 11.7704 11.2498 11.3604V11.1504C11.2498 9.99039 12.0998 9.42038 12.4198 9.20038C12.7898 8.95038 12.9098 8.78039 12.9098 8.52039C12.9098 8.02039 12.4998 7.61035 11.9998 7.61035C11.4998 7.61035 11.0898 8.02039 11.0898 8.52039C11.0898 8.93039 10.7498 9.27039 10.3398 9.27039C9.92984 9.27039 9.58984 8.93039 9.58984 8.52039C9.58984 7.19039 10.6698 6.11035 11.9998 6.11035C13.3298 6.11035 14.4098 7.19039 14.4098 8.52039C14.4098 9.66039 13.5698 10.2304 13.2598 10.4404C12.8698 10.7004 12.7498 10.8704 12.7498 11.1504V11.3604C12.7498 11.7804 12.4098 12.1104 11.9998 12.1104Z" fill="#2C6CAC"/>
                <path d="M12 14.5996C11.58 14.5996 11.25 14.2596 11.25 13.8496C11.25 13.4396 11.59 13.0996 12 13.0996C12.41 13.0996 12.75 13.4396 12.75 13.8496C12.75 14.2596 12.42 14.5996 12 14.5996Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p" @click="e => showAction(e, 'special_request')">Special Request </p>
            <div style="position: relative" v-show="activeAction === 'special_request' && actionClicked">
              <div class="filter-by-modal">
                <p class="filter-by-modal-p" @click="isChooseSeat=true">Choose Seat</p>
                <p class="filter-by-modal-p">Frequent Flyer</p>
                <p class="filter-by-modal-p">Passport Data</p>
                <p class="filter-by-modal-p">SSR/OSI DOCS</p>
              </div>
            </div>
          </div>
          <div class="action_wrapper">
            <div class="action_items">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5002 22.7498C10.7102 22.7498 9.96025 22.3398 9.44025 21.6398L8.42023 20.2998C8.21023 20.0198 7.93025 19.8598 7.63025 19.8398C7.34025 19.8198 7.03027 19.9598 6.78027 20.2098C5.92027 21.1298 5.08022 21.5698 4.29022 21.5498C3.75022 21.5298 3.28023 21.2898 2.92023 20.8498C2.88023 20.7998 2.84024 20.7298 2.81024 20.6598C2.42024 19.8198 2.24023 18.6798 2.24023 16.9698V7.04977C2.24023 5.33977 2.42024 4.20977 2.81024 3.35977C2.84024 3.29977 2.87023 3.23977 2.92023 3.18977C3.27023 2.73977 3.74027 2.49977 4.28027 2.46977C5.08027 2.43977 5.93026 2.89977 6.77026 3.79977C7.02026 4.06977 7.32024 4.19977 7.62024 4.17977C7.92024 4.15977 8.20022 3.99977 8.41022 3.71977L9.43024 2.36977C9.95024 1.66977 10.7002 1.25977 11.4902 1.25977C12.2802 1.25977 13.0302 1.66977 13.5502 2.36977L14.5602 3.70977C14.7702 3.99977 15.0602 4.15977 15.3702 4.17977C15.6602 4.19977 15.9702 4.05977 16.2202 3.79977C17.0402 2.91977 17.8502 2.46977 18.6302 2.46977C19.1902 2.46977 19.7103 2.71977 20.0703 3.18977C20.1103 3.23977 20.1502 3.29977 20.1802 3.36977C20.5702 4.20977 20.7502 5.34977 20.7502 7.05977V16.9798C20.7502 18.6898 20.5702 19.8198 20.1802 20.6698C20.1402 20.7598 20.0903 20.8398 20.0203 20.9098C19.7103 21.3098 19.2002 21.5598 18.6302 21.5598C17.8502 21.5598 17.0402 21.1098 16.2202 20.2298C15.9802 19.9698 15.6502 19.8298 15.3702 19.8498C15.0602 19.8698 14.7802 20.0298 14.5602 20.3198L13.5502 21.6598C13.0402 22.3398 12.2902 22.7498 11.5002 22.7498ZM7.58026 18.3298C7.62026 18.3298 7.67027 18.3298 7.71027 18.3298C8.45027 18.3698 9.14023 18.7598 9.61023 19.3898L10.6302 20.7398C11.1202 21.3998 11.8602 21.3998 12.3502 20.7498L13.3602 19.4098C13.8402 18.7698 14.5403 18.3898 15.2803 18.3498C16.0203 18.3098 16.7602 18.6198 17.3002 19.1998C18.0402 19.9898 18.4902 20.0498 18.6102 20.0498C18.6902 20.0498 18.7603 20.0298 18.8303 19.9698C19.1103 19.3398 19.2302 18.3898 19.2302 16.9698V7.04977C19.2302 5.64977 19.1003 4.69977 18.8303 4.06977C18.7503 3.97977 18.6702 3.96977 18.6102 3.96977C18.4902 3.96977 18.0402 4.02977 17.3002 4.81977C16.7602 5.39977 16.0203 5.70977 15.2803 5.66977C14.5303 5.62977 13.8302 5.23977 13.3502 4.60977L12.3403 3.26977C11.8503 2.60977 11.1102 2.60977 10.6202 3.26977L9.60022 4.62977C9.13022 5.25977 8.44026 5.63977 7.70026 5.67977C6.96026 5.71977 6.22024 5.40977 5.68024 4.83977C5.07024 4.17977 4.60027 3.95977 4.34027 3.96977C4.28027 3.96977 4.21025 3.98977 4.13025 4.06977C3.86025 4.69977 3.73022 5.64977 3.73022 7.04977V16.9698C3.73022 18.3798 3.86025 19.3298 4.13025 19.9598C4.22025 20.0398 4.28027 20.0498 4.34027 20.0598C4.59027 20.0698 5.06023 19.8498 5.67023 19.1998C6.20023 18.6298 6.89026 18.3298 7.58026 18.3298Z" fill="#2C6CAC"/>
                <path d="M16 11H8C7.59 11 7.25 10.66 7.25 10.25C7.25 9.84 7.59 9.5 8 9.5H16C16.41 9.5 16.75 9.84 16.75 10.25C16.75 10.66 16.41 11 16 11Z" fill="#2C6CAC"/>
                <path d="M14 14.5H8C7.59 14.5 7.25 14.16 7.25 13.75C7.25 13.34 7.59 13 8 13H14C14.41 13 14.75 13.34 14.75 13.75C14.75 14.16 14.41 14.5 14 14.5Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p">History</p>
          </div>
          <div class="action_wrapper">
            <div class="action_items" @click="e => showAction(e, 'reprice')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.7402 22.75H12.2602C11.8502 22.75 11.5102 22.41 11.5102 22C11.5102 21.59 11.8502 21.25 12.2602 21.25H17.7402C19.4002 21.25 20.7502 19.9 20.7502 18.24V17.8H19.6002C18.0902 17.8 16.8102 16.68 16.6902 15.24C16.6102 14.41 16.9102 13.6 17.5102 13.01C18.0202 12.49 18.7202 12.2 19.4702 12.2H20.7402V11.51C20.7402 9.85001 19.3902 8.5 17.7302 8.5H6.25023C4.59023 8.5 3.24023 9.85001 3.24023 11.51V13.24C3.24023 13.65 2.90023 13.99 2.49023 13.99C2.08023 13.99 1.74023 13.65 1.74023 13.24V11.51C1.74023 9.02001 3.76023 7 6.25023 7H17.7302C20.2202 7 22.2402 9.02001 22.2402 11.51V12.95C22.2402 13.36 21.9002 13.7 21.4902 13.7H19.4702C19.1202 13.7 18.8002 13.83 18.5702 14.07C18.2802 14.35 18.1402 14.73 18.1802 15.11C18.2402 15.77 18.8702 16.3 19.5902 16.3H21.4902C21.9002 16.3 22.2402 16.64 22.2402 17.05V18.24C22.2502 20.73 20.2302 22.75 17.7402 22.75Z" fill="#2C6CAC"/>
                <path d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.60001 5.87003C3.79001 6.18003 3.24001 6.97006 3.24001 7.84006V12.41C3.25001 12.83 2.91 13.16 2.5 13.16Z" fill="#2C6CAC"/>
                <path d="M19.6 17.8002C18.09 17.8002 16.81 16.6802 16.69 15.2402C16.61 14.4102 16.91 13.6002 17.51 13.0102C18.02 12.4902 18.72 12.2002 19.47 12.2002H21.55C22.54 12.2302 23.3 13.0102 23.3 13.9702V16.0302C23.3 16.9902 22.54 17.7702 21.58 17.8002H19.6ZM21.53 13.7002H19.48C19.13 13.7002 18.81 13.8302 18.58 14.0702C18.29 14.3502 18.15 14.7302 18.19 15.1102C18.25 15.7702 18.88 16.3002 19.6 16.3002H21.56C21.69 16.3002 21.81 16.1802 21.81 16.0302V13.9702C21.81 13.8202 21.69 13.7102 21.53 13.7002Z" fill="#2C6CAC"/>
                <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="#2C6CAC"/>
                <path d="M9.5 19.69C9.09 19.69 8.75 19.35 8.75 18.94V17.66C8.75 17.44 8.57 17.25 8.34 17.25H3C2.59 17.25 2.25 16.91 2.25 16.5C2.25 16.09 2.59 15.75 3 15.75H8.34C9.39 15.75 10.25 16.61 10.25 17.66V18.94C10.25 19.35 9.91 19.69 9.5 19.69Z" fill="#2C6CAC"/>
                <path d="M4.21994 18.4697C4.02994 18.4697 3.83994 18.3997 3.68994 18.2497L2.46994 17.0298C2.17994 16.7398 2.17994 16.2597 2.46994 15.9697L3.68994 14.7497C3.97994 14.4597 4.45994 14.4597 4.74994 14.7497C5.03994 15.0397 5.03994 15.5197 4.74994 15.8097L4.05994 16.4997L4.74994 17.1897C5.03994 17.4797 5.03994 17.9597 4.74994 18.2497C4.59994 18.3997 4.40994 18.4697 4.21994 18.4697Z" fill="#2C6CAC"/>
                <path d="M9.5 22.5298H4.16C3.11 22.5298 2.25 21.6698 2.25 20.6198V19.3398C2.25 18.9298 2.59 18.5898 3 18.5898C3.41 18.5898 3.75 18.9298 3.75 19.3398V20.6198C3.75 20.8398 3.93 21.0298 4.16 21.0298H9.5C9.91 21.0298 10.25 21.3698 10.25 21.7798C10.25 22.1898 9.91 22.5298 9.5 22.5298Z" fill="#2C6CAC"/>
                <path d="M8.28021 23.75C8.09021 23.75 7.90021 23.68 7.75021 23.53C7.46021 23.24 7.46021 22.7599 7.75021 22.4699L8.44022 21.78L7.75021 21.09C7.46021 20.8 7.46021 20.32 7.75021 20.03C8.04021 19.74 8.52021 19.74 8.81021 20.03L10.0302 21.25C10.3202 21.54 10.3202 22.02 10.0302 22.31L8.81021 23.53C8.67021 23.68 8.47021 23.75 8.28021 23.75Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p" @click="e => showAction(e, 'reprice')">Reprice</p>
            <div style="position: relative" v-show="activeAction === 'reprice' && actionClicked">
              <div class="filter-by-modal">
                <p class="filter-by-modal-p">Current Class (FXP)</p>
                <p class="filter-by-modal-p">Buy Best (FXP)</p>
              </div>
            </div>
          </div>
          <div class="action_wrapper">
            <div class="action_items" @click="isCancel=true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z" fill="#2C6CAC"/>
                <path d="M8.49994 16.2504C8.30994 16.2504 8.11994 16.1804 7.96994 16.0304C7.67994 15.7404 7.67994 15.2604 7.96994 14.9704L14.9699 7.97043C15.2599 7.68043 15.7399 7.68043 16.0299 7.97043C16.3199 8.26043 16.3199 8.74043 16.0299 9.03043L9.02994 16.0304C8.87994 16.1804 8.68994 16.2504 8.49994 16.2504Z" fill="#2C6CAC"/>
                <path d="M15.4999 16.2504C15.3099 16.2504 15.1199 16.1804 14.9699 16.0304L7.96994 9.03043C7.67994 8.74043 7.67994 8.26043 7.96994 7.97043C8.25994 7.68043 8.73994 7.68043 9.02994 7.97043L16.0299 14.9704C16.3199 15.2604 16.3199 15.7404 16.0299 16.0304C15.8799 16.1804 15.6899 16.2504 15.4999 16.2504Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p" >Cancel Itinerary</p>
          </div>
        </div>
      </div>
    </div>

    <div style="width: 47.1875rem;display: flex;justify-content: center;align-items: center;">
      <div style="width: 100%">
        <div class="fare_rules">
          <p>Itinerary Actions</p>
        </div>
        <div class="action_plate">
          <div class="action_wrapper">
            <div class="action_items" @click="isIssurance=true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.8101 20.1795C15.5501 20.1795 15.2801 20.1695 14.9901 20.1395C14.4701 20.0995 13.8801 19.9995 13.2701 19.8495L11.5901 19.4495C6.98007 18.3595 5.47007 15.9195 6.55007 11.3195L7.53007 7.12953C7.75007 6.17953 8.01007 5.40953 8.33007 4.76953C10.0501 1.21953 13.3401 1.53953 15.6801 2.08953L17.3501 2.47953C19.6901 3.02953 21.1701 3.89953 22.0001 5.22953C22.8201 6.55953 22.9501 8.26953 22.4001 10.6095L21.4201 14.7895C20.5601 18.4495 18.7701 20.1795 15.8101 20.1795ZM13.1201 3.24953C11.4501 3.24953 10.3901 3.93953 9.68007 5.41953C9.42007 5.95953 9.19007 6.62953 8.99007 7.46953L8.01007 11.6595C7.12007 15.4395 8.15007 17.0895 11.9301 17.9895L13.6101 18.3895C14.1501 18.5195 14.6601 18.5995 15.1201 18.6395C17.8401 18.9095 19.1901 17.7195 19.9501 14.4495L20.9301 10.2695C21.3801 8.33953 21.3201 6.98953 20.7201 6.01953C20.1201 5.04953 18.9401 4.38953 17.0001 3.93953L15.3301 3.54953C14.5001 3.34953 13.7601 3.24953 13.1201 3.24953Z" fill="#2C6CAC"/>
                <path d="M8.33005 22.2497C5.76005 22.2497 4.12005 20.7097 3.07005 17.4597L1.79005 13.5097C0.370052 9.10968 1.64005 6.62968 6.02005 5.20968L7.60005 4.69968C8.12005 4.53968 8.51005 4.42968 8.86005 4.36968C9.15005 4.30968 9.43005 4.41968 9.60005 4.64968C9.77005 4.87968 9.80005 5.17968 9.68005 5.43968C9.42005 5.96968 9.19005 6.63968 9.00005 7.47968L8.02005 11.6697C7.13005 15.4497 8.16005 17.0997 11.9401 17.9997L13.6201 18.3997C14.1601 18.5297 14.6701 18.6097 15.1301 18.6497C15.4501 18.6797 15.7101 18.8997 15.8001 19.2097C15.8801 19.5197 15.7601 19.8397 15.5001 20.0197C14.8401 20.4697 14.0101 20.8497 12.9601 21.1897L11.3801 21.7097C10.2301 22.0697 9.23005 22.2497 8.33005 22.2497ZM7.78005 6.21968L6.49005 6.63968C2.92005 7.78968 2.07005 9.46968 3.22005 13.0497L4.50005 16.9997C5.66005 20.5697 7.34005 21.4297 10.9101 20.2797L12.4901 19.7597C12.5501 19.7397 12.6001 19.7197 12.6601 19.6997L11.6001 19.4497C6.99005 18.3597 5.48005 15.9197 6.56005 11.3197L7.54005 7.12968C7.61005 6.80968 7.69005 6.49968 7.78005 6.21968Z" fill="#2C6CAC"/>
                <path d="M17.4899 10.5098C17.4299 10.5098 17.3699 10.4998 17.2999 10.4898L12.4499 9.25978C12.0499 9.15978 11.8099 8.74978 11.9099 8.34978C12.0099 7.94978 12.4199 7.70978 12.8199 7.80978L17.6699 9.03978C18.0699 9.13978 18.3099 9.54978 18.2099 9.94978C18.1299 10.2798 17.8199 10.5098 17.4899 10.5098Z" fill="#2C6CAC"/>
                <path d="M14.5601 13.8899C14.5001 13.8899 14.4401 13.8799 14.3701 13.8699L11.4601 13.1299C11.0601 13.0299 10.8201 12.6199 10.9201 12.2199C11.0201 11.8199 11.4301 11.5799 11.8301 11.6799L14.7401 12.4199C15.1401 12.5199 15.3801 12.9299 15.2801 13.3299C15.2001 13.6699 14.9001 13.8899 14.5601 13.8899Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p">Issuance</p>
            <!--              <div style="position: relative">-->
            <!--                <div class="filter-by-modal">-->
            <!--                  <p class="filter-by-modal-p">Print Itinerary</p>-->
            <!--                  <p class="filter-by-modal-p">Email Itinerary</p>-->
            <!--                </div>-->
            <!--              </div>-->
          </div>
          <div class="action_wrapper">
            <div class="action_items" @click="isVoiding=true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0101 22.7403C11.3801 22.7403 10.7601 22.5303 10.2701 22.1103L8.69012 20.7603C8.53012 20.6203 8.13012 20.4803 7.92012 20.4803H6.17012C4.69012 20.4803 3.49012 19.2803 3.49012 17.8003V16.0903C3.49012 15.8803 3.35012 15.4803 3.22012 15.3303L1.86012 13.7303C1.04012 12.7603 1.04012 11.2403 1.86012 10.2603L3.22012 8.66031C3.35012 8.51031 3.49012 8.11031 3.49012 7.90031V6.20031C3.49012 4.72031 4.69012 3.52031 6.17012 3.52031H7.90012C8.11012 3.52031 8.50012 3.37031 8.67012 3.23031L10.2501 1.88031C11.2301 1.05031 12.7601 1.05031 13.7401 1.88031L15.3201 3.23031C15.4801 3.37031 15.8901 3.51031 16.1001 3.51031H17.8001C19.2801 3.51031 20.4801 4.71031 20.4801 6.19031V7.89031C20.4801 8.10031 20.6301 8.49031 20.7701 8.66031L22.1201 10.2403C22.9601 11.2303 22.9501 12.7603 22.1201 13.7303L20.7701 15.3103C20.6301 15.4803 20.4901 15.8703 20.4901 16.0803V17.7803C20.4901 19.2603 19.2901 20.4603 17.8101 20.4603H16.1101C15.9001 20.4603 15.5101 20.6103 15.3301 20.7503L13.7501 22.1003C13.2601 22.5303 12.6301 22.7403 12.0101 22.7403ZM6.17012 5.02031C5.52012 5.02031 4.99012 5.55031 4.99012 6.20031V7.90031C4.99012 8.47031 4.73012 9.19031 4.36012 9.63031L3.00012 11.2303C2.66012 11.6403 2.66012 12.3603 3.00012 12.7603L4.35012 14.3503C4.71012 14.7603 4.98012 15.5103 4.98012 16.0803V17.7903C4.98012 18.4403 5.51012 18.9703 6.16012 18.9703H7.90012C8.46012 18.9703 9.20012 19.2403 9.64012 19.6103L11.2301 20.9703C11.6401 21.3203 12.3601 21.3203 12.7701 20.9703L14.3501 19.6203C14.8001 19.2403 15.5301 18.9803 16.0901 18.9803H17.7901C18.4401 18.9803 18.9701 18.4503 18.9701 17.8003V16.1003C18.9701 15.5403 19.2401 14.8103 19.6101 14.3603L20.9701 12.7703C21.3201 12.3603 21.3201 11.6403 20.9701 11.2303L19.6201 9.65031C19.2401 9.20031 18.9801 8.47031 18.9801 7.91031V6.20031C18.9801 5.55031 18.4501 5.02031 17.8001 5.02031H16.1001C15.5301 5.02031 14.7901 4.75031 14.3501 4.38031L12.7601 3.02031C12.3501 2.67031 11.6401 2.67031 11.2201 3.02031L9.65012 4.38031C9.20012 4.75031 8.47012 5.02031 7.90012 5.02031H6.17012Z" fill="#2C6CAC"/>
                <path d="M12 16.8701C11.45 16.8701 11 16.4201 11 15.8701C11 15.3201 11.44 14.8701 12 14.8701C12.55 14.8701 13 15.3201 13 15.8701C13 16.4201 12.56 16.8701 12 16.8701Z" fill="#2C6CAC"/>
                <path d="M12 13.7199C11.59 13.7199 11.25 13.3799 11.25 12.9699V8.12988C11.25 7.71988 11.59 7.37988 12 7.37988C12.41 7.37988 12.75 7.71988 12.75 8.12988V12.9599C12.75 13.3799 12.42 13.7199 12 13.7199Z" fill="#2C6CAC"/>
              </svg>
            </div>
            <p class="itinerary-p">Void</p>
          </div>
          <div class="action_wrapper">
            <div class="action_items" @click="isExchange=true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#2C6CAC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="itinerary-p">Exchange</p>
          </div>
          <div class="action_wrapper">
            <div class="action_items" @click="isRefund=true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.7402 22.75H12.2602C11.8502 22.75 11.5102 22.41 11.5102 22C11.5102 21.59 11.8502 21.25 12.2602 21.25H17.7402C19.4002 21.25 20.7502 19.9 20.7502 18.24V17.8H19.6002C18.0902 17.8 16.8102 16.68 16.6902 15.24C16.6102 14.41 16.9102 13.6 17.5102 13.01C18.0202 12.49 18.7202 12.2 19.4702 12.2H20.7402V11.51C20.7402 9.85001 19.3902 8.5 17.7302 8.5H6.25023C4.59023 8.5 3.24023 9.85001 3.24023 11.51V13.24C3.24023 13.65 2.90023 13.99 2.49023 13.99C2.08023 13.99 1.74023 13.65 1.74023 13.24V11.51C1.74023 9.02001 3.76023 7 6.25023 7H17.7302C20.2202 7 22.2402 9.02001 22.2402 11.51V12.95C22.2402 13.36 21.9002 13.7 21.4902 13.7H19.4702C19.1202 13.7 18.8002 13.83 18.5702 14.07C18.2802 14.35 18.1402 14.73 18.1802 15.11C18.2402 15.77 18.8702 16.3 19.5902 16.3H21.4902C21.9002 16.3 22.2402 16.64 22.2402 17.05V18.24C22.2502 20.73 20.2302 22.75 17.7402 22.75Z" fill="#2C6CAC"/>
                <path d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.60001 5.87003C3.79001 6.18003 3.24001 6.97006 3.24001 7.84006V12.41C3.25001 12.83 2.91 13.16 2.5 13.16Z" fill="#2C6CAC"/>
                <path d="M19.6 17.8002C18.09 17.8002 16.81 16.6802 16.69 15.2402C16.61 14.4102 16.91 13.6002 17.51 13.0102C18.02 12.4902 18.72 12.2002 19.47 12.2002H21.55C22.54 12.2302 23.3 13.0102 23.3 13.9702V16.0302C23.3 16.9902 22.54 17.7702 21.58 17.8002H19.6ZM21.53 13.7002H19.48C19.13 13.7002 18.81 13.8302 18.58 14.0702C18.29 14.3502 18.15 14.7302 18.19 15.1102C18.25 15.7702 18.88 16.3002 19.6 16.3002H21.56C21.69 16.3002 21.81 16.1802 21.81 16.0302V13.9702C21.81 13.8202 21.69 13.7102 21.53 13.7002Z" fill="#2C6CAC"/>
                <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="#2C6CAC"/>
                <path d="M9.5 19.69C9.09 19.69 8.75 19.35 8.75 18.94V17.66C8.75 17.44 8.57 17.25 8.34 17.25H3C2.59 17.25 2.25 16.91 2.25 16.5C2.25 16.09 2.59 15.75 3 15.75H8.34C9.39 15.75 10.25 16.61 10.25 17.66V18.94C10.25 19.35 9.91 19.69 9.5 19.69Z" fill="#2C6CAC"/>
                <path d="M4.21994 18.4697C4.02994 18.4697 3.83994 18.3997 3.68994 18.2497L2.46994 17.0298C2.17994 16.7398 2.17994 16.2597 2.46994 15.9697L3.68994 14.7497C3.97994 14.4597 4.45994 14.4597 4.74994 14.7497C5.03994 15.0397 5.03994 15.5197 4.74994 15.8097L4.05994 16.4997L4.74994 17.1897C5.03994 17.4797 5.03994 17.9597 4.74994 18.2497C4.59994 18.3997 4.40994 18.4697 4.21994 18.4697Z" fill="#2C6CAC"/>
                <path d="M9.5 22.5298H4.16C3.11 22.5298 2.25 21.6698 2.25 20.6198V19.3398C2.25 18.9298 2.59 18.5898 3 18.5898C3.41 18.5898 3.75 18.9298 3.75 19.3398V20.6198C3.75 20.8398 3.93 21.0298 4.16 21.0298H9.5C9.91 21.0298 10.25 21.3698 10.25 21.7798C10.25 22.1898 9.91 22.5298 9.5 22.5298Z" fill="#2C6CAC"/>
                <path d="M8.28021 23.75C8.09021 23.75 7.90021 23.68 7.75021 23.53C7.46021 23.24 7.46021 22.7599 7.75021 22.4699L8.44022 21.78L7.75021 21.09C7.46021 20.8 7.46021 20.32 7.75021 20.03C8.04021 19.74 8.52021 19.74 8.81021 20.03L10.0302 21.25C10.3202 21.54 10.3202 22.02 10.0302 22.31L8.81021 23.53C8.67021 23.68 8.47021 23.75 8.28021 23.75Z" fill="#2C6CAC"/>
              </svg>
            </div>
            <p class="itinerary-p">Refund</p>
          </div>
          <div class="action_wrapper">
            <div class="action_items" @click="isOthers=true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 20.75H7C2.59 20.75 1.25 19.41 1.25 15V14.5C1.25 14.09 1.59 13.75 2 13.75C2.96 13.75 3.75 12.96 3.75 12C3.75 11.04 2.96 10.25 2 10.25C1.59 10.25 1.25 9.91 1.25 9.5V9C1.25 4.59 2.59 3.25 7 3.25H17C21.41 3.25 22.75 4.59 22.75 9V10C22.75 10.41 22.41 10.75 22 10.75C21.04 10.75 20.25 11.54 20.25 12.5C20.25 13.46 21.04 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15C22.75 19.41 21.41 20.75 17 20.75ZM2.75 15.16C2.77 18.6 3.48 19.25 7 19.25H17C20.34 19.25 21.15 18.66 21.24 15.66C19.81 15.32 18.75 14.03 18.75 12.5C18.75 10.97 19.82 9.68 21.25 9.34V9C21.25 5.43 20.58 4.75 17 4.75H7C3.48 4.75 2.77 5.4 2.75 8.84C4.18 9.18 5.25 10.47 5.25 12C5.25 13.53 4.18 14.82 2.75 15.16Z" fill="#2C6CAC"/>
                <path d="M10 7.25C9.59 7.25 9.25 6.91 9.25 6.5V4C9.25 3.59 9.59 3.25 10 3.25C10.41 3.25 10.75 3.59 10.75 4V6.5C10.75 6.91 10.41 7.25 10 7.25Z" fill="#2C6CAC"/>
                <path d="M10 14.5802C9.59 14.5802 9.25 14.2402 9.25 13.8302V10.1602C9.25 9.75016 9.59 9.41016 10 9.41016C10.41 9.41016 10.75 9.75016 10.75 10.1602V13.8302C10.75 14.2502 10.41 14.5802 10 14.5802Z" fill="#2C6CAC"/>
                <path d="M10 20.75C9.59 20.75 9.25 20.41 9.25 20V17.5C9.25 17.09 9.59 16.75 10 16.75C10.41 16.75 10.75 17.09 10.75 17.5V20C10.75 20.41 10.41 20.75 10 20.75Z" fill="#2C6CAC"/>
              </svg>
            </div>

            <p class="itinerary-p">Others</p>
          </div>
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
  </div>

</template>

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