<script>
import Layout from "@/components/modals/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import ItineraryRequest from "@/model/ItineraryRequest";
import storeUtils from "@/utils/storeUtils";

export default {
  name: "Refund",
  components: {OnBoardingButton, Layout},
  props:['data'],
  data(){
    return{
      model:ItineraryRequest.submitRequest,
      showClass:false,
      selectedValue:null
    }
  },
  computed:{
    getUser(){
      return JSON.parse(localStorage?.user)
    },
    getLoading (){
      return storeUtils.fireAway().flight.getLoading
    }
  },
  methods:{
    close(){
      this.$emit('close', false)
    },
    submitRequest(){
      this.model.type = "Refund"
      this.model.attachment = this.data?.tickets[0]?.ticket_number[0]
      this.model.booking_id = this.data?.id

      storeUtils.fireAway().flight.handleSubmitItineraryRequest(this.model)
    }
  }
}
</script>

<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-team-member">Refund</p>
        <img src="../../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="main">
        <div class="modal-body">

          <div class="email-area">
            <div class="group-inputs">
              <div>
                <div  style="margin-bottom: 0.75rem">
                  <label class="class_label" >Booking Reference <span class="required">*</span> </label>
                </div>
                <div class="form-input">
                  <div style="width:50%;border-right: solid #C0D3E6;height: 3.4rem;display: flex;align-items: center">
                    <p class="label_text">PNR</p>
                  </div>
                    <input class="form-input-input" :value="data?.pnr"/>
                </div>
                  <div>
                    <p class="class_label">Request <span class="required">*</span></p>
                  <div class="choose_document_type" style="position: relative;">
                    <p class="selected-item">{{ selectedValue ? selectedValue : 'Select Options'}}</p>
                    <div class="dropDown" v-show="showClass">
                      <div class="doc_type_options">
                        <div class="passenger-type" style="width: 100%">
                          <p class="passenger-type-text-1" @click="model.request = 'get-fund-quote', showClass = !showClass, selectedValue='Get Refund Quote'">Get Refund Quote</p>
                        </div>
                        <div class="passenger-type" style="width: 100%">
                          <p class="passenger-type-text-1" @click="model.request = 'request-for-refund', showClass = !showClass,selectedValue='Request for Refund'">Request for Refund</p>
                        </div>
                      </div>
                    </div>
                    <img @click="showClass = !showClass" src="../../../assets/Monotone.svg" style="cursor: pointer" />
                  </div>
                  </div>
              </div>
              <div>
                <div  style="margin-bottom: 0.75rem">
                  <label class="class_label">Ticket Number <span class="required">*</span> </label>
                </div>
                <div>
                  <div class="form-input">
                    <div style="border-right: solid #C0D3E6;height: 3.4rem;display: flex;align-items: center;">
                      <p class="label_text">Ticket Number</p>
                    </div>
                      <input class="form-input-input" :value="data?.tickets[0]?.ticket_number[0]"/>
                  </div>


                  <div>
                    <div class="form-input">
                      <div style="border-right: solid #C0D3E6;height: 3.4rem;display: flex;align-items: center">
                        <p class="label_text">Requested By <span class="required">*</span></p>
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
              <label class="class_label">Refund Request <span class="required">*</span></label>

            </div>
            <textarea class="comment_section" v-model="model.description" placeholder="Input your request here"></textarea>
          </div>

        </div>

        <div class="modal-footer">
          <on-boarding-button border="1px solid #F04444"  @click="close"  background="#F04444" btn-width="7.4375rem" text-node="Cancel"></on-boarding-button>

          <on-boarding-button border="none" :loading="getLoading" @click="submitRequest"  btn-width="7.4375rem" text-node="Submit"></on-boarding-button>
        </div>

      </div>




    </div>


  </layout>

</template>

<style scoped>
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