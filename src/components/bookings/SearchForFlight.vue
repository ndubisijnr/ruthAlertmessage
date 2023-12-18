<template>
  <booking-index v-slot:booking_children>
        <div :style="{borderColor:custom_theme ? lightenColor(custom_theme.color) : default_theme.color_light}" class="booking-div animate__animated animate__fadeIn">
          <div class="booking-div-inner-wrapper">
            <div class="booking-div-head">
              <div class="service_nav">
                <div class="nav-a1" @click="activeService = 'Flight'" :class="{'activeSection':activeService === 'Flight'}" :style="activeService === 'Flight' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">Book Flight</div>
                <div class="nav-a1" @click="activeService = 'Hotels'" :class="{'activeSection':activeService === 'Hotels'}" :style="activeService === 'Hotels' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : {color:custom_theme ? custom_theme.color : default_theme.color}">Find Hotels</div>
                <div class="nav-a1" @click="activeService = 'Visa'" :class="{'activeSection':activeService === 'Visa'}" :style="activeService === 'Visa' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">Visa</div>
                <div class="nav-a1" @click="activeService = 'Insurance'" :class="{'activeSection':activeService === 'Insurance'}" :style="activeService === 'Insurance' ? {backgroundColor:custom_theme ? custom_theme.color : default_theme.color} : { color:custom_theme ? custom_theme.color : default_theme.color}">Insurance</div>
              </div>
            </div>

            <div class="booking-div-body">
              <div v-if="activeService === 'Flight'">
                <div v-if="getBusinessProfile?.is_cac_verified === 'false' && getBusinessProfile?.is_id_verified === 'false'" style="display: flex;flex-direction: column;align-items: center;justify-content: center;transform: scale(.9);">
                  <div>
                    <img src="../../../src/assets/Cards/LAUNCH.svg">
                  </div>
                  <div>
                    <p style="color:  #0E0842;text-align: center;font-family: 'Product Sans';font-size: 1.25rem;font-style: normal;font-weight: 700;line-height: 1.75rem;">Hello {{getUser?.first_name}}, to get started with Travel Yakata 🎉</p>
                    <p style=" color: #575A65;text-align: center;font-family: 'Product Sans';font-size: 1rem;font-style: normal;font-weight: 400;line-height: 1.75rem; /* 175% */width: 24.125rem;">Please complete your setup to access your full Travel Yakata services</p>
                  </div>
                  <div>
                    <router-link style="text-decoration: none" :to="`/verification/document-upload/${getUser?.access_token?.slice(0,20)}`"><on-boarding-button btn-width="11.25rem" height="3.5rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="Complete Profile"></on-boarding-button></router-link>
                  </div>
                </div>
                <div v-else>
                  <div class="booking-nav">

                    <p class="booking-nav-item" :style="activeDestType==='round_trip' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='round_trip'" :class="{'activeDestType':activeDestType==='round_trip'}">Round Trip</p>
                    <p class="booking-nav-item" :style="activeDestType==='one_way' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='one_way'" :class="{'activeDestType':activeDestType==='one_way'}">One Way</p>
                    <!-- <p class="booking-nav-item" @click="activeDestType='multiCity'" :class="{'activeDestType':activeDestType==='multiCity'}">Multi City</p> -->
                    <p class="booking-nav-item" :style="activeDestType==='multiCity' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='multiCity'" :class="{'activeDestType':activeDestType==='multiCity'}">Multi City</p>
                    <!--                style="cursor:not-allowed !important"-->

                  </div>
                  <div class="one-round-way-multi-city">
                    <div class="form-area">

                      <div class="form-area-body">

                        <div v-show="activeDestType === 'one_way' || activeDestType === 'round_trip'" class="one-way">
                          <div class="group-inputs">
                            <div class="input-divs">
                              <on-boarding-input is-fake-loading="true" autocomplete="off" width="100%" id="from_input" label="From" class="" @inputValue="(value) => {this.fromQuery = value, filterAirportFrom(), shouldSearch()}"/>
                              <div class="airportsDropDown" v-if="this.filteredAirportFrom.length > 0">
                                <p @click="selectDestination(id='from_input', destination=`${i.city} - ${i.name}`, code=`${i.city_code}`)" class="per_airport" v-for="(i, index) in filteredAirportFrom" :key="index">{{i.city}} - {{i.country}} - {{i.name}}</p>
                              </div>
                            </div>
                            <div class="input-divs">
                              <on-boarding-input is-fake-loading="true"  autocomplete="off" width="100%" id="to_input" label="To" class="" @inputValue="(value) => {this.toQuery = value, filterAirportTo()}" />
                              <div v-if="this.filteredAirportTo.length > 0" class="airportsDropDown">
                                <p @click="selectDestination(id='to_input', destination=`${i.city} - ${i.name}`, code=`${i.city_code}`)" class="per_airport" v-for="(i, index) in filteredAirportTo" :key="index">{{i.city}} - {{i.country}} - {{i.name}}</p>
                              </div>
                            </div>
                          </div>
                          <div class="group-inputs">
                            <data-picker :min_date="new Date()" @dateValue="updateDateValue" label="Departure Date"></data-picker>
                            <data-picker @dateValue="updateDateValueTo" :min_date="flightModel.departure_date" v-show="activeDestType==='round_trip'" label="Return Date"></data-picker>
                          </div>
                        </div>

                        <div class="multi-city" v-show="activeDestType === 'multiCity'">
                          <div class="new_flight" v-for="(b, index) in flightModel.destinations ? flightModel.destinations : null">
                            <div class="new_flight_header">
                              <p class="flight-index" :style="{backgroundColor:custom_theme ? lightenColor(custom_theme.color) : default_theme.color,color:'#fff'}">Flight {{ index + 1 }}</p>
                              <img src="../../assets/cancle.svg"  @click="removeFlight(index)" style="cursor: pointer"/>
                            </div>
                            <div class="new_flight_body">
                              <div class="group-inputs">
                                <div class="input-divs">
                                  <on-boarding-input  :name="`from_input_${index}`" is-fake-loading="true" autocomplete="off" width="100%" value="hello" :id="`multi_city_from_input_${index}`"  label="From" class="" @inputValue="(value) => {this.multiCityFromQuery = value, multiCitySearchFrom(index)}" />
                                  <div class="airportsDropDown" v-show="multiCityActiveInput === `from_${index}`">
                                    <p @click="b.origin = `${i.city_code}`, selectDestination(`multi_city_from_input_${index}`, `${i.city} - ${i.name}`, `${i.city_code}`, index)" class="per_airport" v-for="(i, b_index) in filteredAirportFrom" :key="b_index">{{i.city}} - {{i.country}} - {{i.name}}</p>
                                  </div>
                                </div>
                                <div class="input-divs">
                                  <on-boarding-input input-type="input2" autocomplete="off" is-fake-loading="true" width="100%" :id="`multi_city_to_input_${index}`" label="To" class="" @inputValue="(value) => {this.multiCityToQuery = value, multiCitySearchTo(index)}" />
                                  <div class="airportsDropDown" v-show="multiCityActiveInput === `to_${index}`">
                                    <p @click="b.destination = `${i.city_code}`, selectDestination(`multi_city_to_input_${index}`, `${i.city} - ${i.name}`, `${i.city_code}`, index)" class="per_airport" v-for="(i, i_index) in filteredAirportTo" :key="i_index">{{i.city}} - {{i.country}} - {{i.name}}</p>
                                  </div>
                                </div>

                                <div class="input-divs">
                                  <div class="group-inputs">
                                    <data-picker :min_date="b.origin" @dateValue="obj => b.departure_date = obj.formattedDate" icon-id="from_icon_multicity" :id="`from_multicity_${index}`" label="Departure Date" />
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div @click="beginMultiCitySearch" class="add-new-flight" :style="{backgroundColor:custom_theme ? lightenColor(custom_theme.color) : default_theme.color}">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="16" cy="16" r="16" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                              <g clip-path="url(#clip0_305_1400)">
                                <path d="M15.2379 15.2394V10.668H16.7617V15.2394H21.3332V16.7632H16.7617V21.3346H15.2379V16.7632H10.6665V15.2394H15.2379Z" fill="white"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_305_1400">
                                  <rect width="18.2857" height="18.2857" fill="white" transform="translate(6.85715 6.85742)"/>
                                </clipPath>
                              </defs>
                            </svg>
                            <p style="color: #fff">{{multiCityFlight.length > 0 ?'Add another flight' : 'Add new flight'}}</p>
                          </div>

                          <div class="group-inputs"> </div>

                        </div>

                        <div class="group-inputs">


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
                                    <p class="text-2">2-12</p>
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
                                    <p class="text-2">0 - 2(years)</p>
                                  </div>

                                  <div style="display: flex;justify-content: space-between;width: 40%;align-items: center">
                                    <button :disabled="flightModel.infants < 1" @click="passengerSelectionControl('infants', 'minus')" class="minus-button"> - </button>
                                    <p class="text-2">{{ flightModel.infants }}</p>
                                    <button :disabled="passenger_disable_buttons" @click="passengerSelectionControl('infants', 'add')" class="add-button"> + </button>

                                  </div>

                                </div>


                                <div class="info-area">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81348 16.1865C5.46753 17.8408 7.66235 18.75 10 18.75C12.3376 18.75 14.5361 17.8408 16.1865 16.1865C17.8406 14.5322 18.75 12.3379 18.75 10C18.75 7.66212 17.8406 5.46432 16.1865 3.81348C14.5361 2.15919 12.3376 1.25 10 1.25C7.66235 1.25 5.46387 2.15919 3.81348 3.81348C2.15942 5.46432 1.25 7.66212 1.25 10C1.25 12.3379 2.15942 14.5357 3.81348 16.1865ZM8.90625 5.625C8.90625 5.01999 9.39453 4.53125 10 4.53125C10.6055 4.53125 11.0938 5.01999 11.0938 5.625V11.0938C11.0938 11.6988 10.6055 12.1875 10 12.1875C9.39453 12.1875 8.90625 11.6988 8.90625 11.0938V5.625ZM11.0938 14.375C11.0938 13.77 10.6055 13.2812 10 13.2812C9.39453 13.2812 8.90625 13.77 8.90625 14.375C8.90625 14.98 9.39453 15.4688 10 15.4688C10.6055 15.4688 11.0938 14.98 11.0938 14.375Z" fill="#1D1E2C"/>
                                  </svg>
                                  <p class="info-area-p">The age of a child must be valid for the duration of the journey. For example,
                                    if a child celebrates a birthday during a trip,
                                    please use their age on the return flight date.</p>
                                </div>

                              </div>


                            </div>
                            <img @click="showPassengers = !showPassengers, showClass = false" src="../../assets/Monotone.svg" style="cursor: pointer" />
                          </div>

                          <div class="choose_document_type" style="position: relative;">
                            <label class="class_label">Class</label>
                            <p class="selected-item">{{ flightModel.cabin }}</p>
                            <div  v-if="showClass" class="dropDown">
                              <div class="doc_type_options">
                                <div class="passenger-type" style="width: 100%">
                                  <p class="passenger-type-text-1" @click="flightModel.cabin = 'Economy', showClass = !showClass">Economy</p>
                                </div>
                                <div class="passenger-type" style="border: none">
                                  <p class="passenger-type-text-1" @click="flightModel.cabin = 'Premium Economy',showClass = !showClass">Premium Economy</p>
                                </div>

                                <div class="passenger-type" style="border: none">
                                  <p class="passenger-type-text-1" @click="flightModel.cabin = 'Business Class',showClass = !showClass">Business Class</p>
                                </div>

                                <div class="passenger-type" style="border: none">
                                  <p class="passenger-type-text-1" @click="flightModel.cabin = 'First Class',showClass = !showClass">First Class</p>
                                </div>


                              </div>
                            </div>
                            <img @click="showClass = !showClass, showPassengers = false" src="../../assets/Monotone.svg" style="cursor: pointer" />
                          </div>


                        </div>

                        <div class="form-area-checkbox">
                          <div class="form-area-checkbox-item">
                            <p class="txt-m">With Mark Up</p>
                            <input style="cursor: pointer" id="withMarkUp" type="checkbox" @change="handleCheck('withMarkUp')">

                          </div>
                          <div class="form-area-checkbox-item">
                            <p class="txt-m">Non-Stops Only</p>
                            <input style="cursor: pointer" id="withNonStop" type="checkbox" @change="handleCheck('withNonStop')">

                          </div>
                        </div>

                        <div class="form-area-footer">
                          <on-boarding-button v-if="activeDestType === 'multiCity'" :loading="getLoading" :disabled="getLoading" btn-width="100%" border="none" @click="searchFlight('multiCity')" text-node="Search for Flights"></on-boarding-button>
                          <on-boarding-button v-else :loading="getLoading" :disabled="getLoading" btn-width="100%" border="none" @click="searchFlight('one-round')" text-node="Search for Flights"></on-boarding-button>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div v-else class="coming_soon">
                <ComingSoon :page="activeService"></ComingSoon>
              </div>

              </div>

           
           
          </div>
        </div>
  </booking-index>

</template>

<script>
import ComingSoon from "../ComingSoon.vue";
import BookingIndex from "../../views/dashboard/Index.vue"
import Layout from "../../views/Layout.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
import OnBoardingInput from "../../components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import DataPicker from "../../components/Inputs/custom-date-picker/DataPicker.vue";
import FlightRequest from "../../model/FlightRequest"
import {lightenColor} from "@/mixins/themeUtils";

export default {
  name: "SearchForFlight",
  components:{BookingIndex,OnBoardingButton,OnBoardingInput,DataPicker,Layout, ComingSoon},
  data(){
    return{
      activeDestType:'round_trip',
      destination_type:'round_trip',
      activeService:'Flight',
      multiCity:[],
      showPassengers:false,
      showClass:false,
      filteredAirportFrom:[],
      filteredAirportTo:[],
      fromQuery:null,
      toQuery:null,
      multiCityFromQuery:null,
      multiCityToQuery:null,
      formatteddateFrom:null,
      dateFrom:null,
      dateTo:null,
      flightModel:FlightRequest.flight,
      multiflightModel:FlightRequest.multiCity,
      passenger_disable_buttons:false,
      sum:null,
      lightenColor,
      multiCityFlight:[],
      multiCityActiveInput:null,
      thisDate:null,
      departure_date: null,
      return_date: null,
      destination: null,
      origin: null,
    }
  },
  methods:{
    handleCheck(value){
      const withMarkup = document.getElementById('withMarkUp')
      const withNonStops = document.getElementById('withNonStop')
      if(value === 'withMarkUp') this.flightModel.with_markup = withMarkup.checked
      if(value === 'withNonStop') this.flightModel.with_non_stops = withNonStops.checked
    },

    beginMultiCitySearch(){
      const multi_city_payload =
          {
            departure_date: null,
            origin: null,
            destination: null
          }
      if(this.flightModel.destinations){
        this.flightModel.destinations.push(multi_city_payload)
      }else{
        this.flightModel.destinations = []
        this.flightModel.destinations.push(multi_city_payload)
      }

      },
    shouldSearch(){
      if (this.activeDestType === 'round_trip') {
        const keys_to_check_for_round_trip = ['adults', 'departure_date', 'return_date', 'destination', 'origin'];

        // Check if all keys in keys_to_check_for_round_trip exist in flightModel and have truthy values
        return  keys_to_check_for_round_trip.every(key => key in this.flightModel && this.flightModel[key]);

      }
      if (this.activeDestType === 'one_way') {
        const keys_to_check_for_round_trip = ['adults', 'departure_date', 'origin'];

        // Check if all keys in keys_to_check_for_round_trip exist in flightModel and have truthy values
        return  keys_to_check_for_round_trip.every(key => key in this.flightModel && this.flightModel[key]);

      }
    },

    multiCitySearchFrom(index){
      this.multiCityActiveInput = `from_${index}`
      if(this.multiCityFromQuery?.length < 1){
        this.filteredAirportFrom.length = 0
      }else{
        this.filteredAirportFrom = this.getAirports.filter(it => {
          // let searchQuery = Object.values(it).map(i => i).toLocaleString()
          return it.city_code === this.multiCityFromQuery?.toUpperCase() || it.city.toLowerCase() === this.multiCityFromQuery?.toLowerCase() || it.country.toLowerCase() === this.multiCityFromQuery?.toLowerCase() || it.iata_code.toLowerCase() === this.multiCityFromQuery?.toLowerCase()
        })
      }
    },

    multiCitySearchTo(index){
      this.multiCityActiveInput = `to_${index}`
      if(this.multiCityToQuery.length < 1){
        this.filteredAirportTo.length = 0
      }else{
        this.filteredAirportTo = this.getAirports.filter(it => {
          // let searchQuery = Object.values(it).map(i => i).toLocaleString()
          return it.city_code === this.multiCityToQuery.toUpperCase() || it.city.toLowerCase() === this.multiCityToQuery.toLowerCase() || it.country.toLowerCase() === this.multiCityToQuery.toLowerCase() || it.iata_code.toLowerCase() === this.multiCityToQuery.toLowerCase()
        })
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

    
      if(this.passengerNumber == 9){
        this.passenger_disable_buttons = true
      }else{

          this.passenger_disable_buttons = false
      }

    },
    
    addFlight(){
      this.multiCityFlight.push({ 
          departure_date: null,
        return_date: null,
        destination: null})
    },

    removeFlight(obj){
      this.flightModel.destinations = this.flightModel.destinations.filter((it, index) => {
        return index !== obj
      })

    },

    updateDateValue(obj){
      this.dateFrom = obj.date
      this.formatteddateFrom = obj.formattedDate
      this.departure_date = obj.formattedDate
    },

    updateDateValueTo(obj){
      this.dateFrom = obj.date
      this.formatteddateFrom = obj.formattedDate
      this.return_date = obj.formattedDate
    },

    updateMultiCityDateValue(obj){
      this.thisDate = obj.formattedDate
      // this.formatteddateFrom = obj.formattedDate
      // this.flightModel.return_date = obj.formattedDate
    },
    
    selectDestination(id, destination, code, index){
      if(id === `multi_city_to_input_${index}`){
        const inputElement = document.getElementById(id)
        inputElement.value = destination
        this.filteredAirportTo.length = 0
      }

      if(id === 'from_input'){
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

      if(id === 'to_input'){
        const inputElement = document.getElementById(id)
        inputElement.value = destination
        this.destination = code
        this.filteredAirportTo.length = 0
      }

    },

    showDropdown(value){
      const passenger = document.getElementById('passengers')
      const classDiv = document.getElementById('classDiv')
      if(value === 'passenger'){
        passenger.classList.add('show')
        classDiv.classList.remove('show')
      }else{
        passenger.classList.remove('show')
        classDiv.classList.add('show')
      }

    },

    searchFlight(type){
      console.log(this.flightModel)
      if(type === 'multiCity'){
        storeUtils.fireAway().flight?.handleMultiCityFlightSearch(this.flightModel)
      }
      else{
        this.flightModel.origin = this.origin
        this.flightModel.destination = this.destination
        this.flightModel.return_date = this.return_date
        this.flightModel.departure_date = this.departure_date
        this.flightModel.with_non_stops = false
        this.flightModel.with_markup =  false

        storeUtils.fireAway().flight?.handleFlightSearch().then(() => {
          this.departure_date = null
          this.return_date = null
        })
      }

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

    }
  },

  computed:{
    getCurrentRoute(){
      return router.currentRoute.value.name
    },


    passengerNumber(){
      return this.flightModel.adults + this.flightModel.children + this.flightModel.infants
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

    getBookings(){
      return storeUtils.fireAway().booking?.getBookings
    },

   

    getAirports(){
      const airports = JSON.parse(localStorage?.airports)
      if(airports){
        return airports
      }
    },

    getLoading(){
      return storeUtils.fireAway().flight?.getLoading
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
    }


  },


  mounted() {
  
    localStorage.bookingStage = 'Flight Search'

  }

}

</script>

<style scoped>
.txt-m{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.booking-div-head{
  display: flex;
  height: 7.25rem;
  align-items: end;
}

.service_nav{
  display: flex;
  margin-left:5.31rem;
}

.booking-div-body{
  margin:0 5.31rem;
}

.coming_soon{

  margin: 1rem 0;
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
.per_airport{
  padding: 0.5rem;
  border-bottom:solid var(--app-defautl-primary-light);
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
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

.airportsDropDown{
  width: 100%;
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
.input-divs{
  position: relative;
  width: 100%;
}
.airportsDropDown{
  position: absolute;
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
.dropDown{
  width: 17.625rem;
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
  z-index: 999999999;
}

.show{
  display: flex;
}

.info-area{
   display: inline-flex;
   gap: 0.5rem;
}

.info-area-p{
  color:  #575A65;
  width: 100%;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.add-new-flight{
  display: flex;
  width: 13rem;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  cursor: pointer;
}
.flight-index{
  display: flex;
  width: 7.9375rem;
  padding: 0.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.25rem;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}
.new_flight_header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}
.new_flight{
  display: inline-block;
  padding: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid #D3DCE6;
  width:100%;
  margin-bottom: 1.5rem;
}

.form-area-checkbox-item{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.form-area-checkbox{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progress{
  width: 100%;
  background-color: var(--app-default-primary);
  height: 0.25rem;
  transition: 1s ease-in;
}
.u-hide{
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background:  #F9FAFC;

}
.book-flight-details-btn{
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding: 4rem;
}
.extra-baggage-p{
  color:  #1D1E2C;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.price{
  color:  #1D1E2C !important;

  /* Headings/black/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem !important;
  font-style: normal;
  font-weight: 900 !important;
  line-height: 3.875rem !important;
}

.breaker-3{
  width: 0.0625rem;
  height: 2.25rem;
  background: #E0E6ED;
}

.additional-details-info-item{
  display: flex;
  width: auto;
  height: 2rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;

}

.text-1{
  color:#575A65;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  /*line-height: 1.5rem; !* 150% *!*/

}

.text-2{
  color: #1D1E2C;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  /*line-height: 1.75rem;*/


}

.additional-details-info{
  display: flex;
  justify-content: start;
  border-top: solid #E0E6ED;
  border-bottom: solid #E0E6ED;
  width: 100%;
  gap: 1.5rem;
  height: 5.375rem;
  align-items: center;
  margin-top: 3.5rem;

}

.dropdown-details-div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: 5.75rem;

}

.depart_date-info{
  display: flex;
  align-items: center;
  gap: 3.25rem;
}

.depart-date-info-stops{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}

.depart-date{
  color: #1D1E2C;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.actual-result-wrapper{
  margin-bottom: 2.06rem;
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/


}

.details{
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/
  padding: 1.5rem;



}

.component87{
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid #E0E6ED;
  background: #FFF;
  margin-top: 2rem;
  padding: 1.5rem;

}

.view-details{
  color:#89128A;
  width: 4.8125rem;
  height: 1.5rem;

  /* subtext/medium/14px */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  cursor: pointer;
}

.spiralLines-div{
  position: absolute;
  top: -100px;
  right: -150px;
  width: 30.47194rem;
  height: 25.32919rem;
  /*border: solid;*/
  z-index: -1;
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

.doc_type_options{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.37rem;
  padding: 0.5rem;
  width: 100%;
}

.form-area-footer{
  margin-top: 4rem;
}

.group-inputs{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.stops{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
}

.activeDestType{
  border-bottom:2px solid;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  font-family: 'Product Sans';

}

.more-flight-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.dest{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
}

.logo-area{
  display: flex;
  width: 15.1875rem;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
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

.time{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
}

.amount{
  color:  #1D1E2C;
  text-align: center;
  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  margin-bottom: 1.25rem;
}

.amount-book-area{
  border-radius: 0.25rem;
  background:  #F9FAFC;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 15.888rem;
  display: flex;
  align-items: center;
}

.breaker-2{
  width: 85%;
  height: 0.1rem;
  background: #E5E9F2;
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

.logo{
  width: 2rem;
  height: 2rem;
}

.actual-result-item-info{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.actual-result{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.25rem;
  border: 1px solid  #E5E9F2;
  box-sizing: content-box;
}

.one-round-way-multi-city{
  margin-top: 2rem;
}

.multi-city{

}

.search-result-filter-area{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.filter-item{
  display: flex;
  align-items: center;
  justify-content: center;
  color:  #1D1E2C;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.filter-items{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.result-details{
  color: #2D3139;
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  margin-bottom: 1rem;
}

.seperator_1{
  width: 0.0625rem;
  height: 2.5rem;
  border: 1px solid  #EFF2F7;
}

.and-filter-by{
  color: #6A8297;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 100% */
}

.result-details-info{
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.filter-by{
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  gap: 1.1875rem;
  border-radius: 1rem;
  border: 1px solid #EFF2F7;
  background:  #FFF;
}

.breaker1{
  width: 67.125rem;
  height: 0.0625rem;
  background: #DFE6ED;
  margin-top: 0.56rem;
}

.dest-abv{
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

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

.flight-result{
  margin: 0 1.5rem;
}

.destination_type{
  margin: 0 2rem;
  padding: 0.38rem;
  color:  #1D1E2C;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.booking-div-inner-wrapper{
  width: 68.125rem;
  height: auto;
  padding-bottom:3.94rem;
}

.booking-nav-item{
  padding: 0.5rem;
  cursor: pointer;
  color:  #201F1E;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.booking-div{
  margin: 0 0;
  width: 100%;
  background-color: #FFF;
  border: 0.3px solid;
  border-radius: 1rem;

}

.booking-nav{
  display: flex;
  border-bottom: 1px solid  #E5E9F2;
  gap: 5rem;
  margin-top: 2rem;
}

.progress-or{
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

.stage{
  color:  #9DA8B6;
  text-align: left;
  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-left: -2rem;
}

.activeProgress{
  background: #89128A !important;
}
.activeStage{
  color: #89128A !important;
}


.progress-or-item{
}

.circle{
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background: #E5E9F2;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:  #FFF;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.line{
  width: 9.8125rem;
  height: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #E5E9F2;
}

.spiralLines{
  width: inherit;
  height: inherit;
}

.breadcrumb-sub{
  height: 2.4rem;
  width: 20.4rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.94rem;
  gap: 0.5rem;
}

.current-path-sub{
  color: #575A65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.create-booking-process{
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  position: relative;
}

.current-tab{
  color:  #1D1E2C;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.one-way{
  width: 100%;
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
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.overall{
  display: flex;
  justify-content: center;
}

.filter{
  display: flex;
  gap: 1.25rem;
}

.search_filter{
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-wrapper{
  overflow-x: scroll;
  width: 68.625rem;
}

.booking-wrapper{
  width: 68.625rem;
  height: 54rem;
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
  background:  #F8F1F8;
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
  .booking-div{
    margin: 0;
    padding: 0.5rem;

  }

  .group-inputs{
  flex-direction: column;
  gap: 1.5rem;
}

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
  .booking-nav{
  display: flex;
  border-bottom: 1px solid  #E5E9F2;
  gap: 0;
  margin-top: 2rem;
}

  .booking-nav-item{
  padding: 0;
  
  font-size: 0.75rem;
  width: 100%;
  text-align: center;

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



.nav-a1{
  
  font-size: 0.75rem;
  
}

.booking-div-inner-wrapper{
  margin: 1rem 0;
}

  a{
    text-decoration: none;
  }

  .d-coming-soon-p{
    color:  #0E0842;
    text-align: center;

    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
  }

  .d-coming-soon-p2{
    color: #575A65;
    text-align: center;

    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    width: 24.125rem;
  }




}

::-webkit-scrollbar{
  display: none;
}

</style>