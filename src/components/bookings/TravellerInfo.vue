<template>
  <booking-index v-slot:booking_children>
    <div class="flight-result">
      <div><p>Selected Flight</p></div>
      <div class="booking-info">
        <div class="search-info-area">
          <p class="search-info">Round Trip</p>
          <p class="search-info">4 Passengers</p>
          <p class="search-info">Business Class</p>
          <p class="search-info">12th, April 2022 - 15th, May 2022</p>
        </div>
        <a href=""> <on-boarding-button @click="doSearch('Search for Flight')" btn-width="7.26981rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="Edit Search"></on-boarding-button></a>
      </div>
      <div class="dest-abv">
        <p class="dest-abv-it">Lagos (LOS)</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49964 11.9991C1.49964 12.198 1.57865 12.3887 1.71931 12.5294C1.85996 12.67 2.05072 12.7491 2.24964 12.7491H19.9391L15.2186 17.4681C15.1489 17.5378 15.0936 17.6206 15.0559 17.7117C15.0181 17.8028 14.9987 17.9004 14.9987 17.9991C14.9987 18.0977 15.0181 18.1953 15.0559 18.2864C15.0936 18.3775 15.1489 18.4603 15.2186 18.5301C15.2884 18.5998 15.3712 18.6551 15.4623 18.6928C15.5534 18.7306 15.651 18.75 15.7496 18.75C15.8483 18.75 15.9459 18.7306 16.037 18.6928C16.1281 18.6551 16.2109 18.5998 16.2806 18.5301L22.2806 12.5301C22.3505 12.4604 22.4059 12.3776 22.4437 12.2865C22.4815 12.1954 22.501 12.0977 22.501 11.9991C22.501 11.9004 22.4815 11.8027 22.4437 11.7116C22.4059 11.6205 22.3505 11.5377 22.2806 11.4681L16.2806 5.46805C16.2109 5.39832 16.1281 5.34301 16.037 5.30527C15.9459 5.26753 15.8483 5.24811 15.7496 5.24811C15.651 5.24811 15.5534 5.26753 15.4623 5.30527C15.3712 5.34301 15.2884 5.39832 15.2186 5.46805C15.1489 5.53778 15.0936 5.62057 15.0559 5.71168C15.0181 5.80279 14.9987 5.90044 14.9987 5.99905C14.9987 6.09767 15.0181 6.19532 15.0559 6.28643C15.0936 6.37754 15.1489 6.46032 15.2186 6.53005L19.9391 11.2491H2.24964C2.05072 11.2491 1.85996 11.3281 1.71931 11.4687C1.57865 11.6094 1.49964 11.8001 1.49964 11.9991Z" fill="#1D1E2C"/>
        </svg>
        <p class="dest-abv-it">London (LHN)</p>
      </div>
      <div class="breaker1"></div>
      <div style="display: flex;flex-direction: column;margin-top: 2rem;margin-bottom: 1.44rem">

      <div class="travellers-info">
        <div class="adding-travellers-info">
          <div class="contact-details">
            <p class="contact_details">Contact Details</p>
            <div class="group-inputs">
              <on-boarding-input width="100%" label="Email"></on-boarding-input>
              <on-boarding-input width="100%" label="phone"></on-boarding-input>
            </div>
          </div>

          <div class="contact-details">
            <p>Passenger Details</p>
          </div>

          <div class="simple-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57617 19.4238C6.56104 21.409 9.19482 22.5 12 22.5C14.8052 22.5 17.4434 21.409 19.4238 19.4238C21.4087 17.4387 22.5 14.8055 22.5 12C22.5 9.19455 21.4087 6.55719 19.4238 4.57617C17.4434 2.59103 14.8052 1.5 12 1.5C9.19482 1.5 6.55664 2.59103 4.57617 4.57617C2.59131 6.55719 1.5 9.19455 1.5 12C1.5 14.8055 2.59131 17.4428 4.57617 19.4238ZM10.6875 6.75C10.6875 6.02399 11.2734 5.4375 12 5.4375C12.7266 5.4375 13.3125 6.02399 13.3125 6.75V13.3125C13.3125 14.0385 12.7266 14.625 12 14.625C11.2734 14.625 10.6875 14.0385 10.6875 13.3125V6.75ZM13.3125 17.25C13.3125 16.524 12.7266 15.9375 12 15.9375C11.2734 15.9375 10.6875 16.524 10.6875 17.25C10.6875 17.976 11.2734 18.5625 12 18.5625C12.7266 18.5625 13.3125 17.976 13.3125 17.25Z" fill="#1D1E2C"/>
            </svg>
            <p> Use all given names and surnames exactly as they appear in your
              passport/ID to avoid boarding complications.</p>
          </div>
          <div class="simple-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57617 19.4238C6.56104 21.409 9.19482 22.5 12 22.5C14.8052 22.5 17.4434 21.409 19.4238 19.4238C21.4087 17.4387 22.5 14.8055 22.5 12C22.5 9.19455 21.4087 6.55719 19.4238 4.57617C17.4434 2.59103 14.8052 1.5 12 1.5C9.19482 1.5 6.55664 2.59103 4.57617 4.57617C2.59131 6.55719 1.5 9.19455 1.5 12C1.5 14.8055 2.59131 17.4428 4.57617 19.4238ZM10.6875 6.75C10.6875 6.02399 11.2734 5.4375 12 5.4375C12.7266 5.4375 13.3125 6.02399 13.3125 6.75V13.3125C13.3125 14.0385 12.7266 14.625 12 14.625C11.2734 14.625 10.6875 14.0385 10.6875 13.3125V6.75ZM13.3125 17.25C13.3125 16.524 12.7266 15.9375 12 15.9375C11.2734 15.9375 10.6875 16.524 10.6875 17.25C10.6875 17.976 11.2734 18.5625 12 18.5625C12.7266 18.5625 13.3125 17.976 13.3125 17.25Z" fill="#1D1E2C"/>
            </svg>
            <p> Covid 19 protocols: You can find some of the special requirements for any destination via the link below
              or directly on your airline's website.
              Please also consult your local health authorities for updated information.</p>
          </div>

        </div>
        <div class="booking_summary">
              <div class="booking_summary_header">
                <p class="booking_summary_header-summary">Booking Summary</p>
              </div>
              <div class="booking_summary_body">
                <div class="airline_details">
                  <img src="../../assets/turkishAir.png" class="logo" />
                  <p class="airline_name">China Southern Airlines</p>
                </div>

                <div class="airline_info">
                  <div class="actual-result-item-info">
                    <div>
                      <p class="time"> 08:50 am</p>
                      <p class="dest">Lagos (LOS)</p>
                    </div>
                    <div class="more-flight-info">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 197 16" fill="none">
                        <path d="M196.354 8.35355C196.549 8.15829 196.549 7.84171 196.354 7.64645L193.172 4.46447C192.976 4.2692 192.66 4.2692 192.464 4.46447C192.269 4.65973 192.269 4.97631 192.464 5.17157L195.293 8L192.464 10.8284C192.269 11.0237 192.269 11.3403 192.464 11.5355C192.66 11.7308 192.976 11.7308 193.172 11.5355L196.354 8.35355ZM0 8.5H1.96V7.5H0V8.5ZM5.88 8.5H9.8V7.5H5.88V8.5ZM13.72 8.5H17.64V7.5H13.72V8.5ZM21.56 8.5H25.48V7.5H21.56V8.5ZM29.4 8.5H33.32V7.5H29.4V8.5ZM37.24 8.5H41.16V7.5H37.24V8.5ZM45.08 8.5H49V7.5H45.08V8.5ZM52.92 8.5H56.84V7.5H52.92V8.5ZM60.76 8.5H64.68V7.5H60.76V8.5ZM68.6 8.5H72.52V7.5H68.6V8.5ZM76.44 8.5H80.36V7.5H76.44V8.5ZM84.28 8.5H88.2V7.5H84.28V8.5ZM92.12 8.5H96.04V7.5H92.12V8.5ZM99.96 8.5H103.88V7.5H99.96V8.5ZM107.8 8.5H111.72V7.5H107.8V8.5ZM115.64 8.5H119.56V7.5H115.64V8.5ZM123.48 8.5H127.4V7.5H123.48V8.5ZM131.32 8.5H135.24V7.5H131.32V8.5ZM139.16 8.5H143.08V7.5H139.16V8.5ZM147 8.5H150.92V7.5H147V8.5ZM154.84 8.5H158.76V7.5H154.84V8.5ZM162.68 8.5H166.6V7.5H162.68V8.5ZM170.52 8.5H174.44V7.5H170.52V8.5ZM178.36 8.5H182.28V7.5H178.36V8.5ZM186.2 8.5H190.12V7.5H186.2V8.5ZM194.04 8.5H196V7.5H194.04V8.5ZM196.707 8.70711C197.098 8.31658 197.098 7.68342 196.707 7.29289L190.343 0.928932C189.953 0.538408 189.319 0.538408 188.929 0.928932C188.538 1.31946 188.538 1.95262 188.929 2.34315L194.586 8L188.929 13.6569C188.538 14.0474 188.538 14.6805 188.929 15.0711C189.319 15.4616 189.953 15.4616 190.343 15.0711L196.707 8.70711ZM0 9H1.96V7H0V9ZM5.88 9H9.8V7H5.88V9ZM13.72 9H17.64V7H13.72V9ZM21.56 9H25.48V7H21.56V9ZM29.4 9H33.32V7H29.4V9ZM37.24 9H41.16V7H37.24V9ZM45.08 9H49V7H45.08V9ZM52.92 9H56.84V7H52.92V9ZM60.76 9H64.68V7H60.76V9ZM68.6 9H72.52V7H68.6V9ZM76.44 9H80.36V7H76.44V9ZM84.28 9H88.2V7H84.28V9ZM92.12 9H96.04V7H92.12V9ZM99.96 9H103.88V7H99.96V9ZM107.8 9H111.72V7H107.8V9ZM115.64 9H119.56V7H115.64V9ZM123.48 9H127.4V7H123.48V9ZM131.32 9H135.24V7H131.32V9ZM139.16 9H143.08V7H139.16V9ZM147 9H150.92V7H147V9ZM154.84 9H158.76V7H154.84V9ZM162.68 9H166.6V7H162.68V9ZM170.52 9H174.44V7H170.52V9ZM178.36 9H182.28V7H178.36V9ZM186.2 9H190.12V7H186.2V9ZM194.04 9H196V7H194.04V9Z" fill="#9DA8B6"/>
                      </svg>
                    </div>
                    <div>
                      <p class="time"> 08:50 am</p>
                      <p class="dest">Lagos (LOS)</p>
                    </div>
                  </div>
                  <div class="extra-charge-info">
                    <p class="total">Total</p>
                    <p>₦ 613,175.15</p>
                  </div>
                  <div class="extra-charge-info">
                    <p class="total">Total</p>
                    <p>₦ 613,175.15</p>
                  </div>
                </div>
              </div>
              <div class="booking_summary_footer">
                <p class="total">Total</p>
                <p class="amount">₦ 613,175.15</p>
              </div>
            </div>
      </div>

      </div>
    </div>
  </booking-index>

</template>

<script>
import BookingIndex from "../../views/dashboard/Index.vue"
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import storeUtils from "../../utils/storeUtils";
import router from "../../router";
import OnBoardingInput from "../Inputs/OnBoardingInput.vue";
export default {
  name: "TravellerInfo",
  components:{OnBoardingInput, BookingIndex, OnBoardingButton}


}
</script>

<style scoped>
.contact_details{
  color:#1D1E2C;

  /* bold/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}
.simple-info{
  display: flex;
  width: 43rem;
  padding: 0.375rem 1rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  background: #F9FAFC;
  align-items: center;
  justify-content: center;
}

.simple-info p{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.0035rem;
}

.travellers-info{
  display: flex;
  border: solid;
  gap: 1.5rem;
  align-items: center;
}

.adding-travellers-info{
  border: solid;
  width: 43rem;
}

.booking_summary{
  width: 21.75rem;
  height: 21.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid  #E5E9F2;
  background: #FFF;
}

a{
  text-decoration: none;
}

.progress{
  width: 100%;
  background-color: #89128A;
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
  border-bottom:2px solid #89128A;
  color:#89128A !important;
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

.one-way{}

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