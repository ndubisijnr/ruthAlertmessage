<template>
  <verification-complete-modal v-if="getBusinessProfile?.cac_document && getBusinessProfile?.id_document && show"></verification-complete-modal>

  <layout :in_route="inRoute" :is-component="isComponent">
        <template v-slot:maker>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="72" viewBox="0 0 4 72" fill="none">
            <rect width="4" height="62.348" rx="2" fill="#CDCED9"/>
            <rect y="51.0898" width="4" height="20.9103" rx="2" fill="#2C6CAC"/>
          </svg>
        </template>
        <template v-slot:children>
            <div style="margin-bottom: 50px">
                <div class="business_information">Document Upload</div>

                <div class="business_information_card">
                  <div>
                      <p class="txt-1">Company Document</p>
                      <p class="txt-2">Corporate  Affairs Commission - CAC</p>
                  </div>

                  <input  id="compDoc" :disabled="loading" accept="/*" type="file" @change="handleUploadCompany($event.target.files)" hidden>


                  <div v-if="!getBusinessProfile.cac_document" class="component_wrapper">

                      <div  style="width: 35.4375rem">
                          <p class="txt-3">Kindly upload your Certification of Incorporation</p>

                          <div class="input-area">
                              <spinner-loader v-if="loading && uploadModel.type === 'cac_document'"></spinner-loader>

                              <section v-else style="text-align: center">
                              <img src="../../assets/group-folders.svg" />
                              <div>
                                  <p class="txt-4">Drop your files here or <span style="color:#2C6CAC;text-decoration: underline;cursor: pointer;" @click="handleCompanylDoc">click here </span> to upload</p>
                                  <p class="txt-5">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
                              </div>
                            </section>

                          </div>

                      </div>

                  </div>

                  <div v-else class="doc_pending_wrapper">
                  <div class="doc_pending">
                    <img class="img-uploaded" id="company_image_preview" :src="getBusinessProfile.cac_document" />
                    <img v-if="getBusinessProfile?.is_cac_verified === 'false'" src="../../assets/Settings/notVerified.svg" />
                    <img src="../../assets/cancle.svg" @click="handleCompanylDoc" style="position:absolute;right: 0;top:0;cursor: pointer;width: 40px" />

                  </div>
                  <img  v-if="getBusinessProfile?.is_cac_verified === 'false'" src="../../assets/Settings/pendingDoc.svg" />
                </div>



                  <div class="personal-docs">
                      <p class="txt-1">Personal Document</p>
                      <p class="txt-2">Kindly provide one of the following personal documents for verification purposes: Driver's License, International Passport, NIN (National Identification Number) Slip.</p>
                </div>

                  <input id="personalDoc" accept="/*" type="file" @change="handleUploadPersonal($event.target.files)" hidden>

                  <div v-if="!getBusinessProfile.id_document">

                    <div class="choose_document_type" style="position: relative;">

                      <div style="">
                        <p class="doc_type"> {{ LocalMarkUpPlaceHolder }}</p>
                        <div class="doc_type_options" v-show="localDropdown">
                          <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Driver\'s License',toggleLocalDropdown(),uploadModel.type= 'Driver\'s License'">Driver's License</p>
                          <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='International Passport', toggleLocalDropdown(),uploadModel.type= 'International Passport'" >International Passport</p>
                          <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='NIN (National Identification Number) Slip', toggleLocalDropdown(),uploadModel.type = 'NIN (National Identification Number) Slip'" >NIN (National Identification Number) Slip</p>

                        </div>

                      </div>
                      <img src="../../assets/Monotone.svg" style="cursor: pointer" @click="toggleLocalDropdown" />
                    </div>

                    <div class="component_wrapper">

                          <div style="width: 35.4375rem">
                            <p class="txt-3">Kindly upload your {{LocalMarkUpPlaceHolder}}</p>

                            <div class="input-area" >
                                  <spinner-loader v-if="loading && uploadModel.type === 'id_document'"></spinner-loader>

                                  <section style="text-align: center" v-else>
                                    <img src="../../assets/group-folders.svg" />

                                    <div>
                                      <p class="txt-4">Drop your files here or <span style="color:#2C6CAC;text-decoration: underline;cursor: pointer;" @click="handlePersonalDoc">click here </span> to upload</p>

                                      <p class="txt-5">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
                                  </div>
                                  </section>

                                </div>

                          </div>

                      </div>

                </div>

                  <div v-else class="doc_pending_wrapper">
                    <div class="doc_pending">
                      <img class="img-uploaded" id="person_image_preview" :src="getBusinessProfile.id_document" />
                      <img v-if="getBusinessProfile?.is_id_verified === 'false'" src="../../assets/Settings/notVerified.svg" />
                      <img src="../../assets/cancle.svg" @click="handlePersonalDoc" style="position:absolute;right: 0;top:0;cursor: pointer;width: 40px" />

                    </div>
                    <img v-if="getBusinessProfile?.is_id_verified === 'false'" src="../../assets/Settings/pendingDoc.svg" />
                  </div>

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


export default {
    name:"UploadDocs",
    props:['inRoute','isComponent','show', 'disableShow'],
    data(){
      return {
        uploadModel:AuthRequest.upload,
        LocalMarkUpPlaceHolder:"Choose Document Type",
        localDropdown:false,
        show:true

      }
    },
    components:{
        Layout,
        UploadDocumentsComponentVue,
        SpinnerLoader,
      VerificationCompleteModal

    },

    methods:{
      toggleLocalDropdown(){
        this.localDropdown = !this.localDropdown
      },
        handlePersonalDoc(){
          console.log('click')
            const input = document.getElementById('personalDoc')
            input.click()
        },

      handleCompanylDoc(){
            const input = document.getElementById('compDoc')
            input.click()
        },

      parentDisableShow(){
        this.disableShow()
      },


      async triggerUpload1(obj){
        await storeUtils.fireAway().auth?.handleUploadProfilePic(obj)
      },

      async triggerUpload2(obj){
        await storeUtils.fireAway().auth?.handleUploadProfilePic(obj)
      },

      async handleUploadCompany(file){
        this.uploadModel.type = null;
        this.uploadModel.file = null;
        if (!file.length) return;
        this.uploadModel.type = 'cac_document'
        this.uploadModel.file = file[0]
        await this.triggerUpload1(this.uploadModel)
      },

      async handleUploadPersonal(file){
        this.uploadModel.type = null;
        this.uploadModel.file = null;
        if (!file.length) return;
        this.uploadModel.type = 'id_document'
        this.uploadModel.file = file[0]
        await this.triggerUpload2(this.uploadModel)
      }

    },

    computed:{
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
  width: 4rem;
  height: 2.65rem;
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

}

.doc_type_item:hover{
  background: #89128A;
  color: white;
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

.txt-5{
    color:  #6B6C7E;
    text-align: center;

    /* Subtext/14px/Regular */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    text-align: center;
}

.txt-4{
    color:  #1D1E2C;
text-align: center;

/* 16px/bold */
font-family: 'Product Sans';
font-size: 1rem;
font-style: normal;
font-weight: 700;
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


.txt-3{
    color:  #6B6C7E;


/* Subtext/14px/Regular */
font-family:'Product Sans';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; /* 171.429% */
margin-bottom: 0.5rem;

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

.component_wrapper{
  width: 35.4375rem;
  height: 14.4375rem;
  background: #FFF;
  display: flex;
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-top:1rem;

}


.input-area{
    display: flex;
    height: 9.6875rem;
    padding: 1.5rem 2.4375rem 1.6875rem 2.4375rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    border: 1px dashed  #CDCED9;
    flex-direction: column;
    width: 100%;
}


@media (max-width: 1024px) {
  .business_information_card{
    width: 100%;
    border: none;
  }
  .component_wrapper{
    width: 100%;
    height: auto;
  }
  .choose_document_type{
    width: 100%;
  }

  .personal-docs{
    width: 100%;
  }

  .input-area{
    height: auto;
  }
  .doc_pending_wrapper{
    flex-direction: column;
  }

  .doc_pending{
    width: 100%;
  }
}

</style>