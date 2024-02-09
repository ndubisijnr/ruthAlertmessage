<script>
import Layout from "@/components/modals/Layout.vue";
import Template1 from "@/components/flightItenaryTemplate/Template1.vue";

export default {
  name: "PrintItenaryModal",
  components:{Template1, Layout},
  methods:{},
  computed:{}
}
</script>

<template>

  <div style="display: flex;justify-content: center;background: whitesmoke">
    <Template1></Template1>
  </div>

</template>

<style scoped></style>