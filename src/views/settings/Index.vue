<template>
  <add-team-member v-show="addMember" @close="close"></add-team-member>
  <add-new-role v-show="addRole" @close="close"></add-new-role>
<!--  <add-domain></add-domain>-->
<!--  <account-deactivated></account-deactivated>-->
<!--  <deactivate-account-confirm></deactivate-account-confirm>-->
  <layout v-slot:child-content>
    <div class="settings-wrapper-navs">
      <div class="breadcrumb">
        <p class="current-path">{{getCurrentRoute}}</p>

        <div class="breadcrumb-sub">
          <span class="current-path-sub">{{getCurrentRoute}}</span>
          <img src="../../assets/VerificationProcess/arrow-left.svg" />
          <span class="current-tab">{{currentTab}}</span>
        </div>

      </div>

        <div class="tab-nav">
          <ul class="inner-tab-nav">
            <li :class="{'active':currentTab === 'Account'}" @click="currentTab = 'Account'">Account</li>
            <li v-if="getUser.account_type === 'super_admin'" :class="{'active':currentTab === 'Domain'}" @click="currentTab = 'Domain'">Domain</li>
            <li :class="{'active':currentTab === 'Teams'}" @click="currentTab = 'Teams'">Teams</li>
            <li :class="{'active':currentTab === 'Notifications'}" @click="currentTab = 'Notifications'">Notifications</li>
            <li :class="{'active':currentTab === 'Payment'}" @click="currentTab = 'Payment'">Payment </li>
            <li :class="{'active':currentTab === 'Markup'}" @click="currentTab = 'Markup'">Markup</li>
            <li :class="{'active':currentTab === 'Verification'}" @click="currentTab = 'Verification'">Verification</li>
          </ul>
        </div>


    </div>
    <div class="tabs">
      <div class="accounts" v-show="currentTab === 'Account'">
        <div class="accounts-inner">
          <div class="accounts-header">
            <p class="p-info">Personal Information</p>
          </div>

          <div class="accounts-main">
            <div class="personal-form-area">
              <form>
                <div class="grouped_input">
                  <on-boarding-input width="100%" :placeholder="getUser.first_name" label="first name" readonly="true"></on-boarding-input>
                  <on-boarding-input :placeholder="getUser.last_name" width="100%" label="last name" readonly="true"></on-boarding-input>
                </div>

                <on-boarding-input width="100%" :placeholder="getUser.email" label="Email address" readonly="true"></on-boarding-input>
                <on-boarding-input width="100%" label="Phone number" :placeholder="getUser.phone" :readonly="getUser.phone ? true : false"></on-boarding-input>
              </form>

            </div>
          </div>

          <div class="change_password">
            <div>
              <p class="change_password-p">Change Password</p>
              <p class="change_password-sub">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, </p>
            </div>
            <on-boarding-button color="#89128A" text-node="Change Password" btn-width="10rem" height="3rem" background="#F8F1F8" border="none"></on-boarding-button>
          </div>

          <div class="change_password">
            <div>
              <p class="change_password-p">Deactivate Account</p>
              <p class="change_password-sub">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, </p>
            </div>
            <on-boarding-button color="#F04444" fontsize="14px" border="1px solid #F04444" text-node="Deactivate Account" btn-width="10rem" height="3rem" background="transparent"></on-boarding-button>
          </div>

          <div class="business_information_card_footer">
            <div>
              <OnBoardingButton @click="handleUpdateProfile" :loading="loading" :disabled="loading" border="none" :textNode="'Save Changes'" :btnWidth="'11.0625rem'"></OnBoardingButton>
            </div>
          </div>

        </div>

<!--        <div class="accounts-inner" v-if="getUser.is_corporate === 'true'">-->
<!--          <div>-->
<!--            <div class="business_information">Business Information</div>-->

<!--            <div class="business_information_card">-->
<!--              <div class="business_information_card_head">-->
<!--                <div class="inner_head">-->
<!--                  <div class="profile" :style="getBusinessProfile?.logo ? {backgroundImage:`url(${getBusinessProfile?.logo})`} : null">-->
<!--                    <div v-if="!getBusinessProfile.logo">-->
<!--                      {{ getFirstLettersOfFirstAndLastName(getUser?.first_name + ' ' + getUser?.last_name) }}-->
<!--                    </div>-->

<!--                    <div class="upload_icon" @click="initiateUpload">-->
<!--                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <rect width="28" height="28" rx="14" fill="#F8F1F8"/>-->
<!--                        <path d="M15.8623 18.3373C17.1602 18.3373 18.2109 17.2863 18.2109 15.9888C18.2109 14.6913 17.1602 13.6403 15.8623 13.6403C14.5645 13.6403 13.5137 14.6913 13.5137 15.9888C13.5137 17.2863 14.5645 18.3373 15.8623 18.3373Z" fill="#89128A"/>-->
<!--                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1787 9.94122H19.1494V8.52838C19.1494 7.6925 18.4629 7.00635 17.627 7.00635H13.5479C12.7119 7.00635 12.0254 7.6925 12.0254 8.52838V9.94122H7.79004C6.80176 9.94122 6 10.7428 6 11.7284V19.3635C6 20.3491 6.80176 21.1537 7.79004 21.1537H20.1816C21.167 21.1537 21.9717 20.3522 21.9717 19.3635V11.7284C21.9688 10.7428 21.167 9.94122 20.1787 9.94122ZM7.88086 12.7015C7.88086 13.2192 8.30176 13.6403 8.81934 13.6403C9.33691 13.6403 9.75879 13.2192 9.75879 12.7015C9.75879 12.1838 9.33691 11.7627 8.81934 11.7627C8.30176 11.7627 7.88086 12.1838 7.88086 12.7015ZM15.8623 20.215C13.5293 20.215 11.6357 18.3218 11.6357 15.9888C11.6357 13.6559 13.5293 11.7627 15.8623 11.7627C18.1943 11.7627 20.0879 13.6559 20.0879 15.9888C20.0879 18.3218 18.1982 20.215 15.8623 20.215Z" fill="#89128A"/>-->
<!--                        <path d="M11.6357 8.58447C11.6357 8.09796 11.2363 7.69873 10.75 7.69873H8.36719C7.88086 7.69873 7.48145 8.09796 7.48145 8.58447V9.28937H11.6357V8.58447Z" fill="#89128A"/>-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                    <input id="logo" hidden accept="image/*" type="file" @change="handleUpload($event.target.files)">-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <p class="upload_business_logo">Upload Business logo</p>-->
<!--                    <p class="size_limit">Size limit: 5MB (jpg, jpeg or png)</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="business_information_card_body">-->
<!--                <div>-->
<!--                  <OnBoardingInput :error="errors ? errors.email : null" type="text" :label="'Business Name'" :placeholder="getBusinessProfile?.name" :width="'100%'"  @inputValue="(value) => model.business_name = value" ></OnBoardingInput>-->
<!--                  <OnBoardingInput :error="errors ? errors.email : null" type="email" :label="'Business Email address'" :placeholder="getBusinessProfile?.email" :width="'100%'"  @inputValue="(value) => model.business_email = value"></OnBoardingInput>-->
<!--                  <OnBoardingInput :error="errors ? errors.address : null" type="text" :label="'Address'" :width="'100%'" :placeholder="getBusinessProfile?.address"  @inputValue="(value) => model.business_address = value"></OnBoardingInput>-->
<!--                  <OnBoardingInput :error="errors ? errors.website : null" type="text" :label="'Business  Website'" :width="'100%'" :placeholder="getBusinessProfile?.website"  @inputValue="(value) => model.business_website = value"></OnBoardingInput>-->
<!--                  <OnBoardingInput :error="errors ? errors.cac_number : null" type="text" :label="'CAC Registration Number'" :width="'100%'" :placeholder="getBusinessProfile?.cac_number === 'pending' ? '' : getBusinessProfile?.cac_number"  @inputValue="(value) => model.cac_number = value"></OnBoardingInput>-->
<!--                </div>-->
<!--                <div class="reach_out">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44569 8.7758C9.44569 9.20513 9.09725 9.55357 8.66791 9.55357C8.23858 9.55357 7.89014 9.20513 7.89014 8.7758V4.88691C7.89014 4.45757 8.23858 4.10913 8.66791 4.10913C9.09725 4.10913 9.44569 4.45757 9.44569 4.88691V8.7758ZM8.66791 11.8887C8.23858 11.8887 7.89014 11.5403 7.89014 11.111C7.89014 10.6816 8.23858 10.3332 8.66791 10.3332C9.09725 10.3332 9.44569 10.6816 9.44569 11.111C9.44569 11.5403 9.09725 11.8887 8.66791 11.8887ZM8.6684 0.221191C4.37274 0.221191 0.890625 3.7033 0.890625 7.99897C0.890625 12.2946 4.37274 15.7767 8.6684 15.7767C12.9641 15.7767 16.4462 12.2946 16.4462 7.99897C16.4462 3.7033 12.9641 0.221191 8.6684 0.221191Z" fill="#1D1E2C"/>-->
<!--                  </svg>-->
<!--                  <p>Please reach out to <span class="support">support</span> if you need to change your business website domain</p>-->

<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="business_information_card_footer">-->
<!--            <div>-->
<!--              <OnBoardingButton @click="handleUpdateBizProfile" :loading="loading" border="none" :textNode="'Save Changes'" :btnWidth="'11.0625rem'"></OnBoardingButton>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

      </div>
      <div class="domains" v-show="currentTab === 'Domain'">
        <div class="domain-header">
          <div>
            <p class="p-info">Domain</p>
            <p class="p-sub-domain">By default, your site is always accessible via a Tiqwa subdomain based on the site name. Custom domains
              allow you to access your site via one or more custom domain names.</p>
          </div>

          <on-boarding-button fontsize="1rem" color="#FFFFFF" text-node="Add Custom Domain" btn-width="12.25rem" height="2.5rem" border="none"></on-boarding-button>

        </div>

        <div class="table-wrapper">
          <domain-table :data="getDomains" :fields="domainFields"></domain-table>
        </div>
      </div>
      <div class="teams" v-show="currentTab === 'Teams'">
        <div class="manage-roles">
          <p :class="{'activeManageRole':activeManageRole === 'team'}" class="manage-item"  @click="activeManageRole = 'team'">Team Members</p>
          <p class="manage-item" :class="{'activeManageRole':activeManageRole === 'permissions'}" @click="activeManageRole = 'permissions'">Roles & Permissions</p>
        </div>

         <div class="teams-header" >

         <div class="search-team">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
             <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#9DA8B6"/>
             <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="#9DA8B6"/>
           </svg>
           <input type="search" style="outline: none;border: none;width: 19.4rem" placeholder="Search team members"/>
         </div>

          <div class="btn3">
            <on-boarding-button filter_icon="true" class="filter" color="#89128A" border="none" background="#F8F1F8" btn-width="7.5rem" height="2.5rem" text-node="Filter"></on-boarding-button>
            <on-boarding-button v-show="activeManageRole === 'team'" class="role" @click="addMember=true" btn-width="10.625rem" height="2.5rem" text-node="Add New Member" fontsize="12px"></on-boarding-button>
            <on-boarding-button v-show="activeManageRole === 'permissions'" class="role" @click="addRole=true" btn-width="10.625rem" height="2.5rem" text-node="Create role" fontsize="12px"></on-boarding-button>
          </div>
        </div>

        <div class="teams-main">

          <div v-if="activeManageRole==='team'" >
            <div v-if="getMembers?.length > 0" class="table-wrapper">
              <domain-table :is-paginate="true" :data="getMembers" :fields="membersFields"></domain-table>
            </div>

            <div v-else class="no-team-member">
               <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
                 <path d="M0.117188 57.883C0.117188 73.2346 6.21556 87.9574 17.0707 98.8125C27.9259 109.668 42.6487 115.766 58.0002 115.766C73.3518 115.766 88.0746 109.668 98.9297 98.8125C109.785 87.9574 115.883 73.2346 115.883 57.883C115.883 42.5315 109.785 27.8087 98.9297 16.9536C88.0746 6.09837 73.3518 0 58.0002 0C42.6487 0 27.9259 6.09837 17.0707 16.9536C6.21556 27.8087 0.117188 42.5315 0.117188 57.883Z" fill="#F1F2F6"/>
                 <path d="M8.3418 20.9214L67.758 3.4748L90.5149 80.9757L31.0986 98.4223L8.3418 20.9214Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M20.0869 8.62842H82.0131V89.3999H20.0869V8.62842Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M28.166 16.707H73.937V24.7846H28.166V16.707Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M44.3193 38.2441H55.0899" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M44.3193 43.6309H68.5521" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M44.3193 49.0151H61.8405" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M44.3193 65.1689H57.7815" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M44.3193 70.5532H71.2436" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M44.3193 75.9399H65.8591" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M30.7213 48.1225V44.5522H29.6377V43.6631H30.7213V42.524H29.6377V41.6349H30.7213V38.2036H32.166L33.4858 41.6349H35.125V38.2036H36.2225V41.6349H37.306V42.524H36.2225V43.6631H37.306V44.5522H36.2225V48.1225H34.7638L33.4441 44.5522H31.8048V48.1225H30.7213ZM31.7771 41.6349H32.3605L31.7771 39.9123H31.7215L31.7771 41.6349ZM31.8048 43.6631H33.1107L32.6939 42.524H31.7771L31.8048 43.6631ZM34.222 43.6631H35.1528L35.125 42.524H33.8053L34.222 43.6631ZM35.125 46.1637H35.1806L35.1389 44.5522H34.5554L35.125 46.1637Z" fill="#1D1E2C"/>
                 <path d="M30.7213 75.9057V72.3354H29.6377V71.4463H30.7213V70.3072H29.6377V69.4181H30.7213V65.9868H32.166L33.4858 69.4181H35.125V65.9868H36.2225V69.4181H37.306V70.3072H36.2225V71.4463H37.306V72.3354H36.2225V75.9057H34.7638L33.4441 72.3354H31.8048V75.9057H30.7213ZM31.7771 69.4181H32.3605L31.7771 67.6955H31.7215L31.7771 69.4181ZM31.8048 71.4463H33.1107L32.6939 70.3072H31.7771L31.8048 71.4463ZM34.222 71.4463H35.1528L35.125 70.3072H33.8053L34.222 71.4463ZM35.125 73.9469H35.1806L35.1389 72.3354H34.5554L35.125 73.9469Z" fill="#1D1E2C"/>
                 <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" fill="#E5E9F2"/>
                 <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M82.5391 84.7549L86.0882 81.2048L94.964 90.0781L91.4148 93.6282L82.5391 84.7549Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M86.9799 53.6947C90.1393 56.854 92.2908 60.8792 93.1625 65.2613C94.0342 69.6434 93.5869 74.1856 91.8771 78.3135C90.1673 82.4414 87.2719 85.9695 83.5569 88.4518C79.8419 90.9341 75.4743 92.259 71.0063 92.259C66.5384 92.259 62.1707 90.9341 58.4558 88.4518C54.7408 85.9695 51.8453 82.4414 50.1356 78.3135C48.4258 74.1856 47.9784 69.6434 48.8501 65.2613C49.7218 60.8792 51.8734 56.854 55.0328 53.6947C59.2696 49.4591 65.0154 47.0796 71.0063 47.0796C76.9973 47.0796 82.743 49.4591 86.9799 53.6947Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" fill="#E5E9F2"/>
                 <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M37.4121 108.503C37.4121 109.308 39.7563 110.079 43.9291 110.649C48.1018 111.218 53.7612 111.537 59.6624 111.537C65.5635 111.537 71.2229 111.218 75.3956 110.649C79.5684 110.079 81.9126 109.308 81.9126 108.503C81.9126 107.698 79.5684 106.926 75.3956 106.357C71.2229 105.788 65.5635 105.468 59.6624 105.468C53.7612 105.468 48.1018 105.788 43.9291 106.357C39.7563 106.926 37.4121 107.698 37.4121 108.503Z" fill="#E5E9F2"/>
               </svg>
               <div class="no-team-member-text">
             <div style="text-align: center">
               <p class="no-team-member-h">Hi {{ getBusinessProfile?.name }}, you have not added any team member yet!</p>
               <p class="no-team-member-sub">Yeah, your team member will appear here.</p>
             </div>
           </div>
            </div>
         </div>
          <div v-else>

            <div v-if="getRoles?.length > 0" class="table-wrapper">
              <domain-table :is-paginate="true" :data="getRoles" :fields="rolesFields"></domain-table>
            </div>
            <div v-else class="no-team-member">
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
                <path d="M0.117188 57.883C0.117188 73.2346 6.21556 87.9574 17.0707 98.8125C27.9259 109.668 42.6487 115.766 58.0002 115.766C73.3518 115.766 88.0746 109.668 98.9297 98.8125C109.785 87.9574 115.883 73.2346 115.883 57.883C115.883 42.5315 109.785 27.8087 98.9297 16.9536C88.0746 6.09837 73.3518 0 58.0002 0C42.6487 0 27.9259 6.09837 17.0707 16.9536C6.21556 27.8087 0.117188 42.5315 0.117188 57.883Z" fill="#F1F2F6"/>
                <path d="M8.3418 20.9214L67.758 3.4748L90.5149 80.9757L31.0986 98.4223L8.3418 20.9214Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.0869 8.62842H82.0131V89.3999H20.0869V8.62842Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.166 16.707H73.937V24.7846H28.166V16.707Z" fill="#E5E9F2" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.3193 38.2441H55.0899" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.3193 43.6309H68.5521" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.3193 49.0151H61.8405" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.3193 65.1689H57.7815" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.3193 70.5532H71.2436" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.3193 75.9399H65.8591" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30.7213 48.1225V44.5522H29.6377V43.6631H30.7213V42.524H29.6377V41.6349H30.7213V38.2036H32.166L33.4858 41.6349H35.125V38.2036H36.2225V41.6349H37.306V42.524H36.2225V43.6631H37.306V44.5522H36.2225V48.1225H34.7638L33.4441 44.5522H31.8048V48.1225H30.7213ZM31.7771 41.6349H32.3605L31.7771 39.9123H31.7215L31.7771 41.6349ZM31.8048 43.6631H33.1107L32.6939 42.524H31.7771L31.8048 43.6631ZM34.222 43.6631H35.1528L35.125 42.524H33.8053L34.222 43.6631ZM35.125 46.1637H35.1806L35.1389 44.5522H34.5554L35.125 46.1637Z" fill="#1D1E2C"/>
                <path d="M30.7213 75.9057V72.3354H29.6377V71.4463H30.7213V70.3072H29.6377V69.4181H30.7213V65.9868H32.166L33.4858 69.4181H35.125V65.9868H36.2225V69.4181H37.306V70.3072H36.2225V71.4463H37.306V72.3354H36.2225V75.9057H34.7638L33.4441 72.3354H31.8048V75.9057H30.7213ZM31.7771 69.4181H32.3605L31.7771 67.6955H31.7215L31.7771 69.4181ZM31.8048 71.4463H33.1107L32.6939 70.3072H31.7771L31.8048 71.4463ZM34.222 71.4463H35.1528L35.125 70.3072H33.8053L34.222 71.4463ZM35.125 73.9469H35.1806L35.1389 72.3354H34.5554L35.125 73.9469Z" fill="#1D1E2C"/>
                <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" fill="#E5E9F2"/>
                <path d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M82.5391 84.7549L86.0882 81.2048L94.964 90.0781L91.4148 93.6282L82.5391 84.7549Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M86.9799 53.6947C90.1393 56.854 92.2908 60.8792 93.1625 65.2613C94.0342 69.6434 93.5869 74.1856 91.8771 78.3135C90.1673 82.4414 87.2719 85.9695 83.5569 88.4518C79.8419 90.9341 75.4743 92.259 71.0063 92.259C66.5384 92.259 62.1707 90.9341 58.4558 88.4518C54.7408 85.9695 51.8453 82.4414 50.1356 78.3135C48.4258 74.1856 47.9784 69.6434 48.8501 65.2613C49.7218 60.8792 51.8734 56.854 55.0328 53.6947C59.2696 49.4591 65.0154 47.0796 71.0063 47.0796C76.9973 47.0796 82.743 49.4591 86.9799 53.6947Z" fill="white" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" fill="#E5E9F2"/>
                <path d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z" stroke="#1D1E2C" stroke-width="1.79437" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M37.4121 108.503C37.4121 109.308 39.7563 110.079 43.9291 110.649C48.1018 111.218 53.7612 111.537 59.6624 111.537C65.5635 111.537 71.2229 111.218 75.3956 110.649C79.5684 110.079 81.9126 109.308 81.9126 108.503C81.9126 107.698 79.5684 106.926 75.3956 106.357C71.2229 105.788 65.5635 105.468 59.6624 105.468C53.7612 105.468 48.1018 105.788 43.9291 106.357C39.7563 106.926 37.4121 107.698 37.4121 108.503Z" fill="#E5E9F2"/>
              </svg>
              <div class="no-team-member-text">
                <div style="text-align: center">
                  <p class="no-team-member-h">Hi {{ getBusinessProfile?.name }}, you have not created any role yet!</p>
                  <p class="no-team-member-sub">Yeah, your roles will appear here.</p>
                </div>
              </div>
            </div>

         </div>

        </div>

      </div>
      <div class="notifications" v-show="currentTab === 'Notifications'">
        <div class="notification-wrapper">
          <div class="notification-inner">
            <div>
              <p class="n-1">Message Notification</p>
              <p class="n-2">These are general notifications  about updates and goings-on on the platform</p>
            </div>

            <div class="notification-items">
              <div class="item">
                <p class="n-3">In-app</p>
                <img style="margin-right: -10px"  src="../../assets/Switchon.svg" @click="getNotifications.message_in_app_notification = 0,updateNotification()"  v-if="getNotifications?.message_in_app_notification" />
                <img  src="../../assets/Switchoff.svg" @click="getNotifications.message_in_app_notification = 1, updateNotification()" v-else />
              </div>
              <div class="item">
                <p class="n-3">Send to email</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.message_email_notification = 0,updateNotification()"  v-if="getNotifications?.message_email_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.message_email_notification = 1,updateNotification()" v-else />
              </div>
              <div class="item">
                <p class="n-3">Text to phone</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.message_sms_notification = 0,updateNotification()"  v-if="getNotifications?.message_sms_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.message_sms_notification = 1,updateNotification()" v-else />
              </div>
            </div>
          </div>

          <div class="notification-inner">
            <div>
              <p class="n-1">Reminder Notification</p>
              <p class="n-2">These are general notifications  about updates and goings-on on the platform</p>
            </div>

            <div class="notification-items">
              <div class="item">
                <p class="n-3">In-app</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.reminder_in_app_notification = 0,updateNotification()"  v-if="getNotifications?.reminder_in_app_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.reminder_in_app_notification = 1,updateNotification()" v-else />
              </div>
              <div class="item">
                <p class="n-3">Send to email</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.reminder_email_notification = 0,updateNotification()"  v-if="getNotifications?.reminder_email_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.reminder_email_notification = 1,updateNotification()" v-else />
              </div>
              <div class="item">
                <p class="n-3">Text to phone</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.reminder_sms_notification = 0,updateNotification()"  v-if="getNotifications?.reminder_sms_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.reminder_sms_notification = 1,updateNotification()" v-else />
              </div>
            </div>
          </div>

          <div class="notification-inner">
            <div>
              <p class="n-1">Adverts & Newsletter</p>
              <p class="n-2">These are general notifications  about updates and goings-on on the platform</p>
            </div>

            <div class="notification-items">
              <div class="item">
                <p class="n-3">In-app</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.ads_newsletter_in_app_notification = 0,updateNotification()"  v-if="getNotifications?.ads_newsletter_in_app_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.ads_newsletter_in_app_notification = 1,updateNotification()" v-else />
              </div>
              <div class="item">
                <p class="n-3">Send to email</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.ads_newsletter_email_notification = 0,updateNotification()"  v-if="getNotifications?.ads_newsletter_email_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.ads_newsletter_email_notification = 1,updateNotification()" v-else />
              </div>
              <div class="item">
                <p class="n-3">Text to phone</p>
                <img style="margin-right: -10px" src="../../assets/Switchon.svg" @click="getNotifications.ads_newsletter_sms_notification = 0,updateNotification()"  v-if="getNotifications?.ads_newsletter_sms_notification" />
                <img src="../../assets/Switchoff.svg" @click="getNotifications.ads_newsletter_sms_notification = 1,updateNotification()" v-else />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payments" v-show="currentTab === 'Payment'">
        <div class="payment-wrapper">
          <p class="payment-m-h">Payment method</p>
          <p class="payment-m-s">Please select your preferred payment method</p>

<!--          <div class="select-payment-method">-->
<!--            <div class="payment-options">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
<!--                <rect x="1" y="1" width="22" height="22" stroke="#B060B0" stroke-width="2"/>-->
<!--                <rect x="5" y="5" width="14" height="14" fill="#891189"/>-->
<!--              </svg>-->
<!--              <p>Payment Gateway  (Flutterwave/Paystack)</p>-->
<!--            </div>-->

<!--            <div class="payment-options">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
<!--                <rect x="1" y="1" width="22" height="22" stroke="#B060B0" stroke-width="2"/>-->
<!--              </svg>-->
<!--              <p>Bank Account</p>-->
<!--            </div>-->

<!--          </div>-->
        </div>
      </div>
      <div class="markups" v-show="currentTab === 'Markup'">
        <div class="markups-wrapper">
          <div class="markup-item">
            <div>
              <p class="m-1">Local Markup Details</p>
              <p class="m-2">Your mark up details will be applied to the prices of all local flights results returned</p>
            </div>

            <div class="form-area">
              <on-boarding-input width="100%"  type="number" label="Value" @inputValue="value => getMarkup.domestic_markup_value = value"></on-boarding-input>
              <div class="choose_document_type" style="position: relative;">

                <div style="">
                  <p class="doc_type"> {{ LocalMarkUpPlaceHolder }}</p>
                  <div class="doc_type_options" v-show="localDropdown">
                    <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Fixed',toggleLocalDropdown(),getMarkup.domestic_markup_type = 'Fixed'">Fixed</p>
                    <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Percentage', toggleLocalDropdown(),getMarkup.domestic_markup_type = 'Percentage'" >Percentage</p>

                  </div>

                </div>
                <img src="../../assets/Monotone.svg" style="cursor: pointer" @click="toggleLocalDropdown" />
              </div>

              <div class="item">
                <p class="n-3">Per Passenger</p>
                <img style="margin-right: -10px;cursor: pointer" @click="getMarkup.domestic_markup_per_passenger = false" v-if="getMarkup?.domestic_markup_per_passenger === true" src="../../assets/Switchon.svg" />

                <img style="cursor: pointer"  src="../../assets/Switchoff.svg" v-else @click="getMarkup.domestic_markup_per_passenger = true"/>
              </div>
              <div class="item">
                <p class="n-3">Per Route</p>
                <img style="margin-right: -10px;cursor: pointer" @click="getMarkup.domestic_markup_per_route = false" src="../../assets/Switchon.svg" v-if="getMarkup?.domestic_markup_per_route === true" />

                <img style="cursor: pointer" src="../../assets/Switchoff.svg" @click="getMarkup.domestic_markup_per_route = true" v-else/>

              </div>

            </div>
          </div>

          <div class="markup-item">
            <div>
              <p class="m-1">International Markup Details</p>
              <p class="m-2">Your mark up details will be applied to the prices of all local flights results returned</p>
            </div>

            <div class="form-area">
              <on-boarding-input width="100%"  type="number" label="Value" @inputValue="value => getMarkup.international_markup_value = value"></on-boarding-input>
              <div class="choose_document_type"  style="position: relative;">

                <div style="">
                  <p class="doc_type"> {{ IntMarkUpPlaceHolder }}</p>
                  <div class="doc_type_options" v-show="intDropdown">
                    <p class="doc_type_item" @click="IntMarkUpPlaceHolder='Fixed',toggleIntDropdown(),getMarkup.international_markup_type = 'Fixed'">Fixed</p>
                    <p class="doc_type_item" @click="IntMarkUpPlaceHolder='Percentage',toggleIntDropdown(),getMarkup.international_markup_type = 'Percentage'">Percentage</p>

                  </div>

                </div>
                <img src="../../assets/Monotone.svg" style="cursor: pointer" @click="toggleIntDropdown" />
              </div>

              <div class="item">
                <p class="n-3">Per Passenger</p>
                <img style="margin-right: -10px;cursor: pointer" @click="getMarkup.international_markup_per_passenger = false" v-if="getMarkup?.international_markup_per_passenger === true" src="../../assets/Switchon.svg" />

                <img style="cursor: pointer" src="../../assets/Switchoff.svg"  @click="getMarkup.international_markup_per_passenger = true" v-else/>
              </div>
              <div class="item">
                <p class="n-3">Per Route</p>
                <img style="margin-right: -10px;cursor: pointer"  @click="getMarkup.international_markup_per_route = false" src="../../assets/Switchon.svg" v-if="getMarkup?.international_markup_per_route === true" />

                <img style="cursor: pointer" src="../../assets/Switchoff.svg" @click="getMarkup.international_markup_per_route = true" v-else/>

              </div>

              <div style="width: 100%;display: flex;justify-content: end;margin-top: 3.5rem">
                <on-boarding-button btn-width="11.0625rem" text-node="Save Changes"></on-boarding-button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="verifications" v-show="currentTab === 'Verification'">
        <business-verification v-if="verificationType ==='business'"  :is-component="false" :in-route="false"></business-verification>
        <upload-docs :show="false"  v-else :is-component="false" :in-route="false" v-if="verificationType === 'docs'"></upload-docs>
      </div>
    </div>

  </layout>

</template>



<script>
import Layout from "../Layout.vue";
import BusinessVerification from "../../views/verification/BusinessInfo.vue"
import UploadDocs from "../verification/UploadDocs.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import router from "../../router";
import OnBoardingInput from "../../components/Inputs/OnBoardingInput.vue";
import storeUtils from "../../utils/storeUtils";
import {getFirstLettersOfFirstAndLastName} from "../../mixins/lettersExtractor";
import AuthRequest from "../../model/AuthRequest";
import AddTeamMember from "../../components/modals/AddTeamMember.vue";
import DomainTable from "../../components/tables/DomainTable.vue";
import {RuthdoAlert} from "ruthly";
import SettingsRequest from "../../model/SettingsRequest";
import AddNewRole from "../../components/modals/AddNewRole.vue";
import AccountDeactivated from "../../components/modals/AccountDeactivated.vue";
import DeactivateAccountConfirm from "../../components/modals/DeactivateAccountConfirm.vue";
import AddDomain from "../../components/modals/AddDomain.vue";

export default {
  name: "Settings",
  components:{
    Layout,
    OnBoardingButton,
    BusinessVerification,
    UploadDocs,
    OnBoardingInput,
    AddTeamMember,
    DomainTable,
    AddNewRole,
    AccountDeactivated,
    DeactivateAccountConfirm,
    AddDomain
  },

  data(){
    return{
      currentTab:"Account",
      verificationType:'business',
      model:SettingsRequest.updateBusinessProfile,
      model1:SettingsRequest.updateProfileInfo,
      model3:SettingsRequest.updateNotificationSettings,
      LocalMarkUpPlaceHolder:"Markup Type",
      IntMarkUpPlaceHolder:"Markup Type",
      addMember:false,
      addRole:false,
      intDropdown:false,
      localDropdown:false,
      activeManageRole:"team",
      // notificationModal: JSON.parse(JSON.stringify(this.getNotifications ? this.getNotifications : null)),
      error:{
        name:null,
        email:null,
        address:null,
        website:null,
        cac_number:null,
      },
      getFirstLettersOfFirstAndLastName,
      uploadModel:AuthRequest.upload,
      domainFields:[
        {key:"domain", label:"Domain Name"},
        {key:"active", label:"Status"},
        {key:"created_at", label:"Date Added"},
        {key:"Action", label:"Action"},
      ],
      rolesFields:[
        {key:"name", label:"Roles"},
        {key:"users", label:"No.of member"},
        {key:"permissions", label:"No.of permission"},
        {key:"Action", label:"Action", id:"role"},
      ],
      membersFields:[
        {key:"name", label:"Name"},
        {key:"email", label:"Email Address"},
        {key:"type", label:"Role"},
        {key:"created_at", label:"Date Added"},
        {key:"status", label:"Member Status"},
        {key:"Action", label:"Action",id:"member"},
      ],

    }
  },

  methods:{
    updateNotification(){
      this.model3.message_in_app_notification = this.getNotifications.message_in_app_notification
      this.model3.message_email_notification = this.getNotifications.message_email_notification
      this.model3.message_sms_notification = this.getNotifications.message_sms_notification
      this.model3.reminder_email_notification = this.getNotifications.reminder_email_notification
      this.model3.reminder_in_app_notification = this.getNotifications.reminder_in_app_notification
      this.model3.reminder_sms_notification = this.getNotifications.reminder_sms_notification
      this.model3.ads_newsletter_email_notification = this.getNotifications.ads_newsletter_email_notification
      this.model3.ads_newsletter_in_app_notification = this.getNotifications.ads_newsletter_in_app_notification
      this.model3.ads_newsletter_sms_notification = this.getNotifications.ads_newsletter_sms_notification
      storeUtils.fireAway()?.settings.updateNotification(this.model3).then(() => {
        storeUtils.fireAway().settings?.readAllNotification()
      })
    },
    toggleIntDropdown(){
      this.intDropdown = !this.intDropdown
    },
    toggleLocalDropdown(){
      this.localDropdown = !this.localDropdown
    },
    makeSwitch(value){
      this.verificationType = value
    },

    close(value){
      this.addMember = value
      this.addRole = value
    },

    handleUpdateBizProfile(){
      if(!this.getBusinessProfile.name){
        this.error.name = "business name is required"
        storeUtils.fireAway().auth?.commitErrors(this.error)
        RuthdoAlert({title:"business name is required", icon:'error'})
      }else {
        this.model.name = this.model.business_name ? this.model.business_address : this.getBusinessProfile.name
        this.model.email = this.model.business_email ? this.model.business_email : this.getBusinessProfile.email
        this.model.address = this.model.business_address ? this.model.business_address : this.getBusinessProfile.address
        this.model.website = this.model.business_website ? this.model.business_website : this.getBusinessProfile.website
        this.model.cac_number = this.model.cac_number ? this.model.cac_number : this.getBusinessProfile.cac_number
        storeUtils.fireAway().auth?.commitErrors(this.error)
        storeUtils.fireAway().settings?.updateBusinessProfileAction()
      }


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
        storeUtils.fireAway().settings?.updateBusinessProfileAction()
      }


    },

    initiateUpload(){
      document.getElementById('logo').click()
    },

    async triggerUpload(obj){
      await storeUtils.fireAway().auth?.handleUploadProfilePic(obj)
    },

    async handleUpload(file) {
      if (!file.length) return;
      this.uploadModel.type = 'logo'
      this.uploadModel.file = file[0]
      await this.triggerUpload(this.uploadModel)

    },

  },


  computed:{
    getCurrentRoute(){
      return router.currentRoute.value.name
    },

    loading(){
      return storeUtils.fireAway().settings?.getLoading
    },

    getError(){
      return storeUtils.fireAway().global?.getError
    },

    getDomains(){
      return storeUtils.fireAway().settings?.getDomains
    },

    getPersonalProfile(){
      return storeUtils.fireAway().settings?.getPersonalProfile
    },

    getNotifications(){
      return storeUtils.fireAway().settings?.getNotifications
    },

    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },
    getRoles(){
      return storeUtils.fireAway().settings?.getAllRoles
    },

    verificationType(){
      return storeUtils.fireAway().global?.getVerificationType
    },
    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }

    },

    getMarkup(){
        return storeUtils.fireAway().settings?.getMarkup
    },

    getMembers(){
        return storeUtils.fireAway().settings?.getMembers
    },

  },

  // watch:{
  //   getError(value){
  //     if(value){
  //      // do nothing
  //     }else{
  //       this.close(false)
  //       storeUtils.fireAway().global?.commitError(false)
  //     }
  //   }
  // },


  mounted() {
    storeUtils.fireAway().settings?.getDomainsAction()
    storeUtils.fireAway().settings?.getPersonalProfileAction()
    storeUtils.fireAway().settings?.readAllNotification()
    storeUtils.fireAway().settings?.readMarkupSettings()
    storeUtils.fireAway().settings?.readAllMembers()
  }
}
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/apercu');
.table-wrapper{
  overflow-x: scroll;
  width: 68.625rem;
}
@media (max-width: 1024px) {
  .table-wrapper{
    width: auto !important;
  }
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

.activeManageRole{
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.25rem;
  background:  #F8F1F8 !important;
  color:  #89128A !important;
  text-align: center;
  /* subtext/medium/14px */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  cursor: pointer;
}

.manage-item{
  display: flex;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  gap: 0.5rem;
  color:  #575A65;
  text-align: center;
  cursor: pointer;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  border-radius: 1.25rem;
  background: #FFF;
}

.manage-roles{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.25rem;

  background: #FFF;
  height: 3.5rem;
  width: 20rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;

}

.m-1{
  color:  #272833;

  /* bold/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}

m-2{
  color:  #575A65;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.notification-wrapper{
  width: 31.125rem;
  margin: 1.5rem 13.62rem 0 13.62rem ;
  padding: 1.5rem;
}

@media (max-width: 1024px) {
  .notification-wrapper{
    width: 100%;
    margin: 2rem 0 0 0;
    padding: 0;
  }
  .role{
    width: 100% !important;
    margin-bottom: 1rem;
  }
  .filter{
    width: 100% !important;
  }
}

.markup-item{
  width: 39rem;
  margin-top: 1rem;
}

.change_password{
  display: flex;
  flex-direction: column;
  gap: 1.63rem;
  margin-top: 2rem;
}

.markups{
  padding: 2.5rem;
}

@media (max-width: 1024px) {
  .markups{
    padding: 0;
  }

  .markup-item{
    width: 100%;
    margin-top: 1rem;
  }
}

.n-1{
  color:  #1D1E2C;

  /* Medium/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.n-2{
  color:  #575A65;

  /* caption/12px/regular */
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
}

.n-3{
  color: #000;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-items{
  margin-top: 2.25rem;
}

.notification-inner{
  margin-bottom: 1.5rem;
}

.accounts-inner{
  margin-bottom: 3.5rem;
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

.doc_type{
  color: #2D3139;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.change_password-p{
  color: #444854;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
}

.change_password-sub{
  color: #575A65;
  /* Paragraphs / 12px / Regular */
  font-family: 'Inter';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: 0.0015rem;
}

.form-area{
  margin-top: 2rem;
}

.personal-form-area{
  width: 50%;
}

@media (max-width: 1024px) {
  .personal-form-area{
    width: 100%;
  }
}

.accounts{
  padding-left: 1.5rem;
  padding-right: 2rem;
}

@media (max-width: 1024px) {
  .accounts{
    padding: 0;
  }
}

.accounts-main{
  margin-top: 2rem;
}

.grouped_input{
  display: inline-flex;
  width: 100%;
  gap:1.5rem;
  /* border:solid; */
}

.payment-options{
  display: flex;
}

.payment-m-h{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
}

.payment-m-s{
  margin-top: 1.5rem;
  color: #8D8D8D;
  /* Headings 16px */
  font-family: 'Apercu';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 125% */
}

.no-team-member-h{
  color: #0E0842;
  text-align: center;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  text-transform: capitalize;
}

.no-team-member-sub{
  color: #575A65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.no-team-member-text{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.no-team-member{
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2.54rem;
  margin: 4rem;
}

.manage-row{
  color:  #89128A;

  /* subtext/medium/14px */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.p-info{
  color: #272833;

  /* bold/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 116.667% */
}

.btn3{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-team{
  display: flex;
  width: 19.4375rem;
  padding: 0.5rem 5rem 0.5rem 1.25rem;
  align-items: center;
  gap: 1.0625rem;
  flex-shrink: 0;
  outline:none;
  border-radius: 0.375rem;
  border: 0.6px solid #E5E9F2;
  background: #FFF;

}

::placeholder{
  color: #9DA8B6;
  text-align: center;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}


.teams-header{
  display: flex;
  width: 68.625rem;
  padding: 1rem 1.25rem 1rem 1.5rem;
  justify-content:space-between;
  /*gap: 26.4375rem;*/
  border: 0.7px solid  #EFF2F7;
  margin-top: 1.5rem;

}

.payment-wrapper{
  padding-left: 1.5rem;
  margin-top: 2rem;
}

.domains{
  width: 63.4375rem;
  padding-left: 1.5rem;
  margin-top: 2rem;
}



.teams{
  width: 63.4375rem;
}

.domain-header{
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 7rem;
}


.p-sub-domain{
  width: 39.7rem;
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 0.5rem;
  line-height: 1.25rem; /* 142.857% */
}

@media (max-width: 1024px) {
  .domains{
    width: 100%;
    padding: 0;
  }
  .p-sub-domain{
    width: 100%;
  }
  .domain-header{
    flex-direction: column;
    height: auto;
    gap: 12px;
    margin-bottom: 2rem;
  }
  .btn3{
   flex-direction: column;
  }
}
.tabs{
  width: 100%;
}

.current-tab{
  color:  #1D1E2C;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}
.settings-wrapper-navs{
  width: 63.43rem;
}

.accounts-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
}


.tab-nav{
  padding: 0.25rem;
  height: auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid #FDEBFF;
  background: #EFF2F7;
  width: auto;

}
.inner-tab-nav{
  display: inline-flex;
  justify-content: space-between;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  width: 100%;

}

.inner-tab-nav > li{
  padding: 0.75rem 1.5rem;
  transition: .3s linear;
  cursor: pointer;
  border-radius: 1.25rem;
  color: #8492A6;
  font-family: 'Apercu';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */

}

.active {
  background: #FFF;
  transition: .4s ease-in-out;

}
.current-path{
  color: #575A65;
  /* Headings/32px/bold */
  font-family: 'Product Sans';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.625rem; /* 131.25% */
}

.breadcrumb-sub{
  height: 2.4rem;
  width: 12.4rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
}

.current-path-sub{
  color: #575A65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

@media (max-width: 1024px) {
  .settings-wrapper-navs{
    width: 100%;
  }

  .inner-tab-nav{
    overflow-x: scroll;
  }

  .accounts-header{
    padding: 0;
  }
  .p-info{
    font-size: 1rem;
  }

  .teams{
    width: 100%;
  }
  .teams-header{
    width: 100%;
    flex-direction: column-reverse;
  }

}


/* business form*/

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
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  gap:1.25rem;
  align-items: center;
}

.business_information_card_body{
  /*padding: 1.5rem;*/
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  .business_information_card_body{
    padding-right: 0;
  }
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

@media (max-width: 1024px) {
  .business_information_card_footer{
    justify-content: end;
    padding-right: 0;
  }
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
  background-position: center;
  background-size: cover;

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
  background: transparent;
}

@media (max-width: 1024px) {
  .business_information_card{
    width: 100%;
  }

  .m-1{
    font-size: 1rem;
  }
  .m-2{
    font-size: 14px;
  }
}


::-webkit-scrollbar{
  display: none;
}
</style>