<template>
  <booking-index v-slot:booking_children>
        <div class="booking-div">
          <div class="destination_type">Destination Type</div>

          <div class="booking-div-inner-wrapper">
            <div class="booking-nav">
              <p class="booking-nav-item" @click="activeDestType='round_trip'" :class="{'activeDestType':activeDestType==='round_trip'}">Round Trip</p>
              <p class="booking-nav-item" @click="activeDestType='one_way'" :class="{'activeDestType':activeDestType==='one_way'}">One Way</p>
              <p class="booking-nav-item" @click="activeDestType='multiCity'" :class="{'activeDestType':activeDestType==='multiCity'}">Multi City</p>
            </div>
            <div class="one-round-way-multi-city">

              <div class="form-area">

                <div class="form-area-body">
                  <div v-show="activeDestType === 'one_way' || activeDestType === 'round_trip'" class="one-way">
                    <div class="group-inputs">
                      <on-boarding-input width="100%" label="From" class=""/>
                      <on-boarding-input width="100%"  label="To" class=""/>
                    </div>
                    <div class="group-inputs">
                      <data-picker label="Departure Date"></data-picker>
                      <data-picker v-show="activeDestType==='round_trip'" label="Return Date"></data-picker>
                    </div>
                    <div class="group-inputs">

                      <div class="choose_document_type" style="position: relative;">
                        <label>Passengers</label>

                        <!--                          <div style="">-->
                        <!--                            <p class="doc_type"> {{LocalMarkUpPlaceHolder }}</p>-->
                        <!--                            <div class="doc_type_options" v-show="localDropdown">-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Fixed',toggleLocalDropdown(),markupModel.domestic_markup_type = 'fixed'">fixed</p>-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Percentage', toggleLocalDropdown(),markupModel.domestic_markup_type = 'percentage'" >percentage</p>-->

                        <!--                            </div>-->

                        <!--                          </div>-->
                        <img src="../../assets/Monotone.svg" style="cursor: pointer" />
                      </div>
                      <div class="choose_document_type" style="position: relative;">
                        <label>Passengers</label>

                        <!--                          <div style="">-->
                        <!--                            <p class="doc_type"> {{LocalMarkUpPlaceHolder }}</p>-->
                        <!--                            <div class="doc_type_options" v-show="localDropdown">-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Fixed',toggleLocalDropdown(),markupModel.domestic_markup_type = 'fixed'">fixed</p>-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Percentage', toggleLocalDropdown(),markupModel.domestic_markup_type = 'percentage'" >percentage</p>-->

                        <!--                            </div>-->

                        <!--                          </div>-->
                        <img src="../../assets/Monotone.svg" style="cursor: pointer" />
                      </div>
                      <!--                        <div class="choose_document_type" style="position: relative;">-->
                      <!--                          <label>Class</label>-->
                      <!--                          <div style="">-->
                      <!--                            <p class="doc_type"> </p>-->
                      <!--                            <div class="doc_type_options" >-->
                      <!--                              <p class="doc_type_item" >fixed</p>-->
                      <!--                              <p class="doc_type_item"  >percentage</p>-->

                      <!--                            </div>-->

                      <!--                          </div>-->
                      <!--                          <img src="../../assets/Monotone.svg" style="cursor: pointer" />-->
                      <!--                        </div>-->


                    </div>
                  </div>

                  <div class="multi-city" v-show="activeDestType === 'multiCity'">
                    <div class="new_flight">
                      <div class="new_flight_header">
                        <p class="flight-index">Flight 1</p>
                        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
                      </div>
                      <div class="new_flight_body">
                        <div class="group-inputs">
                          <on-boarding-input width="100%" label="From" class=""/>
                          <on-boarding-input width="100%"  label="To" class=""/>
                        </div>
                        <div class="group-inputs">
                          <data-picker icon-id="from_icon_multicity" id="from_multicity" label="Departure Date" />
                        </div>
                      </div>

                    </div>

                    <div class="add-new-flight">
                      <img src="../../assets/Cards/add.svg" width="20" />
                      <p>Add another flight</p>
                    </div>

                    <div class="group-inputs">

                      <div class="choose_document_type" style="position: relative;">
                        <label>Passengers</label>

                        <!--                          <div style="">-->
                        <!--                            <p class="doc_type"> {{LocalMarkUpPlaceHolder }}</p>-->
                        <!--                            <div class="doc_type_options" v-show="localDropdown">-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Fixed',toggleLocalDropdown(),markupModel.domestic_markup_type = 'fixed'">fixed</p>-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Percentage', toggleLocalDropdown(),markupModel.domestic_markup_type = 'percentage'" >percentage</p>-->

                        <!--                            </div>-->

                        <!--                          </div>-->
                        <img src="../../assets/Monotone.svg" style="cursor: pointer" />
                      </div>
                      <div class="choose_document_type" style="position: relative;">
                        <label>Passengers</label>

                        <!--                          <div style="">-->
                        <!--                            <p class="doc_type"> {{LocalMarkUpPlaceHolder }}</p>-->
                        <!--                            <div class="doc_type_options" v-show="localDropdown">-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Fixed',toggleLocalDropdown(),markupModel.domestic_markup_type = 'fixed'">fixed</p>-->
                        <!--                              <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Percentage', toggleLocalDropdown(),markupModel.domestic_markup_type = 'percentage'" >percentage</p>-->

                        <!--                            </div>-->

                        <!--                          </div>-->
                        <img src="../../assets/Monotone.svg" style="cursor: pointer" />
                      </div>
                      <!--                        <div class="choose_document_type" style="position: relative;">-->
                      <!--                          <label>Class</label>-->
                      <!--                          <div style="">-->
                      <!--                            <p class="doc_type"> </p>-->
                      <!--                            <div class="doc_type_options" >-->
                      <!--                              <p class="doc_type_item" >fixed</p>-->
                      <!--                              <p class="doc_type_item"  >percentage</p>-->

                      <!--                            </div>-->

                      <!--                          </div>-->
                      <!--                          <img src="../../assets/Monotone.svg" style="cursor: pointer" />-->
                      <!--                        </div>-->


                    </div>
                  </div>

                </div>

                <div class="form-area-checkbox">
                  <div class="form-area-checkbox-item">
                    <p>With Mark Up</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <rect x="34" y="21.7812" width="24" height="13.5652" rx="6.78261" transform="rotate(180 34 21.7812)" fill="#E4E8F1"/>
                      <g filter="url(#filter0_d_387_3219)">
                        <ellipse cx="16.5217" cy="14.9989" rx="6" ry="6.26087" transform="rotate(180 16.5217 14.9989)" fill="white"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_387_3219" x="0.521729" y="0.738281" width="32" height="32.5215" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="2"/>
                          <feGaussianBlur stdDeviation="5"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_387_3219"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_387_3219" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div class="form-area-checkbox-item">
                    <p>Non-Stops Only</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <rect x="34" y="21.7812" width="24" height="13.5652" rx="6.78261" transform="rotate(180 34 21.7812)" fill="#E4E8F1"/>
                      <g filter="url(#filter0_d_387_3219)">
                        <ellipse cx="16.5217" cy="14.9989" rx="6" ry="6.26087" transform="rotate(180 16.5217 14.9989)" fill="white"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_387_3219" x="0.521729" y="0.738281" width="32" height="32.5215" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="2"/>
                          <feGaussianBlur stdDeviation="5"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_387_3219"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_387_3219" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div class="form-area-footer">
                  <on-boarding-button style="cursor: not-allowed" btn-width="100%" disabled="true" border="none" @click="searchFlight" text-node="Search for Flights"></on-boarding-button>
                </div>

              </div>
            </div>
          </div>


        </div>
  </booking-index>

</template>

<script>
import BookingIndex from "../../views/bookings/Index.vue"
import Layout from "../../views/Layout.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
import OnBoardingInput from "../../components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import {custom_date_picker} from "../../components/Inputs/custom-date-picker/custom-date-picker";
import DataPicker from "../../components/Inputs/custom-date-picker/DataPicker.vue";

export default {
  name: "SearchForFlight",
  components:{BookingIndex,OnBoardingButton,OnBoardingInput,DataPicker,Layout},
  data(){
    return{
      activeDestType:'round_trip',
      destination_type:'round_trip',
      date: null,
      date2: null,
      multiCity:[]
    }
  },
  methods:{
    searchFlight(){
      storeUtils.fireAway().booking?.addToProgressNav('Search for Flight')
      storeUtils.fireAway().booking?.commitBookingStage('Flight Result')
      router.push({path:`/bookings/select_available_flights/${this.getUser?.access_token?.slice(0,20)}`})
    }
  },
  computed:{
    getCurrentRoute(){
      return router.currentRoute.value.name
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

    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },


  },

  mounted() {
    storeUtils.fireAway().booking?.resetProgressNav()
    storeUtils.fireAway().booking?.commitBookingStage('Search for Flight')
    storeUtils.fireAway().flight?.handleGetAirport()
    custom_date_picker()

  }

}

</script>

<style scoped>

.add-new-flight{
  display: flex;
  width: 12rem;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  color:  var(--app-default-primary);
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  border-radius: 0.25rem;
  background:  var(--app-defautl-primary-light);
  margin-bottom: 2rem;
}
.flight-index{
  display: flex;
  width: 7.9375rem;
  padding: 0.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background:  var(--app-defautl-primary-light);
  color:  var(--app-default-primary);
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
  width: 36rem;
  flex-direction: column;
  align-items: flex-start;
  /*gap: 1.25rem;*/
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  left: 0;
  /*bottom: -60px;*/
  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
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
  border-bottom:2px solid var(--app-default-primary);
  color:var(--app-default-primary) !important;
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
  margin: 0.5rem;
  padding: 1.5rem;
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
  margin: 2.88rem 4.75rem;
}

.booking-nav{
  display: flex;
  border-bottom: 1px solid  #E5E9F2;
  gap: 5rem;
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

.travel_type_booking{
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid  #D8B0D8;
  background: #FFF;
  z-index: 99;
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
  position: relative;

}

@media (max-width: 1024px) {
  .travel_type_booking{
    width: 100% !important;
  }
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