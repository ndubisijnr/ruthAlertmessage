<template>
   <layout v-slot:child-content>
    <div class="dashboard_wrapper">
     <div class="mb" v-if="getCurrentRoute === 'Dashboard'">
        <div>
        <div v-if="getCurrentRoute === 'Dashboard'">
          <h3 class="user-name" style="margin-top: 3.5rem" v-show="getBusinessProfile?.id_document && getBusinessProfile?.cac_document || getUser.account_type === 'super_admin'"> Hello, {{getUser?.first_name}} {{getUser?.last_name}}</h3>
          <div class="get-started" :style="{background:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)}" v-show="!getBusinessProfile?.id_document && !getBusinessProfile?.cac_document && getUser.account_type !== 'super_admin'">
            <div class="with-tiqwa">
              <div>
                <h3 class="with-tiqwa-h">Hello, {{getUser?.first_name}}, get started with Travel Yakata 🎉</h3>
                <p class="with-tiqwa-p">Please complete your setup to access Travel Yakata services, </p>
              </div>
              <div style="display: flex;gap: 1rem;height: 2.5rem">
                <router-link :to="`/verification/document-upload/${getUser?.access_token?.slice(0,20)}`"><on-boarding-button btn-width="10rem" color="#FFF" height="2.5rem" text-node="Complete Profile"></on-boarding-button></router-link>
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
     <div v-if="getCurrentRoute !== 'Dashboard'" class="search_result_div">
     
            <RouteNav></RouteNav>
            
            <div class="travel_type_booking" >
              <!-- <div class="progress-or" v-if="getCurrentRoute === 'Flight Payment'">
                <div class="progress-or-item" v-for="(i, index) in bookingProgress">
                  <p class="stage" :class="{'activeStage':getBookingStage === i || progressNav.includes(i)}">{{ i }}</p>
                  <div style="display: flex;align-items: center;justify-content: start">
                    <div class="circle" :class="{'activeProgress': getBookingStage === i || progressNav.includes(i)}">{{index + 1}}</div>
                    <div class="line" v-if="index !== bookingProgress.length - 1">
                      <div :class="{'progress':progressNav.includes(i)}"></div>
                    </div>
                  </div>
                </div>
              </div> -->


              <div class="info_wrapper" :style="{background:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)}" v-if="getCurrentRoute !== 'Dashboard' && getCurrentRoute !== 'Flight Payment'">
                <div class="dest-abv" v-if="getFlightResult[0]?.outbound || getFlightResult[0]?.outbound">
                  <div class="dest-abv" v-if="getFlightResult[0]?.outbound">
                    <p class="dest-abv-it" >{{getCityByCityCode(getFlightResult[0]?.outbound[0]?.airport_from) }}  ({{getFlightResult[0]?.outbound[0]?.airport_from}})</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49964 11.9991C1.49964 12.198 1.57865 12.3887 1.71931 12.5294C1.85996 12.67 2.05072 12.7491 2.24964 12.7491H19.9391L15.2186 17.4681C15.1489 17.5378 15.0936 17.6206 15.0559 17.7117C15.0181 17.8028 14.9987 17.9004 14.9987 17.9991C14.9987 18.0977 15.0181 18.1953 15.0559 18.2864C15.0936 18.3775 15.1489 18.4603 15.2186 18.5301C15.2884 18.5998 15.3712 18.6551 15.4623 18.6928C15.5534 18.7306 15.651 18.75 15.7496 18.75C15.8483 18.75 15.9459 18.7306 16.037 18.6928C16.1281 18.6551 16.2109 18.5998 16.2806 18.5301L22.2806 12.5301C22.3505 12.4604 22.4059 12.3776 22.4437 12.2865C22.4815 12.1954 22.501 12.0977 22.501 11.9991C22.501 11.9004 22.4815 11.8027 22.4437 11.7116C22.4059 11.6205 22.3505 11.5377 22.2806 11.4681L16.2806 5.46805C16.2109 5.39832 16.1281 5.34301 16.037 5.30527C15.9459 5.26753 15.8483 5.24811 15.7496 5.24811C15.651 5.24811 15.5534 5.26753 15.4623 5.30527C15.3712 5.34301 15.2884 5.39832 15.2186 5.46805C15.1489 5.53778 15.0936 5.62057 15.0559 5.71168C15.0181 5.80279 14.9987 5.90044 14.9987 5.99905C14.9987 6.09767 15.0181 6.19532 15.0559 6.28643C15.0936 6.37754 15.1489 6.46032 15.2186 6.53005L19.9391 11.2491H2.24964C2.05072 11.2491 1.85996 11.3281 1.71931 11.4687C1.57865 11.6094 1.49964 11.8001 1.49964 11.9991Z" fill="white"/>
                      </svg>
                    <p class="dest-abv-it">{{getCityByCityCode(getFlightResult[0]?.outbound.length > 0 ?  getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to : getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to) }}  ({{getFlightResult[0]?.outbound.length > 0 ?  getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to : getFlightResult[0]?.outbound[getFlightResult[0]?.outbound.length - 1]?.airport_to}})</p>
                  <!-- getFlightResult[0]?.outbound[0]?.airport_to -->
                  </div>
                  
                  <div class="booking-info" v-if="getFlightResult[0]?.outbound">
                    <div class="search-info-area">
                      <p class="search-info">{{ getFlightResult[0]?.inbound?.length > 0 ? 'Round Trip' : 'One Way' }}</p>
                      <p class="search-info">{{ getFlightResult[0]?.price_summary[0]?.quantity }} Passengers</p>
                      <p class="search-info">{{ getFlightResult[0]?.outbound[0]?.cabin_type }}</p>
                      <!-- <p class="search-info">{{ getFlightResult[0]?.outbound[0]?.cabin_type }}</p> -->
                    </div>
                </div>
                </div>
                <div class="dest-abv" v-else>

                  <div class="dest-abv">
                    <p class="dest-abv-it" >{{getCityByCityCode(getFlightResult[0]?.routes[0].segments[0]?.airport_from)}}  ({{getFlightResult[0]?.routes[0].segments[0]?.airport_from}})</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49964 11.9991C1.49964 12.198 1.57865 12.3887 1.71931 12.5294C1.85996 12.67 2.05072 12.7491 2.24964 12.7491H19.9391L15.2186 17.4681C15.1489 17.5378 15.0936 17.6206 15.0559 17.7117C15.0181 17.8028 14.9987 17.9004 14.9987 17.9991C14.9987 18.0977 15.0181 18.1953 15.0559 18.2864C15.0936 18.3775 15.1489 18.4603 15.2186 18.5301C15.2884 18.5998 15.3712 18.6551 15.4623 18.6928C15.5534 18.7306 15.651 18.75 15.7496 18.75C15.8483 18.75 15.9459 18.7306 16.037 18.6928C16.1281 18.6551 16.2109 18.5998 16.2806 18.5301L22.2806 12.5301C22.3505 12.4604 22.4059 12.3776 22.4437 12.2865C22.4815 12.1954 22.501 12.0977 22.501 11.9991C22.501 11.9004 22.4815 11.8027 22.4437 11.7116C22.4059 11.6205 22.3505 11.5377 22.2806 11.4681L16.2806 5.46805C16.2109 5.39832 16.1281 5.34301 16.037 5.30527C15.9459 5.26753 15.8483 5.24811 15.7496 5.24811C15.651 5.24811 15.5534 5.26753 15.4623 5.30527C15.3712 5.34301 15.2884 5.39832 15.2186 5.46805C15.1489 5.53778 15.0936 5.62057 15.0559 5.71168C15.0181 5.80279 14.9987 5.90044 14.9987 5.99905C14.9987 6.09767 15.0181 6.19532 15.0559 6.28643C15.0936 6.37754 15.1489 6.46032 15.2186 6.53005L19.9391 11.2491H2.24964C2.05072 11.2491 1.85996 11.3281 1.71931 11.4687C1.57865 11.6094 1.49964 11.8001 1.49964 11.9991Z" fill="white"/>
                    </svg>

                    <p class="dest-abv-it">{{getCityByCityCode(getFlightResult[0]?.routes[0].segments.length > 0 ?  getFlightResult[0]?.routes[0].segments[getFlightResult[0]?.routes[0].segments.length - 1]?.airport_from : getFlightResult[0]?.routes[0].segments[getFlightResult[0]?.routes[0].segments.length - 1]?.airport_from) }}  ({{getFlightResult[0]?.routes[0].segments[getFlightResult[0]?.routes[0].segments.length - 1]?.airport_from}})</p>
                  <!-- getFlightResult[0]?.outbound[0]?.airport_to -->
                  </div>

                  <div class="booking-info">
                    <div class="search-info-area">
                      <p class="search-info">Multi City</p>
                      <p class="search-info">{{getFlightResult[0]?.price_summary[0].quantity}} Passengers</p>
                      <p class="search-info">{{getFlightResult[0]?.routes[0].segments[0].cabin_type}}</p>
                      <!-- <p class="search-info">{{ getFlightResult[0]?.outbound[0]?.cabin_type }}</p> -->
                    </div>
                  </div>

                </div>

                 <on-boarding-button @click="editSearch" height="auto" padding="0.5rem 1rem" btn-width="8rem" color="#2C6CAC" border="none" background="#EAF0F7" :text-node="edit ? 'Cancel' :'Edit Search'"></on-boarding-button>
              
              </div>
              </div>
              <!-- shortcut flight search -->
              <div class="search_flight_model_wrapper" id="search_model">
                <div class="booking-nav">
                  <p class="booking-nav-item" :style="activeDestType==='round_trip' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='round_trip'" :class="{'activeDestType':activeDestType==='round_trip'}">Round Trip</p>
                  <p class="booking-nav-item" :style="activeDestType==='one_way' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='one_way'" :class="{'activeDestType':activeDestType==='one_way'}">One Way</p>
                  <!-- <p class="booking-nav-item" @click="activeDestType='multiCity'" :class="{'activeDestType':activeDestType==='multiCity'}">Multi City</p> -->
<!--                  <p class="booking-nav-item" :style="activeDestType==='multiCity' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='multiCity'" :class="{'activeDestType':activeDestType==='multiCity'}">Multi City</p>-->
                  <!--                style="cursor:not-allowed !important"-->

                </div>
                <div class="search_flight_model" style="display: flex;margin: 1rem 0;gap:0.50rem">

                <div style="width: 100%">
                  <on-boarding-input label="From" is-fake-loading="true" autocomplete="off" width="100%" id="search_model_from_input"  class="" @inputValue="(value) => {this.fromQuery = value, filterAirportFrom()}"></on-boarding-input>
                  <div class="airportsDropDown" v-if="this.filteredAirportFrom.length > 0">
                    <p @click="selectDestination('search_model_from_input', `${i.city} - ${i.name}`, `${i.iata_code}`)" class="per_airport" v-for="(i, index) in filteredAirportFrom" :key="index">{{i.city}} - {{i.country}} - {{i.name}}</p>
                  </div>
                </div>
                <div style="width: 100%">
                    <on-boarding-input label="To" is-fake-loading="true" id="search_model_to_input" class="" @inputValue="(value) => {this.toQuery = value, filterAirportTo()}"></on-boarding-input>
                    <div class="airportsDropDown" v-if="this.filteredAirportTo.length > 0">
                      <p @click="selectDestination('search_model_to_input', `${i.city} - ${i.name}`, `${i.iata_code}`)" class="per_airport" v-for="(i, index) in filteredAirportTo" :key="index">{{i.city}} - {{i.country}} - {{i.name}}</p>
                    </div>
                  </div>
                <DataPicker :id="'departure_date_id'" :start_date="departure_date" label="Departure Date" :min_date="new Date()" @dateValue="updateDateValue"></DataPicker>
                  <DataPicker :id="'return_date_id'" label="Return Date" :start_date="return_date" v-if="activeDestType==='round_trip'" :min_date="departure_date" @dateValue="updateDateValueTo"></DataPicker>
                <div  class="choose_document_type" style="position: relative;">
                  <label class="class_label">Passengers </label>
                  <p style="color:#F00" v-if="flightModel.adults < 1 && flightModel.children < 1 && flightModel.infants < 1" class="selected-item">Please add passengers</p>
                  <p  class="selected-item">
                    {{ flightModel.adults > 0 ? `${flightModel.adults} Adult` : null}}
                    {{flightModel.infants > 0 && flightModel.adults > 0 ? ',' : null}}
                    {{ flightModel.infants > 0 ? `${flightModel.infants} Infants` : null}}
                    {{flightModel.children > 0 &&  flightModel.adults > 0 && flightModel.infants > 0 ? 'and' : null }}
                    {{ flightModel.children > 0 ? `${flightModel.children} ${flightModel.children > 1 ? 'Children' : 'child'} ` : null}}
                  </p>
                  <div v-if="showPassengers"  class="dropDown">
                    <div class="doc_type_options">
                      <div class="passenger-type">
                        <div style="display: flex;flex-direction: column">
                          <p class="passenger-type-text-1">Adults</p>
                          <p class="text-2">12+ and above</p>
                        </div>

                        <div style="display: flex;justify-content: space-between;width: 40%;align-items: center">
                          <button :disabled="flightModel.adults < 1" @click="passengerSelectionControl('adult', 'minus')" class="minus-button"> - </button>
                          <p class="text-2">{{ flightModel.adults }}</p>
                          <button :disabled="passenger_disable_buttons" @click="passengerSelectionControl('adult', 'add')" class="add-button"> + </button>
                        </div>

                      </div>
                      <div class="passenger-type">
                        <div style="display: flex;flex-direction: column">
                          <p class="passenger-type-text-1">Children</p>
                          <p class="text-2">2-11</p>
                        </div>

                        <div style="display: flex;justify-content: space-between;width: 40%;align-items: center">
                          <button :disabled="flightModel.children < 1" @click="passengerSelectionControl('children', 'minus')" class="minus-button"> - </button>
                          <p class="text-2">{{ flightModel.children }}</p>
                          <button :disabled="passenger_disable_buttons" @click="passengerSelectionControl('children', 'add')" class="add-button"> + </button>

                        </div>

                      </div>
                      <div class="passenger-type">
                        <div style="display: flex;flex-direction: column">
                          <p class="passenger-type-text-1">Infant</p>
                          <p class="text-2">under 2(years)</p>
                        </div>

                        <div style="display: flex;justify-content: space-between;width: 40%;align-items: center">
                          <button :disabled="flightModel.infants < 1" @click="passengerSelectionControl('infants', 'minus')" class="minus-button"> - </button>
                          <p class="text-2">{{ flightModel.infants }}</p>
                          <button :disabled="passenger_disable_buttons || infant_disable" @click="passengerSelectionControl('infants', 'add')" class="add-button"> + </button>

                        </div>

                      </div>


                      <!--                                <div class="info-area">-->
                      <!--                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">-->
                      <!--                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81348 16.1865C5.46753 17.8408 7.66235 18.75 10 18.75C12.3376 18.75 14.5361 17.8408 16.1865 16.1865C17.8406 14.5322 18.75 12.3379 18.75 10C18.75 7.66212 17.8406 5.46432 16.1865 3.81348C14.5361 2.15919 12.3376 1.25 10 1.25C7.66235 1.25 5.46387 2.15919 3.81348 3.81348C2.15942 5.46432 1.25 7.66212 1.25 10C1.25 12.3379 2.15942 14.5357 3.81348 16.1865ZM8.90625 5.625C8.90625 5.01999 9.39453 4.53125 10 4.53125C10.6055 4.53125 11.0938 5.01999 11.0938 5.625V11.0938C11.0938 11.6988 10.6055 12.1875 10 12.1875C9.39453 12.1875 8.90625 11.6988 8.90625 11.0938V5.625ZM11.0938 14.375C11.0938 13.77 10.6055 13.2812 10 13.2812C9.39453 13.2812 8.90625 13.77 8.90625 14.375C8.90625 14.98 9.39453 15.4688 10 15.4688C10.6055 15.4688 11.0938 14.98 11.0938 14.375Z" fill="#1D1E2C"/>-->
                      <!--                                  </svg>-->
                      <!--                                  <p class="info-area-p">The age of a child must be valid for the duration of the journey. For example,-->
                      <!--                                    if a child celebrates a birthday during a trip,-->
                      <!--                                    please use their age on the return flight date.</p>-->
                      <!--                                </div>-->

                    </div>


                  </div>
                  <img @click="openDrop('passengers')" src="../../assets/Monotone.svg" style="cursor: pointer" />
                </div>
                <div class="choose_document_type" style="position: relative;">
                  <label class="class_label">Class</label>
                  <p class="selected-item">{{ flightModel.cabin }}</p>
                  <div  v-if="showClass" class="dropDown">
                    <div class="doc_type_options">
                      <div class="passenger-type" style="border: none">
                        <p class="passenger-type-text-1" @click="flightModel.cabin = 'Economy', showClass = !showClass">Economy <svg v-if="flightModel.cabin === 'Economy'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="#159D54"/>
                          <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                      </div>
                      <div class="passenger-type" style="border: none">
                        <p class="passenger-type-text-1" @click="flightModel.cabin = 'Premium Economy',showClass = !showClass">Premium Economy <svg v-if="flightModel.cabin === 'Premium Economy'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="#159D54"/>
                          <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                      </div>

                      <div class="passenger-type" style="border: none">
                        <p class="passenger-type-text-1" @click="flightModel.cabin = 'Business Class',showClass = !showClass">Business Class <svg v-if="flightModel.cabin === 'Business Class'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="#159D54"/>
                          <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                      </div>

                      <div class="passenger-type" style="border: none">
                        <p class="passenger-type-text-1" @click="flightModel.cabin = 'First Class',showClass = !showClass">First Class <svg v-if="flightModel.cabin === 'First Class'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="#159D54"/>
                          <path d="M5.3335 7.86272L6.96313 9.33333L10.6668 6" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                      </div>


                    </div>
                  </div>
                  <img @click="openDrop('class')" src="../../assets/Monotone.svg" style="cursor: pointer" />
                </div>
                <on-boarding-button text-node="Search" @click="reSearch" :disabled="getLoading" :loading="getLoading"></on-boarding-button>
              </div>
              </div>

              <slot name="booking_children"></slot>


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
import OnBoardingInput from "@/components/Inputs/OnBoardingInput.vue";
import DataPicker from "@/components/Inputs/custom-date-picker/DataPicker.vue";
import FlightRequest from "@/model/FlightRequest";
import {RuthdoAlert} from "ruthly";


export default {
  name: "Dashboard",
  components:{DataPicker, OnBoardingInput, NavBar,OnBoardingButton,DashboardStatsCard,Layout,RouteNav},
  data(){
    return{
      users:users,
      filteredAirportFrom:[],
      filteredAirportTo:[],
      passenger_disable_buttons:false,
      card,
      showing:false,
      flightModel:FlightRequest.flight,
      currentProgressIndex:1,
      lightenColor,
      showClass:false,
      showPassengers:false,
      activeDestType:'round_trip',
      edit:false,
      fromQuery:null,
      toQuery:null,
      storedFlightModel:null,
      formatteddateFrom:null,
      dateFrom:null,
      departure_date: null,
      return_date: null,
      origin:null,
      destination:null
    }
  },

  methods:{
    reSearch(){
      console.log(this.flightModel)
      if(this.activeDestType === 'round_trip'){
        this.flightModel.origin = this.origin
        this.flightModel.destination = this.destination
        this.flightModel.return_date = this.return_date
        this.flightModel.departure_date = this.departure_date
        this.flightModel.with_non_stops = false
        this.flightModel.with_markup =  false
        if(!this.destination || !this.return_date){
          RuthdoAlert({title: 'Travel Dates is required', icon: 'error'});
        } else {
          localStorage.flightModel = JSON.stringify(this.flightModel)
          console.log(localStorage.flightModel)
          storeUtils.fireAway().flight?.handleFlightSearch().then(() => {})
        }
      }
      if(this.activeDestType === 'one_way'){
        console.log(this.origin)
        console.log(this.destination)
        this.flightModel.origin = this.origin
        this.flightModel.destination = this.destination
        this.flightModel.departure_date = this.departure_date
        this.flightModel.return_date = null
        this.flightModel.with_non_stops = false
        this.flightModel.with_markup =  false
        if(!this.departure_date){
          RuthdoAlert({title: 'Departure  Date is required', icon: 'error'});
        }else{
          localStorage.flightModel = JSON.stringify(this.flightModel)
          console.log(localStorage.flightModel)

          storeUtils.fireAway().flight?.handleFlightSearch()

        }
      }
    },

    passengerSelectionControl(clickedPassenger, button_type){
      if(clickedPassenger === 'adult' && button_type === 'add')
        ++this.flightModel.adults
      else if(clickedPassenger === 'adult' && button_type === 'minus')
        --this.flightModel.adults
      else if(clickedPassenger === 'children' && button_type === 'add')
        ++this.flightModel.children
      else if(clickedPassenger === 'children' && button_type === 'minus')
        --this.flightModel.children
      else if(clickedPassenger === 'infants' && button_type === 'add')
        ++this.flightModel.infants
      else if(clickedPassenger === 'infants' && button_type === 'minus')
        --this.flightModel.infants
      else
        return 0

      // let sum = passenger_number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      if(this.flightModel.adults ===  this.flightModel.infants){
        this.infant_disable = true;
      }else if(this.flightModel.adults <  this.flightModel.infants){
        this.infant_disable = true;
        --this.flightModel.infants
      }
      else{
        this.infant_disable = false;
      }

      if(this.passengerNumber == 9){
        this.passenger_disable_buttons = true
      }else{

        this.passenger_disable_buttons = false
      }

    },

    openDrop(value){
      const editSearchDiv = document.getElementById('search_model')

      if(value === 'class'){
        this.showClass = !this.showClass,
        this.showPassengers = false
        if(this.showClass) editSearchDiv.classList.add('additional');
        else editSearchDiv.classList.remove('additional');
      }else{
          this.showPassengers = !this.showPassengers,
          this.showClass = false
          if(this.showPassengers) editSearchDiv.classList.add('additional');
          else editSearchDiv.classList.remove('additional');
      }

    },

    updateDateValue(obj){
      console.log(obj)
      this.dateFrom = obj?.date ? obj?.date : obj
      this.formatteddateFrom = obj?.formattedDate ? obj?.formattedDate : obj
      this.departure_date = obj?.formattedDate ? obj?.formattedDate : obj
    },

    updateDateValueTo(obj){
      this.dateFrom = obj?.date ? obj?.data : obj
      this.formatteddateFrom = obj?.formattedDate ? obj?.formattedDate : obj
      this.return_date = obj?.formattedDate ? obj?.formattedDate : obj
    },

    filterAirportFrom(){
      if(this.fromQuery.length < 1){
        this.filteredAirportFrom.length = 0
      }else{
        this.filteredAirportFrom = this.getAirports.filter(it => {
          // let searchQuery = Object.values(it).map(i => i).toLocaleString()
          return it.city_code === this.fromQuery.toUpperCase() || it.city.toLowerCase() === this.fromQuery.toLowerCase() || it.country.toLowerCase() === this.fromQuery.toLowerCase() || it.iata_code.toLowerCase() === this.fromQuery.toLowerCase()
        })
      }

    },

    filterAirportTo(){
      if(this.toQuery.length < 1){
        this.filteredAirportTo.length = 0
      }else{
        this.filteredAirportTo = this.getAirports.filter(it => {
          return it.country.toLowerCase() === this.toQuery.toLowerCase() || it.city.toLowerCase() === this.toQuery.toLowerCase() || it.city_code === this.toQuery.toUpperCase() || it.iata_code.toLowerCase() === this.toQuery.toLowerCase()
        })
      }

    },

    selectDestination(id, destination, code, index){
      if(id === `multi_city_to_input_${index}`){
        const inputElement = document.getElementById(id)
        inputElement.value = destination
        this.filteredAirportTo.length = 0
      }

      if(id === 'search_model_from_input'){
        const inputElement = document.getElementById(id)
        inputElement.value = destination

        this.origin = code
        this.filteredAirportFrom.length = 0
      }

      if(id === `multi_city_from_input_${index}`){
        const inputElement = document.getElementById(id)
        inputElement.value = destination
        this.filteredAirportFrom.length = 0
      }

      if(id === 'search_model_to_input'){
        const inputElement = document.getElementById(id)
        inputElement.value = destination

        this.destination = code
        this.filteredAirportTo.length = 0
      }

    },

    editSearch(){
      const editSearchDiv = document.getElementById('search_model')
      this.edit = !this.edit

      if(this.edit){
        editSearchDiv.classList.add('search_flight_model_wrapper_animated_out')
      }else{
        editSearchDiv.classList.remove('search_flight_model_wrapper_animated_out')
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
      localStorage.progressNav = JSON.stringify([])
      localStorage.removeItem('bookedFlight')
      localStorage.removeItem('selectedFlight')
      localStorage.removeItem('flightResults')
      localStorage.bookingStage = "Flight Search"
    }
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
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },
   

    getBookingSum(){
      return storeUtils.fireAway().booking?.getBookingSummary
    },

    getLoadingBooking(){
      return storeUtils.fireAway().booking?.getLoadingBooking
    },

    getFlightResult(){
      return storeUtils.fireAway().flight.getFlightResults
    },

    getAirports(){
      const airports = JSON.parse(localStorage?.airports)
      if(airports){
        return airports
      }
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }
    },

    getLoading(){
      return storeUtils.fireAway().flight?.getLoading
    },

  },


  beforeMount() {
    // preserves flight model
    if(localStorage.flightModel) this.storedFlightModel = JSON.parse(localStorage.flightModel);
    // localStorage.removeItem('flightModel')
    console.log(this.storedFlightModel)
  },

  mounted() {
    if(!this.storedFlightModel?.return_date) this.activeDestType = 'one_way';
    else this.activeDestType = 'round_trip';

    const from = document.getElementById('search_model_from_input'),
        to = document.getElementById('search_model_to_input'),
        departure_date = document.getElementById('departure_date_id'),
        return_date = document.getElementById('return_date_id')
    if(from || to || departure_date || return_date){
      from.value = this.getCityByCityCode(this.storedFlightModel?.origin)
      to.value = this.getCityByCityCode(this.storedFlightModel?.destination)
      this.updateDateValue(this.storedFlightModel?.departure_date)
      this.updateDateValueTo(this.storedFlightModel?.return_date)
      this.origin = this.storedFlightModel?.origin
      this.destination = this.storedFlightModel?.destination
      this.flightModel.cabin = this.storedFlightModel?.cabin
      this.flightModel.adults = this.storedFlightModel?.adults
      this.flightModel.children = this.storedFlightModel?.children
      this.flightModel.infants = this.storedFlightModel?.infants
      departure_date.value = this?.departure_date
      return_date.value = this?.return_date
    }


  }
}
</script>

<style scoped>
@import "style.css";
.search_flight_model{
  //position: absolute;
  //flex-wrap: wrap;
  z-index: 999999999;
  width: 100%;
}

.doc_type_options{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.37rem;
  padding: 0.5rem;
  width: 100%;
}


.class_label{
  position: absolute;
  top: 5px;
  color: #575A65;

  /* sanslight/12px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 166.667% */

}

.passenger-type{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.37rem;
}

.passenger-type-text-1{
  color: #222;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.passenger-type-text-1:hover{
  transform: scale(1);
  font-size: 1.1rem;
}

.text-2{
  color: #222;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.passenger-type:nth-child(2){
  border-bottom:solid #C0CCDA;
  border-top: solid #C0CCDA;
}


.minus-button{
  width:30px;
  height: 30px;
  border-radius: 100%;
  background-color: #201F1E;
  color: #FFF;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.add-button{
  width:30px;
  height: 30px;
  border-radius: 100%;
  background-color: #201F1E;
  color: #FFFFFF;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.per_airport{
  padding: 0.5rem;
  border-bottom:solid var(--app-defautl-primary-light);
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
}


.airportsDropDown{
  //width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0.5rem 0 0.5rem;
  gap: 1.25rem;
  border-radius: 0.5rem;
  top: 80%;
  background: #FFF;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  position: absolute;
  z-index: 999999999;
}


.search_flight_model_wrapper{
  transform: translate(-500%);
  transition: .5s ease-out;
  padding: 0;
  margin: 0;
  height: 0;
  //opacity: 0;
}

.search_flight_model_wrapper_animated_out{
  opacity: 1;
  transform: translateY(0%);
  height: 150px;
  margin: 10px 0;
  padding: 10px;
  background: white;
  transition: 0.5s ease-out;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.additional{
  height: 250px;
}

.info_wrapper{
  z-index: 2;
}
.choose_document_type{
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.875rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid  #EFF2F7;
  margin-bottom: 1rem;

}

.dropDown{
  width: 17rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1.25rem;
  border-radius: 0.5rem;
  top: 80%;
  background: #FFF;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  position: absolute;
  //z-index: 999999999999999999999;
}

.class_label{
  position: absolute;
  top: 5px;
  color: #575A65;

  /* sanslight/12px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 166.667% */

}

.selected-item{
  padding: 1rem 0 0.25rem 0;
  /* border: solid; */
  color: var(--black-text-01, #1D1E2C);
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}


.group-inputs{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
}

.selected-item{
  padding: 1rem 0 0.25rem 0;
  /* border: solid; */
  color: var(--black-text-01, #1D1E2C);
  font-family: 'Product Sans';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.75rem; /* 175% */
}

.dashboard_wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
.activeDestType{
  border-bottom:2px solid;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  font-family: 'Product Sans';

}

</style>