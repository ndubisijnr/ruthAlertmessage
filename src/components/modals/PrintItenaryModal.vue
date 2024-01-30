<script>
import Layout from "@/components/modals/Layout.vue";
import Template1 from "@/components/flightItenaryTemplate/Template1.vue";
import Template2 from "@/components/flightItenaryTemplate/Template2.vue";
import Template3 from "@/components/flightItenaryTemplate/Template3.vue";

export default {
  name: "PrintItenaryModal",
  components:{Template1, Layout},
  methods:{
    close(){
      this.$emit('close', false)
    }
  }
}
</script>

<template>

  <layout v-slot:children >

    <Template1></Template1>
    <div class="close">
      <img src="../../assets/cancle.svg" alt="close" @click="close()"/>
    </div>
  </layout>

</template>

<style scoped>
.close{
  //box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
  margin: 20px auto;
  border-radius: 0.7rem;
  background:  #FFF;
  position: fixed;
  right: 10rem;
  cursor: pointer;
}

</style>