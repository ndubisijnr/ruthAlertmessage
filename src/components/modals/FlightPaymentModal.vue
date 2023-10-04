<template>
    <layout v-slot:children>

        <div class="modal_child_wrapper">
            <div class="modal_child_wrapper_header">
                <p>Transaction Details</p>
                <svg  @click="close" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.9406 12.0002L17.8006 7.14017C17.9099 7.01264 17.9669 6.84859 17.9604 6.68081C17.954 6.51302 17.8844 6.35386 17.7657 6.23513C17.6469 6.1164 17.4878 6.04685 17.32 6.04037C17.1522 6.03389 16.9882 6.09096 16.8606 6.20017L12.0006 11.0602L7.14063 6.19351C7.0131 6.08429 6.84905 6.02722 6.68126 6.0337C6.51348 6.04018 6.35432 6.10974 6.23559 6.22847C6.11686 6.3472 6.04731 6.50635 6.04083 6.67414C6.03434 6.84192 6.09142 7.00597 6.20063 7.13351L11.0606 12.0002L6.19397 16.8602C6.12418 16.9199 6.0675 16.9935 6.02748 17.0762C5.98747 17.1589 5.96498 17.249 5.96143 17.3408C5.95789 17.4326 5.97336 17.5242 6.00687 17.6097C6.04039 17.6953 6.09123 17.773 6.1562 17.8379C6.22117 17.9029 6.29887 17.9537 6.38442 17.9873C6.46997 18.0208 6.56152 18.0363 6.65334 18.0327C6.74515 18.0292 6.83524 18.0067 6.91795 17.9667C7.00066 17.9266 7.0742 17.87 7.13397 17.8002L12.0006 12.9402L16.8606 17.8002C16.9882 17.9094 17.1522 17.9665 17.32 17.96C17.4878 17.9535 17.6469 17.8839 17.7657 17.7652C17.8844 17.6465 17.954 17.4873 17.9604 17.3195C17.9669 17.1518 17.9099 16.9877 17.8006 16.8602L12.9406 12.0002Z" fill="#444854"/>
                </svg>
            </div>
            <div class="modal_child_wrapper_body">
        
                <div class="domain-registration">
                    <div class="role-options" :class="{'role-options-active':isWallet}"  @click="isWallet=!isWallet">
                        <svg  v-if="isWallet" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="#2C6CAC"/>
                            <rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
                            <rect x="5" y="5" width="10" height="10" rx="5" fill="#2C6CAC"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#C0CCDA"/>
                        </svg>
                        <div style="width: 100%;" >
                            <p class="p-2" >Wallet</p>
                        </div>
                    </div>

                    <div v-if="isWallet" class="wallet_details" :class="{'error':getError}">
                        <p class="wallet_name">{{user}}</p>
                        <p class="wallet_balance">Total Wallet Balance: <span :class="{'error':getError}">₦ {{formatAmount(balance)}}</span></p>
                        <p v-if="getError" class="insufficient_funds">{{getError}}</p>
                    </div>
                </div>

                <div class="booking_summary">
              <div class="booking_summary_header">
                <p class="booking_summary_header-summary">Booking Summary</p>
              </div>
              <div class="booking_summary_body">
                <div class="airline_details">
                  <img :src="getSelectedFlight?.outbound[0].airline_details?.logo" class="logo" />
                  <p class="airline_name">{{getSelectedFlight?.outbound[0].airline_details?.name}}</p>
                </div>

                <div class="airline_info">
                  <div class="actual-result-item-info">
                    <div>
                      <p class="dest"> {{convertToWord(getSelectedFlight?.outbound[0].departure_time.split('T')[0])}}</p>
                      <p class="time"> {{convertTo12HourFormat(getSelectedFlight?.outbound[0].departure_time)}}</p>
                      <p class="dest">LOS</p>
                    </div>
                    <div class="more-flight-info">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 197 16" fill="none">
                        <path d="M196.354 8.35355C196.549 8.15829 196.549 7.84171 196.354 7.64645L193.172 4.46447C192.976 4.2692 192.66 4.2692 192.464 4.46447C192.269 4.65973 192.269 4.97631 192.464 5.17157L195.293 8L192.464 10.8284C192.269 11.0237 192.269 11.3403 192.464 11.5355C192.66 11.7308 192.976 11.7308 193.172 11.5355L196.354 8.35355ZM0 8.5H1.96V7.5H0V8.5ZM5.88 8.5H9.8V7.5H5.88V8.5ZM13.72 8.5H17.64V7.5H13.72V8.5ZM21.56 8.5H25.48V7.5H21.56V8.5ZM29.4 8.5H33.32V7.5H29.4V8.5ZM37.24 8.5H41.16V7.5H37.24V8.5ZM45.08 8.5H49V7.5H45.08V8.5ZM52.92 8.5H56.84V7.5H52.92V8.5ZM60.76 8.5H64.68V7.5H60.76V8.5ZM68.6 8.5H72.52V7.5H68.6V8.5ZM76.44 8.5H80.36V7.5H76.44V8.5ZM84.28 8.5H88.2V7.5H84.28V8.5ZM92.12 8.5H96.04V7.5H92.12V8.5ZM99.96 8.5H103.88V7.5H99.96V8.5ZM107.8 8.5H111.72V7.5H107.8V8.5ZM115.64 8.5H119.56V7.5H115.64V8.5ZM123.48 8.5H127.4V7.5H123.48V8.5ZM131.32 8.5H135.24V7.5H131.32V8.5ZM139.16 8.5H143.08V7.5H139.16V8.5ZM147 8.5H150.92V7.5H147V8.5ZM154.84 8.5H158.76V7.5H154.84V8.5ZM162.68 8.5H166.6V7.5H162.68V8.5ZM170.52 8.5H174.44V7.5H170.52V8.5ZM178.36 8.5H182.28V7.5H178.36V8.5ZM186.2 8.5H190.12V7.5H186.2V8.5ZM194.04 8.5H196V7.5H194.04V8.5ZM196.707 8.70711C197.098 8.31658 197.098 7.68342 196.707 7.29289L190.343 0.928932C189.953 0.538408 189.319 0.538408 188.929 0.928932C188.538 1.31946 188.538 1.95262 188.929 2.34315L194.586 8L188.929 13.6569C188.538 14.0474 188.538 14.6805 188.929 15.0711C189.319 15.4616 189.953 15.4616 190.343 15.0711L196.707 8.70711ZM0 9H1.96V7H0V9ZM5.88 9H9.8V7H5.88V9ZM13.72 9H17.64V7H13.72V9ZM21.56 9H25.48V7H21.56V9ZM29.4 9H33.32V7H29.4V9ZM37.24 9H41.16V7H37.24V9ZM45.08 9H49V7H45.08V9ZM52.92 9H56.84V7H52.92V9ZM60.76 9H64.68V7H60.76V9ZM68.6 9H72.52V7H68.6V9ZM76.44 9H80.36V7H76.44V9ZM84.28 9H88.2V7H84.28V9ZM92.12 9H96.04V7H92.12V9ZM99.96 9H103.88V7H99.96V9ZM107.8 9H111.72V7H107.8V9ZM115.64 9H119.56V7H115.64V9ZM123.48 9H127.4V7H123.48V9ZM131.32 9H135.24V7H131.32V9ZM139.16 9H143.08V7H139.16V9ZM147 9H150.92V7H147V9ZM154.84 9H158.76V7H154.84V9ZM162.68 9H166.6V7H162.68V9ZM170.52 9H174.44V7H170.52V9ZM178.36 9H182.28V7H178.36V9ZM186.2 9H190.12V7H186.2V9ZM194.04 9H196V7H194.04V9Z" fill="#9DA8B6"/>
                      </svg>
                    </div>
                    <div>
                      <p class="dest">{{convertToWord(getSelectedFlight?.outbound[0].arrival_time.split('T')[0])}}</p>
                      <p class="time"> {{convertTo12HourFormat(getSelectedFlight?.outbound[0].arrival_time)}}</p>
                      <p class="dest">LOS</p>
                    </div>
                  </div>
                  <div class="actual-result-item-info-2">
                    <div class="extra-charge-info" v-for="(i, index) in getSelectedFlight?.price_summary" :key="index">
                      <p class="dest">{{i.passenger_type}} <span style="text-transform: lowercase;">x</span> {{i.quantity}}</p>
                      <p>₦ {{formatAmount(i.total_price)}}</p>
                    </div>
                  </div>

                </div>
              </div>
              <div class="booking_summary_footer">
                <p class="total">Total</p>
                <p class="amount">₦ {{ formatAmount(getSelectedFlight?.amount) }}</p>
              </div>
            </div>
            </div>

            <div class="modal_child_wrapper_footer">
                <OnBoardingButton :loading="getLoading" border="none" @click="doPay(reference)" :disabled="!isWallet || getLoading" textNode="Purchase"></OnBoardingButton>
            </div>
        </div>

    </layout>
</template>

<script>
import Layout from './Layout.vue';
import OnBoardingButton from '../Buttons/OnBoardingButton.vue';
import { formatAmount, convertDurationToWords, convertToWord, convertTo12HourFormat } from '../../mixins/flightUtil';
import storeUtils from '../../utils/storeUtils';

export default{
    name:"FlightPaymentModal",
    components:{Layout,OnBoardingButton},
    props:['balance', 'user', 'reference'],
    data(){
        return{
            isWallet:false,
            formatAmount,
            convertDurationToWords,
            convertToWord,
            convertTo12HourFormat
        }
    },
    methods:{
        close(){
    
            this.$emit('close', false)
    },

    doPay(value){
      storeUtils.fireAway().flight?.handleFlightPayment(value)
    }
    },

    computed:{
        getSelectedFlight(){
      return storeUtils.fireAway()?.flight?.getSelectedFlight
    },

    getError(){
      return storeUtils.fireAway()?.flight?.getErrors
    },
    getLoading(){
      return storeUtils.fireAway()?.flight?.getLoading
    }
}
}

</script>


<style scoped>
.insufficient_funds{
    color: var(--error-red, #F04444);
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 180%;
}

.error{
    border-radius: 0.25rem;
    border: 0.5px solid var(--error-red, #F04444);
}

.wallet_name{
    color: var(--3, #6A8297);
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 1.575rem */
}

.wallet_balance{
    color: var(--3, #6A8297);
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 1.575rem */
}
.wallet_details{
    margin-top: 1rem;
    display: flex;
    width: 100%;
    padding: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

}
.modal_child_wrapper_footer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:3rem 1.5rem;
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
.dest{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
}
.logo{
  width: 2rem;
  height: 2rem;
}

.actual-result-item-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  border-bottom: solid #DFE6ED;
  padding-bottom: 1rem;
}
.actual-result-item-info-2{
  display: block;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  border-bottom: solid #DFE6ED;
  padding-bottom: 1rem;
}
.booking_summary{
  width: 100%;
  height: 21.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid  #E5E9F2;
  background: #FFF;
  position: relative;
  margin-top: 2.25rem;
}

.booking_summary_footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.extra-charge-info{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.booking_summary_body{
  margin: 1rem;
}
.airline_details{
  display: inline-flex;
  gap: 0.37rem;
  align-items: center;
}
.booking_summary_header{
  border-bottom: solid #DFE6ED;
  padding: 0.5rem;
  margin: 0 1rem;
}
.modal_child_wrapper_body{
    margin:1.5rem;
}
.p-2{
    color: var(--black-text-03, #444854);
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}
.modal_child_wrapper{
    width: 30rem;
    margin: 20px auto;
    background-color: #fff;
}

.modal_child_wrapper_header{
    width: 100%;
    display: inline-flex;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    gap: 13.625rem;
    background: var(--inactivestates-captions, #F9FAFC);
}

.role-options{
  display: flex;
  width: 100%;
  /*height: 3.5rem;*/
  gap: 1.25rem;
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  gap: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #EFF2F7;
  cursor: pointer;
  margin-top: 1.25rem;

}

.role-options-active{
    border: 1px solid var(--primary-main, #2C6CAC);
background: var(--primary-05, #EAF0F7);
}
</style>