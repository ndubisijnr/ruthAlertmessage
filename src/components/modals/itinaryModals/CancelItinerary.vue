<script>
import Layout from "@/components/modals/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import storeUtils from "@/utils/storeUtils";
export default {
  name: "CancelItinerary",
  components: {Layout, OnBoardingButton},
  props:['data'],
  data(){
    return{
      activeSelectedIndex:null,
      model:{}
    }
  },

  methods:{
    cancel(){
      this.model.booking_id= this.data
      this.model.type = 'cancel'
      this.model.description = ""

      storeUtils.fireAway().flight.handleSubmitItineraryRequest(this.model).then(() => {
        if(this.getIsSuccess){
          this.close()
        }
      })

    },
    close(){
      this.$emit('close', false)
    },
  },

  computed:{
    getLoading(){
      return storeUtils.fireAway()?.flight?.getLoading
    },

    getIsSuccess(){
      return storeUtils.fireAway().flight?.getIsSuccess
    }
  }
}
</script>

<template>
  <layout v-slot:children>
    <div class="modal">

      <div class="main">
        <div class="modal-body">
          <div class="layout-modal">
    <div class="delete-card-option">
      <div class="card-header">
        <p class="card-header-h">Confirm Action</p>
      </div>

      <div style="margin: 2rem">
        <p class="are-you-sure">Are you sure you want to cancel Itinerary?</p>

        <p class="are-you-sure-p">You're about to cancel your Itinerary; You will be unable to use reservations
          made and all itinerary history would be lost.</p>
      </div>

      <div class="card-footer">
        <p @click="close" style="cursor: pointer">Abort</p>
        <on-boarding-button @click="cancel" :loading="getLoading" :disabled="getLoading" btn-width="11.0625rem" border="none" background="#F04444" text-node="Cancel Itinerary"></on-boarding-button>
      </div>

    </div>

  </div>
        </div>
      </div>
    </div>
  </layout>


</template>

<style scoped>
.layout-modal{
margin: 10rem 0;
}

.delete-card-option{
  width: 34rem;
  height: 23.25rem;
  border-radius: 0.5rem;
  background:  #FFF;
  position: relative;
  /* Shadows / Modals */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

.card-header{
  display: flex;
  width: 34rem;
  height: 4.5rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  align-items: center;
  flex-shrink: 0;
  background:  #F9FAFC;
  justify-content: space-between;
}

.card-header-h{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
}

.card-footer{
  display: flex;
  align-items: center;
  gap:2.9rem;
  justify-content: flex-end;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 100%;
}

</style>