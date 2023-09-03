<template>
      <div class="card_wrapper">
        <div class="card_success">
          <div class="card_body">
            <img src="../../assets/verification_success.svg"  class="mobile"/>
            <router-link :to="`/dashboard/${getUser?.access_token?.slice(0,20)}`"> <div class="sublink">
              <span class="sublink_link">Continue</span>
            </div>
            </router-link>

          </div>
        </div>
      </div>
</template>

<script>
import Layout from "./Layout.vue";

export default {
    name:"SuccessRegistrationCard",

    components:{
      Layout,
    },

    data(){
        return{}
    },

    methods:{
    

    },

  computed:{
      getUser(){
        if(localStorage.user){
          return JSON.parse(localStorage?.user)
        }
      }
  },

    watch: {},

    mounted(){}
}
</script>

<style scoped>

</style>