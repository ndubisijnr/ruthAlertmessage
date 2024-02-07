<script>
import Layout from "@/components/modals/Layout.vue";
import Template1 from "@/components/flightItenaryTemplate/Template1.vue";
import Template2 from "@/components/flightItenaryTemplate/Template2.vue";
import Template3 from "@/components/flightItenaryTemplate/Template3.vue";
import storeUtils from "@/utils/storeUtils";

export default {
  name: "PrintItenaryModal",
  components: { Template1, Layout, Template2, Template3 },
  methods: {
    close() {
      this.$emit("close", false);
    },
    printComponent(componentRef) {
      const pdfName = "temp.pdf";
      const elementToCapture = this.$refs[componentRef];
      console.log(elementToCapture);
      var HTML_Width = elementToCapture.offsetWidth;
      var HTML_Height = elementToCapture.offsetHeight;
      var top_left_margin = 15;
      var PDF_Width = HTML_Width + top_left_margin * 2;
      var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;
      var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      html2canvas(elementToCapture, { scale: 2 }).then(function (canvas) {
        var imgData = canvas.toDataURL("image/png", 1.0);
        var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.addImage(
          imgData,
          "PNG",
          top_left_margin,
          top_left_margin,
          canvas_image_width,
          canvas_image_height
        );
        for (var i = 1; i <= totalPDFPages; i++) {
          pdf.addPage(PDF_Width, PDF_Height);
          pdf.addImage(
            imgData,
            "PNG",
            top_left_margin,
            -(PDF_Height * i) + top_left_margin * 4,
            canvas_image_width,
            canvas_image_height
          );
        }
        pdf.save(pdfName);
      });
    },
  },
  computed: {
    getTemplateId() {
      if (storeUtils.fireAway().theme.custom_theme)
        return storeUtils.fireAway().theme.custom_theme.template_id;
      return storeUtils.fireAway().theme.custom_theme.template_id;
    },
  },
};
</script>

<template>
  <layout v-slot:children>
    <Template1
      @printComponent="printComponent"
      ref="Template1"
      v-if="getTemplateId === 1"
    ></Template1>
    <Template2 ref="Template2" v-if="getTemplateId === 2"></Template2>
    <Template3 ref="Template3" v-if="getTemplateId === 3"></Template3>

    <div class="close">
      <img src="../../assets/cancle.svg" alt="close" @click="close()" />
    </div>
  </layout>
</template>

<style scoped>
.close {
  //box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
  margin: 20px auto;
  border-radius: 0.7rem;
  background: #fff;
  position: fixed;
  right: 10rem;
  cursor: pointer;
}
</style>
