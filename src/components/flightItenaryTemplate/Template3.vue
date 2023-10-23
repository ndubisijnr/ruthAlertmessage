<template>
    <div class="invoice-wrapper">
  
      <div class="invoice">
  
        <div class="first-invoice-row">
          <div class="back-and-logo-area">
            <div>
              <img src="../../assets/Cards/logo.svg" />
            </div>
          </div>
          <div class="button-area" id="hiddenOnPrint1">
            <button @click="printPage" class="print-invoice">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M15.7605 22.25H9.24047C4.33047 22.25 2.23047 20.15 2.23047 15.24V15.11C2.23047 10.67 3.98047 8.53003 7.90047 8.16003C8.30047 8.13003 8.68047 8.43003 8.72047 8.84003C8.76047 9.25003 8.46047 9.62003 8.04047 9.66003C4.90047 9.95003 3.73047 11.43 3.73047 15.12V15.25C3.73047 19.32 5.17047 20.76 9.24047 20.76H15.7605C19.8305 20.76 21.2705 19.32 21.2705 15.25V15.12C21.2705 11.41 20.0805 9.93003 16.8805 9.66003C16.4705 9.62003 16.1605 9.26003 16.2005 8.85003C16.2405 8.44003 16.5905 8.13003 17.0105 8.17003C20.9905 8.51003 22.7705 10.66 22.7705 15.13V15.26C22.7705 20.15 20.6705 22.25 15.7605 22.25Z" fill="#2C6CAC"/>
                <path d="M12.5 15.63C12.09 15.63 11.75 15.29 11.75 14.88V2C11.75 1.59 12.09 1.25 12.5 1.25C12.91 1.25 13.25 1.59 13.25 2V14.88C13.25 15.3 12.91 15.63 12.5 15.63Z" fill="#2C6CAC"/>
                <path d="M12.4998 16.7501C12.3098 16.7501 12.1198 16.6801 11.9698 16.5301L8.61984 13.1801C8.32984 12.8901 8.32984 12.4101 8.61984 12.1201C8.90984 11.8301 9.38984 11.8301 9.67984 12.1201L12.4998 14.9401L15.3198 12.1201C15.6098 11.8301 16.0898 11.8301 16.3798 12.1201C16.6698 12.4101 16.6698 12.8901 16.3798 13.1801L13.0298 16.5301C12.8798 16.6801 12.6898 16.7501 12.4998 16.7501Z" fill="#2C6CAC"/>
              </svg>
             
              Download</button>
            <button @click="saveAsPDF" class="download-invoice">
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

          <div style="display: flex;justify-content: space-between;">

            <div>
              <div style="display: flex;gap: 10px;">
                <p class="key">Full Name : </p>
                <p class="value"> Mr Jane Doe</p>
              </div>
              <div style="display: flex;gap: 10px;">
                <p class="key">Email:</p>
                <p class="value">janedoe@gmail.com </p>
              </div>
              <div style="display: flex;gap: 10px;">
                <p class="key">Class: </p>
                <p class="value"> Economy</p>
              </div>
            </div>

            <div>
              <div style="display: flex;gap: 10px;">
                <p class="key">Booking ID : </p>
                <p class="value"> 1234567890 </p>
              </div>
              <div style="display: flex;gap: 10px;">
                <p class="key">PNR: </p>
                <p class="value">1234567</p>
              </div>
              
              <div style="display: flex;gap: 10px;">
                <p class="key">Flight Number : </p>
                <p class="value"> 1234567</p>
              </div>
              <div style="display: flex;gap: 10px;">
                <p class="key">Trip Type: </p>
                <p class="value"> Round Trip</p>
              </div>
            </div>

        </div>
  
  
          <div class="third-invoice-row-and-table">
            <div class="flight_info_wrapper">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_2645_19017)">
                      <path d="M0.66 18.43H19.66V20.43H0.66V18.43ZM20.23 9.07C20.02 8.27 19.19 7.79 18.39 8.01L13.08 9.43L6.18 3L4.25 3.51L8.39 10.68L3.42 12.01L1.45 10.47L0 10.86L2.59 15.35L19.16 10.92C19.97 10.69 20.44 9.87 20.23 9.07Z" fill="#575A65"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2645_19017">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  Departure Flight
                </p>
                <div class="equal-height-table">
                    <div class="equal-height-table_item">
                        <p class="flight_info_text">Lagos (LOS) </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="18" viewBox="0 0 52 18" fill="none">
                          <path d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z" fill="white"/>
                        </svg>
                        <p class="flight_info_text">Abuja (ABV)</p>
                    </div>
                    <div>
                      <p class="flight_info_text">Tues 15th Sept, 2023</p>
                    </div>
                </div>
  
                <div class="flight_info2">
                  <div>
                    <p class="value">WWW001 </p>
                    <p class="key">Flight</p>
                  </div>
                  <div>
                    <p class="value">01:00 PM </p>
                    <p class="key"> Departure </p>
                  </div>
                  <div>
                    <p class="value">1h 30m  </p>
                    <p class="key">Duration</p>
                  </div>
                  <div>
                    <p class="value">02 : 30 PM</p>
                    <p class="key">Arrival</p>
                  </div>
                  <div>
                    <p class="value">0</p>
                    <p class="key">Stops </p>
                  </div>
  
                </div>
            </div>
            <div class="flight_info_wrapper">
                <div class="equal-height-table">
                    <div class="equal-height-table_item">
                        <p>Lagos (LOS) </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="18" viewBox="0 0 52 18" fill="none">
                          <path d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z" fill="white"/>
                        </svg>
                        <p>Abuja (ABV)</p>
                    </div>
                    <div>
                      <p>Tues 15th Sept, 2023</p>
                    </div>
                </div>
  
                <div class="flight_info2">
                  <div>
                    <p class="value">WWW001 </p>
                    <p class="key">Flight</p>
                  </div>
                  <div>
                    <p class="value">01:00 PM </p>
                    <p class="key"> Departure </p>
                  </div>
                  <div>
                    <p class="value">1h 30m  </p>
                    <p class="key">Duration</p>
                  </div>
                  <div>
                    <p class="value">02 : 30 PM</p>
                    <p class="key">Arrival</p>
                  </div>
                  <div>
                    <p class="value">0</p>
                    <p class="key">Stops </p>
                  </div>
  
                  </div>
  
                  <div class="flight_info">
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
                  </div>
            </div>
          </div>
  
          <div class="last-row">
            <h4><span class="sub-total">Sub-Total :</span> 10000</h4>
            <h4><span>Total :</span> 15000 </h4>
            <!-- <h4><span class="sub-total">Sub-Total :</span> {{ formatAmount(getBookedFlight.amount) }} </h4>
            <h4><span>Total :</span>  {{ formatAmount(getBookedFlight.amount) }} </h4> -->
          </div>
        </div>
  
  
  
  
      </div>
  
    </div>
  </template>
  
  <script>
  import router from "../../router";
  import { convertToWord } from "../../mixins/lettersExtractor";  
  import { formatAmount } from "../../mixins/flightUtil";
  export default {
  name: "Template3",
  data(){
    return{
    formatAmount,
    convertToWord
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
    }
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
  
  .key{
    color: var(--black-text-01, #1D1E2C);
    font-family:' Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
  }
  
  .value{
    color: var(--black-text-01, #1D1E2C);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
  }
  
  .flight_info2{
    display: flex;
    justify-content: start;
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
  
  .time{
    color: var(--black-text-01, #1D1E2C);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
  }
  
  .sub-total{
    color: #575A65;
    font-size: 14px;
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
    border: solid green;
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
    border: solid crimson;
  
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
    width: 329px;
    height: 48px;
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
  
  