<template>
  <add-team-member v-show="addMember" @close="close"></add-team-member>
  <add-new-role v-show="addRole" @close="close"></add-new-role>
  <add-domain v-show="addDomain" @close="close"></add-domain>
  <add-bank-account v-show="addAccount" @close="close"></add-bank-account>
  <edit-bank-account v-show="editBankAccount" @close="close"></edit-bank-account>
  <div v-show="inModal" class="layout-modal">
    <div v-show="showDeleteBankModal" class="delete-card-option">
      <div class="card-header">
        <p class="card-header-h">Confirm Action</p>
      </div>

      <div style="margin: 2rem">
        <p class="are-you-sure">Are you sure you want to delete this bank account?</p>

        <p class="are-you-sure-p">You're about to remove this bank {{bankName?.bank_name}}; This action is irreversible.</p>
      </div>

      <div class="card-footer">
        <p @click="cancelAction">Cancel</p>
        <on-boarding-button :loading="deleteLoading" :disabled="deleteLoading" @click="deleteBankAction" btn-width="11.0625rem" border="none" background="#F04444" text-node="Yes, Delete"></on-boarding-button>
      </div>

    </div>

    <div v-show="showCannotDeleteModal" class="delete-card-option">
      <div class="card-header">
        <p class="card-header-h">Oops</p>
        <img @click="cancelAction" src="../../assets/cancle.svg" />
      </div>

      <div style="margin: 2rem">
        <p class="are-you-sure">Sorry!</p>

        <p class="are-you-sure-p">You cannot delete this bank account information because you have just one bank account saved in your payment method.
          Please add a new bank account to replace this card so you can delete this card information..</p>
      </div>

    </div>
  </div>
  <change-password v-show="changePassword" @close="close"></change-password>
  <edit-role v-show="updateRole" @close="close"></edit-role>

  <!--  <account-deactivated></account-deactivated>-->
<!--  <deactivate-account-confirm></deactivate-account-confirm>-->
  <layout v-slot:child-content>
    <div class="settings-wrapper-navs">
      <div >
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
              <a :class="{'active':currentTab === 'Account'}" @click="currentTab = 'Account'" href="#Account">Account</a>
              <a v-if="getUser.account_type === 'super_admin'" :class="{'active':currentTab === 'Domain'}" href="#Domain" @click="currentTab = 'Domain'">Domain</a>
              <a v-if="getUser.account_type !== 'booker'" :class="{'active':currentTab === 'Teams'}" @click="currentTab = 'Teams'" href="#Teams">Teams</a>
              <a :class="{'active':currentTab === 'Notifications'}" href="#Notifications" @click="currentTab = 'Notifications'">Notifications</a>
              <a v-if="getUser.account_type !== 'booker'" :class="{'active':currentTab === 'Payment'}" href="#Payment" @click="currentTab = 'Payment'">Payment </a>
              <a :class="{'active':currentTab === 'Markup'}" href="#Markup" @click="currentTab = 'Markup'">Markup</a>
              <a :class="{'active':currentTab === 'Customization'}" href="#Customization" @click="currentTab = 'Customization'">Customization</a>
              <a :class="{'active':currentTab === 'Verification'}" href="#Verification" @click="currentTab = 'Verification'">Verification</a>
            </ul>
          </div>


      </div>
      <div class="tabs">
        <settings-skeletons-loader v-if="loading &&  teamLoading && rolesLoading"></settings-skeletons-loader>

        <div v-else>
          <div id="accounts" class="accounts  animate__animated animate__fadeIn" v-show="currentTab === 'Account'">
            <div class="accounts-inner">
              <div class="accounts-header">
                <p class="p-info">Personal Information</p>
              </div>

              <div class="accounts-main">
                <div class="personal-form-area">
                  <form>
                    <div class="grouped_input">
                      <on-boarding-input width="100%" :placeholder="getUser.first_name" label="first name"></on-boarding-input>
                      <on-boarding-input :placeholder="getUser.last_name" width="100%" label="last name"></on-boarding-input>
                    </div>

                    <on-boarding-input width="100%" :placeholder="getUser.email" label="Email address"></on-boarding-input>
                    <on-boarding-input width="100%" label="Phone number" :placeholder="getUser.phone" @inputValue="value => model1.phone = value"></on-boarding-input>
                  </form>
                  <div class="change_password">
                    <div>
                      <p class="change_password-p">Change Password</p>
                      <p class="change_password-sub">You can change your password here!</p>
                    </div>
                    <on-boarding-button @click="changePassword=true" color="#2C6CAC" text-node="Change Password" btn-width="10rem" height="3rem" background="#EAF0F7" border="none"></on-boarding-button>
                  </div>
                  <div style="display:flex;justify-content: end">
                    <OnBoardingButton @click="handleUpdateProfile" :loading="loading" :disabled="loading" border="none" :textNode="'Save Changes'" :btnWidth="'11.0625rem'"></OnBoardingButton>
                  </div>

                </div>
              </div>

            </div>


          </div>
          <div id="domains" class="domains  animate__animated animate__fadeIn" v-show="currentTab === 'Domain'">
            <div class="domain-header">
              <div>
                <p class="p-info">Domain</p>
                <p class="p-sub-domain">By default, your site is always accessible via a Tiqwa subdomain based on the site name. Custom domains
                  allow you to access your site via one or more custom domain names.</p>
              </div>

              <on-boarding-button @click="addDomain = true" fontsize="1rem" color="#FFFFFF" text-node="Add Custom Domain" btn-width="12.25rem" height="2.5rem" border="none"></on-boarding-button>

            </div>

            <div class="table-wrapper">
              <domain-table :data="getDomains" :is-paginate="false" :fields="domainFields"></domain-table>
            </div>
          </div>
          <div id="teams" class="teams  animate__animated animate__fadeIn" v-show="currentTab === 'Teams'">
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
              <input v-model="searchQuery" type="search" @input="doFilter" style="outline: none;border: none;width: 19.4rem" placeholder="Search team members"/>
            </div>

              <div class="btn3">
                <on-boarding-button v-show="activeManageRole === 'team'" class="role" @click="addMember=true" btn-width="10.625rem" height="2.5rem" text-node="Add New Member" fontsize="12px"></on-boarding-button>
                <on-boarding-button v-show="activeManageRole === 'permissions'" class="role" @click="addRole=true" btn-width="10.625rem" height="2.5rem" text-node="Create role" fontsize="12px"></on-boarding-button>
              </div>
            </div>

            <div class="teams-main">

              <div v-if="activeManageRole==='team'" >
                <div v-if="getMembers?.length > 0" class="table-wrapper">
                  <domain-table :is-paginate="true" :data="membersFilteredResult.length > 0 ? membersFilteredResult : getMembers" :fields="membersFields"></domain-table>
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
                  <domain-table @updatingRole="editRole" :is-paginate="true" :data="getRoles" :fields="rolesFields"></domain-table>
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
          <div id="notifications" class="notifications  animate__animated animate__fadeIn" v-show="currentTab === 'Notifications'">
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
          <div id="payments" class="payments  animate__animated animate__fadeIn" v-show="currentTab === 'Payment'">
            <div class="payment-wrapper">
              <div class="payment-header">
                <p class="payment-m-h">Payment method</p>
                <on-boarding-button v-if="getUser.account_type === 'super_admin'" @click="addAccount = true" fontsize="1rem" color="#FFFFFF" text-node="Add bank account" btn-width="12.25rem" height="2.5rem" border="none"></on-boarding-button>
              </div>

              <div>
                <div class="payment-choice">
    <!--              <p class="payment-m-s" style="cursor: not-allowed">Payment  Gateway</p>-->
                  <p class="payment-m-s" :class="{'payment_type_active':paymentType === 'bank'}" style="cursor: pointer" @click="paymentType = 'bank'">Bank Account</p>
                </div>

                <div v-if="paymentType === 'bank'">

                  <div v-if="getBankAccount?.length > 0">
                    <div class="bank-wrapper">
                      <div class="bank-card" v-for="(i, index) in getBankAccount" :key="index">
                      <div v-if="getUser.account_type === 'super_admin'" @click="showActions(index)" style="position: absolute;right: 1.5rem;top:1.25rem;cursor: pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="22" viewBox="0 0 4 22" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#1D1E2C"/>
                          <circle cx="2" cy="11" r="2" fill="#1D1E2C"/>
                          <circle cx="2" cy="20" r="2" fill="#1D1E2C"/>
                        </svg>
                      </div>
                      <div>
                        <p class="accounts_name">{{i.account_name}}</p>
                        <p class="bank_name">{{i.account_number}}</p>
                        <p class="bank_name">{{i.bank_name}}</p>
                      </div>
                      <div v-if="index===bankIndex && show" class="card-option">
                          <p class="edit" @click="editBank(i)">Edit Bank Account</p>

                          <p class="delete" @click="deleteBank(i)">Delete Bank Account</p>

                        </div>
                      </div>
                    </div>
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
                        <p class="no-team-member-h">Hi {{ getBusinessProfile?.name }}, let’s set up your account now!</p>
                        <p class="no-team-member-sub">Yeah, you currently have not added a bank account. Add one today.</p>
                      </div>
                    </div>
                  </div>

                </div>


              </div>


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
          <div id="markups" class="markups  animate__animated animate__fadeIn" v-show="currentTab === 'Markup'">
            <div class="markups-wrapper">
              <div class="markup-item">
                <div>
                  <p class="m-1">Local Markup Details</p>
                  <p class="m-2">Your mark up details will be applied to the prices of all local flights results returned</p>
                </div>

                <div class="form-area">
                  <on-boarding-input width="100%"  type="number" label="Value" :placeholder="getMarkup?.domestic_markup_value ? getMarkup?.domestic_markup_value : null" @inputValue="value => markupModel.domestic_markup_value = value"></on-boarding-input>
                  <div class="choose_document_type" style="position: relative;">

                    <div style="">
                      <p class="doc_type"> {{LocalMarkUpPlaceHolder }}</p>
                      <div class="doc_type_options" v-show="localDropdown">
                        <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Fixed',toggleLocalDropdown(),markupModel.domestic_markup_type = 'fixed'">fixed</p>
                        <p class="doc_type_item" @click="LocalMarkUpPlaceHolder='Percentage', toggleLocalDropdown(),markupModel.domestic_markup_type = 'percentage'" >percentage</p>

                      </div>

                    </div>
                    <img src="../../assets/Monotone.svg" style="cursor: pointer" @click="toggleLocalDropdown" />
                  </div>

                  <div class="item">
                    <p class="n-3">Per Passenger</p>
                    <img style="margin-right: -10px;cursor: pointer" @click="setLocalPerPass(0)" v-if="getMarkup?.domestic_markup_per_passenger === 1" src="../../assets/Switchon.svg" />

                    <img style="cursor: pointer"  src="../../assets/Switchoff.svg" v-else @click="setLocalPerPass(1)"/>
                  </div>
                  <div class="item">
                    <p class="n-3">Per Route</p>
                    <img style="margin-right: -10px;cursor: pointer" @click="setLocalPerRou(0)" src="../../assets/Switchon.svg" v-if="getMarkup?.domestic_markup_per_route === 1" />

                    <img style="cursor: pointer" src="../../assets/Switchoff.svg" @click="setLocalPerRou(1)" v-else/>

                  </div>

                </div>
              </div>

              <div class="markup-item">
                <div>
                  <p class="m-1">International Markup Details</p>
                  <p class="m-2">Your mark up details will be applied to the prices of all local flights results returned</p>
                </div>

                <div class="form-area">
                  <on-boarding-input width="100%"  type="number" label="Value" :placeholder="getMarkup?.international_markup_value  ? getMarkup?.international_markup_value : null" @inputValue="value => markupModel.international_markup_value = value"></on-boarding-input>
                  <div class="choose_document_type"  style="position: relative;">

                    <div style="">
                      <p class="doc_type"> {{ IntMarkUpPlaceHolder }}</p>
                      <div class="doc_type_options" v-show="intDropdown">
                        <p class="doc_type_item" @click="IntMarkUpPlaceHolder='fixed',toggleIntDropdown(),markupModel.international_markup_type = 'fixed'">fixed</p>
                        <p class="doc_type_item" @click="IntMarkUpPlaceHolder='percentage',toggleIntDropdown(),markupModel.international_markup_type = 'percentage'">percentage</p>

                      </div>

                    </div>
                    <img src="../../assets/Monotone.svg" style="cursor: pointer" @click="toggleIntDropdown" />
                  </div>

                  <div class="item">
                    <p class="n-3">Per Passenger</p>
                    <img style="margin-right: -10px;cursor: pointer" @click="setIntPerPass(0)" v-if="getMarkup?.international_markup_per_passenger === 1" src="../../assets/Switchon.svg" />

                    <img style="cursor: pointer" src="../../assets/Switchoff.svg"  @click="setIntPerPass(1)" v-else/>
                  </div>

                  <div class="item">
                    <p class="n-3">Per Route</p>
                    <img style="margin-right: -10px;cursor: pointer"  @click="setIntPerRou(0)" src="../../assets/Switchon.svg" v-if="getMarkup?.international_markup_per_route === 1" />

                    <img style="cursor: pointer" src="../../assets/Switchoff.svg" @click="setIntPerRou(1)" v-else/>

                  </div>

                  <div style="width: 100%;display: flex;justify-content: end;margin-top: 3.5rem">
                    <on-boarding-button border="none" :loading="loading" :disabled="loading" @click="doUpdateMarkup" btn-width="11.0625rem" text-node="Save Changes"></on-boarding-button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div id="customization" class="customization_wrapper animate__animated animate__fadeIn" v-show="currentTab === 'Customization'">
            <Customization></Customization>
          </div>

          <div id="verifications" class="verifications  animate__animated animate__fadeIn" v-show="currentTab === 'Verification'">
          <business-verification v-if="verification_Type ==='business'"  :is-component="false" :in-route="false"></business-verification>
          <upload-docs @parentDisableShow=""  v-else :is-component="false" :in-route="false" v-if="verification_Type === 'docs'"></upload-docs>
        </div>
        </div>
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
import ChangePassword from "../../components/modals/ChangePassword.vue";
import AccountDeactivated from "../../components/modals/AccountDeactivated.vue";
import DeactivateAccountConfirm from "../../components/modals/DeactivateAccountConfirm.vue";
import AddDomain from "../../components/modals/AddDomain.vue";
import AddBankAccount from "../../components/modals/AddBankAccount.vue";
import EditBankAccount from "../../components/modals/EditBankAccount.vue";
import SettingsSkeletonsLoader from "../../components/loaders/SettingsSkeletonsLoader.vue";
import EditRole from "../../components/modals/EditRole.vue";
import Dashboard from "../dashboard/Index.vue"
import { ref } from "vue";
import Customization from "@/components/customization/Customization.vue";

export default {
  name: "Settings",
  components:{
    Layout,
    OnBoardingButton,
    Dashboard,
    BusinessVerification,
    UploadDocs,
    OnBoardingInput,
    AddTeamMember,
    DomainTable,
    AddNewRole,
    AccountDeactivated,
    DeactivateAccountConfirm,
    AddDomain,
    AddBankAccount,
    EditBankAccount,
    SettingsSkeletonsLoader,
    ChangePassword,
    EditRole,
    Customization
  },

  data(){
    return{
      pureColor:"red",
      gradientColor:"linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
      currentTab:this.getCurrentRouteParams,
      verificationType:'business',
      model:SettingsRequest.updateBusinessProfile,
      model1:SettingsRequest.updateProfileInfo,
      model3:SettingsRequest.updateNotificationSettings,
      markupModel:SettingsRequest.updateMarkup,
      updateBank:SettingsRequest.updateBank,
      LocalMarkUpPlaceHolder:this.getMarkup?.domestic_markup_type  ? this.getMarkup?.domestic_markup_type : "Markup Type" ,
      IntMarkUpPlaceHolder:this.getMarkup?.international_markup_type  ? this.getMarkup?.international_markup_type :"Markup Type",
      addMember:false,
      addRole:false,
      changePassword:false,
      updateRole:false,
      searchQuery:null,
      editBankAccount:false,
      show:true,
      intDropdown:false,
      addDomain:false,
      addAccount:false,
      localDropdown:false,
      activeManageRole:"team",
      bankIndex:null,
      bankName:null,
      paymentType:'bank',
      inModal:false,
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
        // {key:"Action", label:"Action"},
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
        // {key:"Action", label:"Action",id:"member"},
      ],
      showDeleteBankModal:false,
      showCannotDeleteModal:false,
      membersFilteredResult:[],


    }
  },

  methods:{
    editRole(value){
      console.log(value)
      this.updateRole = value

    },

    doFilter(){
      this.membersFilteredResult = this.getMembers.filter(it => it.first_name?.toLowerCase().includes(this.searchQuery)
      ||it.last_name?.toLowerCase().includes(this.searchQuery) ||
          it.email?.toLowerCase().includes(this.searchQuery) ||
          it.type?.toLowerCase().includes(this.searchQuery))
    },

    deleteBank(value){
      this.inModal = !this.inModal
      this.bankName = value
      if(this.getBankAccount.length === 1){
        this.showCannotDeleteModal = !this.showCannotDeleteModal
      }else{
        this.showDeleteBankModal = !this.showDeleteBankModal
      }

    },

    editBank(obj){
      this.editBankAccount= true
      SettingsRequest.updateBank.bank_name = obj.bank_name
      SettingsRequest.updateBank.id = obj.id
      SettingsRequest.updateBank.code = obj.code
      SettingsRequest.updateBank.account_name = obj.account_name
      SettingsRequest.updateBank.account_number = obj.account_number

    },

    deleteBankAction(){
      storeUtils.fireAway().settings?.deleteBank(this.bankName.id).then(() =>{
        if(this.getError === 'false'){
          this.close(false)
          this.cancelAction()
        }
      })
    },

    showActions(index){

      if(this.bankIndex === index){
        this.bankIndex=index
        this.show = !this.show
      }else if(!this.show){
        this.bankIndex=index
        this.show = !this.show
      }
        else{
        this.bankIndex=index

      }
    },

    cancelAction(){
      this.inModal = !this.inModal
      this.bankName = null
      if(this.getBankAccount.length === 1){
        this.showCannotDeleteModal = !this.showCannotDeleteModal
      }else{
        this.showDeleteBankModal = !this.showDeleteBankModal

      }
    },

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

    close(value) {
      this.addMember = value
      this.addRole = value
      this.addDomain = value
      this.addAccount = value
      this.editBankAccount = value
      this.bankIndex = null
      this.changePassword = value
      this.updateRole = value
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
        this.model1.first_name = this.model1.first_name ? this.model1.first_name : this.getUser.first_name
        this.model1.last_name = this.model1.last_name ? this.model1.last_name : this.getUser.last_name
        this.model1.email = this.model1.email ? this.model1.email : this.getUser.email
        this.model1.phone = this.model1.phone ? this.model1.phone : this.getUser.phone
        storeUtils.fireAway().settings?.updateProfileAction()
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

    doUpdateMarkup(){
      console.log(this.markupModel)
      storeUtils.fireAway().settings?.updateMarkup()
    },

    setIntPerPass(value){
      this.markupModel.international_markup_per_passenger = value,
      this.getMarkup.international_markup_per_passenger = value
    },

    setIntPerRou(value){
      this.markupModel.international_markup_per_route = value,
      this.getMarkup.international_markup_per_route = value
    },

    setLocalPerPass(value){
      this.markupModel.domestic_markup_per_passenger = value,
      this.getMarkup.domestic_markup_per_passenger = value
    },

    setLocalPerRou(value){
      this.markupModel.domestic_markup_per_route = value,
      this.getMarkup.domestic_markup_per_route = value
    }

  },


  computed:{
    getCurrentRoute(){
      return router.currentRoute.value.name
    },

    deleteLoading(){
      return storeUtils.fireAway().settings?.getDeleteLoading
    },

    getCurrentRouteParams(){
      return router?.currentRoute?.value?.hash?.split('#')[1]
    },

    loading(){
      return storeUtils.fireAway().settings?.getLoading
    },
    domainLoading(){
      return storeUtils.fireAway().settings?.getDomainLoading
    },
    rolesLoading(){
      return storeUtils.fireAway().settings?.getRolesLoading
    },
    teamLoading(){
      return storeUtils.fireAway().settings?.getTeamLoading
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
      return storeUtils.fireAway().settings?.getAllRoles?.reverse()
    },

    verification_Type(){
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
        return storeUtils.fireAway().settings?.getMembers?.reverse()
    },

    getBankAccount(){
      return storeUtils.fireAway().settings?.getBankAccount
    }

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
    const pureColor = ref("red");
    const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

    setTimeout(() => { this.currentTab = this.getCurrentRouteParams },500)
    storeUtils.fireAway().global?.commitError(null)
    storeUtils.fireAway().settings?.getDomainsAction()
    storeUtils.fireAway().settings?.getPersonalProfileAction()
    storeUtils.fireAway().settings?.readAllNotification()
    storeUtils.fireAway().settings?.readMarkupSettings()
    storeUtils.fireAway().settings?.readAllMembers()
    storeUtils.fireAway().settings?.readBanksAccount()

    return { pureColor, gradientColor }

  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/apercu');

#customization{
  position:relative;
  width: 100%;
}

.navigation-links{
  display: flex !important;
}


.customization_wrapper{
  display: flex;
  justify-content: space-between;
  margin: 2.75rem 0;
  position:relative;
  gap: 5.19rem;
  width: 100%;

}




.cover{
  overflow: hidden;
  transform: scale(.9);
  transform-origin: 0 0;
}

.accounts_name{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 171.429% */
}

.bank_name{
  color:  #1D1E2C;
  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}



.delete{
  color:  #F04444;
  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;
}

.edit{
  color:  #1D1E2C;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;

}

.delete-card-option{
  width: 34rem;
  height: 23.25rem;
  border-radius: 0.5rem;
  background:  #FFF;
  position: relative;
  /* Shadows / Modals */
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
}

@media (max-width: 1024px) {
  .delete-card-option{
    width: 90% !important;
  }
}

.layout-modal{
  background: #00000065;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  position: fixed;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.are-you-sure{
  color:  #1D1E2C;

  /* Title/18px/Medium */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 144.444% */
  margin-bottom: 0.88rem;
}

.are-you-sure-p{
  color:  #575A65;

  /* Body/16px/Regular */
  font-family:' Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.bank-wrapper{
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.card-option{
  display: inline-flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  position: absolute;
  right: 1rem;
  bottom: -2rem;
  z-index: 99;
  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.payment-choice{
  display: inline-flex;
  gap: 3.88rem;
  border-bottom: 1px solid #DFE6ED;
  width: 48.75006rem;
}


.bank-card{
  width: 20.4375rem;
  height: 9.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid  #E5E9F2;
  background: #F9FAFC;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:0.5rem;
  padding-left:1.5rem;
  background-image: url("../../assets/Settings/bank_svg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}


@media (max-width: 1024px) {
  .payment-choice{
    width:100%;
  }

  .bank-card{
    width: 100%;
  }
}

.card-header{
  display: flex;
  width: 34rem;
  height: 4.5rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  align-items: center;
  flex-shrink: 0;
  background:  #F9FAFC;
  justify-content: space-between;
}

.card-header-h{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
}

.card-footer{
  display: flex;
  align-items: center;
  gap:2.9rem;
  justify-content: flex-end;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 100%;
}

.payment-header{
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.table-wrapper{
  overflow-x: scroll;
  width: 68.625rem;
}
@media (max-width: 1024px) {
  .table-wrapper{
    width: auto !important;
  }

  .payment-header{
    flex-direction: column;
    align-items: start;
    gap: 1rem;
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
  background:  var(--app-defautl-primary-light2) !important;
  color:  var(--app-default-primary) !important;
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

@media (max-width: 1024px) {
  .manage-roles{
    width: 100%;
    margin: 20px 0;
  }

  .doc_type_options{
    width: 100%;
  }
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
  margin: 2rem 0;
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
  font-family: 'Product San';
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
  padding-bottom: 0.13rem;
}

.payment_type_active{
  border-bottom:0.125rem solid var(--app-default-primary);

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
@media (max-width: 1024px) {
  .search-team{
    width: 100%;
  }
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
  width: 52rem;
}

@media (max-width: 1024px) {
  .payment-wrapper{
    width: 100%;
  }
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
  min-height: 100vh;
  margin-bottom: 20px;
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
  width: 68.586rem;
  margin: 4rem 5.5rem;
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
  border: 1px solid var(--app-defautl-primary-light);
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
  overflow: scroll;
}

.inner-tab-nav > a {
  padding: 0.75rem 1.5rem;
  transition: .3s linear;
  cursor: pointer;
  border-radius: 1.25rem;
  color: #8492A6;
  font-family: 'Apercu';
  font-size: 1rem;
  font-style: normal;
  text-decoration: none;
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

  .card-header{
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