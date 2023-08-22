<template>
    <layout>

        <template v-slot:maker>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="72" viewBox="0 0 4 72" fill="none">
                <rect width="4" height="72" rx="2" fill="#CDCED9"/>
                <rect width="4" height="20" rx="2" fill="#720F73"/>
            </svg>
        </template>
        <template v-slot:children>
            <div>
                <div class="business_information">Business Information</div>

                <div class="business_information_card">
                    <div class="business_information_card_head">
                        <div class="inner_head">
                            <div class="profile">
                              {{ getFirstLettersOfFirstAndLastName(getUser?.first_name + ' ' + getUser?.last_name) }}
                                <div class="upload_icon" @click="initiateUpload">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="28" height="28" rx="14" fill="#F8F1F8"/>
                                        <path d="M15.8623 18.3373C17.1602 18.3373 18.2109 17.2863 18.2109 15.9888C18.2109 14.6913 17.1602 13.6403 15.8623 13.6403C14.5645 13.6403 13.5137 14.6913 13.5137 15.9888C13.5137 17.2863 14.5645 18.3373 15.8623 18.3373Z" fill="#89128A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1787 9.94122H19.1494V8.52838C19.1494 7.6925 18.4629 7.00635 17.627 7.00635H13.5479C12.7119 7.00635 12.0254 7.6925 12.0254 8.52838V9.94122H7.79004C6.80176 9.94122 6 10.7428 6 11.7284V19.3635C6 20.3491 6.80176 21.1537 7.79004 21.1537H20.1816C21.167 21.1537 21.9717 20.3522 21.9717 19.3635V11.7284C21.9688 10.7428 21.167 9.94122 20.1787 9.94122ZM7.88086 12.7015C7.88086 13.2192 8.30176 13.6403 8.81934 13.6403C9.33691 13.6403 9.75879 13.2192 9.75879 12.7015C9.75879 12.1838 9.33691 11.7627 8.81934 11.7627C8.30176 11.7627 7.88086 12.1838 7.88086 12.7015ZM15.8623 20.215C13.5293 20.215 11.6357 18.3218 11.6357 15.9888C11.6357 13.6559 13.5293 11.7627 15.8623 11.7627C18.1943 11.7627 20.0879 13.6559 20.0879 15.9888C20.0879 18.3218 18.1982 20.215 15.8623 20.215Z" fill="#89128A"/>
                                        <path d="M11.6357 8.58447C11.6357 8.09796 11.2363 7.69873 10.75 7.69873H8.36719C7.88086 7.69873 7.48145 8.09796 7.48145 8.58447V9.28937H11.6357V8.58447Z" fill="#89128A"/>
                                    </svg>
                                </div>
                                <input id="logo" hidden accept="image/*" type="file">
                            </div>
                            <div> 
                                <p class="upload_business_logo">Upload Business logo</p>
                                <p class="size_limit">Size limit: 5MB (jpg, jpeg or png)</p>
                            </div>
                        </div>
                    </div>
                    <div class="business_information_card_body">
                        <div> 
                            <OnBoardingInput :error="errors ? errors.email : null" type="text" :label="'Business Name'" :placeholder="getBusinessProfile.name" :width="'100%'"  @inputValue="(value) => model.name = value" ></OnBoardingInput>
                            <OnBoardingInput :error="errors ? errors.email : null" type="email" :label="'Business Email address'" :placeholder="getBusinessProfile.email" :width="'100%'"  @inputValue="(value) => model.email = value"></OnBoardingInput>
                            <OnBoardingInput :error="errors ? errors.address : null" type="text" :label="'Address'" :width="'100%'" :placeholder="getBusinessProfile.address"  @inputValue="(value) => model.address = value"></OnBoardingInput>
                            <OnBoardingInput :error="errors ? errors.website : null" type="text" :label="'Business  Website'" :width="'100%'" :placeholder="getBusinessProfile.website"  @inputValue="(value) => model.website = value"></OnBoardingInput>
                            <OnBoardingInput :error="errors ? errors.cac_number : null" type="text" :label="'CAC Registration Number'" :width="'100%'" :placeholder="getBusinessProfile.cac_number === 'pending' ? '' : getBusinessProfile.cac_number"  @inputValue="(value) => model.cac_number = value"></OnBoardingInput>
                        </div>
                        <div class="reach_out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44569 8.7758C9.44569 9.20513 9.09725 9.55357 8.66791 9.55357C8.23858 9.55357 7.89014 9.20513 7.89014 8.7758V4.88691C7.89014 4.45757 8.23858 4.10913 8.66791 4.10913C9.09725 4.10913 9.44569 4.45757 9.44569 4.88691V8.7758ZM8.66791 11.8887C8.23858 11.8887 7.89014 11.5403 7.89014 11.111C7.89014 10.6816 8.23858 10.3332 8.66791 10.3332C9.09725 10.3332 9.44569 10.6816 9.44569 11.111C9.44569 11.5403 9.09725 11.8887 8.66791 11.8887ZM8.6684 0.221191C4.37274 0.221191 0.890625 3.7033 0.890625 7.99897C0.890625 12.2946 4.37274 15.7767 8.6684 15.7767C12.9641 15.7767 16.4462 12.2946 16.4462 7.99897C16.4462 3.7033 12.9641 0.221191 8.6684 0.221191Z" fill="#1D1E2C"/>
                            </svg>
                            <p>Please reach out to <span class="support">support</span> if you need to change your business website domain</p>
                            
                        </div>
                    </div>
                    <div class="business_information_card_footer">
                        <div>
                            <OnBoardingButton @click="handleUpdateProfile" :loading="loading" border="none" :textNode="'Continue'" :btnWidth="'11.0625rem'"></OnBoardingButton>
                        </div>
                    </div>
                </div>
             </div>



        </template>


    </layout>

</template>

<script>
import Layout from './Layout.vue';
import OnBoardingInput from '../../components/Inputs/OnBoardingInput.vue';
import OnBoardingButton from '../../components/Buttons/OnBoardingButton.vue';
import AuthRequest from "../../model/AuthRequest";
import storeUtils from "../../utils/storeUtils";
import {RuthdoAlert} from "ruthly";
import {getFirstLettersOfFirstAndLastName} from "../../mixins/lettersExtractor";
export default {
    name:"BusinessInfo",
    components:{
        Layout,
        OnBoardingInput,
        OnBoardingButton,
    },
  data(){
      return{
        model:AuthRequest.businessProfile,
        error:{
          name:null,
          email:null,
          address:null,
          website:null,
          cac_number:null,
        },
        uploadModel:AuthRequest.upload,
        getFirstLettersOfFirstAndLastName
      }
  },

  methods:{
    initiateUpload(){
      document.getElementById('logo').click()
    },

    async triggerUpload(obj){
      await storeUtils.fireAway().auth?.handleUploadProfilePic(obj)
    },

    async handleUpload(file) {

      const formData = new FormData();
      if (!file.length) return;
      await formData.append('file',file[0], file[0].name)
      // console.log(formData)
      await this.triggerUpload(this.uploadModel)
      this.uploadModel.type = 'logo'
      this.uploadModel.file = formData


      // await StoreUtils.dispatch(StoreUtils.actions.documents.uploadDocumentToS3, formData)

      // try {
      //   reader.onload = async (e) => {
      //     // this.model.base64 = e.target.result
      //     // this.model.directorType = this.directorType
      //     // this.model.username = this.fileName+"-"+StoreUtils.rootGetters(StoreUtils.getters.auth.getCurrentOrganization).organisationName.replace(" ","-").toLowerCase()
      //     // await this.$store.dispatch(this.uploadType, this.model);
      //     // this.hide();
      //     // this.loadData();
      //     // await console.log(e)
      //
      //   };
      //   reader.readAsDataURL(file);
      //   this.$emit('input', file);
      // } catch (e) {
      //   console.warn(e.message)
      // }

    },


    handleUpdateProfile(){
      if(!this.getBusinessProfile.name){
        this.error.name = "business name is required"
        storeUtils.fireAway().auth?.commitErrors(this.error)
        RuthdoAlert({title:"business name is required", icon:'error'})
      }else {
        this.model.name = this.model.name ? this.model.name : this.getBusinessProfile.name
        this.model.email = this.model.email ? this.model.email : this.getBusinessProfile.email
        this.model.address = this.model.address ? this.model.address : this.getBusinessProfile.address
        this.model.website = this.model.website ? this.model.website : this.getBusinessProfile.website
        this.model.cac_number = this.model.cac_number ? this.model.cac_number : this.getBusinessProfile.cac_number
        storeUtils.fireAway().auth?.commitErrors(this.error)
        storeUtils.fireAway().auth?.updateBusinessProfile()
      }


    }
  },

  computed:{
      loading(){
        return storeUtils.fireAway().auth?.getLoading
      },
      errors(){
        return storeUtils.fireAway().auth?.getErrors
      },

      getBusinessProfile(){
        const business = JSON.parse(localStorage.businessProfile)
        return business
      },

      getUser(){
        const user = JSON.parse(localStorage.user)
        return user
      }
  },

}
</script>

<style scoped>
.upload_business_logo{
    color:  #1D1E2C;

    /* 16px/bold */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 175% */
}

.size_limit{
    color:  #575A65;

    /* caption/12px/regular */
    font-family:'Product Sans';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    margin-top:0.25rem;
}

.inner_head{
    display: flex;
    padding: 1.5rem;
    gap:1.25rem;
    align-items: center;
}

.business_information_card_body{
    padding: 1.5rem;
}

.reach_out{
    display: flex;
    align-items: center;
    gap:0.5rem;
}

.support{
    color: #89128A;
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
}

.reach_out p{
    color:  #1D1E2C;
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    letter-spacing: 0.0035rem;
}

.business_information_card_footer{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 1.5rem;
    justify-content: end;
    display: flex;
}
.profile{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid;
    width: 5rem;
    height:5rem;
    border-radius: 360px;
    color: #FFF;
    background: #000;
    position: relative;

    /* bold/24px */
    font-family:'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 116.667% */
}

.upload_icon{
    position: absolute;
    bottom: -10px;
    right: 0;
  cursor: pointer;
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

.business_information_card{
    width: 47rem;
    /* height: 47.625rem; */
    flex-shrink: 0;
    background: #FFF;
}
@media screen {
  .business_information_card{
    width: 100%;
  }
}
</style>