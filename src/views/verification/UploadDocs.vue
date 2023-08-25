<template>
   <layout :in_route="inRoute" :is-component="isComponent">
        <template v-slot:maker>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="72" viewBox="0 0 4 72" fill="none">
                <rect width="4" height="62.348" rx="2" fill="#CDCED9"/>
                <rect y="51.0898" width="4" height="20.9103" rx="2" fill="#720F73"/>
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

                    <div class="component_wrapper">

                        <div style="width: 35.4375rem">
                            <p class="txt-3">Kindly upload your Certification of Incorporation</p>


                            <div class="input-area">
                                <spinner-loader v-if="loading && uploadModel.type === 'cac_document'"></spinner-loader>

                                <section v-else style="text-align: center">
                                <img src="../../assets/group-folders.svg" />
                                <div>
                                    <p class="txt-4">Drop your files here or <span style="color:#89128A;text-decoration: underline;cursor: pointer;" @click="handleCompanylDoc">click here </span> to upload</p>
                                    <input  id="compDoc" :disabled="loading" accept="image/*" type="file" @change="handleUploadCompany($event.target.files)" hidden>
                                    <p class="txt-5">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
                                </div>
                              </section>

                                 <img id="company_image_preview" src="" />
                            </div>
                            
                        </div>

                        </div>


                    <div class="personal-docs"> 
                        <p class="txt-1">Personal Document</p>
                        <p class="txt-2">Kindly provide one of the following personal documents for verification purposes: Driver's License, International Passport, NIN (National Identification Number) Slip.</p>
                    </div>

                    <div class="choose_document_type" style="cursor: no-drop">
                    
                        <div >
                           <p class="doc_type"> Choose document type</p>
<!--                            <div class="doc_type_options">-->
<!--                              <ul>-->
<!--                                <li>Certification of Incorporation</li>-->
<!--                              </ul>-->
<!--                            </div>-->
                        </div>
                        <img src="../../assets/Monotone.svg" />
                    </div>

                    <div class="component_wrapper">

                        <div style="width: 35.4375rem">
                          <p class="txt-3">Kindly upload any of the above document type</p>

                              <div class="input-area" >
                                <spinner-loader v-if="loading && uploadModel.type === 'id_document'"></spinner-loader>

                                <section style="text-align: center" v-else>
                                  <img src="../../assets/group-folders.svg" />

                                  <div>
                                    <p class="txt-4">Drop your files here or <span style="color:#89128A;text-decoration: underline;cursor: pointer;" @click="handlePersonalDoc">click here </span> to upload</p>
                                    <input id="personalDoc" accept="image/*" type="file" @change="handleUploadPersonal($event.target.files)" hidden>

                                    <p class="txt-5">Upload the recommended format (JPEG, PDF or PNG). Maximum of 5MB</p>
                                </div>
                                </section>

                              </div>

                        </div>

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


export default {
    name:"UploadDocs",
    props:['inRoute','isComponent'],
    data(){
      return {
        uploadModel:AuthRequest.upload,

      }
    },
    components:{
        Layout,
        UploadDocumentsComponentVue,
        SpinnerLoader
    },

    methods:{
        handlePersonalDoc(){
            const input = document.getElementById('personalDoc')
            input.click()
        },

        handleCompanylDoc(){
            const input = document.getElementById('compDoc')
            input.click()
        },

      async triggerUpload(obj){
        await storeUtils.fireAway().auth?.handleUploadProfilePic(obj)
      },



      async handleUploadCompany(file){
        const img = document.getElementById('company_image_preview')
        if (!file.length) return;
        this.uploadModel.type = 'cac_document'
        this.uploadModel.file = file[0]
        //
        // const reader = new FileReader();
        //
        // reader.onload = (e) => {
        //   img.src = e.target.result;
        // };
        //
        // reader.readAsDataURL(file);

        await this.triggerUpload(this.uploadModel)
      },

      async handleUploadPersonal(file){
        if (!file.length) return;
        this.uploadModel.type = 'id_document'
        this.uploadModel.file = file[0]
        await this.triggerUpload(this.uploadModel)
      }

    },

    computed:{
      loading(){
        return storeUtils.fireAway().auth?.getLoading
      },
    }

}
</script>

<style scoped>
.personal-docs{
    margin-top:2.5rem;
    margin-bottom:1rem;
    width: 37.125rem;
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
    color: #B061B1;

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
}

</style>