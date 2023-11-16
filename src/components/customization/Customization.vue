<script>
import {ColorPicker} from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import CustomizationRequest from "@/model/CustomizationRequest";
import UploadDocumentsComponent from "@/components/forms/UploadDocumentsComponent.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import Template1 from "@/assets/Template1.svg"
import Template2 from "@/assets/Template2.svg"
import Template3 from "@/assets/Template3.png"
import storeUtils from "@/utils/storeUtils";

export default {
  name: "Customization",
  components:{ColorPicker,UploadDocumentsComponent,OnBoardingButton},
  data(){
    return{
      customization:'add_favicon',
      model:CustomizationRequest.saveCustomization,
      selectedTemplateIndex:0,
      templates:[
        {
          name:"Template 1",
          preview:Template1
        },
        {
          name:"Template 2",
          preview:Template2
        },
        {
          name:"Template 3",
          preview:Template3
        }
      ]
    }
  },
  computed:{
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.getCustom_theme
    }
  }
}

</script>

<template>
  <div style="display: flex;gap: 5.19rem">
    <div class="customization_sender">

      <div>
        <p class="customization_header">Customization</p>

        <div class="customization_tab">
          <ul class="customization_tab_ul">
            <a class="customization_tab_li" @click="customization='add_favicon'" :class="{'active_customization_tab_li':customization==='add_favicon'}">Add Favicon</a>
            <a class="customization_tab_li" @click="customization='style'" :class="{'active_customization_tab_li':customization==='style'}">Choose Color Style</a>
            <a class="customization_tab_li" @click="customization='template'" :class="{'active_customization_tab_li':customization==='template'}">Itinerary Template</a>
          </ul>
        </div>

        <div v-if="customization==='add_favicon'">

          <div style="margin-top: 2.5rem">
            <p class="favicon">Add Favicon</p>
            <p class="upload_favicon">Upload custom favicon</p>
          </div>

          <upload-documents-component id="favicon" title="Upload  your website favicon to distinguish your site."></upload-documents-component>


        </div>


        <div v-if="customization==='template'">
          <div style="margin-top: 2.5rem">
            <p class="favicon">Templates</p>
            <p class="upload_favicon">Select your preferred flight itinerary templates.</p>
          </div>

          <div class="template_wrapper">
            <div class="template" v-for="(i, index) in templates" :key="index" :style="selectedTemplateIndex === index ? {border:'solid 1px',borderColor:custom_theme ? custom_theme.color : default_theme.color} : null">

              <img :src="i.preview" style="width: 3.25rem;height: 5rem;" alt="template" />


              <div class="template_footer">
                <input type="radio" style="cursor: pointer" @click="selectedTemplateIndex = index" :checked="selectedTemplateIndex === index"/>
                <p>{{ i.name }}</p>
              </div>
            </div>

          </div>
        </div>


        <div v-if="customization==='style'">
          <div style="margin-top: 2.5rem;margin-bottom: 1.5rem">
            <p class="customize">Customize the look and feel</p>
            <p class="customize_text">In order to ensure people can read your site, try to maintain a strong contrast ratio between the colors
              you choose here.</p>
          </div>
          <div>
            <color-picker v-model="model.color" is-widget  />
          </div>
        </div>


        <div style="margin-top: 3rem;width: 100%">
          <on-boarding-button text-node="Save Changes" btn-width="100%"></on-boarding-button>
          <on-boarding-button text-node="Cancel" btn-width="100%" background="transparent" color="#000"></on-boarding-button>

        </div>
      </div>


    </div>

    <div class="receiver_wrapper">
      <div class="customization_reciever" :style="customization === 'style' ? {width: '700px'} : null">
        <iframe v-if="customization === 'style'" src="http://localhost:5173/dashboard/eyJ0eXAiOiJKV1QiLCJh" style="transform: scale(0.5);transform-origin: 0 0; width: 1200px;height: 1000px;border: none;"></iframe>
        <iframe v-if="customization === 'template'" :src="selectedTemplateIndex === 0 ? 'http://localhost:5173/templates_1/eyJ0eXAiOiJKV1QiLCJh' : selectedTemplateIndex === 1 ? 'http://localhost:5173/templates_2/eyJ0eXAiOiJKV1QiLCJh' : 'http://localhost:5173/templates_3/eyJ0eXAiOiJKV1QiLCJh'" style="transform: scale(0.5, 0.5);transform-origin: 0 0; width: 750px;height: 1000px;border: none;"></iframe>
      </div>
    </div>
  </div>

</template>

<style scoped>
.receiver_wrapper{
  overflow-x: scroll;
}


.template_footer{
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  background: var(--Color, #FFF);
  width: 100%;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
}

.template{
  display: flex;
  width: 10rem;
  padding-top: 16px;
  flex-direction: column;
  justify-content: flex-end;
  height: 9rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.625rem;
  background: #E8E8E8;
}

.template_wrapper{
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  gap: 1rem;
  background: var(--Color, #FFF);
}

.customization_sender{
  width: 35.435rem;
}

.customize{
  color: var(--black-text-01, #1D1E2C);

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.customize_text{
  color: var(--black-text-04, #575A65);

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.favicon{
  color: var(--primary-15, #C0D3E6);

  /* Body/16px/Regular */
  font-family: Product Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.upload_favicon{
  color: #6B6C7E;

  /* Body/16px/Regular */
  font-family: Product Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.customization_tab_li{
  color: var(--black-text-05, #9DA8B6);
  text-align: center;
  font-family: 'Product Sans';
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  padding: 0.38rem 0.5rem;
  cursor: pointer;
}

.active_customization_tab_li{
  color: var(--primary-main, #2C6CAC);

  border-bottom: solid #2C6CAC;
  /* width: 6.18875rem; */
}

.customization_header{
  color: var(--primary-colors-dark-head, #272833);
  /* bold/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}

.customization_tab_ul{
  display: inline-flex;
  justify-content: space-between;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.customization_reciever{
  width: 35.1875rem;
  height: 45.6875rem;
  background: #D5E2EE;
  padding: 2.04875rem 3.625rem 2.0625rem 3.5625rem;
}

</style>