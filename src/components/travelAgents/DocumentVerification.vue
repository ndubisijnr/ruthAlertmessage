<template>
  <index v-slot:children>
    <div style="margin-bottom: 5rem">
      <p class="business_information">Document Verification</p>

   
      <div class="document_verification_wrapper">
          <div class="business_information_card">

            <div>
             
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
                    <img class="img-uploaded" :src="getTravelAgent?.cac_document" title="Company Document" />
                    <p class="uploaded-on">Uploaded on {{convertToWord(getTravelAgent?.created_at)}}</p>
                  </div>
                  <on-boarding-button @click="viewDocuments(getTravelAgent?.cac_document)" color="#2C6CAC" btn-width="9rem" height="2.5rem" text-node="View Document" background="transparent"></on-boarding-button>
                </div>
              </div>

              <div class="reason_area">
                <p class="action">Actions</p>
                <div style="display: flex;gap: 1rem;margin-bottom: 1rem;">
                  <div v-if="getTravelAgent?.is_cac_verified === 'true' && !edit_iscac" style="display: flex;gap:0.5rem;align-items: center;cursor: pointer;">
                    <svg  @click="cac_verify(null), edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                  </svg>
                    <label>Approved</label>
                  </div>
                 
                  <div v-else style="display: flex;gap:0.5rem;align-items: center;cursor: pointer;">
                    <svg v-if="model.is_cac_verified !== 'true'" @click="cac_verify('true'),edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" fill="#EAF0F7" stroke="#C0D3E6"/>
                    </svg>
                    <svg v-if="model.is_cac_verified === 'true'" @click="cac_verify(null),edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                    </svg>
                    <label>Approved</label>
                  </div>

                  <div v-if="getTravelAgent?.is_cac_verified === 'pending' && !edit_iscac" style="display: flex;gap:0.5rem;align-items: center;cursor: pointer;">
                    <svg  @click="cac_verify(null), edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                  </svg>
                    <label>Approved</label>
                  </div>
                  <div  style="display: flex;gap:0.5rem;align-items: center;">
                    <svg v-if="model.is_cac_verified !== 'pending'" @click="cac_verify('pending'),edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" fill="#EAF0F7" stroke="#C0D3E6"/>
                    </svg>
                    <svg v-if="model.is_cac_verified === 'pending'" @click="cac_verify(null),edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                    </svg>
                    <label>Pending</label>
                  </div>

                  <div  style="display: flex;gap:0.5rem;align-items: center;">
                    <svg v-if="model.is_cac_verified !== 'false'" @click="cac_verify('false'),edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" fill="#EAF0F7" stroke="#C0D3E6"/>
                    </svg>
                    <svg v-if="model.is_cac_verified === 'false'" @click="cac_verify(null),edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                    </svg>
                    <label>Decline</label>
                  </div>
                </div>
                <div>
                  <input class="verification_reason" v-model="model.cac_verification_reason" placeholder="Reason for Action">
                </div>

              
              </div>

              <!-- <div>
                  <OnBoardingButton @click="handleApprove()" :loading="loading && !id" :disabled="loading" text-node="Save" btn-width="8rem" height="2.5rem"></OnBoardingButton>
              </div> -->

            </div>
            <div>

              <div class="personal-docs">
                <p class="txt-1">Personal Document</p>
                <p class="txt-2">Driver's License, International Passport, NIN (National Identification Number) Slip.</p>
              </div>

              {{ getTravelAgent.cac_verification_reason }}

              <div v-if="!getTravelAgent.id_document" class="component_wrapper">

                <p>Nothing to show</p>

              </div>

              <div v-else class="doc_pending_wrapper">
                <div class="doc_pending">
                  <div style="display: flex;gap: 0.75rem;align-items: center">
                    <img class="img-uploaded" :src="getTravelAgent?.id_document" title="Personal Document" />
                    <p class="uploaded-on">Uploaded on {{convertToWord(getTravelAgent?.created_at)}}</p>
                  </div>
                  <on-boarding-button @click="viewDocuments(getTravelAgent?.id_document)" color="#2C6CAC" btn-width="9rem" height="2.5rem" text-node="View Document" background="transparent"></on-boarding-button>

                </div>
              </div>

              <div class="reason_area">
                <p class="action">Actions</p>
                <div style="display: flex;gap: 1rem;margin-bottom: 1rem;">
                  <div v-if="getTravelAgent?.is_id_verified === 'true' && !edit_iscac" style="display: flex;gap:0.5rem;align-items: center;cursor: pointer;">
                    <svg  @click="idVerify(null), edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                  </svg>
                  <label>Approved</label>
                </div>

                  <!--------------->
                  <div v-else style="display: flex;gap:0.5rem;align-items: center;">
                    <svg v-if="model.is_id_verified !== 'true'" @click="idVerify('true')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" fill="#EAF0F7" stroke="#C0D3E6"/>
                    </svg>
                    <svg v-if="model.is_id_verified === 'true'" @click="idVerify(null)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                    </svg>
                    <label>Approved</label>
                  </div>

                  <div  v-if="getTravelAgent?.is_id_verified === 'pending' && !edit_iscac" style="display: flex;gap:0.5rem;align-items: center;">
                    <svg @click="idVerify(null), edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                      </svg>
                      <label>Pending</label>
                  </div>
                  <!--------------->
                  <div v-else  style="display: flex;gap:0.5rem;align-items: center;">
                    <svg v-if="model.is_id_verified !== 'pending'" @click="idVerify('pending')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" fill="#EAF0F7" stroke="#C0D3E6"/>
                    </svg>
                    <svg v-if="model.is_id_verified === 'pending'" @click="idVerify(null)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                    </svg>
                    <label>Pending</label>
                  </div>


                  <div v-if="getTravelAgent?.is_id_verified === 'false' && !edit_iscac" style="display: flex;gap:0.5rem;align-items: center;">
                    <svg @click="idVerify(null), edit_iscac = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                      </svg>
                      <label>Decline</label>
                  </div>

                  <!--------------->
                  <div v-else style="display: flex;gap:0.5rem;align-items: center;">
                    <svg v-if="model.is_id_verified !== 'false'" @click="idVerify('false')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" fill="#EAF0F7" stroke="#C0D3E6"/>
                    </svg>
                    <svg v-if="model.is_id_verified === 'false'" @click="idVerify(null)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#2C6CAC"/>
                    </svg>
                    <label>Decline</label>
                  </div>
                </div>
                <div>
                  <input class="verification_reason" v-model="model.id_verification_reason" placeholder="Reason for Action">
                </div>
              </div>
              <div>
                  <OnBoardingButton @click="handleApprove('id')" :disabled="loading" :loading="loading && id" text-node="Save" btn-width="8rem" height="2.5rem"></OnBoardingButton>
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
      edit_iscac:false,
      model:new TravelAgentRequest().verifyBusiness,
      id:false,
      cacModel:{
        verification_reason:null,
        is_cac_verified:null
      },
      docModel:{
        verification_reason:null,
        is_id_verified:null
      },
    }
  },
  components:{OnBoardingButton, Index},
  methods:{
    viewDocuments(value){
      // <a :href="getTravelAgent?.cac_document" target="_blank">
         const href = document.createElement('a')
         href.setAttribute('href', value)
         href.setAttribute('target', '_blank')
         setTimeout(() => {
          href.click()
         },500)
        
    },

    idVerify(value){
      this.model.is_id_verified=value
    },

    cac_verify(value){
      this.model.is_cac_verified=value
    },

    async handleApprove(document_to_verify){
      this.model.user_id = this.getTravelAgent.id
      // if(document_to_verify === 'id'){
      //   this.id=true
      //   this.model.is_id_verified = this.docModel.is_id_verified
      //   this.model.verification_reason = this.docModel.verification_reason
      // }else{
      //   this.id=false
      //   this.model.is_cac_verified = this.cacModel.is_cac_verified
      //   this.model.verification_reason = this.cacModel.verification_reason
      // }
      await storeUtils.fireAway().travelAgent?.handleVerifyBusiness(this.model)

      this.model = new TravelAgentRequest().verifyBusiness

    }
  },
  computed:{
    loading(){
      return storeUtils.fireAway().travelAgent.getLoading
    },
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

  },
  mounted() {
    this.model.id_verification_reason = this.getTravelAgent?.id_verification_reason
    this.model.cac_verification_reason = this.getTravelAgent?.cac_verification_reason
    this.model.is_id_verified = this.getTravelAgent?.is_id_verified
    this.model.is_cac_verified = this.getTravelAgent?.is_cac_verified
  },
}
</script>

<style scoped>

.document_verification_wrapper{
  width: 58rem;
  height: auto;
  flex-shrink: 0;
}
.action{
  color: var(--primary-main, #2C6CAC);
  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-bottom: 0.37rem;
}
.reason_area{
  margin: 1.5rem 0;
}
.verification_reason{
  display: flex;
  width: 31.3125rem;
  padding: 1.125rem;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  background-color: transparent;
  border: 1px solid var(--secondarytext-default-text-textfield, #E5E9F2);
}

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
  display: flex;
  padding: 1.5rem;
  width: auto;
  height: 8.25rem;
  justify-content: start;
  align-items: center;
  gap: 4.875rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  position: relative;
  margin-top: 1.5rem;

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
  height: 4rem;
  border: none;

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