<script>
import MobileBottomNav from "@/components/dashboardComponents/MobileBottomNav.vue";
import NavBar from "@/components/dashboardComponents/NavBar.vue";
import storeUtils from "@/utils/storeUtils";
import router from "@/router";
import {lightenColor} from "@/mixins/themeUtils";
import DataPicker from "@/components/Inputs/custom-date-picker/DataPicker.vue";
import OnBoardingInput from "@/components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import {getFirstLettersOfFirstAndLastName} from "../../mixins/flightUtil";
import ComingSoon from "@/components/ComingSoon.vue";
import FlightRequest from "@/model/FlightRequest";

export default {
  name: "DashboardPreview",
  methods: {getFirstLettersOfFirstAndLastName, lightenColor},
  components: {ComingSoon, OnBoardingButton, OnBoardingInput, DataPicker, NavBar, MobileBottomNav},
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

  computed: {
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    loadingCus(){
      return storeUtils.fireAway().theme.getLoadingCustomization
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }

    },

    getIsUnauthorised(){
      return storeUtils.fireAway().global.getIsUnauthorised
    },

    getCurrentRoute(){
      return router.currentRoute.value.fullPath
    },

  },

}
</script>

<template>
  <div class="wrapper">
      <div class="inner-wrapper">
        <div class="m6-0">
        <img src="../../assets/Cards/logo.svg" />
        <div class="navigation-links" id="nav">
            <div class="links-item" :style="getCurrentRoute.includes('dashboard') ? {backgroundColor:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)} : {}" :class="{'active':getCurrentRoute.includes('dashboard')}">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M10.2097 15.625C9.86805 15.625 9.58472 15.3417 9.58472 15V12.5C9.58472 12.1583 9.86805 11.875 10.2097 11.875C10.5514 11.875 10.8347 12.1583 10.8347 12.5V15C10.8347 15.3417 10.5514 15.625 10.2097 15.625Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M14.8764 18.8H5.54302C4.02635 18.8 2.64302 17.6333 2.39302 16.1417L1.28468 9.50001C1.10135 8.46668 1.60968 7.14168 2.43468 6.48335L8.20968 1.85835C9.32635 0.958348 11.0847 0.966681 12.2097 1.86668L17.9847 6.48335C18.8013 7.14168 19.3013 8.46668 19.1347 9.50001L18.0263 16.1333C17.7763 17.6083 16.3597 18.8 14.8764 18.8ZM10.2014 2.44168C9.75968 2.44168 9.31802 2.57501 8.99302 2.83335L3.21802 7.46668C2.75135 7.84168 2.41802 8.70835 2.51802 9.30001L3.62635 15.9333C3.77635 16.8083 4.65135 17.55 5.54302 17.55H14.8764C15.768 17.55 16.643 16.8083 16.793 15.925L17.9014 9.29168C17.993 8.70835 17.6597 7.82501 17.2013 7.45835L11.4264 2.84168C11.093 2.57501 10.643 2.44168 10.2014 2.44168Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
              </svg>

              <span class="links">Dashboard</span>
            </div>
            <div class="links-item" :style="getCurrentRoute.includes('agents') ? {backgroundColor:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)} : {}" :class="{'active':getCurrentRoute.includes('agents')}">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M15.3549 6.59148C15.3299 6.59148 15.3132 6.59148 15.2882 6.59148H15.2466C13.6716 6.54148 12.4966 5.32481 12.4966 3.82481C12.4966 2.29147 13.7466 1.0498 15.2716 1.0498C16.7966 1.0498 18.0466 2.29981 18.0466 3.82481C18.0383 5.33314 16.8632 6.54981 15.3632 6.59981C15.3632 6.59147 15.3632 6.59148 15.3549 6.59148ZM15.2716 2.29148C14.4299 2.29148 13.7466 2.97481 13.7466 3.81648C13.7466 4.64148 14.3883 5.30815 15.2133 5.34148C15.2216 5.33315 15.2882 5.33315 15.3632 5.34148C16.1716 5.29981 16.7966 4.63314 16.8049 3.81648C16.8049 2.97481 16.1216 2.29148 15.2716 2.29148Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M15.3632 12.7339C15.0382 12.7339 14.7132 12.7089 14.3882 12.6505C14.0466 12.5922 13.8216 12.2672 13.8799 11.9255C13.9382 11.5839 14.2632 11.3589 14.6049 11.4172C15.6299 11.5922 16.7132 11.4005 17.4382 10.9172C17.8299 10.6589 18.0382 10.3339 18.0382 10.0089C18.0382 9.68386 17.8216 9.36719 17.4382 9.10886C16.7132 8.62553 15.6132 8.43386 14.5799 8.6172C14.2382 8.68386 13.9132 8.45053 13.8549 8.10886C13.7966 7.7672 14.0216 7.4422 14.3632 7.38387C15.7216 7.1422 17.1299 7.40053 18.1299 8.06719C18.8632 8.55886 19.2882 9.25886 19.2882 10.0089C19.2882 10.7505 18.8716 11.4589 18.1299 11.9589C17.3716 12.4589 16.3882 12.7339 15.3632 12.7339Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M5.32988 6.592C5.32155 6.592 5.31322 6.592 5.31322 6.592C3.81322 6.542 2.63822 5.32532 2.62988 3.82532C2.62988 2.29199 3.87988 1.04199 5.40488 1.04199C6.92988 1.04199 8.17988 2.29199 8.17988 3.81699C8.17988 5.32533 7.00488 6.542 5.50488 6.592L5.32988 5.967L5.38822 6.592C5.37155 6.592 5.34655 6.592 5.32988 6.592ZM5.41322 5.342C5.46322 5.342 5.50488 5.34199 5.55488 5.35032C6.29655 5.31699 6.94655 4.65032 6.94655 3.82532C6.94655 2.98366 6.26322 2.30032 5.42155 2.30032C4.57988 2.30032 3.89655 2.98366 3.89655 3.82532C3.89655 4.64199 4.52988 5.30032 5.33822 5.35032C5.34655 5.34199 5.37988 5.342 5.41322 5.342Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M5.321 12.7339C4.296 12.7339 3.31266 12.4589 2.55433 11.9589C1.821 11.4672 1.396 10.7589 1.396 10.0089C1.396 9.26719 1.821 8.55886 2.55433 8.06719C3.55433 7.40053 4.96266 7.1422 6.321 7.38387C6.66266 7.4422 6.88766 7.7672 6.82933 8.10886C6.771 8.45053 6.446 8.68386 6.10433 8.6172C5.071 8.43386 3.97933 8.62553 3.246 9.10886C2.85433 9.36719 2.646 9.68386 2.646 10.0089C2.646 10.3339 2.86266 10.6589 3.246 10.9172C3.971 11.4005 5.05433 11.5922 6.07933 11.4172C6.421 11.3589 6.746 11.5922 6.80433 11.9255C6.86266 12.2672 6.63766 12.5922 6.296 12.6505C5.971 12.7089 5.646 12.7339 5.321 12.7339Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M10.3549 12.8171C10.3299 12.8171 10.3132 12.8171 10.2882 12.8171H10.2466C8.67158 12.7671 7.49658 11.5504 7.49658 10.0504C7.49658 8.51706 8.74658 7.27539 10.2716 7.27539C11.7966 7.27539 13.0466 8.52539 13.0466 10.0504C13.0382 11.5587 11.8632 12.7754 10.3632 12.8254C10.3632 12.8171 10.3632 12.8171 10.3549 12.8171ZM10.2716 8.51706C9.42992 8.51706 8.74658 9.2004 8.74658 10.0421C8.74658 10.8671 9.38825 11.5337 10.2133 11.5671C10.2216 11.5587 10.2882 11.5587 10.3632 11.5671C11.1716 11.5254 11.7966 10.8587 11.8049 10.0421C11.8049 9.20873 11.1216 8.51706 10.2716 8.51706Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M10.3537 18.9666C9.35374 18.9666 8.35374 18.7083 7.57874 18.1833C6.84541 17.6916 6.42041 16.9916 6.42041 16.2416C6.42041 15.4999 6.83708 14.7833 7.57874 14.2916C9.13708 13.2583 11.5787 13.2583 13.1287 14.2916C13.8621 14.7833 14.2871 15.4833 14.2871 16.2333C14.2871 16.9749 13.8704 17.6916 13.1287 18.1833C12.3537 18.6999 11.3537 18.9666 10.3537 18.9666ZM8.27041 15.3416C7.87874 15.5999 7.67041 15.9249 7.67041 16.2499C7.67041 16.5749 7.88708 16.8916 8.27041 17.1499C9.39541 17.9083 11.3037 17.9083 12.4287 17.1499C12.8204 16.8916 13.0287 16.5666 13.0287 16.2416C13.0287 15.9166 12.8121 15.5999 12.4287 15.3416C11.3121 14.5833 9.40374 14.5916 8.27041 15.3416Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
              </svg>
              <span class="links">Travel Agents</span>
            </div>

            <div class="links-item" :style="getCurrentRoute.includes('bookings') ? {backgroundColor:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)} : {}" :class="{'active':getCurrentRoute.includes('bookings')}">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="#000">
                <path d="M14.8763 17.2923H6.54301C2.86801 17.2923 1.75134 16.1756 1.75134 12.5007V12.084C1.75134 11.7423 2.03468 11.459 2.37634 11.459C3.17634 11.459 3.83468 10.8007 3.83468 10.0007C3.83468 9.20065 3.17634 8.54232 2.37634 8.54232C2.03468 8.54232 1.75134 8.25898 1.75134 7.91732V7.50065C1.75134 3.82565 2.86801 2.70898 6.54301 2.70898H14.8763C18.5513 2.70898 19.668 3.82565 19.668 7.50065V8.33398C19.668 8.67565 19.3847 8.95898 19.043 8.95898C18.243 8.95898 17.5847 9.61732 17.5847 10.4173C17.5847 11.2173 18.243 11.8757 19.043 11.8757C19.3847 11.8757 19.668 12.159 19.668 12.5007C19.668 16.1756 18.5513 17.2923 14.8763 17.2923ZM3.00134 12.634C3.01801 15.5006 3.60968 16.0423 6.54301 16.0423H14.8763C17.6597 16.0423 18.3347 15.5506 18.4097 13.0506C17.218 12.7673 16.3347 11.6923 16.3347 10.4173C16.3347 9.14232 17.2263 8.06732 18.418 7.78398V7.50065C18.418 4.52565 17.8597 3.95898 14.8763 3.95898H6.54301C3.60968 3.95898 3.01801 4.50065 3.00134 7.36732C4.19301 7.65065 5.08468 8.72565 5.08468 10.0007C5.08468 11.2757 4.19301 12.3506 3.00134 12.634Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M9.04309 6.04232C8.70142 6.04232 8.41809 5.75898 8.41809 5.41732V3.33398C8.41809 2.99232 8.70142 2.70898 9.04309 2.70898C9.38476 2.70898 9.66809 2.99232 9.66809 3.33398V5.41732C9.66809 5.75898 9.38476 6.04232 9.04309 6.04232Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M9.04309 12.1501C8.70142 12.1501 8.41809 11.8668 8.41809 11.5251V8.4668C8.41809 8.12513 8.70142 7.8418 9.04309 7.8418C9.38476 7.8418 9.66809 8.12513 9.66809 8.4668V11.5251C9.66809 11.8751 9.38476 12.1501 9.04309 12.1501Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M9.04309 17.2923C8.70142 17.2923 8.41809 17.009 8.41809 16.6673V14.584C8.41809 14.2423 8.70142 13.959 9.04309 13.959C9.38476 13.959 9.66809 14.2423 9.66809 14.584V16.6673C9.66809 17.009 9.38476 17.2923 9.04309 17.2923Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
              </svg>
              <span class="links">Manage Bookings</span>
            </div>

            <div class="links-item" :class="{'active':getCurrentRoute.includes('transaction')}" :style="getCurrentRoute.includes('transaction') ? {backgroundColor:custom_theme ? lightenColor(custom_theme.color) : lightenColor(default_theme.color)} : {}">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M14.6931 17.2918H9.30139C8.95972 17.2918 8.67639 17.0085 8.67639 16.6668C8.67639 16.3251 8.95972 16.0418 9.30139 16.0418H14.6931C17.2431 16.0418 17.8431 15.6251 17.9097 13.3585C16.8097 13.0751 15.9931 12.0751 15.9931 10.8918C15.9931 9.70013 16.8097 8.6918 17.9181 8.40846V8.1918C17.9181 5.45013 17.4347 4.9668 14.6931 4.9668H10.0014V10.0001C10.0014 10.3418 9.71806 10.6251 9.37639 10.6251C9.03473 10.6251 8.75139 10.3418 8.75139 10.0001V4.3418C8.75139 4.00013 9.03473 3.7168 9.37639 3.7168H14.6931C18.1264 3.7168 19.1681 4.75846 19.1681 8.1918V8.95846C19.1681 9.30013 18.8847 9.58346 18.5431 9.58346C17.8264 9.58346 17.2431 10.1668 17.2431 10.8918C17.2431 11.6085 17.8264 12.1918 18.5431 12.1918C18.8847 12.1918 19.1681 12.4751 19.1681 12.8168C19.1681 16.2501 18.1264 17.2918 14.6931 17.2918Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M9.37638 17.2918H7.06805C5.38471 17.2918 4.51805 16.0252 3.72638 14.1252L3.56805 13.7418C3.50971 13.5918 3.50971 13.4168 3.57638 13.2668C3.64305 13.1168 3.76805 12.9918 3.91805 12.9335C4.25138 12.8002 4.50971 12.5418 4.65138 12.2168C4.79305 11.8835 4.79305 11.5168 4.65138 11.1835C4.37638 10.4835 3.58471 10.1585 2.88471 10.4335C2.72638 10.5002 2.55971 10.4918 2.40138 10.4252C2.25138 10.3585 2.12638 10.2335 2.06805 10.0835L1.92638 9.72518C0.593047 6.48351 1.17638 5.09185 4.41805 3.75018L6.61805 2.85018C6.93471 2.71685 7.30138 2.87518 7.43471 3.19185L9.95971 9.30851C9.99305 9.38351 10.0097 9.46685 10.0097 9.55018V11.6668C10.0097 12.0085 9.72638 12.2918 9.38471 12.2918C9.04305 12.2918 8.75971 12.0085 8.75971 11.6668V9.66685L6.50971 4.24185L4.89305 4.90851C2.32638 5.96685 2.01805 6.61685 3.02638 9.11685C4.18471 8.95018 5.35138 9.57518 5.80971 10.7002C6.07638 11.3418 6.07638 12.0502 5.80138 12.6918C5.61805 13.1335 5.31805 13.5085 4.93471 13.7835C5.73471 15.6668 6.31805 16.0418 7.05971 16.0418H8.74305V14.1668C8.74305 13.8252 9.02638 13.5418 9.36805 13.5418C9.70971 13.5418 9.99305 13.8252 9.99305 14.1668V16.6668C10.0014 17.0085 9.71805 17.2918 9.37638 17.2918Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
                <path d="M7.01801 17.291H6.87634C6.53468 17.291 6.25134 17.0077 6.25134 16.666C6.25134 16.3243 6.53468 16.041 6.87634 16.041H7.01801C7.35968 16.041 7.64301 16.3243 7.64301 16.666C7.64301 17.0077 7.35968 17.291 7.01801 17.291Z" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
              </svg>
              <span class="links">Transactions</span>
            </div>
        </div>
        <div>
          <div class="m7-0">

            <img src="../../assets/notification.svg" class="notification_icon">

            <div  class="profile" @click="showDrop" >
              <div class="profile-icon" :style="getBusinessProfile?.logo ? {backgroundImage:`url(${getBusinessProfile?.logo})`} : {backgroundColor:custom_theme ? custom_theme.color : default_theme.color}"> <p v-if="!getBusinessProfile?.logo">{{getFirstLettersOfFirstAndLastName(getUser.first_name + ' ' + getUser.last_name)}}</p></div>
              <img src="../../assets/Icons/Arrows/Down.svg" />
            </div>



          </div>
        </div>
      </div>
      </div>
      <div>
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
    <div class="booking-div-body">
      <div v-if="activeService === 'Flight'">
        <div>
          <div class="booking-nav">

            <p class="booking-nav-item" :style="activeDestType==='round_trip' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='round_trip'" :class="{'activeDestType':activeDestType==='round_trip'}">Round Trip</p>
            <p class="booking-nav-item" :style="activeDestType==='one_way' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='one_way'" :class="{'activeDestType':activeDestType==='one_way'}">One Way</p>
            <p class="booking-nav-item" :style="activeDestType==='multiCity' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderBottomColor:custom_theme ? custom_theme.color : default_theme.color} : {}" @click="activeDestType='multiCity'" :class="{'activeDestType':activeDestType==='multiCity'}">Multi City</p>

          </div>
          <div class="one-round-way-multi-city">
            <div class="form-area">

              <div class="form-area-body">

                <div v-show="activeDestType === 'one_way' || activeDestType === 'round_trip'" class="one-way">
                  <div class="group-inputs">
                    <div class="input-divs">
                      <on-boarding-input is-fake-loading="true" autocomplete="off" width="100%" id="from_input" label="From" class="" />
                    </div>
                    <div class="input-divs">
                      <on-boarding-input is-fake-loading="true"  autocomplete="off" width="100%" id="to_input" label="To" class="" />
                    </div>
                  </div>
                  <div class="group-inputs">
                    <data-picker :min_date="new Date()"  label="Departure Date"></data-picker>
                    <data-picker :min_date="flightModel.departure_date" v-show="activeDestType==='round_trip'" label="Return Date"></data-picker>
                  </div>
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
</template>

<style scoped>
.splash{
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fff;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav a.router-link-exact-active {
  border-radius: 1.25rem;
  /* background: var(--app-nav-active); */
//background: var(--Gradient, linear-gradient(277deg, #D5E2EE 26.44%, rgba(213, 226, 238, 0.58) 56.97%, rgba(213, 226, 238, 0.36) 73.28%, rgba(213, 226, 238, 0.67) 99.44%));
  text-decoration: none;
  transition: ease 2s;
}

.active{
  border-radius: 1.25rem;
//background: var(--Gradient, linear-gradient(277deg, #D5E2EE 26.44%, rgba(213, 226, 238, 0.58) 56.97%, rgba(213, 226, 238, 0.36) 73.28%, rgba(213, 226, 238, 0.67) 99.44%));
  text-decoration: none;
  transition: ease 2s;
}

a{
  text-decoration: none;
  color: #181818;
}

.notification_icon{
  display: block;
}

a:hover{
  color: var(--app-default-primary);
}

.dropDown-inner-main{
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-top:1rem;
  padding-bottom: 1.94rem;
}

.dropDown-inner-head{
  display: flex;
  justify-content: start;
  gap: 1rem;
  border-bottom: 1px solid #EFF2F7;
  align-items: center;
  padding-left: 1.5rem;
  padding-top:1.5rem;
  padding-bottom: 1rem;

}

.first_last_name{
  text-transform: capitalize;
  color:  #0F0F0F;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
}
.dropDown-item{
  display: flex;
  justify-content: start;
  gap:1.5rem;
  color:  #1D1E2C;
  font-family: "Product San";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.email{
  color:  #0F0F0F;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
}


.dropDown{
  width: 19.9375rem;
  height: auto;
  flex-shrink: 0;
  position: absolute;
  border-radius: 1rem;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
  left: -100px;
  top: 50px;
  z-index: 9999999999;
}


.links-item{
  align-items: center;
  display: flex;
  padding: 0.62rem;
  gap:0.75rem;
  justify-content: center;
  transition: ease 2s;
}

.links{
  color: #000;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.navigation-links{
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}


.m7-0{
  display: flex;
  gap: 1.5rem;
  /*float: right;*/
  position: relative;
}

.profile{
  display: flex;
  width: 5.9375rem;
  padding: 0.625rem  0.625rem 0.875rem;
  align-items: center;
  justify-content: center;
  gap: 1.3125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid  #EFF2F7;
  cursor: pointer;
  position: relative;
}





.profile-icon{
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.003rem;
  background-position: center;
  background-size: cover;
}

.icon-dropdown{
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  background:  var(--app-default-primary);
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.003rem;
  background-position: center;
  background-size: cover;
}

@media (max-width: 1024px) {

}

.wrapper{
  width: 100%;
  background-color: #F9FAFC;
  min-height: 100vh;

}


.inner-wrapper{
  width: 100%;
  display: inline-block;

}
.m6-0{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10.38rem;
  width: 100%;
}

.dashboard_content{
  position: relative;
  min-height: 100vh;
  display: flex;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  flex-direction: column;
}


@media (max-width:1024px) {
  .navigation-links{
    display: none;
  }

  .notification_icon{
    display: none;
  }

  .m6-0{
    justify-content: space-between;
  }

  .dashboard_content{
    /* padding-left:1.5rem;
    padding-right: 1.5rem; */
    /* padding: 0; */
    margin-bottom: 100px;
    justify-content: flex-start;

  }


}

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
  border: solid;
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