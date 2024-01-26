<script>
import Layout from "@/components/modals/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import ItineraryRequest from "@/model/ItineraryRequest";
import storeUtils from "@/utils/storeUtils";
import WalletTopUp from "../WalletTopUp.vue";
import TravelAgentRequest from "../../../model/TravelAgentRequest";
import { formatAmount, convertDurationToWords, convertToWord, convertTo12HourFormat } from "../../../mixins/flightUtil";
import { toHandlers } from "vue";

export default {
  name: "Issurance",
  components: {OnBoardingButton, Layout,WalletTopUp},
  props:['data', "id"],
  data(){
    return{
      model:{},
      description:null,
      Progress:['Issuance Details', 'Pay Now'],
      progressNav:['Issuance Details'],
      progressStage:"Issuance Details",
      formatAmount,
      isWallet:false,
      convertDurationToWords,
      convertToWord,
      convertTo12HourFormat,
      fundRequest:TravelAgentRequest.makePayment
    }
  },
  computed:{
    getSelectedFlight(){
      return storeUtils.fireAway()?.flight?.getSelectedFlight
    },

    

    getPaymentLoading(){
        return storeUtils.fireAway()?.travelAgent?.getLoading
    },

    getError(){
      return storeUtils.fireAway()?.flight?.getErrors
    },
    getUser(){
      return JSON.parse(localStorage?.user)
    },
    getLoading (){
      return storeUtils.fireAway().flight.getLoading
    },
    getIsSuccess(){
      return storeUtils.fireAway().flight?.getIsSuccess
    }
  },
  methods:{
    prevProgress(value){
      console.log(value)
      this.progressNav = this.progressNav.filter(item => {
        return item !== value
      })
      this.progressStage = 'Issuance Details'
    },

    close(){
      this.$emit('close', false)
    },
    submitRequest(){
      console.log(this.data)
      this.model.type = "issuance"
      this.model.description = this.description
      this.model.booking_id = this.id

      storeUtils.fireAway().flight.handleSubmitItineraryRequest(this.model).then(() => {
        if(this.getIsSuccess){
          this.close()
        }
        this.description = null
      })
    },

    uploadAttachment(){
      const input = document.getElementById('attachment')
      input.click()
    },

    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        this.$emit('file', file)

        // Use FileReader to read the selected file as a data URL
        const reader = new FileReader();

        console.log(reader)

        // reader.onload = (e) => {
        //   // Update the selectedImage data property with the data URL
        //   this.selectedImage = e.target.result;
        //
        // };
        //
        // reader.readAsDataURL(file);
      }
    },
  }
}
</script>

<template>
  <layout v-slot:children>
   
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Issuance</p>
        <img src="../../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="main">
        <div class="progress-or">
                <div class="progress-or-item" v-for="(i, index) in Progress">
                  <p class="stage" :class="{'activeStage':progressStage === i || progressNav.includes(i)}">{{ i }}</p>
                  <div style="display: flex;align-items: center;justify-content: start">
                    <div class="circle" :class="{'activeProgress': progressStage === i || progressNav.includes(i)}">{{index + 1}}</div>
                    <div class="line" v-if="index !== Progress.length - 1">
                      <div :class="{'progress':progressNav.includes(i)}"></div>
                    </div>
                  </div>
                </div>
        </div>
        <div v-if="progressStage === 'Issuance Details'">
        
          <div class="modal-body">

            <div class="email-area">
              <div class="group-inputs">
                <div>
                  <div  style="margin-bottom: 0.75rem">
                    <label class="class_label" >Booking Reference <span class="required">*</span> </label>
                  </div>
                  <div class="form-input">
                    <div style="width:50%;border-right: solid #C0D3E6;height: 3.4rem;display: flex;align-items: center">
                      <p class="label_text">Reference</p>
                    </div>
                      <input class="form-input-input" :value="data?.reference"/>
                  </div>

                </div>
                <div>
                  <div  style="margin-bottom: 0.75rem">
                    <label class="class_label">Requested by <span class="required">*</span></label>
                  </div>
                  <div>
                      <!-- <div class="form-input">
                        <div style="border-right: solid #C0D3E6;height: 3.4rem;display: flex;align-items: center;">
                          <p class="label_text">Payment Receipt</p>
                        </div>
                          <input class="form-input-input" id="attachment" @change="handleFileChange" type="file" hidden/>
                          <p class="choose-attachment" @click="uploadAttachment">Choose Attachment</p>
                      </div> -->


                    <div>
                      <div class="form-input">
                        <div style="border-right: solid #C0D3E6;height: 3.4rem;display: flex;align-items: center">
                          <p class="label_text">Requested By </p>
                        </div>
                        <input class="form-input-input" :value="getUser.first_name+' '+getUser.last_name" readonly/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <div style="margin-bottom: 0.75rem">
                <label class="class_label">Additional Information or Comments </label>

              </div>
              <textarea class="comment_section" v-model="description" placeholder="Let us know other additional information you need before or upon ticket issuance"></textarea>
            </div>

          </div>

          <div class="modal-footer">
            <on-boarding-button border="1px solid #F04444"  @click="close"  background="#F04444" btn-width="7.4375rem" text-node="Cancel"></on-boarding-button>

            <on-boarding-button border="none"  @click="progressNav.push('Pay Now'), progressStage='Pay Now'"  btn-width="13.4375rem" text-node="Make Payment"></on-boarding-button>
          </div>
        </div>


        <div v-else class="modal_child_wrapper_body">
         
        <div class="domain-registration">
            <p class="payment_option">Payment Options</p>
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

            <div :class="{'error':getError}">
                <p class="wallet_name">{{user}}</p>
                <p class="wallet_balance">Total Wallet Balance: <span :class="{'error':getError}">₦ {{formatAmount(balance)}}</span></p>
                <p v-if="getError" class="insufficient_funds">{{getError}}</p>
            </div>

            <div class="modal_child_wrapper_footer">
                <OnBoardingButton :loading="getLoading" border="none" @click="submitRequest"  :disabled="!isWallet" textNode="Purchase"></OnBoardingButton>
                <OnBoardingButton  @click="prevProgress('Pay Now')" background="transparent" color="black" border="none" textNode="Cancel"></OnBoardingButton>

            </div>
        </div>
    </div>

      </div>




    </div>


  </layout>

</template>

<style scoped>

.progress-or{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
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

.modal_child_wrapper_footer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:3rem 1.5rem;
}

.payment_option{
  color: #1D1E2C;
  /* 16px/bold */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.activeProgress{
    background: var(--app-default-primary) !important;
}

.activeStage{
    color: var(--app-default-primary) !important;
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
.choose-attachment{
  color: #9DA8B6;
  font-family:'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
  padding-left: 5px;
  cursor: pointer;
}
.label_text{
  color: #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
  margin:0 1.25rem;
}

.class_label{
  color:  #2D3139;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 142.857% */
  margin-bottom: 0.74rem;
}

.required{
  color: #F04444;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
}

.comment_section{
  display: flex;
  width: 35.8125rem;
  height: 13.375rem;
  padding: 0.875rem 1rem 9rem 1.25rem;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid #C0D3E6;
  background: #FFF;
}

.form-input-input{
  outline: none;
  border: none;
  padding-left: 12px;
  width: 50%;
}

.form-input{
  display: flex;
  width: 100%;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid  #C0D3E6;
  background:  #FFF;
  align-items: center;
  margin-bottom: 1rem;
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
.group-inputs{
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
}
.doc_type_options{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.37rem;
  padding: 0.5rem;
  width: 100%;
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

.passenger-type{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.37rem;
}

.role-options-wrapper{
  height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.invite-h{
  color:  #1D1E2C;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  width: 15.625rem;
}

.invite-success-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.notice{
  display: inline-flex;
  padding: 1rem 1.1875rem 1rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid  #FAF0AB;
  background: #FEFCF1;
  color:  #575A65;
  margin-bottom: .5rem;

  /* caption/12px/regular */
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
}

.invite-p{
  color: #444854;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.invite-gif{
  display: flex;
  width: 11.25rem;
  height: 11.25rem;
  justify-content: center;
  align-items: center;
}
.invite-success{
  display: flex;
  width: 30rem;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  border-radius: 0.625rem;
  background: #FFF;
  margin: 100px auto;
}
.role-image{
  width: 2.35294rem;
  height: 2.35294rem;
  flex-shrink: 0;
  border-radius: 360px;
}
.modal-footer{
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
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
  gap: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #EFF2F7;
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
  width: 39.8125rem;
  height: auto;
  margin: 20px auto;
  border-radius: 1rem;
  background:  #FFF;

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
  top:-0.5rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:0.88rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-transform: capitalize;
  line-height: 1.5rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in-out .2s;
  background-color: white;
}

.label{
  position:absolute;
  top:.5rem;
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