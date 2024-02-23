<script>
import storeUtils from "@/utils/storeUtils";
import SpinnerLoader from "@/components/loaders/SpinnerLoader.vue";
import ItineraryRequest from "@/model/ItineraryRequest";

export default {
  name: "itenaryHistoryChatComponent",
  components:{SpinnerLoader},
  data(){
    return{
      message:ItineraryRequest.support,
    }
  },
  methods:{
    close(){
      this.$emit('close', false)
    },

    async submitMessage(){
      await storeUtils.fireAway().itineneryStore.replyItineraryRequestAction(this.getCurrentPnrHistoryChatId,this.message)
      this.message.support_comment = null
      await storeUtils.fireAway().itineneryStore.getItineraryPnrHistory(this.getCurrentPnrHistoryChatId)
    }
  },
  computed:{
    getPnr(){
      return storeUtils.fireAway().itineneryStore.getPnrHistory
    },

    loading(){
      return storeUtils.fireAway().itineneryStore.getLoading
    },

    getLoadingPnrHistory(){
      return storeUtils.fireAway().itineneryStore.getLoadingPnrHistory
    },
    getCurrentPnrHistoryChatId(){
      return storeUtils.fireAway().itineneryStore.getCurrentPnrHistoryChatId
    },

  },
  mounted() {}
}
</script>

<template>
  <div class="chat_wrapper">

    <div class="chat_area">
      <div class="modal-header">
        <p class="pnrHistory">PNR History</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>


      <div class="chat_area_messages" v-if="getPnr.data.length">
          <p v-if="getLoadingPnrHistory">updating.....</p>
          <div v-for="(i, index) in getPnr?.data" :key="index">
            <div class="chat" v-if="i.data.message">
              <span class="span_chat">{{i.activity_type}}</span>
              <div>
                <p class="chat_message">{{ i.data }}</p>
                <span></span>
              </div>
            </div>

<!--          <div class="notice_message_wrapper">-->
<!--            <div class="notice_message">-->
<!--              <p class="user">Theophilus Gad <span class="notice"> requested for this ticket to be Issued</span></p>-->
<!--            </div>-->
<!--          </div>-->

        </div>

      </div>

      <div style="margin: 15rem 0;" v-else>
        <p class="span_chat" style="font-size: 1rem;text-align: center">Couldn't fetch any data...</p>
      </div>

      <div class="message_input">
        <input placeholder="Enter message" v-model="message.support_comment" class="main_input">
        <button class="enter_send" @click="submitMessage">
          <spinner-loader v-if="loading"></spinner-loader>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14.2199 21.6293C13.0399 21.6293 11.3699 20.7993 10.0499 16.8293L9.32988 14.6693L7.16988 13.9493C3.20988 12.6293 2.37988 10.9593 2.37988 9.77934C2.37988 8.60934 3.20988 6.92934 7.16988 5.59934L15.6599 2.76934C17.7799 2.05934 19.5499 2.26934 20.6399 3.34934C21.7299 4.42934 21.9399 6.20934 21.2299 8.32934L18.3999 16.8193C17.0699 20.7993 15.3999 21.6293 14.2199 21.6293ZM7.63988 7.02934C4.85988 7.95934 3.86988 9.05934 3.86988 9.77934C3.86988 10.4993 4.85988 11.5993 7.63988 12.5193L10.1599 13.3593C10.3799 13.4293 10.5599 13.6093 10.6299 13.8293L11.4699 16.3493C12.3899 19.1293 13.4999 20.1193 14.2199 20.1193C14.9399 20.1193 16.0399 19.1293 16.9699 16.3493L19.7999 7.85934C20.3099 6.31934 20.2199 5.05934 19.5699 4.40934C18.9199 3.75934 17.6599 3.67934 16.1299 4.18934L7.63988 7.02934Z" fill="#292D32"/>
            <path d="M10.1098 14.4C9.9198 14.4 9.7298 14.33 9.5798 14.18C9.2898 13.89 9.2898 13.41 9.5798 13.12L13.1598 9.53C13.4498 9.24 13.9298 9.24 14.2198 9.53C14.5098 9.82 14.5098 10.3 14.2198 10.59L10.6398 14.18C10.4998 14.33 10.2998 14.4 10.1098 14.4Z" fill="#292D32"/>
          </svg>
        </button>
      </div>
    </div>

  </div>

</template>

<style scoped>
.notice_message_wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat{
  display: flex;
  align-items: center;
  gap: 1rem;
}

.span_chat{
  color: #000;
  font-family: "Product Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 200% */
  text-transform: capitalize;
}

.chat_message{
  display: flex;
  width: 35rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.25rem 1.25rem 0rem 1.25rem;
  background: #EAF0F7;
  padding: 0.5rem 1.5rem;
  color:  #9DA8B6;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */

}
.message_input{
  width: 100%;
  position: absolute;
  bottom: 0;
}
.notice_message{
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  background: #F2F4F7;
  max-width: 25rem;
  min-height: 2.75rem;
}

.user{
  color: #2C6CAC;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.notice{
  color: #000;
  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
}

.modal-header{
  display: inline-flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  /*gap: 22.5625rem;*/
  width: 100%;
  border-radius: 1rem;

}

.pnrHistory{
  color: #000;
  font-family: "Product Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 100% */
}

.enter_send{
  position: absolute;
  right: 10px;
  top: 9px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: #2c3e50 1px;
}

.chat_area{
  width: 100%;
  position: relative;
  height: 100%;
}

.main_input{
  display: flex;
  padding: 1.125rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 42.9375rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--Primary-1, #D5E2EE);
  background: var(--Color, #FFF);
}

.main_input:focus{
  outline: none;
}



.chat_wrapper{
  position: fixed;
  z-index: 9999;
  right: 2rem;
  bottom: 0;
  display: flex;
  width: 50.875rem;
  height: 50rem;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  border-radius: 0.5rem;
  background: var(--Color, #FFF);
  margin: 2rem 0;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  //transform: scale(.9);

}
</style>