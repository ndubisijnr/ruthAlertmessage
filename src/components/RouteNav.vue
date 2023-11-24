<template>
  <div class="breadcrumb-sub">
    <!-- :to="i.name.includes('Booking') ? i.path.split(':')[0] + `${getUser?.access_token?.slice(0,20)}` : "  -->
    <!-- :to="`${i.path.split(':')[0]}${getUser?.access_token?.slice(0,20)}`"  -->
    <span  v-for="(i, index) in getAllRoute" :key="index" >
          <router-link :to="getAllRoute.length - 1 === index && isSelectedFlight ? '' :i.path" v-if="getAllRoute[index].name !== getCurrentRoute">
            <span  class="current-path-sub" :class="{'current-tab':getCurrentRoute===i.name}"> {{ i.name }}
                <img src="../assets/VerificationProcess/arrow-left.svg" />
            </span>
         </router-link>
          <span v-else class="current-path-sub" :class="{'current-tab':getCurrentRoute===i.name}"> {{ i.name }}
                <img src="../assets/VerificationProcess/arrow-left.svg" />
          </span>
      </span>
<!--     {{getCurrentRoute}}-->

   <!-- <span class="">{{getCurrentRoute}}</span> -->
  </div>
</template>

<script>
import router, {routes} from "../router";
import dashboardRoute from "../router/routes/dashboardRoute";


export default {
  name: "RouteNav",

  computed:{
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

    getCurrentRoute(){
      return router.currentRoute.value.name
    },

    isSelectedFlight(){
      const flight = localStorage.selectedFlight
      if(!flight) return true;
    },


    getRelivantRoute(){
      const routes = [] 
      routes.push(this.getAllRoute[0])
      .filter(it => it.name === this.getCurrentRoute)[0].path.split
      return routes
    },


    getAllRoute() {
      let route = dashboardRoute.map((item) => item)
      let link = router.currentRoute.value.fullPath.split("/")[1]
      let filteredRoute = route.filter(it => it.path.includes(link))
      filteredRoute.pop()
      return filteredRoute
      },

  },
}

</script>

<style scoped>
.current-path-sub{
  color: #575A65;
  text-align: center;
  display: inline-flex;
  align-items: center;
  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.breadcrumb-sub{
  height: 2.4rem;
  width: auto;
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 1.94rem;
  gap: 0.5rem;
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

</style>