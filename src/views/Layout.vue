<template>
  <permission-modal v-if="getIsUnauthorised"></permission-modal>
  <notification v-if="notification" @close="close"></notification>
  <modal-loader v-if="logOut" message="signing out, see you soon."></modal-loader>

  <div v-if="getTenantLoaded" class="wrapper">
    <div class="inner-wrapper">
      <NavBar v-slot:children>
        <div class="m6-0">
          <router-link :to="`/dashboard/${getUser?.access_token?.slice(0, 20)}`">
            <img
              v-if="getTenant.logo"
              :src="getTenant.logo"
              alt="TenantLogo"
              class="logo"
            />
            <p
              v-else
              class="tenant_name"
              :style="!getTenant.logo ? { padding: '1rem 0' } : null"
            >
              {{ getTenant.name }}
            </p>
          </router-link>

          <div class="navigation-links" id="nav">
            <template
              v-if="
                getUser?.account_type === 'super_admin' ||
                getUser?.account_type === 'admin' ||
                (getBusinessProfile?.is_cac_verified === 'true' &&
                  getBusinessProfile?.is_id_verified === 'true')
              "
            >
              <!-- dashboard -->
              <router-link :to="`/dashboard/${getUser?.access_token?.slice(0, 20)}`">
                <div
                  class="links-item"
                  :style="
                    getCurrentRoute.includes('dashboard')
                      ? {
                          backgroundColor: custom_theme
                            ? lightenColor(custom_theme.color)
                            : lightenColor(default_theme.color),
                        }
                      : {}
                  "
                  :class="{
                    active: getCurrentRoute.includes('dashboard'),
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M10.2097 15.625C9.86805 15.625 9.58472 15.3417 9.58472 15V12.5C9.58472 12.1583 9.86805 11.875 10.2097 11.875C10.5514 11.875 10.8347 12.1583 10.8347 12.5V15C10.8347 15.3417 10.5514 15.625 10.2097 15.625Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M14.8764 18.8H5.54302C4.02635 18.8 2.64302 17.6333 2.39302 16.1417L1.28468 9.50001C1.10135 8.46668 1.60968 7.14168 2.43468 6.48335L8.20968 1.85835C9.32635 0.958348 11.0847 0.966681 12.2097 1.86668L17.9847 6.48335C18.8013 7.14168 19.3013 8.46668 19.1347 9.50001L18.0263 16.1333C17.7763 17.6083 16.3597 18.8 14.8764 18.8ZM10.2014 2.44168C9.75968 2.44168 9.31802 2.57501 8.99302 2.83335L3.21802 7.46668C2.75135 7.84168 2.41802 8.70835 2.51802 9.30001L3.62635 15.9333C3.77635 16.8083 4.65135 17.55 5.54302 17.55H14.8764C15.768 17.55 16.643 16.8083 16.793 15.925L17.9014 9.29168C17.993 8.70835 17.6597 7.82501 17.2013 7.45835L11.4264 2.84168C11.093 2.57501 10.643 2.44168 10.2014 2.44168Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                  </svg>

                  <span class="links">Dashboard</span>
                </div>
              </router-link>
              <!-- agents -->
              <router-link
                v-if="
                  getUser?.account_type === 'super_admin' ||
                  getUser.account_type === 'admin'
                "
                :to="`/agents/${getUser?.access_token?.slice(0, 20)}`"
              >
                <div
                  class="links-item"
                  :style="
                    getCurrentRoute.includes('agents')
                      ? {
                          backgroundColor: custom_theme
                            ? lightenColor(custom_theme.color)
                            : lightenColor(default_theme.color),
                        }
                      : {}
                  "
                  :class="{
                    active: getCurrentRoute.includes('agents'),
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M15.3549 6.59148C15.3299 6.59148 15.3132 6.59148 15.2882 6.59148H15.2466C13.6716 6.54148 12.4966 5.32481 12.4966 3.82481C12.4966 2.29147 13.7466 1.0498 15.2716 1.0498C16.7966 1.0498 18.0466 2.29981 18.0466 3.82481C18.0383 5.33314 16.8632 6.54981 15.3632 6.59981C15.3632 6.59147 15.3632 6.59148 15.3549 6.59148ZM15.2716 2.29148C14.4299 2.29148 13.7466 2.97481 13.7466 3.81648C13.7466 4.64148 14.3883 5.30815 15.2133 5.34148C15.2216 5.33315 15.2882 5.33315 15.3632 5.34148C16.1716 5.29981 16.7966 4.63314 16.8049 3.81648C16.8049 2.97481 16.1216 2.29148 15.2716 2.29148Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M15.3632 12.7339C15.0382 12.7339 14.7132 12.7089 14.3882 12.6505C14.0466 12.5922 13.8216 12.2672 13.8799 11.9255C13.9382 11.5839 14.2632 11.3589 14.6049 11.4172C15.6299 11.5922 16.7132 11.4005 17.4382 10.9172C17.8299 10.6589 18.0382 10.3339 18.0382 10.0089C18.0382 9.68386 17.8216 9.36719 17.4382 9.10886C16.7132 8.62553 15.6132 8.43386 14.5799 8.6172C14.2382 8.68386 13.9132 8.45053 13.8549 8.10886C13.7966 7.7672 14.0216 7.4422 14.3632 7.38387C15.7216 7.1422 17.1299 7.40053 18.1299 8.06719C18.8632 8.55886 19.2882 9.25886 19.2882 10.0089C19.2882 10.7505 18.8716 11.4589 18.1299 11.9589C17.3716 12.4589 16.3882 12.7339 15.3632 12.7339Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M5.32988 6.592C5.32155 6.592 5.31322 6.592 5.31322 6.592C3.81322 6.542 2.63822 5.32532 2.62988 3.82532C2.62988 2.29199 3.87988 1.04199 5.40488 1.04199C6.92988 1.04199 8.17988 2.29199 8.17988 3.81699C8.17988 5.32533 7.00488 6.542 5.50488 6.592L5.32988 5.967L5.38822 6.592C5.37155 6.592 5.34655 6.592 5.32988 6.592ZM5.41322 5.342C5.46322 5.342 5.50488 5.34199 5.55488 5.35032C6.29655 5.31699 6.94655 4.65032 6.94655 3.82532C6.94655 2.98366 6.26322 2.30032 5.42155 2.30032C4.57988 2.30032 3.89655 2.98366 3.89655 3.82532C3.89655 4.64199 4.52988 5.30032 5.33822 5.35032C5.34655 5.34199 5.37988 5.342 5.41322 5.342Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M5.321 12.7339C4.296 12.7339 3.31266 12.4589 2.55433 11.9589C1.821 11.4672 1.396 10.7589 1.396 10.0089C1.396 9.26719 1.821 8.55886 2.55433 8.06719C3.55433 7.40053 4.96266 7.1422 6.321 7.38387C6.66266 7.4422 6.88766 7.7672 6.82933 8.10886C6.771 8.45053 6.446 8.68386 6.10433 8.6172C5.071 8.43386 3.97933 8.62553 3.246 9.10886C2.85433 9.36719 2.646 9.68386 2.646 10.0089C2.646 10.3339 2.86266 10.6589 3.246 10.9172C3.971 11.4005 5.05433 11.5922 6.07933 11.4172C6.421 11.3589 6.746 11.5922 6.80433 11.9255C6.86266 12.2672 6.63766 12.5922 6.296 12.6505C5.971 12.7089 5.646 12.7339 5.321 12.7339Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M10.3549 12.8171C10.3299 12.8171 10.3132 12.8171 10.2882 12.8171H10.2466C8.67158 12.7671 7.49658 11.5504 7.49658 10.0504C7.49658 8.51706 8.74658 7.27539 10.2716 7.27539C11.7966 7.27539 13.0466 8.52539 13.0466 10.0504C13.0382 11.5587 11.8632 12.7754 10.3632 12.8254C10.3632 12.8171 10.3632 12.8171 10.3549 12.8171ZM10.2716 8.51706C9.42992 8.51706 8.74658 9.2004 8.74658 10.0421C8.74658 10.8671 9.38825 11.5337 10.2133 11.5671C10.2216 11.5587 10.2882 11.5587 10.3632 11.5671C11.1716 11.5254 11.7966 10.8587 11.8049 10.0421C11.8049 9.20873 11.1216 8.51706 10.2716 8.51706Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M10.3537 18.9666C9.35374 18.9666 8.35374 18.7083 7.57874 18.1833C6.84541 17.6916 6.42041 16.9916 6.42041 16.2416C6.42041 15.4999 6.83708 14.7833 7.57874 14.2916C9.13708 13.2583 11.5787 13.2583 13.1287 14.2916C13.8621 14.7833 14.2871 15.4833 14.2871 16.2333C14.2871 16.9749 13.8704 17.6916 13.1287 18.1833C12.3537 18.6999 11.3537 18.9666 10.3537 18.9666ZM8.27041 15.3416C7.87874 15.5999 7.67041 15.9249 7.67041 16.2499C7.67041 16.5749 7.88708 16.8916 8.27041 17.1499C9.39541 17.9083 11.3037 17.9083 12.4287 17.1499C12.8204 16.8916 13.0287 16.5666 13.0287 16.2416C13.0287 15.9166 12.8121 15.5999 12.4287 15.3416C11.3121 14.5833 9.40374 14.5916 8.27041 15.3416Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                  </svg>
                  <span class="links">Travel Agents</span>
                </div></router-link
              >
              <!-- booking -->
              <router-link :to="`/bookings/`">
                <div
                  class="links-item"
                  :style="
                    getCurrentRoute.includes('bookings')
                      ? {
                          backgroundColor: custom_theme
                            ? lightenColor(custom_theme.color)
                            : lightenColor(default_theme.color),
                        }
                      : {}
                  "
                  :class="{
                    active: getCurrentRoute.includes('bookings'),
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="#000"
                  >
                    <path
                      d="M14.8763 17.2923H6.54301C2.86801 17.2923 1.75134 16.1756 1.75134 12.5007V12.084C1.75134 11.7423 2.03468 11.459 2.37634 11.459C3.17634 11.459 3.83468 10.8007 3.83468 10.0007C3.83468 9.20065 3.17634 8.54232 2.37634 8.54232C2.03468 8.54232 1.75134 8.25898 1.75134 7.91732V7.50065C1.75134 3.82565 2.86801 2.70898 6.54301 2.70898H14.8763C18.5513 2.70898 19.668 3.82565 19.668 7.50065V8.33398C19.668 8.67565 19.3847 8.95898 19.043 8.95898C18.243 8.95898 17.5847 9.61732 17.5847 10.4173C17.5847 11.2173 18.243 11.8757 19.043 11.8757C19.3847 11.8757 19.668 12.159 19.668 12.5007C19.668 16.1756 18.5513 17.2923 14.8763 17.2923ZM3.00134 12.634C3.01801 15.5006 3.60968 16.0423 6.54301 16.0423H14.8763C17.6597 16.0423 18.3347 15.5506 18.4097 13.0506C17.218 12.7673 16.3347 11.6923 16.3347 10.4173C16.3347 9.14232 17.2263 8.06732 18.418 7.78398V7.50065C18.418 4.52565 17.8597 3.95898 14.8763 3.95898H6.54301C3.60968 3.95898 3.01801 4.50065 3.00134 7.36732C4.19301 7.65065 5.08468 8.72565 5.08468 10.0007C5.08468 11.2757 4.19301 12.3506 3.00134 12.634Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M9.04309 6.04232C8.70142 6.04232 8.41809 5.75898 8.41809 5.41732V3.33398C8.41809 2.99232 8.70142 2.70898 9.04309 2.70898C9.38476 2.70898 9.66809 2.99232 9.66809 3.33398V5.41732C9.66809 5.75898 9.38476 6.04232 9.04309 6.04232Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M9.04309 12.1501C8.70142 12.1501 8.41809 11.8668 8.41809 11.5251V8.4668C8.41809 8.12513 8.70142 7.8418 9.04309 7.8418C9.38476 7.8418 9.66809 8.12513 9.66809 8.4668V11.5251C9.66809 11.8751 9.38476 12.1501 9.04309 12.1501Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M9.04309 17.2923C8.70142 17.2923 8.41809 17.009 8.41809 16.6673V14.584C8.41809 14.2423 8.70142 13.959 9.04309 13.959C9.38476 13.959 9.66809 14.2423 9.66809 14.584V16.6673C9.66809 17.009 9.38476 17.2923 9.04309 17.2923Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                  </svg>
                  <span class="links">Manage Bookings</span>
                </div>
              </router-link>
              <!-- transactions -->
              <router-link :to="`/transaction/${getUser?.access_token?.slice(0, 20)}`">
                <div
                  class="links-item"
                  :class="{
                    active: getCurrentRoute.includes('transaction'),
                  }"
                  :style="
                    getCurrentRoute.includes('transaction')
                      ? {
                          backgroundColor: custom_theme
                            ? lightenColor(custom_theme.color)
                            : lightenColor(default_theme.color),
                        }
                      : {}
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M14.6931 17.2918H9.30139C8.95972 17.2918 8.67639 17.0085 8.67639 16.6668C8.67639 16.3251 8.95972 16.0418 9.30139 16.0418H14.6931C17.2431 16.0418 17.8431 15.6251 17.9097 13.3585C16.8097 13.0751 15.9931 12.0751 15.9931 10.8918C15.9931 9.70013 16.8097 8.6918 17.9181 8.40846V8.1918C17.9181 5.45013 17.4347 4.9668 14.6931 4.9668H10.0014V10.0001C10.0014 10.3418 9.71806 10.6251 9.37639 10.6251C9.03473 10.6251 8.75139 10.3418 8.75139 10.0001V4.3418C8.75139 4.00013 9.03473 3.7168 9.37639 3.7168H14.6931C18.1264 3.7168 19.1681 4.75846 19.1681 8.1918V8.95846C19.1681 9.30013 18.8847 9.58346 18.5431 9.58346C17.8264 9.58346 17.2431 10.1668 17.2431 10.8918C17.2431 11.6085 17.8264 12.1918 18.5431 12.1918C18.8847 12.1918 19.1681 12.4751 19.1681 12.8168C19.1681 16.2501 18.1264 17.2918 14.6931 17.2918Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M9.37638 17.2918H7.06805C5.38471 17.2918 4.51805 16.0252 3.72638 14.1252L3.56805 13.7418C3.50971 13.5918 3.50971 13.4168 3.57638 13.2668C3.64305 13.1168 3.76805 12.9918 3.91805 12.9335C4.25138 12.8002 4.50971 12.5418 4.65138 12.2168C4.79305 11.8835 4.79305 11.5168 4.65138 11.1835C4.37638 10.4835 3.58471 10.1585 2.88471 10.4335C2.72638 10.5002 2.55971 10.4918 2.40138 10.4252C2.25138 10.3585 2.12638 10.2335 2.06805 10.0835L1.92638 9.72518C0.593047 6.48351 1.17638 5.09185 4.41805 3.75018L6.61805 2.85018C6.93471 2.71685 7.30138 2.87518 7.43471 3.19185L9.95971 9.30851C9.99305 9.38351 10.0097 9.46685 10.0097 9.55018V11.6668C10.0097 12.0085 9.72638 12.2918 9.38471 12.2918C9.04305 12.2918 8.75971 12.0085 8.75971 11.6668V9.66685L6.50971 4.24185L4.89305 4.90851C2.32638 5.96685 2.01805 6.61685 3.02638 9.11685C4.18471 8.95018 5.35138 9.57518 5.80971 10.7002C6.07638 11.3418 6.07638 12.0502 5.80138 12.6918C5.61805 13.1335 5.31805 13.5085 4.93471 13.7835C5.73471 15.6668 6.31805 16.0418 7.05971 16.0418H8.74305V14.1668C8.74305 13.8252 9.02638 13.5418 9.36805 13.5418C9.70971 13.5418 9.99305 13.8252 9.99305 14.1668V16.6668C10.0014 17.0085 9.71805 17.2918 9.37638 17.2918Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                    <path
                      d="M7.01801 17.291H6.87634C6.53468 17.291 6.25134 17.0077 6.25134 16.666C6.25134 16.3243 6.53468 16.041 6.87634 16.041H7.01801C7.35968 16.041 7.64301 16.3243 7.64301 16.666C7.64301 17.0077 7.35968 17.291 7.01801 17.291Z"
                      :fill="custom_theme ? custom_theme.color : default_theme.color"
                    />
                  </svg>
                  <span class="links">Transactions</span>
                </div></router-link
              >
            </template>
            <!-- itinerarary -->
            <router-link :to="`/support`">
              <div
                class="links-item"
                :class="{
                  active: getCurrentRoute.includes('support'),
                }"
                :style="
                  getCurrentRoute.includes('support')
                    ? {
                        backgroundColor: custom_theme
                          ? lightenColor(custom_theme.color)
                          : lightenColor(default_theme.color),
                      }
                    : {}
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.98999 22.78C9.38999 22.78 8.81999 22.48 8.42999 21.95L7.23001 20.35C7.23001 20.36 7.18 20.33 7.16 20.33H6.79001C3.37001 20.33 1.25 19.4 1.25 14.79V10.79C1.25 6.58001 3.82001 5.48001 5.98001 5.29001C6.22001 5.26001 6.50001 5.25 6.79001 5.25H13.19C16.81 5.25 18.73 7.17001 18.73 10.79V14.79C18.73 15.08 18.72 15.36 18.68 15.63C18.5 17.76 17.4 20.33 13.19 20.33H12.79L11.55 21.95C11.16 22.48 10.59 22.78 9.98999 22.78ZM6.79001 6.75C6.56001 6.75 6.34 6.76 6.13 6.78C3.81 6.98 2.75 8.25001 2.75 10.79V14.79C2.75 18.22 3.81001 18.83 6.79001 18.83H7.19C7.64 18.83 8.14999 19.08 8.42999 19.44L9.63 21.05C9.85001 21.35 10.13 21.35 10.35 21.05L11.55 19.45C11.84 19.06 12.3 18.83 12.79 18.83H13.19C15.73 18.83 17 17.76 17.19 15.48C17.22 15.24 17.23 15.02 17.23 14.79V10.79C17.23 8.00001 15.98 6.75 13.19 6.75H6.79001Z"
                    :fill="custom_theme ? custom_theme.color : default_theme.color"
                  />
                  <path
                    d="M9.99023 14.1895C9.43023 14.1895 8.99023 13.7395 8.99023 13.1895C8.99023 12.6395 9.44023 12.1895 9.99023 12.1895C10.5402 12.1895 10.9902 12.6395 10.9902 13.1895C10.9902 13.7395 10.5502 14.1895 9.99023 14.1895Z"
                    :fill="custom_theme ? custom_theme.color : default_theme.color"
                  />
                  <path
                    d="M13.1895 14.1895C12.6295 14.1895 12.1895 13.7395 12.1895 13.1895C12.1895 12.6395 12.6395 12.1895 13.1895 12.1895C13.7395 12.1895 14.1895 12.6395 14.1895 13.1895C14.1895 13.7395 13.7395 14.1895 13.1895 14.1895Z"
                    :fill="custom_theme ? custom_theme.color : default_theme.color"
                  />
                  <path
                    d="M6.7998 14.1895C6.2398 14.1895 5.7998 13.7395 5.7998 13.1895C5.7998 12.6395 6.2498 12.1895 6.7998 12.1895C7.3498 12.1895 7.7998 12.6395 7.7998 13.1895C7.7998 13.7395 7.3498 14.1895 6.7998 14.1895Z"
                    :fill="custom_theme ? custom_theme.color : default_theme.color"
                  />
                  <path
                    d="M17.9396 16.29C17.7396 16.29 17.5396 16.21 17.3996 16.06C17.2396 15.9 17.1697 15.67 17.1997 15.45C17.2297 15.24 17.2396 15.02 17.2396 14.79V10.79C17.2396 8.00001 15.9897 6.75 13.1997 6.75H6.79963C6.56963 6.75 6.34966 6.76 6.13966 6.78C5.91966 6.81 5.68964 6.72999 5.52964 6.57999C5.36964 6.41999 5.27963 6.20001 5.29963 5.98001C5.47963 3.82001 6.58963 1.25 10.7996 1.25H17.1997C20.8197 1.25 22.7396 3.17001 22.7396 6.79001V10.79C22.7396 15 20.1697 16.1 18.0097 16.29C17.9797 16.29 17.9596 16.29 17.9396 16.29ZM6.91966 5.25H13.1896C16.8096 5.25 18.7297 7.17001 18.7297 10.79V14.66C20.4297 14.24 21.2297 12.99 21.2297 10.79V6.79001C21.2297 4.00001 19.9796 2.75 17.1896 2.75H10.7897C8.58965 2.75 7.34966 3.55 6.91966 5.25Z"
                    :fill="custom_theme ? custom_theme.color : default_theme.color"
                  />
                </svg>
                <span class="links">Itinerary Support</span>
              </div></router-link
            >
            <!-- spacer -->
            <!-- <div
                        v-else
                        :style="
                            getBusinessProfile?.is_cac_verified === 'true' &&
                            getBusinessProfile?.is_id_verified === 'true'
                                ? {}
                                : { width: '45%', borderWidth: 1 }
                        "
                    ></div> -->
          </div>

          <div class="m7-0">
            <div class="account_indicator">
              {{ getUser?.account_type.replace("_", " ") }}
            </div>

            <img
                src="../assets/notification.svg"
                class="notification_icon"
                alt="notification_icon"
                @click="notification=!notification"
            />

            <div class="profile" @click="showDrop">
              <div
                class="profile-icon"
                :style="
                  getBusinessProfile?.logo
                    ? {
                        backgroundImage: `url(${getBusinessProfile?.logo})`,
                      }
                    : {
                        backgroundColor: custom_theme
                          ? custom_theme.color
                          : default_theme.color,
                      }
                "
              >
                <p v-if="!getBusinessProfile?.logo">
                  {{
                    getFirstLettersOfFirstAndLastName(
                      getUser.first_name + " " + getUser.last_name
                    )
                  }}
                </p>
              </div>
              <img src="../assets/Icons/Arrows/Down.svg" />
            </div>
            <div
              v-show="showDropDown"
              id="dropdown"
              class="dropDown animate__animated animate__fadeIn"
            >
              <div class="dropDown-inner-head">
                <div
                  class="icon-dropdown"
                  :style="
                    getBusinessProfile?.logo
                      ? {
                          backgroundImage: `url(${getBusinessProfile?.logo})`,
                        }
                      : {
                          backgroundColor: custom_theme
                            ? custom_theme.color
                            : default_theme.color,
                        }
                  "
                >
                  <p v-if="!getBusinessProfile?.logo">
                    {{
                      getFirstLettersOfFirstAndLastName(
                        getUser.first_name + " " + getUser.last_name
                      )
                    }}
                  </p>
                </div>
                <div>
                  <p class="first_last_name">
                    {{
                      getUser.first_name
                        ? getUser.first_name
                        : "" + " " + getUser.last_name
                        ? getUser.last_name
                        : ""
                    }}
                  </p>
                  <p class="email">{{ getUser.email }}</p>
                </div>
              </div>
              <div class="dropDown-inner-main">
                <div class="dropDown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 18.8577C9.44219 18.8577 8.87552 18.7327 8.43385 18.4743L3.85052 15.8327C1.98385 14.5743 1.86719 14.3827 1.86719 12.4077V7.59101C1.86719 5.61601 1.97552 5.42435 3.80885 4.18268L8.42552 1.51602C9.30052 1.00768 10.6755 1.00768 11.5505 1.51602L16.1505 4.16602C18.0172 5.42435 18.1339 5.61601 18.1339 7.59101V12.3993C18.1339 14.3743 18.0255 14.566 16.1922 15.8077L11.5755 18.4743C11.1255 18.7327 10.5589 18.8577 10.0005 18.8577ZM10.0005 2.39102C9.65052 2.39102 9.30885 2.45768 9.06719 2.59935L4.48385 5.24935C3.12552 6.16602 3.12552 6.16602 3.12552 7.59101V12.3993C3.12552 13.8243 3.12552 13.8243 4.51719 14.766L9.06719 17.391C9.55885 17.6744 10.4505 17.6744 10.9422 17.391L15.5255 14.741C16.8755 13.8243 16.8755 13.8243 16.8755 12.3993V7.59101C16.8755 6.16602 16.8755 6.16602 15.4839 5.22435L10.9339 2.59935C10.6922 2.45768 10.3505 2.39102 10.0005 2.39102Z"
                      fill="#1D1E2C"
                    />
                    <path
                      d="M10 13.125C8.275 13.125 6.875 11.725 6.875 10C6.875 8.275 8.275 6.875 10 6.875C11.725 6.875 13.125 8.275 13.125 10C13.125 11.725 11.725 13.125 10 13.125ZM10 8.125C8.96667 8.125 8.125 8.96667 8.125 10C8.125 11.0333 8.96667 11.875 10 11.875C11.0333 11.875 11.875 11.0333 11.875 10C11.875 8.96667 11.0333 8.125 10 8.125Z"
                      fill="#1D1E2C"
                    />
                  </svg>
                  <router-link
                    :to="`/settings/`"
                    >Account Settings</router-link
                  >
                  <img
                    v-if="getCurrentRoute.includes('settings')"
                    src="../assets/active_line.png"
                    style="width: 10rem; position: absolute; bottom: -8px; right: 50px"
                  />
                </div>
                <div class="dropDown-item" v-if="getUser?.account_type === 'manager'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                  <router-link
                    :to="`/verification/document-upload/${getUser?.access_token?.slice(
                      0,
                      20
                    )}`"
                    >Document Verification</router-link
                  >
                  <img
                    v-if="getCurrentRoute.includes('documents')"
                    src="../assets/active_line.png"
                    style="width: 10rem; position: absolute; bottom: -8px; right: 50px"
                  />
                </div>
                <div @click="signOut" class="dropDown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.2395 22.2705H15.1095C10.6695 22.2705 8.52953 20.5205 8.15953 16.6005C8.11953 16.1905 8.41953 15.8205 8.83953 15.7805C9.23953 15.7405 9.61953 16.0505 9.65953 16.4605C9.94953 19.6005 11.4295 20.7705 15.1195 20.7705H15.2495C19.3195 20.7705 20.7595 19.3305 20.7595 15.2605V8.74047C20.7595 4.67047 19.3195 3.23047 15.2495 3.23047H15.1195C11.4095 3.23047 9.92953 4.42047 9.65953 7.62047C9.60953 8.03047 9.25953 8.34047 8.83953 8.30047C8.41953 8.27047 8.11953 7.90047 8.14953 7.49047C8.48953 3.51047 10.6395 1.73047 15.1095 1.73047H15.2395C20.1495 1.73047 22.2495 3.83047 22.2495 8.74047V15.2605C22.2495 20.1705 20.1495 22.2705 15.2395 22.2705Z"
                      fill="#292D32"
                    />
                    <path
                      d="M15.0001 12.75H3.62012C3.21012 12.75 2.87012 12.41 2.87012 12C2.87012 11.59 3.21012 11.25 3.62012 11.25H15.0001C15.4101 11.25 15.7501 11.59 15.7501 12C15.7501 12.41 15.4101 12.75 15.0001 12.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M5.85043 16.0998C5.66043 16.0998 5.47043 16.0298 5.32043 15.8798L1.97043 12.5298C1.68043 12.2398 1.68043 11.7598 1.97043 11.4698L5.32043 8.11984C5.61043 7.82984 6.09043 7.82984 6.38043 8.11984C6.67043 8.40984 6.67043 8.88984 6.38043 9.17984L3.56043 11.9998L6.38043 14.8198C6.67043 15.1098 6.67043 15.5898 6.38043 15.8798C6.24043 16.0298 6.04043 16.0998 5.85043 16.0998Z"
                      fill="#292D32"
                    />
                  </svg>
                  <span>Sign Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavBar>

      <div class="dashboard_content animate__animated animate__fadeIn">
        <slot name="child-content"></slot>
      </div>
    </div>

    <MobileBottomNav />
  </div>

  <div class="splash" v-else>
    <SpinnerLoader :width="'10rem'"></SpinnerLoader>
     <img v-if="getBusinessProfile.logo" style="width:8rem;position: absolute;"  :src="getBusinessProfile.logo" alt="logo" />
  </div>
</template>

<script>
import NavBar from "../components/dashboardComponents/NavBar.vue";
import storeUtils from "../utils/storeUtils";
import { getFirstLettersOfFirstAndLastName } from "../mixins/lettersExtractor";
import router from "../router";
import MobileBottomNav from "../components/dashboardComponents/MobileBottomNav.vue";
import { lightenColor } from "@/mixins/themeUtils";
import PermissionModal from "@/components/modals/PermissionModal.vue";
import SpinnerLoader from "../components/loaders/SpinnerLoader.vue";
import Notification from "@/components/notification/index.vue";
import ModalLoader from "@/components/loaders/ModalLoader.vue";
import defaultLogo from "@/assets/default_tab_logo.jpeg"

export default {
  name: "Layout",
  props:['id'],
  components: {ModalLoader, NavBar, MobileBottomNav, PermissionModal, SpinnerLoader,Notification },
  data() {
    return {
      getFirstLettersOfFirstAndLastName,
      showDropDown: false,
      lightenColor,
      notification:false,
      logOut:false
    };
  },
  methods: {
    showDrop() {
      this.showDropDown = !this.showDropDown;
    },
    openNotification(){
      this.$emit('open', true)
    },
    async signOut() {
      await localStorage.clear();
      this.logOut = true
      setTimeout(() => {
        this.logOut = false
        location.reload()
      },3000)

      // await router.push({ name: "Logon" });

    },
    close(value){
      this.notification = value

    },
    closeMenu() {
      this.showDropDown = false;
    },

    saveTitle(){
      const favicon = document.getElementById("faviconIcon");
      const title = document.getElementById("app_title");
      const description_tag = document.getElementById('description_head')

      if(favicon){
        favicon.href = this.custom_theme?.logo  || this.getTenant.logo  || defaultLogo;
        console.log(favicon)
      }
      title.textContent = this.custom_theme?.site_title ? this.custom_theme?.site_title : this.getTenant?.name;
      description_tag.setAttribute('content', this.custom_theme?.description)

    }
  },
  computed: {
    default_theme() {
      return storeUtils.fireAway().theme.getDefault_theme;
    },

   

    loadingCus() {
      return storeUtils.fireAway().theme.getLoadingCustomization;
    },

    custom_theme() {
      return storeUtils.fireAway().theme.custom_theme;
    },
    getUser() {
      if (localStorage.user) {
        return JSON.parse(localStorage.user);
      }
    },

    getBusinessProfile() {
      if (localStorage.businessProfile) {
        return JSON.parse(localStorage?.businessProfile);
      }
    },

    getFavicon() {
      return storeUtils.fireAway().theme.favicon;
    },
    getIsUnauthorised() {
      return storeUtils.fireAway().global.getIsUnauthorised;
    },

    getCurrentRoute() {
      return router.currentRoute.value.fullPath;
    },
    getTenantLoaded() {
      return storeUtils.fireAway().global.getTenantLoaded;
    },
    getTenant() {
      return storeUtils.fireAway().global.Tenant;
    },
  },
  watch: {
    showDropDown() {
      if (this.showDropDown) {
        setTimeout(() => {
          document.addEventListener("click", this.closeMenu);
        }, 200);
      } else {
        document.removeEventListener("click", this.closeMenu);
      }
    },

    'getTenantLoaded'(a,b){
      if(a){
        storeUtils.fireAway().theme.getCustomization().then(() => {});
      }
    }
  },

  async beforeCreate() {
    if (!storeUtils.fireAway().global.tenantLoaded) {
      const res = await storeUtils.fireAway().global?.getTenant();
      if (res.length) {
        this.$emit("tenantIsReady", true);
        await storeUtils.fireAway().theme.getCustomization()
        await this.saveTitle()
      } else {
        this.$router.push("/domain-error");
      }
    }
  },
  //
  // created(){
  //
  // },

  async mounted() {
    if(this.getTenantLoaded){
      await storeUtils.fireAway().theme.getCustomization()
      await this.saveTitle()
    }
  },
};
</script>

<style scoped>
.tenant_name {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.3rem;
  background: #fff;
  /* shadow-2 */
  width: 10rem;
}

.logo {
  max-width: 6rem;
  max-height: 2.35713rem;
}

.splash {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fff;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.account_indicator {
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 5rem;
  width: 7rem;
  background: #eaf0f7;
  color: #000;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

#nav a.router-link-exact-active {
  border-radius: 1.25rem;
  /* background: var(--app-nav-active); */
  /*background: var(--Gradient, linear-gradient(277deg, #D5E2EE 26.44%, rgba(213, 226, 238, 0.58) 56.97%, rgba(213, 226, 238, 0.36) 73.28%, rgba(213, 226, 238, 0.67) 99.44%));*/
  text-decoration: none;
  transition: ease 2s;
}

.active {
  border-radius: 1.25rem;
  /*background: var(--Gradient, linear-gradient(277deg, #D5E2EE 26.44%, rgba(213, 226, 238, 0.58) 56.97%, rgba(213, 226, 238, 0.36) 73.28%, rgba(213, 226, 238, 0.67) 99.44%));*/
  text-decoration: none;
  transition: ease 2s;
}

a {
  text-decoration: none;
  color: #181818;
}

.notification_icon {
  display: block;
  width: 2.5rem;
  cursor: pointer;
}

a:hover {
  color: var(--app-default-primary);
}

.dropDown-inner-main {
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1.94rem;
}

.dropDown-inner-head {
  display: flex;
  justify-content: start;
  gap: 1rem;
  border-bottom: 1px solid #eff2f7;
  align-items: center;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
}

.first_last_name {
  text-transform: capitalize;
  color: #0f0f0f;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
}
.dropDown-item {
  display: flex;
  justify-content: start;
  gap: 1.5rem;
  color: #1d1e2c;
  font-family: "Product San";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.email {
  color: #0f0f0f;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 128.571% */
}

.dropDown {
  width: 19.9375rem;
  height: auto;
  flex-shrink: 0;
  position: absolute;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
  top: 50px;
  z-index: 9999999999;
}

.links-item {
  align-items: center;
  display: flex;
  padding: 0.62rem;
  gap: 0.75rem;
  justify-content: center;
  transition: ease 2s;
  width: max-content;
}

.links {
  color: #000;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.navigation-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.m7-0 {
  display: flex;
  gap: 1.5rem;
  /*float: right;*/
  position: relative;
}

.profile {
  display: flex;
  width: 5.9375rem;
  padding: 0.625rem 0.625rem 0.875rem;
  align-items: center;
  justify-content: center;
  gap: 1.3125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #eff2f7;
  cursor: pointer;
  position: relative;
}

.profile-icon {
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.003rem;
  background-position: center;
  background-size: cover;
}

.icon-dropdown {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  background: var(--app-default-primary);
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.003rem;
  background-position: center;
  background-size: cover;
}

@media (max-width: 1024px) {
}

.wrapper {
  width: 100%;
  background-color: #f9fafc;
  min-height: 100vh;
}

.inner-wrapper {
  width: 100%;
  min-height: 100vh;
  display: inline-block;
}
.m6-0 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

.dashboard_content {
  position: relative;
  min-height: 100vh;
  display: flex;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .navigation-links {
    display: none;
  }

  .notification_icon {
    display: none;
  }

  .dashboard_content {
    /* padding-left:1.5rem;
    padding-right: 1.5rem; */
    /* padding: 0; */
    margin-bottom: 100px;
    justify-content: flex-start;
  }
}
</style>
