<template>
     <layout v-slot:child-content>
    <div class="overall" id="overall">
      <modal-loader :message="'Loading Itinerary'" v-if="getRequestingDetailsLoading"></modal-loader>
      <div class="booking-wrapper">
        <p class="itinerary_support">Itinerary Support</p>
        <div class="booking-div-head">
        <div class="service_nav">
          <div class="nav-a1" @click="activeService = '',requestItinery()" :class="{'activeSection':activeService === ''}" :style="activeService === '' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">All</div>
          <div class="nav-a1" @click="activeService = 'issuance',requestItinery()" :class="{'activeSection':activeService === 'issuance'}" :style="activeService === 'issuance' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">Issuance</div>
          <div class="nav-a1" @click="activeService = 'void',requestItinery()" :class="{'activeSection':activeService === 'void'}" :style="activeService === 'void' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : {color:custom_theme ? custom_theme.color : default_theme.color}">Void</div>
          <div class="nav-a1" @click="activeService = 'exchange',requestItinery()" :class="{'activeSection':activeService === 'exchange'}" :style="activeService === 'exchange' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">Exchange</div>
          <div class="nav-a1" @click="activeService = 'refund',requestItinery()" :class="{'activeSection':activeService === 'refund'}" :style="activeService === 'refund' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">Refund</div>
        </div>
      </div>
        <div>
          <div class="search_filter">
            <!-- <div class="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#9DA8B6"/>
                <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="#9DA8B6"/>
              </svg>
              <input v-model="searchQuery" @input="doSearch" type="text" style="outline: none;border: none;width: 19.4rem" placeholder="Search by IDs, names etc"/>
            </div> -->
            <div class="filter">
             
              <div class="filter-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 12.8002L4.79999 9.6002H11.2L7.99999 12.8002ZM7.99999 3.2002L11.2 6.4002H4.79999L7.99999 3.2002Z" fill="#212B36"/>
                </svg>
                <span class="filter-span">Filter</span>
              </div>

              
              <div class="filter-by-modal">
                <p class="filter-by-modal-p" @click="filterValue='unresolved', doFilter()">Pending Support (Default) <svg v-if="filterValue === 'unresolved'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#159D54"/>
                  <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></p>
                <p class="filter-by-modal-p" @click="filterValue='resolved', doFilter()">Resolved Support <svg v-if="filterValue === 'resolved'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#159D54"/>
                  <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></p>
                <p class="filter-by-modal-p" @click="filterValue='', doFilter()">Everything <svg v-if="filterValue === ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#159D54"/>
                  <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></p>


              </div>

            </div>
          </div>
          <div style="width: 100%;overflow-x: scroll">
            <div class="card-area">
              <bookings-card-loading v-if="getLoadingSummary"></bookings-card-loading>
              <bookings-cards v-else title="Issuance" :number="getSummary?.issuance_count "></bookings-cards>
              <bookings-card-loading v-if="getLoadingSummary"></bookings-card-loading>
              <bookings-cards v-else title="Void" :number="getSummary?.voided_count"></bookings-cards>
              <bookings-card-loading v-if="getLoadingSummary"></bookings-card-loading>
              <bookings-cards v-else title="Refund" :number="getSummary?.refunded_count"></bookings-cards>
              <bookings-card-loading v-if="getLoadingSummary"></bookings-card-loading>
              <bookings-cards v-else title="Exchange" :number="getSummary?.exchanged_count"></bookings-cards>
<!--              <bookings-card-loading v-if="getLoadingSummary"></bookings-card-loading>-->
<!--              <bookings-cards v-else title="Others" :number="getSummary?.others_count"></bookings-cards>-->
            </div>
          </div>
          <div style="margin: 3.5rem 0">
            <div class="table-wrapper">
              <domain-table :is-paginate="true" :other="{activeService:activeService, filterValue:filterValue}" :total="itineraryRequest?.meta?.total" :items-per-page="itineraryRequest?.meta?.per_page" :current-page="itineraryRequest?.meta?.current_page" :last-page="itineraryRequest?.meta?.last_page" :fields="itineneryFields" :data="itineraryRequest?.data" :empty-message="`Hi ${getBusinessProfile?.name}, There are no Itinerary!`">
                <template v-slot:emptyIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
                    <path d="M0.117188 57.883C0.117188 73.2346 6.21556 87.9574 17.0707 98.8125C27.9259 109.668 42.6487 115.766 58.0002 115.766C73.3518 115.766 88.0746 109.668 98.9297 98.8125C109.785 87.9574 115.883 73.2346 115.883 57.883C115.883 42.5315 109.785 27.8087 98.9297 16.9536C88.0746 6.09837 73.3518 0 58.0002 0C42.6487 0 27.9259 6.09837 17.0707 16.9536C6.21556 27.8087 0.117188 42.5315 0.117188 57.883Z" fill="#F1F2F6"/>
                    <path d="M8.3418 20.9214L67.758 3.4748L90.5149 80.9757L31.0986 98.4223L8.3418 20.9214Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.0869 8.62842H82.0131V89.3999H20.0869V8.62842Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.166 16.707H73.937V24.7846H28.166V16.707Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.3193 38.2441H55.0899" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.3193 43.6309H68.5521" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.3193 49.0151H61.8405" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.3193 65.1689H57.7815" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.3193 70.5532H71.2436" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.3193 75.9399H65.8591" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.7213 48.1225V44.5522H29.6377V43.6631H30.7213V42.524H29.6377V41.6349H30.7213V38.2036H32.166L33.4858 41.6349H35.125V38.2036H36.2225V41.6349H37.306V42.524H36.2225V43.6631H37.306V44.5522H36.2225V48.1225H34.7638L33.4441 44.5522H31.8048V48.1225H30.7213ZM31.7771 41.6349H32.3605L31.7771 39.9123H31.7215L31.7771 41.6349ZM31.8048 43.6631H33.1107L32.6939 42.524H31.7771L31.8048 43.6631ZM34.222 43.6631H35.1528L35.125 42.524H33.8053L34.222 43.6631ZM35.125 46.1637H35.1806L35.1389 44.5522H34.5554L35.125 46.1637Z" fill="#1D1E2C"/>
                    <path d="M30.7213 75.9057V72.3354H29.6377V71.4463H30.7213V70.3072H29.6377V69.4181H30.7213V65.9868H32.166L33.4858 69.4181H35.125V65.9868H36.2225V69.4181H37.306V70.3072H36.2225V71.4463H37.306V72.3354H36.2225V75.9057H34.7638L33.4441 72.3354H31.8048V75.9057H30.7213ZM31.7771 69.4181H32.3605L31.7771 67.6955H31.7215L31.7771 69.4181ZM31.8048 71.4463H33.1107L32.6939 70.3072H31.7771L31.8048 71.4463ZM34.222 71.4463H35.1528L35.125 70.3072H33.8053L34.222 71.4463ZM35.125 73.9469H35.1806L35.1389 72.3354H34.5554L35.125 73.9469Z" fill="#1D1E2C"/>
                    <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" fill="#E5E9F2"/>
                    <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M82.5391 84.7549L86.0882 81.2048L94.964 90.0781L91.4148 93.6282L82.5391 84.7549Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M86.9799 53.6947C90.1393 56.854 92.2908 60.8792 93.1625 65.2613C94.0342 69.6434 93.5869 74.1856 91.8771 78.3135C90.1673 82.4414 87.2719 85.9695 83.5569 88.4518C79.8419 90.9341 75.4743 92.259 71.0063 92.259C66.5384 92.259 62.1707 90.9341 58.4558 88.4518C54.7408 85.9695 51.8453 82.4414 50.1356 78.3135C48.4258 74.1856 47.9784 69.6434 48.8501 65.2613C49.7218 60.8792 51.8734 56.854 55.0328 53.6947C59.2696 49.4591 65.0154 47.0796 71.0063 47.0796C76.9973 47.0796 82.743 49.4591 86.9799 53.6947Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" fill="#E5E9F2"/>
                    <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.4121 108.503C37.4121 109.308 39.7563 110.079 43.9291 110.649C48.1018 111.218 53.7612 111.537 59.6624 111.537C65.5635 111.537 71.2229 111.218 75.3956 110.649C79.5684 110.079 81.9126 109.308 81.9126 108.503C81.9126 107.698 79.5684 106.926 75.3956 106.357C71.2229 105.788 65.5635 105.468 59.6624 105.468C53.7612 105.468 48.1018 105.788 43.9291 106.357C39.7563 106.926 37.4121 107.698 37.4121 108.503Z" fill="#E5E9F2"/>
                  </svg>
                </template>
              </domain-table>
             
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </layout>
  
  </template>
  
  <script>
import RouteNav from "../../components/RouteNav.vue";
import Layout from "../Layout.vue";
import BookingsCards from "../../components/bookings/BookingsCards.vue";
import DomainTable from "../../components/tables/BaseTable.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
import DataPicker from "../../components/Inputs/custom-date-picker/DataPicker.vue";
import OnBoardingInput from "../../components/Inputs/OnBoardingInput.vue";
import BookingsCardLoading from "../../components/bookings/BookingsCardLoading.vue";
import filterBookingModal from "@/components/modals/FilterBookingModal.vue";
import ComingSoon from "@/components/ComingSoon.vue";
import BookingsRequest from "../../model/BookingsRequest";
import ModalLoader from "../../components/loaders/ModalLoader.vue";
  export default {
    name: "Index",
    components:{
    ModalLoader,
    ComingSoon,
    RouteNav,OnBoardingInput, filterBookingModal, Layout,BookingsCards,DomainTable,OnBoardingButton,DataPicker,BookingsCardLoading},
    data(){
    return{
      isFilterBooking:false,
      searchQuery:null,
      filterResult:null,
      activeService:'',
      searchModel:{},
      filterValue:'',
      itineneryFields:[
        {key:"customer_name", label:"Agent Name"},
        {key:"ticket_amount", label:"Ticket Amount_"},
        {key:"airline", label:"Airline_"},
        {key:"created_at", label:"Request Date/Time"},
        {key:"type", label:"Type"},
        {key:"status", label:"Itinerary Status"},
        // {key:"Action", label:"Action",id:"member"},
      ],
    }
  },
  methods:{
     doSearch(){
      this.searchModel.keyword = this.searchQuery
      storeUtils.fireAway()?.booking?.getAllAgentBooking(this.searchModel).then(() => {
        this.searchModel = {}

      })
    
     
      // this.filterResult = this.getBookings.data.filter(it => it.contact_first_name.toLowerCase().includes(this.searchQuery.toLowerCase()) || it.contact_last_name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },

    requestItinery(){
      if(this.getUser.account_type === 'manager' || this.getUser.account_type === 'booker')storeUtils.fireAway()?.itineneryStore?.getItineraryRequestManagerAction(this.getUser.id, this.activeService,this.filterValue);
      else storeUtils.fireAway()?.itineneryStore?.getItineraryRequestAction(this.activeService, this.filterValue)
    },

    doFilter(){
      if(this.getUser.account_type === 'manager' || this.getUser.account_type === 'booker'){
        storeUtils.fireAway()?.itineneryStore?.getItinerarySummaryAction(this.filterValue)
        storeUtils.fireAway()?.itineneryStore?.getItineraryRequestManagerAction(this.getUser.id, this.activeService,this.filterValue);
      }
      else{
        storeUtils.fireAway()?.itineneryStore?.getItinerarySummaryAction(this.filterValue)
        storeUtils.fireAway()?.itineneryStore?.getItineraryRequestAction(this.activeService, this.filterValue)
      }
    },
    close(value){
      this.isFilterBooking = value
    },
  
  },

    computed: {

      itineraryRequest(){
        return storeUtils.fireAway()?.itineneryStore.getItineraryRequest
      },

    getCurrentRoute(){
      return router.currentRoute.value.name
    },

   

    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },

    getSummary(){
      return storeUtils.fireAway().itineneryStore.getItinerarySummaryState
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
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

    getLoadingSummary(){
      return storeUtils.fireAway().itineneryStore?.getLoadingSummary
    },

    getBookings(){
      return storeUtils.fireAway().booking?.getBookings
    },

    getRequestingDetailsLoading(){
      return storeUtils.fireAway().itineneryStore?.getRequestingDetailsLoading
    },

    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

    progressNav(){
      return storeUtils.fireAway().booking?.getProgressNav
    },

      getTenantLoaded(){
        return storeUtils.fireAway().global.getTenantLoaded
      }


    },

    watch:{
      'getTenantLoaded'(a,b){
        if(a){
          if(this.getUser.account_type === 'manager' || this.getUser.account_type === 'booker') storeUtils.fireAway()?.itineneryStore?.getItineraryRequestManagerAction(this.getUser.id, this.activeService, this.filterValue)
          else storeUtils.fireAway()?.itineneryStore?.getItineraryRequestAction(this.activeService, this.filterValue)
          storeUtils.fireAway()?.itineneryStore?.getItinerarySummaryAction(this.filterValue)
        };
      }
    },

  mounted(){
      if(this.getTenantLoaded){
        storeUtils.fireAway()?.itineneryStore?.getItinerarySummaryAction(this.filterValue)
        if(this.getUser.account_type === 'manager' || this.getUser.account_type === 'booker') storeUtils.fireAway()?.itineneryStore?.getItineraryRequestManagerAction(this.getUser.id, this.activeService, this.filterValue)
        else storeUtils.fireAway()?.itineneryStore?.getItineraryRequestAction(this.activeService, this.filterValue)
      }


  }
  }
  </script>
  
  <style scoped>
  a{
    text-decoration: none;
  }

  .itinerary_support{
    color: var(--Black-text-01, #1D1E2C);
    font-family: 'Product Sans' Medium;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 100% */
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  
  .booking-div-head{
    display: flex;
    /* height: 7.25rem; */
    align-items: end;
    width: 68.625rem;
    margin-bottom: 2.5rem;
  }
  
  .service_nav{
    display: flex;
    /*margin-left:5.31rem;*/
  }
  
  
  .nav-a1{
    display: flex;
    width: 8rem;
    padding: 0.25rem 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    cursor: pointer;
    /* Medium/16px */
    font-family:'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem; /* 175% */
  }
  
  .activeSection{
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background: var(--app-default-primary);
    color: white;
  }
  
  
  
  @media (max-width: 1024px) {
    .travel_type_booking{
      width: 100% !important;
    }
  }
  .filter-by-modal{
    flex-direction: column;
    position: absolute;
    z-index: 999999;
    display: none;
    width: 19rem;
    top:3.7rem;
    /* m6 */
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  }
  
  .filter-by-modal:hover{
    display: flex;
  }
  
  .filter-by-modal-p{
    display: flex;
    /*width: 12.4375rem;*/
    padding: 0.625rem 1.25rem;
    align-items: center;
    gap: 0.875rem;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #FFF;
    color: #222;
   cursor: pointer;
    /* medium/input/16px */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem; /* 175% */
  }
  
  .filter-by-modal-p:hover{
    font-size: 1.2rem;
  }
  
  .filter-div:hover ~ .filter-by-modal {
    display: flex;
  }
  
  
  .filter-div{
    background: #FFFFFF;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }
  
  .filter-span{
    color:  #1D1E2C;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 171.429% */
    padding: 0.5rem;
  }
  
  .overall{
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
  
  .filter{
    display: flex;
    gap: 1.25rem;
  }
  
  .search_filter{
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  
  .table-wrapper{
    overflow-x: scroll;
    /* width: 68.625rem; */
  }
  
  .booking-wrapper{
    width: 75.625rem;
    height: auto;
    position: relative;
  }
  
  .search{
    display: flex;
    width: 19.4375rem;
    padding: 0.5rem 5rem 0.5rem 1.25rem;
    align-items: center;
    gap: 1.0625rem;
    flex-shrink: 0;
    outline:none;
    border-radius: 0.375rem;
    border: 0.6px solid #E5E9F2;
    background: #FFF;
  }
  
  .create-booking{
    display: flex;
    padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
    align-items: center;
    border-radius: 0.25rem;
    background:  #EAF0F7;
    width: 15.9375rem;
    height: 5rem;
    gap: 0.75rem;
    cursor: pointer;
  }
  
  .create-booking-p{
    color:  #1D1E2C;
  
    /* medium/input/16px */
    font-family: 'Product Sans' ;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
  }
  
  .card-area{
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    overflow-x: scroll;
    width: 100%;
  }
  
  .no-team-member-h{
    color: #0E0842;
    text-align: center;
  
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
    text-transform: capitalize;
  }
  
  .no-team-member-sub{
    color: #575A65;
    text-align: center;
  
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
  }
  
  .no-team-member-text{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
  
  }
  
  .no-team-member{
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 2.54rem;
    margin: 4rem;
  }
  
  @media (max-width: 1024px) {
    .card-area{
      overflow-x: scroll;
      width:1024px;
    }
  
    .search_filter{
      flex-direction: column-reverse;
    }
  
    .search{
      width: 80%;
    }
  
    .filter{
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin:10px 0;
    }
  
    .filter-div{
      width: 80%;
    }
    .filter-btn{
      width: 80% !important;
    }
  
    .booking-wrapper{
      width: 100%;
    }
  
    .table-wrapper{
      width: auto !important;
    }
  
  
  }
  
  ::-webkit-scrollbar{
    display: none;
  }
  
  </style>