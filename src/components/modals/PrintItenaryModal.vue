<script>
import Layout from "@/components/modals/Layout.vue";
import Template1 from "@/components/flightItenaryTemplate/Template1.vue";
import Template2 from "@/components/flightItenaryTemplate/Template2.vue";
import Template3 from "@/components/flightItenaryTemplate/Template3.vue";
import storeUtils from "@/utils/storeUtils";

export default {
  name: "PrintItenaryModal",
  components:{Template1, Layout,Template2,Template3},
  methods:{
    close(){
      this.$emit('close', false)
    }
  },
  computed:{
    getTemplateId(){
      if(storeUtils.fireAway().theme.custom_theme) return storeUtils.fireAway().theme.custom_theme.template_id;
      return storeUtils.fireAway().theme.custom_theme.template_id;
    },
  }
}
</script>

<template>

  <layout v-slot:children >

    <Template1 v-if="getTemplateId === 1"></Template1>
    <Template2 v-if="getTemplateId === 2"></Template2>
    <Template3 v-if="getTemplateId === 3"></Template3>

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