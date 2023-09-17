<template>
  <layout v-slot:child-content>
    <coming-soon></coming-soon>
  </layout>

</template>

<script>
import ComingSoon from "../../components/ComingSoon.vue";
import Layout from "../Layout.vue";
export default {
  name: "Index",
  components:{ComingSoon, Layout}
}
</script>

<style scoped>

</style>