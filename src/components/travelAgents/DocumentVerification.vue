<template>
  <index v-slot:children>
    <div>
      <div>
        <p class="business_information">Document Verification</p>
        <div class="business_information_card">
          <div>
            <p class="txt-1">Company Document</p>
            <p class="txt-2">Corporate  Affairs Commission - CAC</p>
          </div>

          <div v-if="!getTravelAgent.cac_document" class="component_wrapper">

            <p>Nothing to show</p>
            <!-- display something -->

          </div>

          <div v-else class="doc_pending_wrapper">
            <div class="doc_pending">
              <div style="display: flex;gap: 0.75rem;align-items: center">
                <img class="img-uploaded" id="company_image_preview" :src="getTravelAgent?.cac_document" />
                <p class="uploaded-on">Uploaded on {{convertToWord(getTravelAgent?.created_at)}}</p>
              </div>
              <a :href="getTravelAgent?.cac_document" target="_blank"> <on-boarding-button color="#2C6CAC" btn-width="9rem" height="2.5rem" text-node="View Document" background="transparent"></on-boarding-button></a>
              <div class="approve-area">
              <p class="approve">{{getTravelAgent?.is_cac_verified === 'true' ? 'Approved' : 'Approve' }}</p>
                <svg v-if="getTravelAgent?.is_cac_verified === 'true'" xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
                  <rect x="46" y="33" width="46" height="26" rx="13" transform="rotate(180 46 33)" fill="#2C6CAC"/>
                  <g filter="url(#filter0_d_2183_96383)">
                    <ellipse cx="33.5" cy="20" rx="11.5" ry="12" transform="rotate(180 33.5 20)" fill="white"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_2183_96383" x="12" y="0" width="43" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="5"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2183_96383"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2183_96383" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <div v-else>
                  <svg v-if="checkedCAC" xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
                    <rect x="46" y="33" width="46" height="26" rx="13" transform="rotate(180 46 33)" fill="#2C6CAC"/>
                    <g filter="url(#filter0_d_2183_96383)">
                      <ellipse cx="33.5" cy="20" rx="11.5" ry="12" transform="rotate(180 33.5 20)" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2183_96383" x="12" y="0" width="43" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2183_96383"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2183_96383" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  <svg @click="handleApprove('cac')" v-else xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
                    <rect x="55" y="33" width="46" height="26" rx="13" transform="rotate(180 55 33)" fill="#E4E8F1"/>
                    <g filter="url(#filter0_d_2183_96401)">
                      <ellipse cx="21.5" cy="20" rx="11.5" ry="12" transform="rotate(180 21.5 20)" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2183_96401" x="0" y="0" width="43" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2183_96401"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2183_96401" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>

              </div>

            </div>
          </div>



          <div class="personal-docs">
            <p class="txt-1">Personal Document</p>
            <p class="txt-2">Driver's License, International Passport, NIN (National Identification Number) Slip.</p>
          </div>

          <div v-if="!getTravelAgent.id_document" class="component_wrapper">

            <p>Nothing to show</p>

          </div>

          <div v-else class="doc_pending_wrapper">
            <div class="doc_pending">
              <div style="display: flex;gap: 0.75rem;align-items: center">
                <img class="img-uploaded"  :src="getTravelAgent?.id_document" />
                <p class="uploaded-on">Uploaded on {{convertToWord(getTravelAgent?.created_at)}}</p>
              </div>
              <a :href="getTravelAgent?.id_document" target="_blank"> <on-boarding-button color="#2C6CAC" btn-width="9rem" height="2.5rem" text-node="View Document" background="transparent"></on-boarding-button></a>
              <div class="approve-area">
                <p class="approve">{{getTravelAgent?.is_id_verified === 'true' ? 'Approved' : 'Approve' }}</p>
                <svg v-if="getTravelAgent?.is_id_verified === 'true'" xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
                  <rect x="46" y="33" width="46" height="26" rx="13" transform="rotate(180 46 33)" fill="#2C6CAC"/>
                  <g filter="url(#filter0_d_2183_96383)">
                    <ellipse cx="33.5" cy="20" rx="11.5" ry="12" transform="rotate(180 33.5 20)" fill="white"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_2183_96383" x="12" y="0" width="43" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="5"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2183_96383"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2183_96383" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <div v-else>
                  <svg v-if="checkedDOC" xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
                    <rect x="46" y="33" width="46" height="26" rx="13" transform="rotate(180 46 33)" fill="#2C6CAC"/>
                    <g filter="url(#filter0_d_2183_96383)">
                      <ellipse cx="33.5" cy="20" rx="11.5" ry="12" transform="rotate(180 33.5 20)" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2183_96383" x="12" y="0" width="43" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2183_96383"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2183_96383" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  <svg v-else @click="handleApprove('id')"  xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
                    <rect x="55" y="33" width="46" height="26" rx="13" transform="rotate(180 55 33)" fill="#E4E8F1"/>
                    <g filter="url(#filter0_d_2183_96401)">
                      <ellipse cx="21.5" cy="20" rx="11.5" ry="12" transform="rotate(180 21.5 20)" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2183_96401" x="0" y="0" width="43" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2183_96401"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2183_96401" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  </index>
</template>

<script>
import Index from "../../views/travelAgents/Index.vue"
import {getFirstLettersOfFirstAndLastName, convertToWord} from "../../mixins/lettersExtractor";
import storeUtils from "../../utils/storeUtils";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import TravelAgentRequest from "../../model/TravelAgentRequest";
export default {
  name: "DocumentVerification",
  data(){
    return{
      getFirstLettersOfFirstAndLastName,
      convertToWord,
      model:TravelAgentRequest.verifyBusiness,
      checkedCAC:false,
      checkedDOC:false
    }
  },
  components:{OnBoardingButton, Index},
  methods:{
    handleApprove(type){
      this.model.user_id = this.getTravelAgent.id
      if(type === 'id'){
        this.checkedDOC = true
        this.model.is_id_verified = 'true'
      }else{
        this.checkedCAC = true
        this.model.is_cac_verified = 'true'
      }
      storeUtils.fireAway().travelAgent?.handleVerifyBusiness()

    }
  },
  computed:{
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }

    },

    getTravelAgent(){
      const travelAgent = JSON.parse(localStorage?.travelAgent)
      if(travelAgent){
        return travelAgent
      }
    }

  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.uploaded-on{
  color: #6B6B6B;

  /* Subtext/14px/Regular */
  font-family:'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.approve-area{
  display: flex;
  align-items: center;
  gap: 2.81rem;
}
.approve{
  color: #000;

  /* Body/16px/Regular */
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
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

.business_information{
  color:  #444854;
  /* bold/24px */
  font-family:'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}

.business_information_card{
  width: 47rem;
  /* height: 47.625rem; */
  flex-shrink: 0;
  background: transparent;
}


.doc_pending_wrapper{
  display: flex;
  gap: 1.5rem;
  position: relative;
}
.doc_pending{
  display: inline-flex;
  padding: 1.5rem;
  align-items: center;
  width: 49.375rem;
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
  background: var(--app-default-primary);
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
  background: transparent;
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
  background:transparent;
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

@media (max-width: 1024px) {
  .business_information_card{
    width: 100%;
  }
}
</style>