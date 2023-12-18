<template>
  <verification-complete-modal v-if="getBusinessProfile?.cac_document && getBusinessProfile?.id_document"></verification-complete-modal>

  <layout :in_route="inRoute" :is-component="isComponent">
        <template v-slot:maker>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="72" viewBox="0 0 4 72" fill="none">
            <rect width="4" height="62.348" rx="2" fill="#CDCED9"/>
            <rect y="51.0898" width="4" height="20.9103" rx="2" :fill="custom_theme ? custom_theme.color : default_theme.color"/>
          </svg>
        </template>
        <template v-slot:children>
            <div style="margin-bottom: 50px">
                <div class="business_information">Document Upload</div>
                <div style="margin-bottom: 1rem">
                  <p class="txt-1" :style="{color:custom_theme ? custom_theme.color : default_theme.color}">Company Document</p>
                  <p class="txt-2">Corporate  Affairs Commission - CAC</p>
                </div>

                <div class="business_information_card" v-if="!getBusinessProfile?.cac_document || isChangingCacDocument">


                  <upload-documents-component @file="get_business_documents" id="business" title="Kindly upload your Certification of Incorporation" ></upload-documents-component>
                  <div>
                    <on-boarding-button @click="saveBusinessDocument" text-node="Save" btn-width="100%" :loading="loading" :disabled="!cac_document || loading"></on-boarding-button>
                  </div>
                </div>

                  <div v-else class="doc_pending_wrapper">
                    <div  style="text-align: end">
                      <img src="../../components/forms/close_icon.svg" style="cursor: pointer"  @click="isChangingCacDocument = true" alt="favicon_preview"/>
                    </div>
                    <div class="doc_pending">
                      <img class="img-uploaded" id="company_image_preview" :src="getBusinessProfile?.cac_document" />
                      <img v-if="getBusinessProfile?.is_cac_verified === 'false'" src="../../assets/Settings/notVerified.svg" />
                    </div>
                    <img  v-if="getBusinessProfile?.is_cac_verified === 'false'" src="../../assets/Settings/pendingDoc.svg" />
                  </div>

                  <div class="personal-docs">
                      <p class="txt-1" :style="{color:custom_theme ? custom_theme.color : default_theme.color}">Personal Document</p>
                      <p class="txt-2">Kindly provide one of the following personal documents for verification purposes: Driver's License, International Passport, NIN (National Identification Number) Slip.</p>
                  </div>


                  <div v-if="!getBusinessProfile?.id_document || isChangingIdDocument">

                    <div class="choose_document_type" style="position: relative;width: 100%;">

                      <div>
                        <p class="doc_type"> {{ LocalMarkUpPlaceHolder }}</p>
                        <div class="doc_type_options" v-show="localDropdown">
<!--                          <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Driver\'s License',toggleLocalDropdown()">Driver's License</p>-->
                          <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='International Passport', toggleLocalDropdown(), uploadModel.type = 'id_document'" >International Passport</p>
                          <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='NIN (National Identification Number) Slip', toggleLocalDropdown(),uploadModel.type = 'id_document'">NIN (National Identification Number) Slip</p>

                        </div>

                      </div>
                      <img src="../../assets/Monotone.svg" style="cursor: pointer" @click="toggleLocalDropdown" />
                    </div>

                    <upload-documents-component @file="get_personal_documents" id="personal" :title="`Kindly upload your ${LocalMarkUpPlaceHolder}`"></upload-documents-component>

                    <div>
                      <on-boarding-button text-node="Save" @click="savePersonalDocument" btn-width="100%" :loading="loading" :disabled="!id_document || loading"></on-boarding-button>
                    </div>

                </div>

                  <div v-else class="doc_pending_wrapper">
                    <div  style="text-align: end">
                      <img src="../../components/forms/close_icon.svg" style="cursor: pointer"  @click="isChangingIdDocument = true" alt="favicon_preview"/>
                    </div>
                    <div class="doc_pending">
                      <a :href="getBusinessProfile?.id_document" target="_blank"> <img class="img-uploaded" id="person_image_preview" :src="getBusinessProfile?.id_document" /></a>
                      <img v-if="getBusinessProfile?.is_id_verified === 'false'" src="../../assets/Settings/notVerified.svg" />

                    </div>
                    <img v-if="getBusinessProfile?.is_id_verified === 'false'" src="../../assets/Settings/pendingDoc.svg" />
                  </div>

                </div>
        </template>

    </layout>
</template>

<script>
import UploadDocumentsComponentVue from '../../components/forms/UploadDocumentsComponent.vue';
import Layout from './Layout.vue';
import storeUtils from "../../utils/storeUtils";
import AuthRequest from "../../model/AuthRequest";
import SpinnerLoader from "../../components/loaders/SpinnerLoader.vue";
import VerificationCompleteModal from "../../components/modals/VerificationCompleteModal.vue";
import router from "../../router";
import UploadDocumentsComponent from "@/components/forms/UploadDocumentsComponent.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import {RuthdoAlert} from "ruthly";


export default {
    name:"UploadDocs",
    props:['inRoute','isComponent','show', 'disableShow'],
    data(){
      return {
        uploadModel:AuthRequest.upload,
        LocalMarkUpPlaceHolder:"Choose Document Type",
        localDropdown:false,
        show:false,
        cac_document:null,
        id_document:null,
        isChangingIdDocument:false,
        isChangingCacDocument:false,

      }
    },
    components:{
      OnBoardingButton,
        Layout,
        UploadDocumentsComponentVue,
        SpinnerLoader,
      VerificationCompleteModal,
      UploadDocumentsComponent

    },

    methods:{
      toggleLocalDropdown(){
        this.localDropdown = !this.localDropdown
      },

      get_business_documents(value){
        this.uploadModel.type = 'cac_document'
        this.cac_document = value
      },

      get_personal_documents(value){
        this.uploadModel.type = 'id_document'
        this.id_document = value
      },


      async saveBusinessDocument(){
        this.uploadModel.file = this.cac_document
        await storeUtils.fireAway().auth?.handleUploadProfilePic(this.uploadModel)
        await Object.keys(this.uploadModel).forEach(key => {
          return this.uploadModel[key] = null
        })
      },

      async savePersonalDocument(){
         this.uploadModel.file = this.id_document
        if(this.LocalMarkUpPlaceHolder !== "Choose Document Type"){
          await storeUtils.fireAway().auth?.handleUploadProfilePic(this.uploadModel);
        } else{
          RuthdoAlert({title:"Please Choose Document Type", icon:'error'})
        }
        await Object.keys(this.uploadModel).forEach(key => {
          return this.uploadModel[key] = null
        })
      },


    },

    computed:{
      default_theme(){
        return storeUtils.fireAway().theme.getDefault_theme
      },

      custom_theme(){
        return storeUtils.fireAway().theme.custom_theme
      },
      loading(){
        return storeUtils.fireAway().auth?.getLoading
      },
      getBusinessProfile(){
        if(localStorage.businessProfile){
          const business = JSON.parse(localStorage?.businessProfile)
          return business
        }

      },
      getCurrentRoute(){
        return router.currentRoute.value.name
      }
    },

    mounted() {
      if(this.getCurrentRoute === 'Settings'){
        this.show = false
      }
  }

}
</script>

<style scoped>
.doc_pending_wrapper{
  display: flex;
  gap: 1.5rem;
  position: relative;
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

.choose_document_type{
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.875rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid  #EFF2F7;
  margin-bottom: 1rem;

}

.img-uploaded{
  width: 10rem;
  height: 10rem;
}

.doc_type{
  color: #2D3139;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.personal-docs{
    margin-top:2.5rem;
    margin-bottom:1rem;
    width: 37.125rem;
}

.doc_type_item{
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: 1rem;
  font-size: 0.9rem;

}

.doc_type_item:hover{
  font-size: 1rem;
  transform: scale(1);
}

.doc_type_options{
  display: flex;
  width: 36rem;
  flex-direction: column;
  align-items: flex-start;
  /*gap: 1.25rem;*/
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  position: absolute;
  left: 0;
  /*bottom: -60px;*/
  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.choose_document_type{
    display: flex;
    width: 35.4375rem;
    height: 4rem;
    padding: 0.875rem 1.25rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.375rem;
    border: 1px solid  #EFF2F7;

}

.txt-1{
    color: var(--app-default-primary);

    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.txt-2{
    color: #6B6C7E;

    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
}

.business_information{
    /* padding-top: 1.5rem; */
    padding-bottom:1.5rem;
    color:  #272833;
    /* bold/24px */
    font-family: 'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 116.667% */
}


.doc_type{
    color: #2D3139;
font-family: 'Product Sans';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 175% */
}

.business_information_card{
    width: 47rem;
}


@media (max-width: 1024px) {
  .business_information_card{
    width: 100%;
    border: none;
  }

  .choose_document_type{
    width: 100%;
  }

  .personal-docs{
    width: 100%;
  }


  .doc_pending_wrapper{
    flex-direction: column;
  }

  .doc_pending{
    width: 100%;
  }
}

</style>