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
import Template_1 from "../flightItenaryTemplate/Template1.vue"
import Template_2 from "../flightItenaryTemplate/Template2.vue"
import Template_3 from "../flightItenaryTemplate/Template3.vue"
import DashboardPreview from "@/views/dashboard/DashboardPreview.vue";
import OnBoardingInput from "@/components/Inputs/OnBoardingInput.vue";
export default {
  name: "Customization",

  components:{
    OnBoardingInput,
    ColorPicker,UploadDocumentsComponent,OnBoardingButton, Template_1,Template_2,Template_3, DashboardPreview},

  data(){
    return{
      customization:'add_favicon',
      isChangingCacDocument:false,
      uploadType:null,
      model:CustomizationRequest.saveCustomization,
      color:null,
      logo:null,
      favicon:null,
      site_title:null,
      site_description:null,
      template_id:null,
      selectedTemplateIndex:0,
      saveRequired:false,
      templates:[
        {
          name:"Template 1",
          preview:Template1,

        },
        {
          name:"Template 2",
          preview:Template2,

        },
        {
          name:"Template 3",
          preview:Template3,

        }
      ]
    }
  },

  methods:{
    saveCustomization(){
      // this.model
      if(this.color) this.model.color = this.color;
      if(this.logo) this.model.logo = this.logo
      if(this.favicon) this.model.favicon = this.favicon;
      if(this.getTemplateId) this.model.template_id = this.getTemplateId;
      if(this.site_title) this.model.site_title = this.site_title;
      if(this.site_description) this.model.description = this.site_description;
      storeUtils.fireAway().theme.saveCustomization(this.model).then(() => {
        this.model = {};
        this.favicon = null;
        this.logo = null;
        this.site_description = null
        this.site_title = null
        this.$emit('saveRequired', false)
      })

    },


    file(value){
      this.favicon = value
      this.$emit('saveRequired', true)
    },

    changeLogo(value){
      this.logo = value
      this.$emit('saveRequired', true)
    },

    updateTemplate(index){
      storeUtils.fireAway().theme.commitColor(index, 'template')
      this.$emit('saveRequired', true)
    }
  },

  watch:{
    'color'(newPayload){
      if(newPayload){
        storeUtils.fireAway().theme.commitColor(newPayload, 'color')
        this.$emit('saveRequired', true)
      }
    }
  },

  computed:{
    getFavicon(){
      return storeUtils.fireAway().theme.favicon
    },
    getTemplateId(){
      if(storeUtils.fireAway().theme.custom_theme) return storeUtils.fireAway().theme.custom_theme.template_id;
      return storeUtils.fireAway().theme.custom_theme.template_id;
    },
    
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },

    getTenant(){
      return storeUtils.fireAway().global.Tenant
    },
    getLoading(){
      return storeUtils.fireAway().theme.getLoading
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
            <a class="customization_tab_li" :style="customization==='change_logo' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderColor:custom_theme ? custom_theme.color : default_theme.color} : null"  @click="customization='change_logo'" :class="{'active_customization_tab_li':customization==='change_logo'}">Change Logo</a>
            <a class="customization_tab_li" :style="customization==='add_favicon' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderColor:custom_theme ? custom_theme.color : default_theme.color} : null"  @click="customization='add_favicon'" :class="{'active_customization_tab_li':customization==='add_favicon'}">Add Favicon</a>
            <a class="customization_tab_li" :style="customization==='style' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderColor:custom_theme ? custom_theme.color : default_theme.color} : null" @click="customization='style'" :class="{'active_customization_tab_li':customization==='style'}">Choose Color Style</a>
            <a class="customization_tab_li" :style="customization==='template' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderColor:custom_theme ? custom_theme.color : default_theme.color} : null" @click="customization='template'" :class="{'active_customization_tab_li':customization==='template'}">Itinerary Template</a>
            <a class="customization_tab_li" :style="customization==='site_description' ? {color:custom_theme ? custom_theme.color : default_theme.color, borderColor:custom_theme ? custom_theme.color : default_theme.color} : null" @click="customization='site_description'" :class="{'active_customization_tab_li':customization==='site_description'}">Site Description</a>
          </ul>
        </div>
        <div v-if="customization==='change_logo'">

          <div style="margin-top: 2.5rem">
            <p class="favicon">Change Logo</p>
            <p class="upload_favicon">Upload new logo</p>
          </div>

          <div v-if="getTenant.logo && !isChangingCacDocument" class="doc_pending_wrapper">
            <div  style="text-align: end">
              <img src="../../components/forms/close_icon.svg" style="cursor: pointer"  @click="isChangingCacDocument = true" alt="favicon_preview"/>
            </div>
            <div class="doc_pending">
              <img class="img-uploaded" id="company_image_preview" :src="getTenant.logo" />
            </div>
          </div>


          <upload-documents-component v-else  @file="changeLogo" id="change_logo" title="Upload  your website logo."></upload-documents-component>


        </div>

        <div v-if="customization==='add_favicon'">

          <div style="margin-top: 2.5rem">
            <p class="favicon">Add Favicon</p>
            <p class="upload_favicon">Upload custom favicon</p>
          </div>


          <div v-if="getFavicon && !isChangingCacDocument" class="doc_pending_wrapper">
            <div  style="text-align: end">
              <img src="../../components/forms/close_icon.svg" style="cursor: pointer"  @click="isChangingCacDocument = true" alt="favicon_preview"/>
            </div>
            <div class="doc_pending">
              <img class="img-uploaded" id="company_image_preview" :src="getFavicon" />
            </div>
          </div>

          <upload-documents-component v-else  @file="file" id="favicon" title="Upload  your website favicon to distinguish your site."></upload-documents-component>


        </div>

        <div v-if="customization==='template'">
          <div style="margin-top: 2.5rem">
            <p class="favicon">Templates</p>
            <p class="upload_favicon">Select your preferred flight itinerary templates.</p>
          </div>

          <div class="template_wrapper">
            <div class="template" v-for="(i, index) in templates" :key="index" :style="getTemplateId === ++index  ? {border:'solid 1px',borderColor:custom_theme ? custom_theme.color : default_theme.color} : null">

              <img :src="i.preview" style="width: 3.25rem;height: 5rem;" alt="template" />


              <div class="template_footer">
                <input type="radio" style="cursor: pointer;" @click="updateTemplate(index)" :checked="getTemplateId === index"/>
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
            <color-picker v-model:pure-color="color" format="hex" is-widget  />
          </div>
        </div>
        <div v-if="customization==='site_description'">
          <div style="margin-top: 2.5rem;margin-bottom: 1.5rem">
            <p class="favicon">Site Name</p>
            <p class="upload_favicon">Site name for your business can be edited here.</p>
          </div>
          <div>
            <on-boarding-input label="Site Title" id="site_title" @inputValue="value => site_title = value"></on-boarding-input>
          </div>

          <div>
            <on-boarding-input label="Site Description" id="site_description"  @inputValue="value => site_description = value" placeholder="This is a travel management business board."></on-boarding-input>
          </div>
        </div>


        <div style="margin-top: 3rem;width: 100%">
          <on-boarding-button @click="saveCustomization" text-node="Save Changes" :loading="getLoading" btn-width="100%"></on-boarding-button>
          <on-boarding-button text-node="Cancel" btn-width="100%" background="transparent" color="#000"></on-boarding-button>

        </div>
      </div>


    </div>

    <div class="receiver_wrapper">
      <div class="customization_reciever">
<!--        <div v-if="customization === 'style'" style="transform: scale(0.5, 0.5);transform-origin: 0 0; width: 750px;height: 1000px;border: none;">-->
<!--         <dashboard-preview></dashboard-preview>-->
<!--        </div>-->

        <div v-if="customization === 'template'" style="transform: scale(0.8, 0.8);transform-origin: 0 0; width: 750px;height: 1000px;border: none;">

          <Template_1 v-if="getTemplateId === 1"></Template_1>
          <Template_2 v-if="getTemplateId === 2"></Template_2>
          <Template_3 v-if="getTemplateId === 3"></Template_3>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.receiver_wrapper{
  overflow-x: scroll;
}

.doc_pending_wrapper{
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.img-uploaded{
  width: 10rem;
  height: 10rem;
}

.doc_pending{
  display: inline-flex;
  padding: 1.5rem;
  align-items: center;
  width: 31.81rem;
  justify-content: space-around;
  gap: 4.875rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  position: relative;

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
  width: 40.435rem;
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  //padding: 0.38rem;
  cursor: pointer;
}

.active_customization_tab_li{
  border-bottom: solid;
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
  width: 30.1875rem;
  height: 45.6875rem;
  overflow: scroll;
  background: #D5E2EE;
  padding: 2.04875rem 3.625rem 2.0625rem 3.5625rem;
}

</style>