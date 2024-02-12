<script>
import storeUtils from "@/utils/storeUtils";

export default {
  name: "index",
  data(){
    return{
      activeNav:'all'
    }
  },

  methods:{
    close(){
      this.$emit('close', false)
    }
  },

  computed:{
    getTenantLoaded(){
      return storeUtils.fireAway().global.getTenantLoaded
    },

    getNotifications(){
      return storeUtils.fireAway().global.getNotification
    }
  },

  watch:{
    'getTenantLoaded'(a,b){
      if(a){
        storeUtils.fireAway().global.getNotifications()
      }
    }
  },

  mounted() {
    if(this.getTenantLoaded){
      storeUtils.fireAway().global.getNotifications()
    }
  }

}
</script>

<template>
  <div class="notification-wrapper">
    <div class="notification-header">
      <p class="notification-title">Notifications</p>
      <img src="../../assets/cancle.svg"  @click="close" alt="close_icon" style="cursor: pointer"/>
    </div>

    <div class="notification-nav">
      <p class="notification-nav-item" @click="activeNav='all'" :class="{'active':activeNav === 'all'}">All <span class="count">{{getNotifications?.length}}</span></p>
<!--      <p class="notification-nav-item" @click="activeNav='bookings'" :class="{'active':activeNav === 'bookings'}">Bookings <span class="count">1</span></p>-->
<!--      <p class="notification-nav-item" @click="activeNav='transaction'" :class="{'active':activeNav === 'transaction'}">Transaction <span class="count"></span></p>-->
    </div>


    <div class="notification_area">
      <div v-if="activeNav === 'all'" v-for="(i,index) in getNotifications" :key="index">
          <div style="display: flex;align-items: center;justify-content: space-between;width: 100%;margin-bottom: 2.5rem">
            <p class="notification-message">{{i.data.message}} <br /> <span class="created_at">{{i.created_at}}. ago</span></p>
            <svg v-if="!i.read_at" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="4" fill="#2C6CAC"/>
            </svg>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.notification-wrapper{
  display: inline-flex;
  padding: 1rem 0;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.25rem;
  background: #fff;
  position: absolute;
  width: 30rem;
  height: 30rem;
  right: 100px;
  top: 100px;
  z-index: 99999;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);

}

.notification-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding:0 0.5rem;
  margin-bottom: 1rem;
}

.active{
  border-bottom:solid #2C6CAC .3rem;
  //height: 0.25rem;
  flex-shrink: 0;
  transform: translateY(10%);
  padding-bottom: 0.2rem;
}

.notification-title{
  color:  #1D1E2C;
  text-align: center;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.notification-nav{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  flex-shrink: 0;
  border-bottom:solid .3rem rgba(132, 146, 166, 0.20);
}

.notification-nav-item{
  color: #8492A6;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.created_at{
  color:  #575A65;
  /* caption/12px/regular */
  font-family: "Product Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
}

.count{
  color: #8492A6;
  font-family: "Product Sans";
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 200% */
  width: 1rem;
  height: 1rem;
  text-align: center;
  //padding: 0.3rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: #D5E2EE;
}

.notification_area{
  margin: 1rem 0;
  padding: 0 1rem;
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
}

.notification-message{
  color:  #1D1E2C;

  /* 16px/bold */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
</style>