<template>
  <add-team-member v-if="isAddAgents" @close="close"></add-team-member>
  <ModalLoader v-if="getLoadingAgents" :message="'Loading Agents'"></ModalLoader>
  <layout v-slot:child-content @tenantIsReady="init">
    
    <div class="overall" style="margin: 0" v-if="getCurrentRouteName !== 'Travel Agents'">
      <div class="main-wrapper">
        <div  class="side-area-wrapper">
          <div class="side-area">
            <div class="inner-side-area">
              <div class="m-nav" v-for="(i, index) in navs" :key="index">
               <router-link :to="`${i.route}/${getUser?.access_token?.slice(0,20)}`"> <div class="item">
                  <div class="tracker">
                    <div class="sub-active-tracker" v-show="getCurrentRoute.includes(i.route)"></div>
                  </div>
                  <div class="sub-nav" :class="{'sub-active-nav':getCurrentRoute.includes(i.route)}">{{i.nav}}</div>
                </div></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="inner-main-wrapper">
          <slot name="children"></slot>
        </div>

      </div>

    </div>
    <div v-else class="overall" id="overall">
      <div class="booking-wrapper">
        <p class="travel_agents_count">You Have ( {{ getMembers?.total }} ) Travel Agents. </p>
        <div class="search_filter">
            <div class="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#9DA8B6"/>
                <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="#9DA8B6"/>
              </svg>
              <input type="search" @input="queryAgent" v-model="agent_query" style="outline: none;border: none;width: 19.4rem" placeholder="Search Agents"/>
            </div>
            <div class="filter">
              <!-- <div class="filter-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 12.8002L4.79999 9.6002H11.2L7.99999 12.8002ZM7.99999 3.2002L11.2 6.4002H4.79999L7.99999 3.2002Z" fill="#212B36"/>
                </svg>
                <span class="filter-span">Sort By</span>
              </div> -->
              <!-- <on-boarding-button @click="isAddAgents=true" class="filter-btn" btn-width="9.18rem" height="2.5rem" text-node="Add Agents"></on-boarding-button> -->
            </div>
        </div>
        <div>
          <div class="table-wrapper">
            <domain-table :items-per-page="getMembers?.per_page" :total="getMembers?.total" :current-page="getMembers?.current_page" :last-page="getMembers?.last_page" :empty-message="`Hi, No agents at the moments`" :is-paginate="true" :data="getMembers?.data" :fields="membersFields">
              <template v-slot:emptyIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
                  <path d="M0.117188 57.883C0.117188 73.2346 6.21556 87.9574 17.0707 98.8125C27.9259 109.668 42.6487 115.766 58.0002 115.766C73.3518 115.766 88.0746 109.668 98.9297 98.8125C109.785 87.9574 115.883 73.2346 115.883 57.883C115.883 42.5315 109.785 27.8087 98.9297 16.9536C88.0746 6.09837 73.3518 0 58.0002 0C42.6487 0 27.9259 6.09837 17.0707 16.9536C6.21556 27.8087 0.117188 42.5315 0.117188 57.883Z" fill="#F1F2F6"/>
                  <path d="M8.3418 20.9214L67.758 3.4748L90.5149 80.9757L31.0986 98.4223L8.3418 20.9214Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.0869 8.62842H82.0131V89.3999H20.0869V8.62842Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28.166 16.707H73.937V24.7846H28.166V16.707Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44.3193 38.2441H55.0899" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44.3193 43.6309H68.5521" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44.3193 49.0151H61.8405" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44.3193 65.1689H57.7815" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44.3193 70.5532H71.2436" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M44.3193 75.9399H65.8591" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M30.7213 48.1225V44.5522H29.6377V43.6631H30.7213V42.524H29.6377V41.6349H30.7213V38.2036H32.166L33.4858 41.6349H35.125V38.2036H36.2225V41.6349H37.306V42.524H36.2225V43.6631H37.306V44.5522H36.2225V48.1225H34.7638L33.4441 44.5522H31.8048V48.1225H30.7213ZM31.7771 41.6349H32.3605L31.7771 39.9123H31.7215L31.7771 41.6349ZM31.8048 43.6631H33.1107L32.6939 42.524H31.7771L31.8048 43.6631ZM34.222 43.6631H35.1528L35.125 42.524H33.8053L34.222 43.6631ZM35.125 46.1637H35.1806L35.1389 44.5522H34.5554L35.125 46.1637Z" fill="#1D1E2C"/>
                  <path d="M30.7213 75.9057V72.3354H29.6377V71.4463H30.7213V70.3072H29.6377V69.4181H30.7213V65.9868H32.166L33.4858 69.4181H35.125V65.9868H36.2225V69.4181H37.306V70.3072H36.2225V71.4463H37.306V72.3354H36.2225V75.9057H34.7638L33.4441 72.3354H31.8048V75.9057H30.7213ZM31.7771 69.4181H32.3605L31.7771 67.6955H31.7215L31.7771 69.4181ZM31.8048 71.4463H33.1107L32.6939 70.3072H31.7771L31.8048 71.4463ZM34.222 71.4463H35.1528L35.125 70.3072H33.8053L34.222 71.4463ZM35.125 73.9469H35.1806L35.1389 72.3354H34.5554L35.125 73.9469Z" fill="#1D1E2C"/>
                  <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" fill="#E5E9F2"/>
                  <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M82.5391 84.7549L86.0882 81.2048L94.964 90.0781L91.4148 93.6282L82.5391 84.7549Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M86.9799 53.6947C90.1393 56.854 92.2908 60.8792 93.1625 65.2613C94.0342 69.6434 93.5869 74.1856 91.8771 78.3135C90.1673 82.4414 87.2719 85.9695 83.5569 88.4518C79.8419 90.9341 75.4743 92.259 71.0063 92.259C66.5384 92.259 62.1707 90.9341 58.4558 88.4518C54.7408 85.9695 51.8453 82.4414 50.1356 78.3135C48.4258 74.1856 47.9784 69.6434 48.8501 65.2613C49.7218 60.8792 51.8734 56.854 55.0328 53.6947C59.2696 49.4591 65.0154 47.0796 71.0063 47.0796C76.9973 47.0796 82.743 49.4591 86.9799 53.6947Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" fill="#E5E9F2"/>
                  <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M37.4121 108.503C37.4121 109.308 39.7563 110.079 43.9291 110.649C48.1018 111.218 53.7612 111.537 59.6624 111.537C65.5635 111.537 71.2229 111.218 75.3956 110.649C79.5684 110.079 81.9126 109.308 81.9126 108.503C81.9126 107.698 79.5684 106.926 75.3956 106.357C71.2229 105.788 65.5635 105.468 59.6624 105.468C53.7612 105.468 48.1018 105.788 43.9291 106.357C39.7563 106.926 37.4121 107.698 37.4121 108.503Z" fill="#E5E9F2"/>
                </svg>
              </template>
            </domain-table>
          </div>
        </div>
      </div>
    </div>

  </layout>

</template>

<script>
import Layout from "../Layout.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
import DomainTable from "../../components/tables/BaseTable.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import AddTeamMember from "@/components/modals/AddTeamMember.vue";
import ModalLoader from "../../components/loaders/ModalLoader.vue";

export default {
  name: "Index",

  data(){
    return{
      active:"Business Information",
      agent_query:null,
      isAddAgents:false,
      navs:[
          {nav:'Business Information',route:'/agents/business-information'},
          {nav:'Flight Bookings',route: '/agents/flights'},
          {nav:'Manage Wallet',route: '/agents/wallet'},
          {nav:'Manage Team',route: '/agents/manage-teams'},
          {nav:'Verification',route: '/agents/document-verification'},
          {nav:'Account Officer',route: '/agents/acount-officers'}
      ],

      membersFields:[
        {key:"business_name", label:"Agent Name"},
        {key:"email", label:"Email Address"},
        {key:"created_at", label:"Date of Registration"},
        // {key:"phone", label:"Phone Number"},
        {key:"type", label:"Office Type"},
        {key:"status", label:"Status"},
        {key:"wallet", label:"Wallet Balance"},

        // {key:"travel_agent_action", label:"Action", id:"travel_agent_action"},
        // {key:"Action", label:"Action",id:"member"},
      ],

    }
  },

  components:{AddTeamMember, OnBoardingButton, DomainTable, Layout,ModalLoader},

  methods:{
    close(value){
      this.isAddAgents = value
    },
    init(value){
      console.log(value)
      return value
    }
  },

  computed: {
    getCurrentRoute(){
      return router.currentRoute.value.path
    },

    getLoading(){
      return storeUtils.fireAway().travelAgent.getLoading
    },


    getLoadingAgents(){
      return storeUtils.fireAway().travelAgent.getLoadingAgents
    },

    getCurrentRouteName(){
      return router.currentRoute.value.name
    },

    queryAgent(){
      storeUtils.fireAway().travelAgent.handleGetTravelAgent(this.agent_query)
    },


    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

    getMembers(){
      return storeUtils.fireAway().travelAgent?.getUser?.data
    },

    getTenantLoaded(){
      return storeUtils.fireAway().global.getTenantLoaded
    }



  },

  watch:{
    'getTenantLoaded'(a,b){
      if(a)storeUtils.fireAway().travelAgent?.handleGetTravelAgent("", 1);
    }
  },

  mounted() {
    if(this.getTenantLoaded)storeUtils.fireAway().travelAgent?.handleGetTravelAgent("", 1);

  }
}
</script>

<style scoped>
@import "style.css";
@import url('https://fonts.cdnfonts.com/css/apercu');

.travel_agents_count{
  color:  #575A65;
/* bold/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
  margin-bottom: 2.94rem;
}
@media (max-width: 1024px) {
  .payment-choice{
    width:100%;
  }

  .bank-card{
    width: 100%;
  }
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

.payment-header{
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.table-wrapper{
  overflow-x: scroll;
}

@media (max-width: 1024px) {
  .table-wrapper{
    width: auto !important;
  }

  .payment-header{
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
}


m-2{
  color:  #575A65;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

@media (max-width: 1024px) {

  .filter{
    width: 100% !important;
  }
}


@media (max-width: 1024px) {
  .item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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


::placeholder{
  color: #9DA8B6;
  text-align: center;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}



.inner-tab-nav > a{
  padding: 0.75rem 1.5rem;
  transition: .3s linear;
  cursor: pointer;
  border-radius: 1.25rem;
  color: #8492A6;
  font-family: 'Apercu';
  font-size: 1rem;
  font-style: normal;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */

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


::-webkit-scrollbar{
  display: none;
}

.inner-main-wrapper{
  margin-top: 0;
  width: 59.125rem;
  height: auto;

}

a{
  text-decoration: none !important;
}
.wrapper{
  /*min-width: 100%;*/
  background-color: #F9FAFC;
  min-height: 100vh;
  overflow: scroll;
  margin: 0 !important;
  padding: 0 !important;

  border: solid crimson;


}


@media (max-width: 1024px) {
  .header{
    padding: 1rem;
    gap: 0;
    justify-content: space-between;
  }
}

.verification{
  color:  #2D3139;
  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.skip-div{
  display: flex;
  align-items:center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
}

.skip-div span{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

main{
  padding: 1rem 4rem 1rem 4rem;
  width: 100%;
}

.main-wrapper{
  display: flex;
  gap: 3.56rem;
  margin-top: 4.5rem;
}


@media (max-width: 1024px) {
  main{
    padding: 1rem;
  }
  .main-wrapper{
    flex-direction: column;
    gap: 0;
  }
}


.side-area-wrapper{
  width: 15rem;

}

.inner-side-area{
  display: block;
  gap: 1rem;
  margin-left: 1.5rem;

}

.current-active{
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.item{

  /* Body/16px/Regular */
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;
  color: #393A4A;
  background: transparent;
  border: none;
}




#nav0 a.router-link-exact-active {
  background:  var(--app-defautl-primary-light);
  color: white !important;
  text-align: center;
  width: auto;
  padding: 0.5rem;
  border-radius: 5px;
}

a{
  text-decoration: none;
}
.progress{
  width: 100%;
  background-color: var(--app-default-primary);
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
  color:var(--app-default-primary);
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
  border-bottom:2px solid var(--app-default-primary);
  color:var(--app-default-primary) !important;
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
  background: var(--app-default-primary) !important;
}
.activeStage{
  color: var(--app-default-primary) !important;
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
  border: 1px solid  var(--app-default-primary);
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
  margin: 2.94rem;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;;
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

}

.booking-wrapper{
  width: 75.625rem;
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
  background:  #EAF0F7;
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