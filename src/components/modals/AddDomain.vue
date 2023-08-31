<template>
  <layout v-slot:children>
    <div class="modal">
      <div class="modal-header">
        <p class="add-domain">Add Domain</p>
        <img src="../../assets/cancle.svg"  @click="close" style="cursor: pointer"/>
      </div>

      <div class="wrapper">
      <div class="main">
        <div class="modal-body">

          <div class="add-new-domains">
            <div class="add-domain-name">

            <div>
              <p class="whah-domain">What domain would you like to use?</p>
              <p class="sub">You can bring a domain name that you already own, or buy a new one.</p>
            </div>

            <div class="domain-registration">

              <div class="role-options">
                <svg  v-if="whichDomain === 'new'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="#89128A"/>
                  <rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
                  <rect x="5" y="5" width="10" height="10" rx="5" fill="#89128A"/>
                </svg>
                <svg @click="whichDomain = 'new'" v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#C0CCDA"/>
                </svg>
                <div style="width: 100%;" >
                  <p class="p-2" >Register a new domain</p>
                  <div v-show="whichDomain === 'new'" style="margin-top: 0.75rem" class="animate__animated animate__fadeIn">
                    <on-boarding-input :info="'WWW.'" label="Enter your Domain" @inputValue="value => createModel.domain = value" :disabled="getLoading"></on-boarding-input>
                  </div>
                </div>
              </div>

              <div class="role-options">
                  <svg v-if="whichDomain === 'existing'"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="10" fill="#89128A"/>
                    <rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
                    <rect x="5" y="5" width="10" height="10" rx="5" fill="#89128A"/>
                  </svg>
                  <svg @click="whichDomain = 'existing'" v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#C0CCDA"/>
                  </svg>
                  <div style="width: 100%;">
                    <p class="p-2" >Add Existing Domain</p>
                      <div v-show="whichDomain === 'existing'" class="animate__animated animate__fadeIn" style="margin-top: 0.75rem">
                        <on-boarding-input label="Enter your Domain" @inputValue="value => createModel.domain = value" :disabled="getLoading"></on-boarding-input>
                      </div>
                  </div>
              </div>

              <div class="unavailable" v-if="getDomain">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26335 9.83151C9.26335 10.2915 8.89001 10.6648 8.43001 10.6648C7.97001 10.6648 7.59668 10.2915 7.59668 9.83151V5.66484C7.59668 5.20484 7.97001 4.83151 8.43001 4.83151C8.89001 4.83151 9.26335 5.20484 9.26335 5.66484V9.83151ZM8.43001 13.1667C7.97001 13.1667 7.59668 12.7934 7.59668 12.3334C7.59668 11.8734 7.97001 11.5 8.43001 11.5C8.89001 11.5 9.26335 11.8734 9.26335 12.3334C9.26335 12.7934 8.89001 13.1667 8.43001 13.1667ZM8.43001 0.665771C3.82751 0.665771 0.0966797 4.39661 0.0966797 8.9991C0.0966797 13.6016 3.82751 17.3324 8.43001 17.3324C13.0325 17.3324 16.7633 13.6016 16.7633 8.9991C16.7633 4.39661 13.0325 0.665771 8.43001 0.665771Z" fill="#F04444"/>
              </svg>{{getDomain}}</div>


              <div class="domain-success" v-if="getDomainSuccess">
                <div style="display: flex;gap: 0.5rem;position: relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#159D54"/>
                    <path d="M8 11.7941L10.4444 14L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div>
                    <span>Domain Available for Sale</span>
                    <p>{{ createModel.domain }} is available to buy.</p>
                  </div>
                  <div style="position: absolute;right: -250px;cursor: pointer" @click="closeSuccess">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.62676 7.99995L11.8668 4.75995C11.9396 4.67493 11.9776 4.56556 11.9733 4.45371C11.969 4.34185 11.9226 4.23575 11.8435 4.15659C11.7643 4.07744 11.6582 4.03107 11.5463 4.02675C11.4345 4.02243 11.3251 4.06048 11.2401 4.13329L8.0001 7.37329L4.7601 4.12884C4.67507 4.05603 4.56571 4.01798 4.45385 4.0223C4.34199 4.02662 4.23589 4.07299 4.15674 4.15215C4.07758 4.2313 4.03121 4.33741 4.02689 4.44926C4.02257 4.56112 4.06062 4.67049 4.13343 4.75551L7.37343 7.99995L4.12899 11.24C4.08246 11.2798 4.04467 11.3288 4.018 11.384C3.99132 11.4391 3.97633 11.4992 3.97396 11.5604C3.9716 11.6216 3.98191 11.6826 4.00426 11.7397C4.0266 11.7967 4.06049 11.8485 4.10381 11.8918C4.14712 11.9351 4.19892 11.969 4.25595 11.9913C4.31299 12.0137 4.37402 12.024 4.43523 12.0216C4.49644 12.0193 4.5565 12.0043 4.61164 11.9776C4.66678 11.9509 4.71581 11.9131 4.75565 11.8666L8.0001 8.62662L11.2401 11.8666C11.3251 11.9394 11.4345 11.9775 11.5463 11.9732C11.6582 11.9688 11.7643 11.9225 11.8435 11.8433C11.9226 11.7642 11.969 11.6581 11.9733 11.5462C11.9776 11.4343 11.9396 11.325 11.8668 11.24L8.62676 7.99995Z" fill="#444854"/>
                    </svg>
                  </div>
                </div>

                <div class="buy-domain">
                  <p>Buy Domain</p>
                </div>

              </div>

            </div>
            </div>

            <div class="add-name-servers"></div>
          </div>

<!--          <div class="add-existing-domains">-->
<!--            <div>-->
<!--              <p>Update your Domain Name Servers or Name Record</p>-->
<!--              <p>On your domain registrar's website, locate your Domain Name System (DNS) settings and Set the-->
<!--                following record on your DNS provider to continue</p>-->
<!--            </div>-->

<!--            <div>-->
<!--              <div>-->
<!--                <p>A Record (Recommended)</p>-->
<!--                <p>or Name Servers</p>-->
<!--              </div>-->

<!--              <div>-->
<!--                <div>-->
<!--                  <label>Type</label>-->
<!--                  <input placeholder="" />-->

<!--                </div>-->
<!--                <div>-->
<!--                  <label>Host Name</label>-->
<!--                  <input placeholder="" />-->

<!--                </div>-->
<!--                <div>-->
<!--                  <label>Value</label>-->
<!--                  <input placeholder="" />-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.51788 8.63787C4.51788 7.85112 5.12631 7.24193 6.04262 7.24193C6.95894 7.24193 8.83891 7.22084 8.83891 7.22084C8.83891 7.22084 8.81022 6.56553 8.81022 5.73209C8.81022 4.89884 9.55591 4.32959 10.4499 4.32959C11.3441 4.32959 15.7736 4.36718 16.2082 4.36718C16.6428 4.36718 16.9954 4.52834 17.4827 4.89875C17.9698 5.26934 18.7063 5.88875 19.071 6.30143C19.4357 6.71412 19.5896 6.95506 19.5896 7.29556C19.5896 7.63615 19.5896 14.5008 19.584 15.2962C19.5784 16.0916 18.8455 16.6796 17.9777 16.6913C17.1098 16.7029 15.2462 16.7029 15.2462 16.7029C15.2462 16.7029 15.2899 17.2912 15.2899 18.1232C15.2899 18.9552 14.53 19.6055 13.6665 19.6285C12.803 19.6514 6.92172 19.5825 6.08359 19.6055C5.24547 19.6285 4.49219 18.9686 4.49219 18.1597C4.49219 17.3508 4.51788 9.42453 4.51788 8.63787ZM6.08669 9.00781L5.97869 17.7128C5.97804 17.7619 5.98716 17.8107 6.00552 17.8563C6.02387 17.9019 6.0511 17.9434 6.08562 17.9784C6.12014 18.0134 6.16126 18.0411 6.2066 18.0601C6.25194 18.0791 6.3006 18.0889 6.34975 18.0889L13.2791 18.1095C13.3279 18.1101 13.3764 18.1008 13.4216 18.0822C13.4667 18.0636 13.5076 18.036 13.5419 18.0012C13.5761 17.9664 13.603 17.925 13.6208 17.8795C13.6386 17.834 13.6471 17.7854 13.6457 17.7366L13.6252 16.903C13.6248 16.8783 13.6195 16.854 13.6096 16.8314C13.5997 16.8088 13.5854 16.7884 13.5676 16.7713C13.5497 16.7543 13.5287 16.741 13.5056 16.7322C13.4826 16.7233 13.4581 16.7191 13.4334 16.7199C13.4334 16.7199 11.3835 16.7799 10.4552 16.7473C9.52694 16.7147 8.89225 16.1092 8.89197 15.2927C8.89169 14.4762 8.89225 8.81065 8.89225 8.81065C8.8923 8.78599 8.88746 8.76156 8.878 8.73878C8.86855 8.71601 8.85467 8.69533 8.83717 8.67795C8.81967 8.66058 8.7989 8.64684 8.77606 8.63755C8.75321 8.62825 8.72875 8.62358 8.70409 8.62381L6.46619 8.63149C6.3663 8.63219 6.27066 8.67196 6.19973 8.7423C6.12881 8.81263 6.08823 8.90793 6.08669 9.00781ZM16.0718 5.70237C15.9156 5.56643 15.7891 5.62362 15.7891 5.831V7.44865C15.7891 7.55234 15.8729 7.63681 15.9763 7.63737L17.9327 7.64684C18.1393 7.64787 18.1802 7.53846 18.0242 7.40253L16.0718 5.70237ZM10.6712 5.78178C10.6466 5.78155 10.6221 5.7862 10.5992 5.79545C10.5763 5.8047 10.5555 5.81837 10.5379 5.83569C10.5203 5.853 10.5063 5.87361 10.4967 5.89634C10.4871 5.91907 10.482 5.94347 10.4819 5.96815L10.4232 14.9954C10.4228 15.0323 10.4298 15.0688 10.4437 15.103C10.4576 15.1371 10.4781 15.1681 10.504 15.1943C10.53 15.2204 10.5609 15.2411 10.595 15.2552C10.629 15.2693 10.6655 15.2765 10.7024 15.2764L17.7524 15.259C17.8026 15.2587 17.8508 15.2389 17.8866 15.2036C17.9224 15.1684 17.943 15.1206 17.944 15.0703L18.0629 9.21837C18.0635 9.19386 18.0593 9.16947 18.0503 9.14665C18.0414 9.12383 18.0279 9.10303 18.0108 9.08551C17.9937 9.06798 17.9732 9.05408 17.9505 9.04463C17.9279 9.03518 17.9036 9.03037 17.8791 9.03049C17.8791 9.03049 15.4255 9.03443 14.9932 9.03443C14.5609 9.03443 14.2868 8.82612 14.2868 8.42674C14.2868 8.02737 14.2786 5.99253 14.2786 5.99253C14.2782 5.94251 14.2582 5.89465 14.2228 5.85926C14.1875 5.82386 14.1397 5.80378 14.0897 5.80334L10.6712 5.78178H10.6712Z" fill="black"/>-->
<!--                  </svg>-->
<!--                </div>-->

<!--              </div>-->
<!--              <div>-->
<!--                <div>-->
<!--                  <label>Value</label>-->
<!--                  <input placeholder="" />-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.51788 8.63787C4.51788 7.85112 5.12631 7.24193 6.04262 7.24193C6.95894 7.24193 8.83891 7.22084 8.83891 7.22084C8.83891 7.22084 8.81022 6.56553 8.81022 5.73209C8.81022 4.89884 9.55591 4.32959 10.4499 4.32959C11.3441 4.32959 15.7736 4.36718 16.2082 4.36718C16.6428 4.36718 16.9954 4.52834 17.4827 4.89875C17.9698 5.26934 18.7063 5.88875 19.071 6.30143C19.4357 6.71412 19.5896 6.95506 19.5896 7.29556C19.5896 7.63615 19.5896 14.5008 19.584 15.2962C19.5784 16.0916 18.8455 16.6796 17.9777 16.6913C17.1098 16.7029 15.2462 16.7029 15.2462 16.7029C15.2462 16.7029 15.2899 17.2912 15.2899 18.1232C15.2899 18.9552 14.53 19.6055 13.6665 19.6285C12.803 19.6514 6.92172 19.5825 6.08359 19.6055C5.24547 19.6285 4.49219 18.9686 4.49219 18.1597C4.49219 17.3508 4.51788 9.42453 4.51788 8.63787ZM6.08669 9.00781L5.97869 17.7128C5.97804 17.7619 5.98716 17.8107 6.00552 17.8563C6.02387 17.9019 6.0511 17.9434 6.08562 17.9784C6.12014 18.0134 6.16126 18.0411 6.2066 18.0601C6.25194 18.0791 6.3006 18.0889 6.34975 18.0889L13.2791 18.1095C13.3279 18.1101 13.3764 18.1008 13.4216 18.0822C13.4667 18.0636 13.5076 18.036 13.5419 18.0012C13.5761 17.9664 13.603 17.925 13.6208 17.8795C13.6386 17.834 13.6471 17.7854 13.6457 17.7366L13.6252 16.903C13.6248 16.8783 13.6195 16.854 13.6096 16.8314C13.5997 16.8088 13.5854 16.7884 13.5676 16.7713C13.5497 16.7543 13.5287 16.741 13.5056 16.7322C13.4826 16.7233 13.4581 16.7191 13.4334 16.7199C13.4334 16.7199 11.3835 16.7799 10.4552 16.7473C9.52694 16.7147 8.89225 16.1092 8.89197 15.2927C8.89169 14.4762 8.89225 8.81065 8.89225 8.81065C8.8923 8.78599 8.88746 8.76156 8.878 8.73878C8.86855 8.71601 8.85467 8.69533 8.83717 8.67795C8.81967 8.66058 8.7989 8.64684 8.77606 8.63755C8.75321 8.62825 8.72875 8.62358 8.70409 8.62381L6.46619 8.63149C6.3663 8.63219 6.27066 8.67196 6.19973 8.7423C6.12881 8.81263 6.08823 8.90793 6.08669 9.00781ZM16.0718 5.70237C15.9156 5.56643 15.7891 5.62362 15.7891 5.831V7.44865C15.7891 7.55234 15.8729 7.63681 15.9763 7.63737L17.9327 7.64684C18.1393 7.64787 18.1802 7.53846 18.0242 7.40253L16.0718 5.70237ZM10.6712 5.78178C10.6466 5.78155 10.6221 5.7862 10.5992 5.79545C10.5763 5.8047 10.5555 5.81837 10.5379 5.83569C10.5203 5.853 10.5063 5.87361 10.4967 5.89634C10.4871 5.91907 10.482 5.94347 10.4819 5.96815L10.4232 14.9954C10.4228 15.0323 10.4298 15.0688 10.4437 15.103C10.4576 15.1371 10.4781 15.1681 10.504 15.1943C10.53 15.2204 10.5609 15.2411 10.595 15.2552C10.629 15.2693 10.6655 15.2765 10.7024 15.2764L17.7524 15.259C17.8026 15.2587 17.8508 15.2389 17.8866 15.2036C17.9224 15.1684 17.943 15.1206 17.944 15.0703L18.0629 9.21837C18.0635 9.19386 18.0593 9.16947 18.0503 9.14665C18.0414 9.12383 18.0279 9.10303 18.0108 9.08551C17.9937 9.06798 17.9732 9.05408 17.9505 9.04463C17.9279 9.03518 17.9036 9.03037 17.8791 9.03049C17.8791 9.03049 15.4255 9.03443 14.9932 9.03443C14.5609 9.03443 14.2868 8.82612 14.2868 8.42674C14.2868 8.02737 14.2786 5.99253 14.2786 5.99253C14.2782 5.94251 14.2582 5.89465 14.2228 5.85926C14.1875 5.82386 14.1397 5.80378 14.0897 5.80334L10.6712 5.78178H10.6712Z" fill="black"/>-->
<!--                  </svg>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <label>Value</label>-->
<!--                  <input placeholder="" />-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.51788 8.63787C4.51788 7.85112 5.12631 7.24193 6.04262 7.24193C6.95894 7.24193 8.83891 7.22084 8.83891 7.22084C8.83891 7.22084 8.81022 6.56553 8.81022 5.73209C8.81022 4.89884 9.55591 4.32959 10.4499 4.32959C11.3441 4.32959 15.7736 4.36718 16.2082 4.36718C16.6428 4.36718 16.9954 4.52834 17.4827 4.89875C17.9698 5.26934 18.7063 5.88875 19.071 6.30143C19.4357 6.71412 19.5896 6.95506 19.5896 7.29556C19.5896 7.63615 19.5896 14.5008 19.584 15.2962C19.5784 16.0916 18.8455 16.6796 17.9777 16.6913C17.1098 16.7029 15.2462 16.7029 15.2462 16.7029C15.2462 16.7029 15.2899 17.2912 15.2899 18.1232C15.2899 18.9552 14.53 19.6055 13.6665 19.6285C12.803 19.6514 6.92172 19.5825 6.08359 19.6055C5.24547 19.6285 4.49219 18.9686 4.49219 18.1597C4.49219 17.3508 4.51788 9.42453 4.51788 8.63787ZM6.08669 9.00781L5.97869 17.7128C5.97804 17.7619 5.98716 17.8107 6.00552 17.8563C6.02387 17.9019 6.0511 17.9434 6.08562 17.9784C6.12014 18.0134 6.16126 18.0411 6.2066 18.0601C6.25194 18.0791 6.3006 18.0889 6.34975 18.0889L13.2791 18.1095C13.3279 18.1101 13.3764 18.1008 13.4216 18.0822C13.4667 18.0636 13.5076 18.036 13.5419 18.0012C13.5761 17.9664 13.603 17.925 13.6208 17.8795C13.6386 17.834 13.6471 17.7854 13.6457 17.7366L13.6252 16.903C13.6248 16.8783 13.6195 16.854 13.6096 16.8314C13.5997 16.8088 13.5854 16.7884 13.5676 16.7713C13.5497 16.7543 13.5287 16.741 13.5056 16.7322C13.4826 16.7233 13.4581 16.7191 13.4334 16.7199C13.4334 16.7199 11.3835 16.7799 10.4552 16.7473C9.52694 16.7147 8.89225 16.1092 8.89197 15.2927C8.89169 14.4762 8.89225 8.81065 8.89225 8.81065C8.8923 8.78599 8.88746 8.76156 8.878 8.73878C8.86855 8.71601 8.85467 8.69533 8.83717 8.67795C8.81967 8.66058 8.7989 8.64684 8.77606 8.63755C8.75321 8.62825 8.72875 8.62358 8.70409 8.62381L6.46619 8.63149C6.3663 8.63219 6.27066 8.67196 6.19973 8.7423C6.12881 8.81263 6.08823 8.90793 6.08669 9.00781ZM16.0718 5.70237C15.9156 5.56643 15.7891 5.62362 15.7891 5.831V7.44865C15.7891 7.55234 15.8729 7.63681 15.9763 7.63737L17.9327 7.64684C18.1393 7.64787 18.1802 7.53846 18.0242 7.40253L16.0718 5.70237ZM10.6712 5.78178C10.6466 5.78155 10.6221 5.7862 10.5992 5.79545C10.5763 5.8047 10.5555 5.81837 10.5379 5.83569C10.5203 5.853 10.5063 5.87361 10.4967 5.89634C10.4871 5.91907 10.482 5.94347 10.4819 5.96815L10.4232 14.9954C10.4228 15.0323 10.4298 15.0688 10.4437 15.103C10.4576 15.1371 10.4781 15.1681 10.504 15.1943C10.53 15.2204 10.5609 15.2411 10.595 15.2552C10.629 15.2693 10.6655 15.2765 10.7024 15.2764L17.7524 15.259C17.8026 15.2587 17.8508 15.2389 17.8866 15.2036C17.9224 15.1684 17.943 15.1206 17.944 15.0703L18.0629 9.21837C18.0635 9.19386 18.0593 9.16947 18.0503 9.14665C18.0414 9.12383 18.0279 9.10303 18.0108 9.08551C17.9937 9.06798 17.9732 9.05408 17.9505 9.04463C17.9279 9.03518 17.9036 9.03037 17.8791 9.03049C17.8791 9.03049 15.4255 9.03443 14.9932 9.03443C14.5609 9.03443 14.2868 8.82612 14.2868 8.42674C14.2868 8.02737 14.2786 5.99253 14.2786 5.99253C14.2782 5.94251 14.2582 5.89465 14.2228 5.85926C14.1875 5.82386 14.1397 5.80378 14.0897 5.80334L10.6712 5.78178H10.6712Z" fill="black"/>-->
<!--                  </svg>-->
<!--                </div>-->

<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
        </div>
      </div>

      <div class="modal-footer">
        <on-boarding-button @click="create" :disabled="getLoading || createModel.domain === null" :loading="getLoading" border="none"  btn-width="100%" :text-node="whichDomain === 'existing' ? 'Add' : 'Search'"></on-boarding-button>
        <on-boarding-button @click="close" btn-width="100%" color="#000" text-node="Cancel" background="transparent" border="none"></on-boarding-button>
      </div>
      </div>


    </div>

  </layout>
</template>

<script>
import Layout from "./Layout.vue";
import OnBoardingInput from "../Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import SettingsRequest from "../../model/SettingsRequest";
import storeUtils from "../../utils/storeUtils";
export default {
  name: "AddDomain",
  components:{OnBoardingInput, Layout,OnBoardingButton},
  data(){
    return{
      whichDomain:'new',
      createModel:SettingsRequest.createDomain
    }
  },
  methods:{
    close(){
      this.activeSelectedIndex = null
      this.$emit('close', false)
    },
    closeSuccess(){
      storeUtils.fireAway().settings?.commitDomainAvaliability()
    },
    create(){
      storeUtils.fireAway().settings?.commitDomainAvaliability(null)
      if(this.whichDomain === 'new'){
        storeUtils.fireAway().settings?.checkDomainAvaliability(this.createModel.domain)

      }else {
        storeUtils.fireAway().settings?.createDomain(this.createModel).then(() => {
          if(this.getError === 'false'){
            this.close(false)
          }
        })

      }
    }
  },
  computed:{
    getLoading(){
      return storeUtils.fireAway().settings?.getLoading
    },

    getDomainSuccess(){
      return storeUtils.fireAway().settings?.getDomainSuccess
    },

    getDomain(){
      return storeUtils.fireAway().settings?.getDomainAvaliability
    },
    getError(){
      return storeUtils.fireAway().global?.getError
    },
  }
}
</script>

<style scoped>

.buy-domain{
  display: flex;
  width: 7.5rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid #7DC19C;
}

.unavailable{
  color:  #F04444;
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 133.333% */
  padding: 1.38rem;
  text-align: center;
}
.domain-success{
  display: flex;
  width: 35.8125rem;
  padding: 1rem;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #7DC19C;
  background: rgba(248, 254, 251, 0.50);
  flex-direction: column;
  margin-top: 1rem;
}

@media (max-width: 1024px) {
  .domain-success{
    width: 100%;
  }
}

.sub{
  color:  #575A65;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}
.whah-domain{
  color:  #1D1E2C;

  /* Title/18px/Medium */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 144.444% */
}
.modal{
  width: 39.8125rem;
  height: auto;
  margin: 50px auto;
  border-radius: 1rem;
  background:  #FFF;

  /* m3 */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}
.wrapper{
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.modal-header{
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  /*gap: 22.5625rem;*/
  background:  #F9FAFC;
  width: 100%;
  border-radius: 1rem;

}

.add-domain{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 155.556% */
}

.role-options{
  display: flex;
  width: 35.8125rem;
  /*height: 3.5rem;*/
  gap: 1.25rem;
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  gap: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #EFF2F7;
  cursor: pointer;
  margin-top: 1.25rem;
}

@media (max-width: 1024px) {
  .role-options{
    width: 100%;
  }
}


@media (max-width: 1024px) {
  .modal{
    height: auto;
  }
  .modal{
    width: 90%;
    height: auto;
    margin: 50px auto;
    border-radius: 1rem;
    background:  #FFF;

    /* m3 */
    box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
  }
}

</style>