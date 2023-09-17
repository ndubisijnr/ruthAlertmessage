<template>
  <div class="breadcrumb-sub">
<!--    to="i.path.split(':')[0] + `${getUser?.access_token?.slice(0,20)}`"-->
    <span v-for="(i, index) in getAllRoute" :key="i" >
      <span class="current-path-sub"> {{ i.name }}
        <img src="../assets/VerificationProcess/arrow-left.svg" />
      </span>
    </span>
<!--    <span class="current-tab">{{getCurrentRoute}}</span>-->
  </div>
</template>

<script>
import router, {routes} from "../router";


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


    getAllRoute() {
      let route = routes.map((item) => item)
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
  margin-top: 1rem;
  margin-bottom: 1.94rem;
  gap: 0.5rem;
}

</style>