<template>
  <index v-slot:children>
    <div>
      <div>
        <p class="business_information">Personal Information</p>
        <div class="business_information_card_head">

          <div class="inner_head">
            <div class="profile" :style="getTravelAgent?.logo ? {backgroundImage:`url(${getTravelAgent?.logo})`} : null">
              <div v-if="!getTravelAgent?.logo">
                <p style="text-transform: capitalize;">{{ getFirstLettersOfFirstAndLastName(getTravelAgent?.first_name + ' ' + getTravelAgent?.last_name) }}</p>
              </div>
            </div>
            <div>
              <p class="upload_business_logo">{{getTravelAgent?.first_name + ' ' + getTravelAgent?.last_name}}</p>
              <div style="margin-bottom: 1rem; display: flex;gap:1.06rem;">
                <p v-if="getTravelAgent?.phone" class="size_limit">{{getTravelAgent?.phone}}</p>
                <p v-else class="size_limit">-------</p>
                 <p class="account_type" v-if="getTravelAgent?.is_corporate === 'true'">Corporate Manager</p>
                 <p class="account_type" v-else>Personal Manager</p>
              </div>
              <p class="size_limit">{{ getTravelAgent?.email }}</p>

            </div>
          </div>
        </div>

      </div>
    </div>

    <div>
      <div>
        <p class="business_information">Business Information</p>
        <div class="business_information_card_head">
          <div class="inner_head">
            <div class="profile" :style="getTravelAgent?.logo ? {backgroundImage:`url(${getTravelAgent?.logo})`} : null">
              <div v-if="!getTravelAgent?.logo">
                {{ getFirstLettersOfFirstAndLastName(getTravelAgent?.first_name + ' ' + getTravelAgent?.last_name) }}
              </div>
            </div>
            <div>
              <p class="upload_business_logo">{{ getTravelAgent?.business_name }}</p>
              <div class="info">
                <div style="width: 12rem;">
                  <p class="key">Business Mobile</p>
                  <p class="size_limit" v-if="getTravelAgent?.business_phone">{{getTravelAgent?.business_phone}}</p>
                  <p v-else class="size_limit">-------</p>

                </div>
                <div style="width: 12rem;">
                  <p class="key">Business Email</p>
                  <p class="size_limit" v-if="getTravelAgent?.business_email">{{ getTravelAgent?.business_email }}</p>
                  <p v-else class="size_limit">-------</p>
                </div>
              </div>
              <div class="info">
                <div style="width: 12rem;">
                  <p class="key">CAC Registration Number</p>
                  <p class="size_limit" v-if="getTravelAgent?.cac_number !== 'pending'">{{getTravelAgent?.cac_number}}</p>
                  <p v-else class="size_limit">-------</p>
                </div>
                <div style="width: 12rem;">
                  <p class="key">Business Address</p>
                  <p class="size_limit" v-if="getTravelAgent?.business_address">{{ getTravelAgent?.business_address }}</p>
                  <p v-else class="size_limit">-------</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </index>

</template>

<script>
import Index from "../../views/travelAgents/Index.vue"
import {getFirstLettersOfFirstAndLastName} from "../../mixins/lettersExtractor";
import storeUtils from "../../utils/storeUtils";
export default {
  name: "BusinessInformation",
  data(){
    return{
      getFirstLettersOfFirstAndLastName
    }
  },
  components:{
    Index
  },
  computed:{
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }

    },

    getTravelAgent(){
      const travelAgent = JSON.parse(localStorage?.travelAgent)
      if(travelAgent){
        return travelAgent
      }
    }


  }
}
</script>

<style scoped>
.info{
  display: flex;
  gap: 1.44rem;
  margin-bottom: 1rem;
}
.key{
  color: #9DA8B6;
  font-family:'Product San';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 1.8rem */
  letter-spacing: 0.004rem;
}
.business_information_card_head{
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.account_type{
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid #2C6CAC;
  color:  #2C6CAC;

  /* Subtext/14px/Regular */
  font-family:'Product Sans' !important;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}
.upload_business_logo{
  color:  #444854;
  margin-bottom: 1rem;

  /* bold/24px */
  font-family:'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */;
  text-transform: capitalize;
}

.size_limit{
  color:  #444854;
  font-family:'Product San';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 1.8rem */
  letter-spacing: 0.004rem;
  margin-top:0.25rem;
}

.inner_head{
  display: flex;
  padding: 1.5rem;
  gap:5rem;
  align-items: start;
}

.business_information_card_body{
  padding: 1.5rem;
}

.reach_out{
  display: flex;
  align-items: center;
  gap:0.5rem;
}

.support{
  color: #89128A;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
}

.reach_out p{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.0035rem;
}

.business_information_card_footer{
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.5rem;
  justify-content: end;
  display: flex;
}

.profile{
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  width: 5rem;
  height:5rem;
  border-radius: 360px;
  color: #FFF;
  background: #000;
  position: relative;
  background-position: center;
  background-size: cover;

  /* bold/24px */
  font-family:'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}

.upload_icon{
  position: absolute;
  bottom: -10px;
  right: 0;
  cursor: pointer;
}

.business_information{
  color:  #444854;
  /* bold/24px */
  font-family:'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}

.business_information_card{
  width: 47rem;
  /* height: 47.625rem; */
  flex-shrink: 0;
  background: #FFF;
}

@media (max-width: 1024px) {
  .business_information_card{
    width: 100%;
  }
}
</style>