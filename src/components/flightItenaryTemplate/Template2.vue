<template>
  <div style="transform: scale(.9);display: flex;justify-content: center;width: 100%" class="animate__animated animate__zoomIn">
    <div class="invoice-wrapper">

        <div class="invoice">

          <div class="first-invoice-row">
            <div class="back-and-logo-area">
              <div>
                <img v-if="getUser.logo" :src="getUser.logo" />
                <p class="tenant_name">{{getUser.name}}</p>
              </div>
            </div>
            <div class="button-area" id="hiddenOnPrint1">
              <button @click="printPage" class="download-invoice" :style="{background:custom_theme ? custom_theme.color : default_theme.color}">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M17.25 7.75H7.75C7.34 7.75 7 7.41 7 7V5C7 2.44 8.19 1.25 10.75 1.25H14.25C16.81 1.25 18 2.44 18 5V7C18 7.41 17.66 7.75 17.25 7.75ZM8.5 6.25H16.5V5C16.5 3.3 15.95 2.75 14.25 2.75H10.75C9.05 2.75 8.5 3.3 8.5 5V6.25Z" fill="white"/>
                  <path d="M13.5 22.75H11.5C9.08 22.75 7.75 21.42 7.75 19V15C7.75 14.59 8.09 14.25 8.5 14.25H16.5C16.91 14.25 17.25 14.59 17.25 15V19C17.25 21.42 15.92 22.75 13.5 22.75ZM9.25 15.75V19C9.25 20.58 9.92 21.25 11.5 21.25H13.5C15.08 21.25 15.75 20.58 15.75 19V15.75H9.25Z" fill="white"/>
                  <path d="M18.5 18.75H16.5C16.09 18.75 15.75 18.41 15.75 18V15.75H9.25V18C9.25 18.41 8.91 18.75 8.5 18.75H6.5C4.08 18.75 2.75 17.42 2.75 15V10C2.75 7.58 4.08 6.25 6.5 6.25H18.5C20.92 6.25 22.25 7.58 22.25 10V15C22.25 17.42 20.92 18.75 18.5 18.75ZM17.25 17.25H18.5C20.08 17.25 20.75 16.58 20.75 15V10C20.75 8.42 20.08 7.75 18.5 7.75H6.5C4.92 7.75 4.25 8.42 4.25 10V15C4.25 16.58 4.92 17.25 6.5 17.25H7.75V15C7.75 14.59 8.09 14.25 8.5 14.25H16.5C16.91 14.25 17.25 14.59 17.25 15V17.25Z" fill="white"/>
                  <path d="M17.5 15.75H7.5C7.09 15.75 6.75 15.41 6.75 15C6.75 14.59 7.09 14.25 7.5 14.25H17.5C17.91 14.25 18.25 14.59 18.25 15C18.25 15.41 17.91 15.75 17.5 15.75Z" fill="white"/>
                  <path d="M10.5 11.75H7.5C7.09 11.75 6.75 11.41 6.75 11C6.75 10.59 7.09 10.25 7.5 10.25H10.5C10.91 10.25 11.25 10.59 11.25 11C11.25 11.41 10.91 11.75 10.5 11.75Z" fill="white"/>
                </svg>Print receipt
              </button>
            </div>
          </div>


          <div id="pdf-to-download">
            <!-- <img src="../../src/assets/full-black-logo.svg" id="ondownload" style="display: none;margin-bottom: 20px" /> -->

            <div class="invoice-receipt"> Flight Itinerary</div>
            <div style="display: flex;justify-content: flex-end;">

              <div>
                <div style="display: flex;gap: 10px;">
                  <p class="key">Full Name : </p>
                  <p class="value"> {{contact_first_name + " " + contact_last_name}}</p>
                </div>
                <div style="display: flex;gap: 10px;">
                  <p class="key">Email:</p>
                  <p class="value">{{contact_email }}</p>
                </div>
                <div style="display: flex;gap: 10px;">
                  <p class="key">Class: </p>
                  <p class="value" v-if="getData?.is_multicity">{{getData?.routes[0].segments[0].cabin_type}} </p>
                  <p class="value" v-else>{{getData?.outbound[0]?.cabin_type}} </p>
                </div>
                <div style="display: flex;gap: 10px;">
                  <p class="key">Booking ID : </p>
                  <p class="value"> {{getData.reference}} </p>
                </div>
                <div style="display: flex;gap: 10px;">
                  <p class="key">PNR: </p>
                  <p class="value">{{ getData?.pnr }}</p>
                </div>
              </div>

            </div>


            <div class="third-invoice-row-and-table">
              <div>
                <div>
                  <p class="flight_details">Flight Details</p>
                </div>

                <div class="container" style="display: flex;justify-content: space-between">
                  <p class="departure">Departure</p>
                  <p class="date">{{convertToWord(getData?.outbound[0]?.departure_time)}}</p>
                </div>

                <div class="container" style="display: flex;justify-content: center;gap:3.37rem">
                  <div >
                    <p class="time" :style="{display: 'flex', alignItems: 'center', color:custom_theme ? custom_theme.color : default_theme.color}">{{convertTo12HourFormat(getData?.outbound[0]?.departure_time)}}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9.0007 3.32998C9.1907 3.32998 9.3807 3.39998 9.5307 3.54998L16.0507 10.07C17.1107 11.13 17.1107 12.87 16.0507 13.93L9.5307 20.45C9.2407 20.74 8.7607 20.74 8.4707 20.45C8.1807 20.16 8.1807 19.68 8.4707 19.39L14.9907 12.87C15.4707 12.39 15.4707 11.61 14.9907 11.13L8.4707 4.60998C8.1807 4.31998 8.1807 3.83998 8.4707 3.54998C8.6207 3.40998 8.8107 3.32998 9.0007 3.32998Z" fill="#292D32"/>
                    </svg></p>
                    <p>{{getData?.outbound[0]?.airport_from}}</p>
                  </div>

                  <div>
                    <p class="time" :style="{display: 'flex', alignItems: 'center', color:custom_theme ? custom_theme.color : default_theme.color}">{{ convertTo12HourFormat(getData?.outbound[0]?.arrival_time)}}</p>
                    <p>{{ getData?.outbound[getData?.outbound.length - 1].airport_to}}</p>
                  </div>
                </div>

              </div>



              <div :style="{background:custom_theme ? custom_theme.color : default_theme.color}" class="flight_info_wrapper" v-for="(i, index) in getData.outbound" :key="index">

                  <div class="flight_info2">
                    <div>
                      <p class="value">{{ i.airport_from }} </p>
                      <p class="key">Departure</p>
                    </div>
                    <div>
                      <p class="value">{{ i.departure_time }} </p>
                      <p class="key"> Time </p>
                    </div>
                    <div>
                      <p class="value">{{i.flight_number}} </p>
                      <p class="key">Flight</p>
                    </div>
                    <div>
                      <p class="value">{{ i.airline_details.name }}</p>
                      <p class="key">Flight Name</p>
                    </div>
                    <div>
                      <p class="value">{{getData.outbound_stops}}</p>
                      <p class="key">Stops </p>
                    </div>

                    </div>

                    <!-- <div class="flight_info">
                      <div class="flight_info_item">
                          <p class="airport">Muritala Mohammed International Airport Lagos (LOS) </p>
                          <p class="time">01 : 00 PM </p>
                          <p class="time">Thurs 20th Sept, 2023</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="18" viewBox="0 0 52 18" fill="none">
                          <path d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z" fill="#2C6CAC"/>
                      </svg>
                      <div class="flight_info_item">
                          <p class="airport">Muritala Mohammed International Airport Lagos (LOS) </p>
                          <p class="time">01 : 00 PM </p>
                          <p class="time">Thurs 20th Sept, 2023</p>
                      </div>
                    </div> -->
              </div>
            </div>

            <div class="last-row">
              <h4 class="sub-total">Total : {{ formatAmount(getData.amount) }} </h4>
            </div>
          </div>




        </div>

      </div>
  </div>
  </template>
  
  <script>
  import router from "../../router";
  import { convertToWord,  } from "../../mixins/lettersExtractor";
  import { formatAmount } from "../../mixins/flightUtil";
  import {convertTo12HourFormat} from "../../mixins/flightUtil";
  import storeUtils from "@/utils/storeUtils";
  export default {
  name: "Template2",
  props:['booking_id','contact_first_name','contact_last_name', 'contact_email'],
  data(){
    return{
    formatAmount,
    convertToWord,
      convertTo12HourFormat
  }
  },
  methods:{
    toEtickets(){
    router.push({path:'/e-tickets', query:{flight_reference:this.getBookedFlight.reference}})
    },
    backToHome(){
    router.push({path:'/dashboard'})
    },
    printPage() {
    window.print();
    },
    saveAsPDF() {
        const element = document.getElementById('pdf-to-download'); // You can select any HTML element to save as PDF. For example, 'document.getElementById('myElement')' to save a specific element.
        document.getElementById('ondownload').style.display='block'
        setTimeout(() =>{
        const opt = {
            margin: 7,
            filename: `${generateUUID('TravelWahoo_Receipt')}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
  
        // Create the PDF using html2pdf.js
        window.html2pdf().from(element).set(opt).save();
  
        },0)
  
    setTimeout(() =>{
        document.getElementById('ondownload').style.display='none'
    },100)
  
    },
  },

  computed:{
    getBookedFlight(){
      const bookedFlight = JSON.parse(localStorage.bookedFlight)
      return bookedFlight
    },
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    getUser(){
      return storeUtils.fireAway().global.Tenant
    },

    getData(){
      return storeUtils.fireAway().print?.getData
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },

  }
  }
  </script>
  
  <style scoped>
  @media print {
    /* Hide the element with the ID "hiddenOnPrint" when printing */
    #hiddenOnPrint1 {
      display: none;
    }
    #hiddenOnPrint2 {
      display: none !important;
    }
    #hiddenOnPrint3 {
      display: none;
    }
  
    #showWhenPrint{
      display: block !important;
    }
  }

  .exclude-from-print {
    display: none !important;
  }

  .tenant_name{
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.3rem;
    background: #fff;
    /* shadow-2 */
    width: 10rem;
  }

  .time{
    color: var(--primary-main, #2C6CAC);
    font-family: 'Product Sans';
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  
  .flight_info_wrapper{
    margin-bottom: 4.25rem;
  }
  
  .flight_info_text{
    color: var(--White, var(--Color, #FFF));
    font-family: 'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem; /* 116.667% */
  }

  .flight_details{
    color: #000;
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 140% */
  }
  
  .key{
    color: #fff;
    font-family:' Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
  }
  
  .value{
    color: #fff;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
  }
  
  .flight_info2{
    display: flex;
    justify-content: space-around;
    gap: 3.48rem;
    margin-top: solid #E5E9F2;
  }
  
  .flight_info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5.5rem;
    border-top: solid #E5E9F2;
    padding: 1.5rem;
    margin-top: 2.5rem;
  }
  
  .flight_info_item{
    width: 20rem;
    /* border: solid; */
  }
  
  .airport{
    color: var(--black-text-01, #1D1E2C);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
  }
  
  #showWhenPrint{
    display: none;
  }
  

  
  .sub-total{
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  .last-row{
    text-align: right;
  }
  .billing h4, h, p{
    padding-bottom: 7px;
    padding-top: 7px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .equal-height-table {
    width: 100%;
    border: 1px solid #DFE6ED;
    margin-bottom: 1rem;
    background-color: #2C6CAC;
    padding: 1rem;
    color: #FFF;
    display: flex;
    justify-content: space-between;
  }
  
  
  .equal-height-table_item{
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  
  .equal-height-table td {
    height: 56px;
    padding: 6px 8px;
    color: #555555;
    text-align: start;
  
  }
  .invoice{
    width: 100%;
  }
  
  .invoice-receipt{
    color: #1D1E2C;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 87.5% */
    margin-bottom: 1rem;
  }
  
  .first-invoice-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

  }
  .invoice-wrapper{
    width: 56.25rem;
    min-height: auto;
    background-color: #FFFFFF;
    padding: 2rem 2rem;
    /*transform: scale(.9);*/
    transform-origin: 0 0;
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 1024px) {
    .invoice-wrapper{
      padding: 0;
    }
  
    .invoice{
      padding: 20px;
    }
  
    .first-invoice-row{
      display: flex;
      align-items: start;
      justify-content: start;
      margin-bottom: 22px;
      flex-direction: column;
      gap: 20px;
  
    }
  }
  
  .back-and-logo-area{
    width: 190px;
    /*height: 120px;*/
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    /*justify-content: center;*/
    gap: 28px;
  }
  
  .button-area{
    display: flex;
    gap: 24px;
  }
  
  .print-invoice{
    cursor: pointer;
    display: flex;
    width: 10.3125rem;
    height: 3rem;
    padding: 0.5rem;
    /*flex-direction: column;*/
    justify-content: center;
    align-items: center;
    border: none;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background: var(--primary-05, #EAF0F7);
    color:  #2C6CAC;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  
  .download-invoice{
    cursor: pointer;
    display: flex;
    width: 12.6875rem;
    height: 3rem;
    padding: 0.5rem;
    /*flex-direction: column;*/
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background: var(--primary-main, #2C6CAC);
    border: none;
    color:  #FFF;
  
    /* Placeholder Text */
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  
  }
  </style>
  
  