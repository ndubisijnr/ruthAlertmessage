<script>
import Layout from "@/components/modals/Layout.vue";
import OnBoardingButton from "@/components/Buttons/OnBoardingButton.vue";
import storeUtils from "@/utils/storeUtils";
import router from "@/router";
import {lightenColor} from "@/mixins/themeUtils";
import UploadDocumentsComponent from "@/components/forms/UploadDocumentsComponent.vue";
import OnBoardingInput from "@/components/Inputs/OnBoardingInput.vue";
import DatePicker from "@/components/Inputs/custom-date-picker/DataPicker.vue";
import TransactionRequest from "@/model/TransactionRequest";
export default {
  name: "WalletCreation",
  components:{OnBoardingButton, Layout,UploadDocumentsComponent,OnBoardingInput,DatePicker},
  data(){
    return{
      lightenColor,
      model:TransactionRequest.walletSetup
    }
  },
  methods:{
    cancel(){
      this.$emit('cancel', false)
    },

    closeModal(){
     this.cancel()

    },

    doSetup(){
      storeUtils.fireAway().transaction.walletSetup(this.model).then(()=>{
        this.closeModal()
      })
    }


  },
  computed: {
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },
    loading(){
      return storeUtils.fireAway().transaction.getLoading
    },
    custom_theme(){
      return storeUtils.fireAway().theme.custom_theme
    },
  },
}
</script>

<template>
  <Layout>

    <template v-slot:children>
      <div class="cancel_trigger" @click="closeModal"></div>

      <div class="modal_child" :style="{borderColor:custom_theme ? lightenColor(custom_theme.color) : default_theme.color_light}">
        <div class="cancel" @click="cancel">


          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
            <path d="M0 75C0 94.8912 7.90176 113.968 21.967 128.033C36.0322 142.098 55.1088 150 75 150C94.8912 150 113.968 142.098 128.033 128.033C142.098 113.968 150 94.8912 150 75C150 55.1088 142.098 36.0322 128.033 21.967C113.968 7.90176 94.8912 0 75 0C55.1088 0 36.0322 7.90176 21.967 21.967C7.90176 36.0322 0 55.1088 0 75Z" fill="#F1F2F6"/>
            <path d="M10.6562 27.1084L87.6428 4.50257L117.129 104.922L40.1427 127.528L10.6562 27.1084Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.876 11.1797H106.115V115.837H25.876V11.1797Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M36.3428 21.6475H95.649V32.1137H36.3428V21.6475Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.2725 49.5537H71.2281" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.2725 56.5332H88.6712" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.2725 63.5098H79.975" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.2725 84.4404H74.7156" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.2725 91.417H92.1587" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.2725 98.3965H85.1818" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M39.654 62.353V57.727H38.25V56.575H39.654V55.099H38.25V53.947H39.654V49.501H41.526L43.236 53.947H45.36V49.501H46.782V53.947H48.186V55.099H46.782V56.575H48.186V57.727H46.782V62.353H44.892L43.182 57.727H41.058V62.353H39.654ZM41.022 53.947H41.778L41.022 51.715H40.95L41.022 53.947ZM41.058 56.575H42.75L42.21 55.099H41.022L41.058 56.575ZM44.19 56.575H45.396L45.36 55.099H43.65L44.19 56.575ZM45.36 59.815H45.432L45.378 57.727H44.622L45.36 59.815Z" fill="#1D1E2C"/>
            <path d="M39.654 98.352V93.726H38.25V92.574H39.654V91.098H38.25V89.946H39.654V85.5H41.526L43.236 89.946H45.36V85.5H46.782V89.946H48.186V91.098H46.782V92.574H48.186V93.726H46.782V98.352H44.892L43.182 93.726H41.058V98.352H39.654ZM41.022 89.946H41.778L41.022 87.714H40.95L41.022 89.946ZM41.058 92.574H42.75L42.21 91.098H41.022L41.058 92.574ZM44.19 92.574H45.396L45.36 91.098H43.65L44.19 92.574ZM45.36 95.814H45.432L45.378 93.726H44.622L45.36 95.814Z" fill="#1D1E2C"/>
            <path d="M106.795 109.818L111.394 105.218L122.894 116.716L118.295 121.316L106.795 109.818Z" fill="white" stroke="#1D1E2C" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M48.3252 140.589C48.3252 141.632 51.3626 142.632 56.7693 143.369C62.176 144.107 69.509 144.521 77.1552 144.521C84.8014 144.521 92.1344 144.107 97.5411 143.369C102.948 142.632 105.985 141.632 105.985 140.589C105.985 139.546 102.948 138.546 97.5411 137.809C92.1344 137.071 84.8014 136.657 77.1552 136.657C69.509 136.657 62.176 137.071 56.7693 137.809C51.3626 138.546 48.3252 139.546 48.3252 140.589Z" fill="#E5E9F2"/>
          </svg>
        </div>
        <div class="child_body">
          <p class="p1">You’re almost there!</p>
          <p class="p3">
            To get access to you Transaction wallet, Please provide the information below. A unique account number would
            be created for you for the purpose of internal transactions.
          </p>

          <div>
            <p class="p1-2">Wallet Account Setup</p>

            <div>
              <OnBoardingInput label="BVN" @inputValue="e => model.bvn = e.value"></OnBoardingInput>
              <DatePicker label="Date Of Birth"></DatePicker>
            </div>


          </div>

        </div>
        <upload-documents-component id="utilities_bills"></upload-documents-component>

        <div class="child_footer">
          <OnBoardingButton @click="doSetup" :disabled="loading" :loading="loading"  :height="'2.75rem'" btn-width="100%" :textNode="'Submit'"></OnBoardingButton>
         </div>
        </div>

    </template>
  </Layout>
</template>

<style scoped>
a{
  text-decoration: none;
}

.cancel_trigger{
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
}

.modal_child{
  display: block;
  width: 37.5rem;
  justify-content: center;
  //align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid;
  background:  #FFF;
  transform: scale(.9);

  /* Shadow / Small */
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
  position: absolute;
}



.cancel{
  display: flex;
  justify-content: center;
  cursor: pointer;
  background: #2C6CAC;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  padding: 1rem 13rem;
}

.child_body{
  margin: 1.5rem;
}

.inner_child_footer{
  display: flex;
  align-items: center;
  gap:1rem;
}

.child_footer{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 2.5rem;
  padding: 0 11.96744rem;

}

.p1{
  color: #272833;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.p1-2{
  color:  #2D3139;
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  margin: 1.5rem 0;
}

.p2{

  /* 16px/bold */
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}


.p3{
  color: rgba(84, 89, 94, 0.60);

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}


@media (max-width: 1024px) {
  .modal_child{
    width: 90%;

  }

  .child_footer{
    justify-content: center;
  }


}

@media (max-width:500px) {
  .inner_child_footer{
    flex-direction: column;
  }
}
</style>