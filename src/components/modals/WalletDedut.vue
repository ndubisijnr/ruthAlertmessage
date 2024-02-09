<template>
    <layout v-slot:children>

        <div class="modal_child_wrapper">
            <div class="modal_child_wrapper_header">
                <h2>Charge Wallet</h2>
                <svg  @click="close" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.9406 12.0002L17.8006 7.14017C17.9099 7.01264 17.9669 6.84859 17.9604 6.68081C17.954 6.51302 17.8844 6.35386 17.7657 6.23513C17.6469 6.1164 17.4878 6.04685 17.32 6.04037C17.1522 6.03389 16.9882 6.09096 16.8606 6.20017L12.0006 11.0602L7.14063 6.19351C7.0131 6.08429 6.84905 6.02722 6.68126 6.0337C6.51348 6.04018 6.35432 6.10974 6.23559 6.22847C6.11686 6.3472 6.04731 6.50635 6.04083 6.67414C6.03434 6.84192 6.09142 7.00597 6.20063 7.13351L11.0606 12.0002L6.19397 16.8602C6.12418 16.9199 6.0675 16.9935 6.02748 17.0762C5.98747 17.1589 5.96498 17.249 5.96143 17.3408C5.95789 17.4326 5.97336 17.5242 6.00687 17.6097C6.04039 17.6953 6.09123 17.773 6.1562 17.8379C6.22117 17.9029 6.29887 17.9537 6.38442 17.9873C6.46997 18.0208 6.56152 18.0363 6.65334 18.0327C6.74515 18.0292 6.83524 18.0067 6.91795 17.9667C7.00066 17.9266 7.0742 17.87 7.13397 17.8002L12.0006 12.9402L16.8606 17.8002C16.9882 17.9094 17.1522 17.9665 17.32 17.96C17.4878 17.9535 17.6469 17.8839 17.7657 17.7652C17.8844 17.6465 17.954 17.4873 17.9604 17.3195C17.9669 17.1518 17.9099 16.9877 17.8006 16.8602L12.9406 12.0002Z" fill="#444854"/>
                </svg>
            </div>
            <div class="modal_child_wrapper_body">
              <div style="margin-top: 1.5rem;">
                <label class="label">Ticket Amount</label>
                <div style="display: flex;align-items: center;gap: 1rem">


                  <input class="input_amount" id="input_amount"  v-model="amountValue"  :disabled="isDisabled"/>
                  <span class="edit" @click="focusInput">Edit</span>
                </div>

              </div>
        
                <div class="domain-registration">
                    <div :class="{'error':getError}">
                        <p class="wallet_name"> {{user}}</p>
                        <p class="wallet_balance">Total Wallet Balance: <span :class="{'error':getError}">₦ {{formatAmount(balance)}}</span></p>
                        <p v-if="getError" class="insufficient_funds">{{getError}}</p>
                    </div>


                </div>
            </div>

            <div class="modal_child_wrapper_footer">
                <OnBoardingButton :loading="getLoading" border="none" @click="doPay"  textNode="Charge Wallet"></OnBoardingButton>
            </div>
        </div>

    </layout>
</template>

<script>
import Layout from './Layout.vue';
import OnBoardingButton from '../Buttons/OnBoardingButton.vue';
import { formatAmount, convertDurationToWords, convertToWord, convertTo12HourFormat } from '../../mixins/flightUtil';
import storeUtils from '../../utils/storeUtils';
import OnBoardingInput from '../Inputs/OnBoardingInput.vue';
import flightRequest from "@/model/FlightRequest";

export default{
    name:"WalletDedut",
    components:{Layout,OnBoardingButton,OnBoardingInput},
    props:['balance', 'user', 'reference', 'amount'],
    data(){
        return{
            isWallet:false,
            formatAmount,
            convertDurationToWords,
            convertToWord,
            convertTo12HourFormat,
            isDisabled:false,
            model:flightRequest.chargeWallet,
            amountValue:formatAmount(this.amount.booking.amount)
        }
    },
    methods:{
      focusInput(){
        const inputToFocus = document.getElementById('input_amount')
        inputToFocus.focus()
      },
        close(){
            this.$emit('close', false)
    },

    doPay(){
      const amount = document.getElementById('input_amount')
      this.model.booking_reference = this.reference
      this.model.amount = amount.value
      storeUtils.fireAway().flight?.chargeWallet(this.model)
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
.edit{
  color: #F1A002;
  cursor: pointer;
  /* 16px/bold */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
.input_amount{
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 1.125rem 0 1.125rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid #EFF2F7;
  background:  #F9FAFC;
}


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

.wrapper{
  border: solid;
  position: relative;
}

.loader{
  position: absolute;
  z-index: 99999;
  right: 20px;
  top: 20px;
}

.add-info{
  width: 4.875rem;
  height: 4rem;
  flex-shrink: 0;
  background: #EFF2F7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  /*position: absolute;*/
}

.error_message{
  border:solid #FF1F1F;
}

.hide_show{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  right: 1.47rem;
  top:1.7rem;
  cursor: pointer;
  z-index: 9999;
}

.on_boarding_input{
  position:relative;
  width: 100%;
}

.formInput{
  height: 4rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  padding-top: 1.13rem;
  padding-left:1.25rem;
  margin-bottom: 1rem;
  width:26rem;
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


.label{
  color: #1D1E2C;
  /* 16px/bold */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
  margin-bottom: 1rem;
}

@media (max-width:1024px) {
  .formInput{
    width:100% !important;
  }
}


</style>