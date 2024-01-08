<script>
import Layout from "@/components/modals/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import {lightenColor} from "@/mixins/themeUtils";
import storeUtils from "@/utils/storeUtils";
import BookingsRequest from "../../model/BookingsRequest";

export default {
  name: "FilterBookingModal",
  data(){
    return{
      lightenColor,
      searchModal:{}
    }
  },
  methods: {
    applyFilter(){
      // this.searchModal.booking_status
      // this.searchModal.payment_status
      storeUtils.fireAway()?.booking?.getAllAgentBooking(this.searchModel).then(() => {
        this.searchModel = {}

      })
    },
    close(){
      this.$emit('close', false)
    },
  },
  components:{OnBoardingButton, Layout},
  computed:{
    getTheme(){
      return storeUtils.fireAway().theme.custom_theme ? storeUtils.fireAway().theme.custom_theme : storeUtils.fireAway().theme.default_theme
    },
    getLoading(){
      return storeUtils.fireAway().booking?.getBookingLoading
    }
  }
}
</script>

<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Filter Bookings</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="main">
        <div class="modal-body">

          <div class="filter_card">
            <p class="text_1">By Status & Payments</p>

            <div style="border-radius: 0.75rem;border: 1px solid #E5E9F2;padding: 1.5rem;">
              <div style="margin-bottom:1.5rem;display: flex;gap: 1.2rem;align-items: center">
                <p>Booking Status:</p>
                <select style="padding: 0.5625rem 1.25rem;border-radius: 0.25rem;border: 1px solid #E5E9F2;">
                  <option>Select booking status</option>
                  <option value="issued">Issued</option>
                  <option value="reserved">Reserved</option>

                </select>
              </div>
            
              <div style="margin-bottom:1.5rem;display: flex;gap: 1.2rem;align-items: center">
                <p>Payment Status:</p>
                <select style="padding: 0.5625rem 1.25rem;border-radius: 0.25rem;border: 1px solid #E5E9F2;">
                  <option>Select booking status</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">unPaid</option>

                </select>
              </div>
            </div>

          </div>

          <!-- <div class="filter_card">
            <p class="text_1">By Customer</p>

            <div style="border-radius: 0.75rem;border: 1px solid #E5E9F2;padding: 1.5rem;">
              <div style="margin-bottom:1.5rem;display: flex;gap: 1.2rem;align-items: center">
                <p>Ordered by:</p>
                <div style="position: relative">
                  <svg style="position: absolute;top:.5rem;left: .5rem" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#9DA8B6"/>
                    <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="#9DA8B6"/>
                  </svg>
                  <input class="filter_booking_customer" placeholder="Search customer e.g name, phone">
                </div>
              </div>
            </div>

          </div> -->
        </div>

        <div class="modal-footer">
          <!-- <on-boarding-button btn-width="8.75rem" :color="getTheme.color" text-node="Reset Filter" :background="lightenColor(getTheme.color)" border="none"></on-boarding-button> -->
          <on-boarding-button :loading="getLoading" :disabled="getLoading"  border="none"  @click="applyFilter" btn-width="8.75rem" text-node="Apply Filter"></on-boarding-button>
        </div>
      </div>

    </div>

  </layout>

</template>

<style scoped>
.text_1{
  color:#1D1E2C;
  /* 16px/bold */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.filter_booking_customer{
  display: flex;
  width: 15.125rem;
  height: 2.625rem;
  padding-left: 32px;
  align-items: center;
  gap: 1.0625rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 0.6px solid #E5E9F2;
  background: #FFF;
  outline: none;
}

.filter_booking_customer:focus{
  outline: none;
}

.filter_card{
  width: 26.625rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background: #FFF;
  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  margin-bottom: 1.5rem;
}
.permission-type-p{
  color:  #1D242E;
  text-transform: capitalize;
  /* 16px/bold */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
.permission-type-wrapper{
  display: flex;
  width: 36.8125rem;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E5E9F2;
}
.permission-type{
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.permission-length{
  display: flex;
  width: 2.625rem;
  padding: 0.125rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1rem;
  border: 0.6px solid  #E5E9F2;
  background: #EFF2F7;
}

.choose-perm-options-item{
  display: flex;
  width: 17rem;
  height: 3.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.875rem;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #E5E9F2;
  background: #FFF;
  cursor: pointer;
}
.choose-perm-options{
  display: flex;
  margin-bottom: 1.5rem;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .choose-perm-options{
    flex-direction: column;
  }

  .choose-perm-options-item{
    width: 100%;
  }

  .permission-type-wrapper{
    width: 100%;
  }
}

.role-image{
  width: 2.35294rem;
  height: 2.35294rem;
  flex-shrink: 0;
  border-radius: 360px;
}

.modal-footer{
  padding-bottom: 2.54rem;
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.p-1{
  color: #212B36;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.p-2{
  color: #637381;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.role-options{
  display: flex;
  width: 35.8125rem;
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 1.25rem;
  border-radius: 0.375rem;
  margin-bottom: 1.25rem;
  margin-top: 1rem;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .role-options{
    width: 100%;
  }
}

.choose-role-p{
  color:  #1D1E2C;

  /* Medium/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.add-emails{
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: start;
  margin-bottom: 1.25rem;
}

.main{
  margin: 2rem;
}

.emails{
  display: flex;
  width: 13.25rem;
  padding: 0.625rem 0.625rem 0.625rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5rem;
  background: var(--bg, #EFF2F7);
}

@media (max-width: 1024px) {
  .emails{
    width: 100%;
  }
}

.add-team-member{
  color:  #1D1E2C;

  /* 18px/bold */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 155.556% */
}

.modal{
  width: 30.625rem;
  height: auto;
  margin: 50px auto;
  border-radius: 1rem;
  background:  #FFF;
  display: inline-block;
  /* m3 */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

@media (max-width: 1024px) {
  .modal{
    height: auto;
  }
}

.modal-header{
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  /*gap: 22.5625rem;*/
  background:  #F9FAFC;
  width: 100%;
  border-radius: 1rem;

}

.on_boarding_input{
  position:relative;
  width: 100%;
}

.formInput{
  height: 4rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  padding-top: 1.13rem;
  padding-left:1.25rem;
  margin-bottom: 1rem;
  width:100%;
}

/* .groupedformInput{} */

.formInput.focused{
  padding-top: 1.13rem;
  padding-left:1.25rem;
  border: 1px solid var(--app-default-primary);
  border-radius: 0.375rem;
  outline: var(--app-default-primary);
}

.error{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  /* Red */
  color: #FF1F1F;
  margin-top: -10px;
  margin-bottom: 16px;

}

.label.focused{
  position:absolute;
  top:0.3rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:0.88rem;
  text-transform: capitalize;
  line-height: 1.5rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in-out .2s;
}

.label{
  position:absolute;
  top:0.5rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:1rem;
  text-transform: capitalize;
  line-height: 1.7rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in .2s;
}

@media (max-width:1024px) {
  .formInput{
    width:100% !important;
  }
}

@media (max-width: 1024px) {
  .modal{
    margin: 20px auto;
    width: 90%;
  }
}
</style>