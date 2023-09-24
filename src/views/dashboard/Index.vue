<template>
   <layout v-slot:child-content>
     <div style="padding-right: 5rem;padding-left: 5rem;">
     <h3 class="user-name"> Hello {{getUser?.first_name}} </h3>

     <div class="get-started" v-show="!getBusinessProfile?.id_document && !getBusinessProfile?.cac_document">
       <div class="with-tiqwa">
         <div>
           <h3 class="with-tiqwa-h">Get started with Tiqwa 🎉</h3>
           <p class="with-tiqwa-p">Please complete your setup to access your full TIQWA services, </p>
         </div>
         <div style="display: flex;gap: 1rem;height: 2.5rem">
           <router-link :to="`/settings/${getUser?.access_token?.slice(0,20)}#Verification`"><on-boarding-button btn-width="10rem" color="#FFF" height="2.5rem" text-node="Complete Profile"></on-boarding-button></router-link>
<!--           <on-boarding-button btn-width="8rem" color="#2C6CAC" border="none" height="2.5rem" text-node="Skip for later" background="transparent"></on-boarding-button>-->
         </div>
       </div>
     </div>

     <div class="create-booking-process">

       <route-nav v-if="getCurrentRoute !== 'Dashboard'"></route-nav>

       <div class="travel_type_booking">
         <div class="progress-or" v-if="getCurrentRoute !== 'Dashboard'">
           <div class="progress-or-item" v-for="(i, index) in bookingProgress">
             <p class="stage" :class="{'activeStage':getBookingStage === i || progressNav.includes(i)}">{{ i }}</p>
             <div style="display: flex;align-items: center;justify-content: start">
               <div class="circle" :class="{'activeProgress': getBookingStage === i || progressNav.includes(i)}">{{index + 1}}</div>
               <div class="line" v-if="index !== bookingProgress.length - 1 || getBookingStage === i">
                 <div :class="{'progress':progressNav.includes(i)}"></div>
               </div>
             </div>
           </div>
         </div>

         <slot name="booking_children"></slot>

       </div>

     </div>


     <!--     <div class="cards">-->
<!--       <div class="inner-cards">-->
<!--         <dashboard-stats-card :icon="users" sub_text="Total Customers" values="0"></dashboard-stats-card>-->
<!--         <dashboard-stats-card :icon="card" sub_text="Total Payment" values="N0.00"></dashboard-stats-card>-->
<!--         <dashboard-stats-card :icon="card" sub_text="Total Bookings" values="0"></dashboard-stats-card>-->
<!--         <dashboard-stats-card :icon="card" sub_text="Pending Bookings" values="0"></dashboard-stats-card>-->
<!--         <dashboard-stats-card :icon="card" sub_text="Cancelled Bookings" values="0"></dashboard-stats-card>-->
<!--       </div>-->
<!--     </div>-->

<!--     <div class="revenue">-->
<!--       <div class="no-revenue-yet">-->
<!--         <h3 class="no-revenue-yet-h">No revenue yet</h3>-->
<!--         <p class="no-revenue-yet-p">There are currently no revenue, when there are, they will appear here.</p>-->
<!--&lt;!&ndash;         <router-link to="/bookings"><on-boarding-button btn-width="8.9375rem" height="3rem" text-node="Book a Flight" border="none" background="#F8F1F8" color="#89128A"></on-boarding-button></router-link>&ndash;&gt;-->

<!--       </div>-->

<!--     </div>-->

<!--     <div class="double-revenue-display">-->
<!--       <div class="revenue">-->
<!--         <div class="no-revenue-yet">-->
<!--           <img src="../../assets/transactions.svg" />-->
<!--           <h3 class="no-revenue-yet-h">No transaction yet</h3>-->
<!--           <p class="no-revenue-yet-p">There are currently no transactions, when there are, they will appear here.</p>-->
<!--&lt;!&ndash;           <on-boarding-button btn-width="8.9375rem" height="3rem" text-node="Book a Flight" border="none" background="#F8F1F8" color="#89128A"></on-boarding-button>&ndash;&gt;-->

<!--         </div>-->

<!--       </div>-->
<!--       <div class="revenue">-->
<!--         <div class="no-revenue-yet">-->
<!--           <div>-->
<!--             <svg xmlns="http://www.w3.org/2000/svg" width="111" height="97" viewBox="0 0 111 97" fill="none">-->
<!--               <path d="M57.941 83.5C80.4777 83.5 98.7484 65.4026 98.7484 43C98.7484 20.5974 80.4777 2.5 57.941 2.5C35.4044 2.5 17.1337 20.5974 17.1337 43C17.1337 65.4026 35.4044 83.5 57.941 83.5Z" fill="#EAEEF9"/>-->
<!--               <path d="M103.417 26.3372C105.239 26.3372 106.717 24.8738 106.717 23.0685C106.717 21.2633 105.239 19.7998 103.417 19.7998C101.594 19.7998 100.117 21.2633 100.117 23.0685C100.117 24.8738 101.594 26.3372 103.417 26.3372Z" fill="#EAEEF9"/>-->
<!--               <path d="M108.246 13.5017C109.491 13.5017 110.5 12.5022 110.5 11.2694C110.5 10.0365 109.491 9.03711 108.246 9.03711C107.002 9.03711 105.993 10.0365 105.993 11.2694C105.993 12.5022 107.002 13.5017 108.246 13.5017Z" fill="#EAEEF9"/>-->
<!--               <path d="M14.3176 28.6491C15.5623 28.6491 16.5713 27.6497 16.5713 26.4169C16.5713 25.184 15.5623 24.1846 14.3176 24.1846C13.073 24.1846 12.064 25.184 12.064 26.4169C12.064 27.6497 13.073 28.6491 14.3176 28.6491Z" fill="#EAEEF9"/>-->
<!--               <path d="M18.5029 77.2015C20.8144 77.2015 22.6882 75.3454 22.6882 73.0558C22.6882 70.7662 20.8144 68.9102 18.5029 68.9102C16.1914 68.9102 14.3175 70.7662 14.3175 73.0558C14.3175 75.3454 16.1914 77.2015 18.5029 77.2015Z" fill="#EAEEF9"/>-->
<!--               <g filter="url(#filter0_d_713_2971)">-->
<!--                 <path d="M95.7699 26.8162H25.9868C24.4576 26.8162 23.2502 25.6203 23.2502 24.1055V8.55926C23.2502 7.0445 24.4576 5.84863 25.9868 5.84863H95.6894C97.2187 5.84863 98.426 7.0445 98.426 8.55926V24.1055C98.5065 25.6203 97.2187 26.8162 95.7699 26.8162Z" fill="white"/>-->
<!--               </g>-->
<!--               <path d="M40.1517 16.2928C40.1517 18.0467 39.3468 19.6412 38.1395 20.7574C37.0931 21.7141 35.6444 22.2721 34.1151 22.2721C32.5858 22.2721 31.137 21.7141 30.0907 20.7574C28.8029 19.6412 28.0785 18.0467 28.0785 16.2928C28.0785 13.0241 30.8151 10.3135 34.1151 10.3135C37.4151 10.3135 40.1517 13.0241 40.1517 16.2928Z" fill="#DCE1EE"/>-->
<!--               <path d="M38.1395 20.7574C37.0931 21.7141 35.6444 22.2722 34.1151 22.2722C32.5858 22.2722 31.137 21.7141 30.0907 20.7574C30.5736 20.598 31.137 20.3588 31.8614 20.0399C32.0224 19.9602 32.1834 19.8008 32.2639 19.6413C32.3444 19.5616 32.3444 19.4021 32.3444 19.3224V17.8076L32.2639 17.7279C32.1029 17.5685 32.0224 17.3293 32.0224 17.0901L31.8614 17.0104C31.459 17.0901 31.5395 16.6915 31.3785 15.8943C31.3785 15.5754 31.3785 15.4956 31.5395 15.4159L31.7005 15.2565C30.9761 13.5822 31.298 12.5458 32.1029 12.1472C31.8614 11.5891 31.8614 11.4297 31.8614 11.4297C31.8614 11.4297 33.4712 11.6689 33.9541 11.5891C34.6785 11.4297 35.7249 11.5891 36.1273 12.5458C36.7712 12.785 37.0127 13.1836 37.0931 13.662C37.1736 14.3795 36.7712 15.1767 36.6907 15.4159C36.7712 15.4956 36.8517 15.5754 36.7712 15.8145C36.6907 16.5321 36.6907 17.0104 36.2883 16.9307L35.9663 17.6482C35.9663 17.7279 35.9663 17.7279 35.9663 17.8076C35.9663 17.8874 35.9663 18.1265 35.9663 19.4021C35.9663 19.5616 36.0468 19.721 36.0468 19.8008C36.1273 19.9602 36.2883 20.0399 36.3688 20.1196C37.0931 20.3588 37.6566 20.598 38.1395 20.7574Z" fill="white"/>-->
<!--               <path d="M36.7127 15.4956C36.7127 15.3297 36.6289 15.0807 36.5452 14.9148V14.8318C36.2101 14.168 35.5399 13.919 34.8697 13.919C33.1942 13.8361 33.0267 14.168 32.4403 13.6701C32.6078 13.919 32.6078 14.3339 32.3565 14.8318C32.189 15.1637 31.8539 15.3297 31.5188 15.4127C30.7648 13.6701 31.0999 12.5914 31.9376 12.1765C31.6863 11.5956 31.6863 11.4297 31.6863 11.4297C31.6863 11.4297 33.3618 11.6786 33.8644 11.5956C34.6184 11.4297 35.7074 11.5956 36.1263 12.5914C36.7965 12.8403 37.0478 13.2552 37.1316 13.7531C37.2154 14.3339 36.7965 15.1637 36.7127 15.4956Z" fill="#A2ABBC"/>-->
<!--               <path d="M36.0464 19.8004V20.1193H32.2634V19.7206C32.3439 19.6409 32.3439 19.4815 32.3439 19.4018V17.887L32.2634 17.8073V17.7275C32.3439 17.887 32.4244 17.9667 32.5854 18.1262L33.7927 18.9234C34.0342 19.1626 34.4366 19.1626 34.7586 18.9234L35.8854 17.9667L35.9659 17.887C35.9659 17.9667 35.9659 18.2059 35.9659 19.4815C35.8854 19.5612 35.9659 19.6409 36.0464 19.8004Z" fill="url(#paint0_linear_713_2971)"/>-->
<!--               <path d="M59.9518 14.5382H44.4982C44.0957 14.5382 43.8542 14.2193 43.8542 13.9004V11.9073C43.8542 11.5087 44.1762 11.2695 44.4982 11.2695H59.9518C60.3543 11.2695 60.5957 11.5884 60.5957 11.9073V13.9004C60.5957 14.2991 60.3543 14.5382 59.9518 14.5382Z" fill="#CED6E2"/>-->
<!--               <path d="M78.3031 21.3146H44.4982C44.0957 21.3146 43.8542 20.9957 43.8542 20.6768V18.6837C43.8542 18.2851 44.1762 18.0459 44.4982 18.0459H78.3031C78.7055 18.0459 78.947 18.3648 78.947 18.6837V20.6768C78.947 21.0754 78.625 21.3146 78.3031 21.3146Z" fill="#CED6E2"/>-->
<!--               <g filter="url(#filter1_d_713_2971)">-->
<!--                 <path d="M95.7699 79.115H25.9868C24.4576 79.115 23.2502 77.9191 23.2502 76.4043V60.8581C23.2502 59.3433 24.4576 58.1475 25.9868 58.1475H95.6894C97.2187 58.1475 98.426 59.3433 98.426 60.8581V76.4043C98.5065 77.9191 97.2187 79.115 95.7699 79.115Z" fill="white"/>-->
<!--               </g>-->
<!--               <path d="M40.1517 68.5916C40.1517 70.3456 39.3468 71.9401 38.1395 73.0562C37.0931 74.0129 35.6444 74.571 34.1151 74.571C32.5858 74.571 31.137 74.0129 30.0907 73.0562C28.8029 71.9401 28.0785 70.3456 28.0785 68.5916C28.0785 65.3229 30.8151 62.6123 34.1151 62.6123C37.4151 62.6123 40.1517 65.3229 40.1517 68.5916Z" fill="#DCE1EE"/>-->
<!--               <path d="M38.1395 73.0563C37.0931 74.013 35.6444 74.571 34.1151 74.571C32.5858 74.571 31.137 74.013 30.0907 73.0563C30.5736 72.8968 31.137 72.6576 31.8614 72.3387C32.0224 72.259 32.1834 72.0996 32.2639 71.9401C32.3444 71.8604 32.3444 71.701 32.3444 71.6212V70.1065L32.2639 70.0267C32.1029 69.8673 32.0224 69.6281 32.0224 69.3889L31.8614 69.3092C31.459 69.3889 31.5395 68.9903 31.3785 68.1931C31.3785 67.8742 31.3785 67.7945 31.5395 67.7147L31.7005 67.5553C30.9761 65.8811 31.298 64.8447 32.1029 64.446C31.8614 63.888 31.8614 63.7285 31.8614 63.7285C31.8614 63.7285 33.4712 63.9677 33.9541 63.888C34.6785 63.7285 35.7249 63.888 36.1273 64.8447C36.7712 65.0838 37.0127 65.4824 37.0931 65.9608C37.1736 66.6783 36.7712 67.4756 36.6907 67.7147C36.7712 67.7945 36.8517 67.8742 36.7712 68.1134C36.6907 68.8309 36.6907 69.3092 36.2883 69.2295L35.9663 69.8673C35.9663 69.947 35.9663 69.947 35.9663 70.0267C35.9663 70.1065 35.9663 70.3456 35.9663 71.6212C35.9663 71.7807 36.0468 71.9401 36.0468 72.0198C36.1273 72.1793 36.2883 72.259 36.3688 72.3387C37.0931 72.7374 37.6566 72.8968 38.1395 73.0563Z" fill="white"/>-->
<!--               <path d="M36.7127 67.7945C36.7127 67.6285 36.6289 67.3796 36.5452 67.2136V67.1306C36.2101 66.4668 35.5399 66.2179 34.8697 66.2179C33.1942 66.1349 33.0267 66.4668 32.4403 65.9689C32.6078 66.2179 32.6078 66.6328 32.3565 67.1306C32.189 67.4626 31.8539 67.6285 31.5188 67.7115C30.7648 65.9689 31.0999 64.8902 31.9376 64.4753C31.6863 63.8945 31.6863 63.7285 31.6863 63.7285C31.6863 63.7285 33.3618 63.9774 33.8644 63.8945C34.6184 63.7285 35.7074 63.8945 36.1263 64.8902C36.7965 65.1392 37.0478 65.554 37.1316 66.0519C37.2154 66.7158 36.7965 67.4626 36.7127 67.7945Z" fill="#A2ABBC"/>-->
<!--               <path d="M36.0464 72.1002V72.4191H32.2634V72.0205C32.3439 71.9407 32.3439 71.7813 32.3439 71.7016V70.1868L32.2634 70.1071V70.0273C32.3439 70.1868 32.4244 70.2665 32.5854 70.426L33.7927 71.2232C34.0342 71.4624 34.4366 71.4624 34.7586 71.2232L35.8854 70.2665L35.9659 70.1868C35.9659 70.2665 35.9659 70.5057 35.9659 71.7813C35.8854 71.861 35.9659 72.0205 36.0464 72.1002Z" fill="url(#paint1_linear_713_2971)"/>-->
<!--               <path d="M59.9518 66.9171H44.4982C44.0957 66.9171 43.8542 66.5982 43.8542 66.2793V64.2862C43.8542 63.8876 44.1762 63.6484 44.4982 63.6484H59.9518C60.3543 63.6484 60.5957 63.9673 60.5957 64.2862V66.2793C60.5957 66.5982 60.3543 66.9171 59.9518 66.9171Z" fill="#CED6E2"/>-->
<!--               <path d="M78.3031 73.6935H44.4982C44.0957 73.6935 43.8542 73.3746 43.8542 73.0557V71.0626C43.8542 70.664 44.1762 70.4248 44.4982 70.4248H78.3031C78.7055 70.4248 78.947 70.7437 78.947 71.0626V73.0557C78.947 73.3746 78.625 73.6935 78.3031 73.6935Z" fill="#CED6E2"/>-->
<!--               <g filter="url(#filter2_d_713_2971)">-->
<!--                 <path d="M83.9391 52.9656H14.2366C12.7073 52.9656 11.5 51.7697 11.5 50.2549V34.7087C11.5 33.1939 12.7073 31.998 14.2366 31.998H83.9391C85.4684 31.998 86.6757 33.1939 86.6757 34.7087V50.2549C86.7562 51.7697 85.4684 52.9656 83.9391 52.9656Z" fill="white"/>-->
<!--               </g>-->
<!--               <path d="M48.2033 40.6876H32.7496C32.3472 40.6876 32.1057 40.3687 32.1057 40.0499V38.0567C32.1057 37.6581 32.4277 37.4189 32.7496 37.4189H48.2033C48.6057 37.4189 48.8472 37.7378 48.8472 38.0567V40.0499C48.8472 40.4485 48.6057 40.6876 48.2033 40.6876Z" fill="#CED6E2"/>-->
<!--               <path d="M66.5545 47.5441H32.7496C32.3472 47.5441 32.1057 47.2252 32.1057 46.9063V44.9132C32.1057 44.5146 32.4277 44.2754 32.7496 44.2754H66.4741C66.8765 44.2754 67.118 44.5943 67.118 44.9132V46.9063C67.1984 47.2252 66.8765 47.5441 66.5545 47.5441Z" fill="#CED6E2"/>-->
<!--               <path d="M28.4823 42.4422C28.4823 44.1164 27.7579 45.6312 26.6311 46.7473C26.5506 46.8271 26.5506 46.8271 26.4701 46.9068C25.4237 47.8635 23.975 48.4216 22.4457 48.4216C20.9164 48.4216 19.5481 47.8635 18.5018 46.9865C18.5018 46.9865 18.5018 46.9865 18.4213 46.9865C17.1335 45.8704 16.3286 44.2759 16.3286 42.4422C16.3286 39.1735 19.0652 36.4629 22.3652 36.4629C25.7457 36.4629 28.4823 39.1735 28.4823 42.4422Z" fill="#DCE1EE"/>-->
<!--               <path d="M26.608 46.8683C26.3632 46.3024 25.955 45.8173 25.3021 45.4939C24.9756 45.3322 24.7307 45.2514 24.3226 45.2514H24.0777C23.5064 45.2514 23.4247 45.1705 23.4247 45.1705V44.2003C24.0777 43.7153 24.5675 43.0685 24.7307 42.3408C25.1388 42.26 25.3837 41.9366 25.3021 41.5324C25.3021 41.3707 25.1388 41.209 25.1388 41.0473C25.1388 40.9664 25.1388 40.8856 25.1388 40.8047C25.1388 40.7239 25.1388 40.7239 25.1388 40.643C25.1388 40.5622 25.1388 40.5622 25.1388 40.4813C25.1388 40.1579 25.0572 39.9154 24.8123 39.592C24.3226 38.7027 23.3431 38.1367 22.282 38.1367C22.0372 38.1367 21.8739 38.1367 21.629 38.2176C21.2209 38.2984 20.8944 38.4601 20.5679 38.7027C20.4863 38.7835 20.4863 38.7835 20.4047 38.8644C20.4047 38.8644 20.4047 38.8644 20.3231 38.9452C19.9966 39.2686 19.7517 39.6728 19.5885 40.0771C19.4252 40.4813 19.4252 40.9664 19.4252 41.4515C19.4252 41.4515 19.4252 41.4515 19.4252 41.5324C19.4252 41.6132 19.4252 41.6132 19.4252 41.694C19.4252 41.694 19.4252 41.7749 19.3436 41.7749C19.5069 41.6132 19.4252 41.8557 19.5069 42.0174C19.6701 42.4217 19.915 42.3408 20.2415 42.5834C20.2415 42.5834 20.2415 42.5834 20.1598 42.5834L19.8333 42.6642C18.0376 43.2302 17.8744 45.0897 19.6701 45.4939C19.5069 45.5748 19.4252 45.6556 19.3436 45.6556C18.8539 46.0599 18.5274 46.5449 18.3641 47.03C19.4252 47.9194 20.8128 48.4853 22.3636 48.4853C23.9145 48.4853 25.3837 47.9194 26.4448 46.9492C26.5264 47.03 26.608 46.9492 26.608 46.8683C26.6896 46.8683 26.6896 46.8683 26.608 46.8683ZM21.5474 44.928C21.4658 44.8471 21.3842 44.7663 21.3842 44.7663C21.3026 44.6854 21.2209 44.6854 21.1393 44.6046C21.1393 44.6046 21.0577 44.6046 21.0577 44.5237C20.8128 44.362 20.5679 44.2003 20.4863 43.9578C20.4863 43.877 20.5679 43.7153 20.7312 43.5536C20.8128 43.6344 20.8944 43.7153 20.9761 43.877C21.0577 43.9578 21.1393 44.0386 21.2209 44.1195C21.3026 44.1195 21.3842 44.2003 21.3842 44.2812C21.3842 44.2812 21.3842 44.2812 21.4658 44.2812C21.4658 44.2812 21.4658 44.2812 21.5474 44.2812V44.928V44.928Z" fill="white"/>-->
<!--               <path d="M24.1766 45.2054C24.0961 45.5243 23.9351 45.7634 23.9351 45.7634L20.8766 45.2851L21.0376 44.4878C21.0376 44.4878 21.1181 44.4878 21.1181 44.5676C21.1985 44.6473 21.279 44.6473 21.3595 44.727C21.44 44.727 21.44 44.8067 21.5205 44.8865V44.3284C21.5205 44.3284 21.5205 44.3284 21.44 44.3284C21.9229 44.5676 22.5668 44.727 23.4522 44.1689V45.1256C23.5327 45.1256 23.6132 45.2054 24.1766 45.2054Z" fill="url(#paint2_linear_713_2971)"/>-->
<!--               <path d="M23.5396 40.7586C24.1138 40.7586 24.688 40.6774 25.1802 40.5149C25.1802 40.5149 25.1802 40.4336 25.2622 40.3524C25.1802 40.1086 25.0982 39.7836 24.9341 39.4586C24.4419 38.5649 23.4576 37.9961 22.3912 37.9961C22.1451 37.9961 21.9091 38.0135 21.5799 38.0947C21.1419 38.2273 20.9385 38.3439 20.8348 38.4062C20.8348 38.4062 20.595 38.5659 20.4225 38.7274C20.25 38.8889 19.8483 39.4586 19.6842 39.8649C19.5202 40.3524 19.3878 40.7667 19.4698 41.2542C19.5519 41.2542 19.6842 41.1649 19.7663 41.1649C20.4225 40.8399 20.9147 40.4336 21.1608 39.7836C21.817 40.3524 22.6373 40.6774 23.5396 40.7586Z" fill="#A2ABBC"/>-->
<!--               <path d="M20.7549 43.6377C20.8354 43.7174 20.9159 43.7971 20.9963 43.8769C20.9159 43.7971 20.8354 43.7174 20.7549 43.6377Z" fill="#3973F4"/>-->
<!--               <path d="M21.8821 46.5878C21.6406 46.9067 21.2382 46.9067 20.8358 46.9067C21.2382 46.5081 20.9967 45.3122 19.7089 45.4716C17.8577 45.1527 18.0992 43.2394 19.8699 42.6813L20.1919 42.6016C20.1919 42.6016 20.1919 42.6016 20.2723 42.6813C20.4333 43.0799 20.5943 43.3191 20.8358 43.638C20.1114 44.2758 21.1577 44.4352 21.6406 44.9136C21.9626 45.073 22.2845 46.1094 21.8821 46.5878Z" fill="#A2ABBC"/>-->
<!--               <defs>-->
<!--                 <filter id="filter0_d_713_2971" x="12.2128" y="0.943121" width="97.2541" height="43.0426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">-->
<!--                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>-->
<!--                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>-->
<!--                   <feOffset dy="6.13189"/>-->
<!--                   <feGaussianBlur stdDeviation="5.5187"/>-->
<!--                   <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.17 0"/>-->
<!--                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_713_2971"/>-->
<!--                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_713_2971" result="shape"/>-->
<!--                 </filter>-->
<!--                 <filter id="filter1_d_713_2971" x="12.2128" y="53.2419" width="97.2541" height="43.0426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">-->
<!--                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>-->
<!--                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>-->
<!--                   <feOffset dy="6.13189"/>-->
<!--                   <feGaussianBlur stdDeviation="5.5187"/>-->
<!--                   <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.17 0"/>-->
<!--                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_713_2971"/>-->
<!--                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_713_2971" result="shape"/>-->
<!--                 </filter>-->
<!--                 <filter id="filter2_d_713_2971" x="0.462599" y="27.0925" width="97.2541" height="43.0426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">-->
<!--                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>-->
<!--                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>-->
<!--                   <feOffset dy="6.13189"/>-->
<!--                   <feGaussianBlur stdDeviation="5.5187"/>-->
<!--                   <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.17 0"/>-->
<!--                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_713_2971"/>-->
<!--                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_713_2971" result="shape"/>-->
<!--                 </filter>-->
<!--                 <linearGradient id="paint0_linear_713_2971" x1="34.156" y1="20.1338" x2="34.156" y2="18.8162" gradientUnits="userSpaceOnUse">-->
<!--                   <stop stop-color="white"/>-->
<!--                   <stop offset="1" stop-color="#E2E5EC"/>-->
<!--                 </linearGradient>-->
<!--                 <linearGradient id="paint1_linear_713_2971" x1="34.156" y1="72.4336" x2="34.156" y2="71.116" gradientUnits="userSpaceOnUse">-->
<!--                   <stop stop-color="white"/>-->
<!--                   <stop offset="1" stop-color="#E2E5EC"/>-->
<!--                 </linearGradient>-->
<!--                 <linearGradient id="paint2_linear_713_2971" x1="22.5276" y1="45.7731" x2="22.5276" y2="44.8947" gradientUnits="userSpaceOnUse">-->
<!--                   <stop stop-color="white"/>-->
<!--                   <stop offset="1" stop-color="#E2E5EC"/>-->
<!--                 </linearGradient>-->
<!--               </defs>-->
<!--             </svg>-->
<!--           </div>-->
<!--           <h3 class="no-revenue-yet-h">No customer yet</h3>-->
<!--           <p class="no-revenue-yet-p">There are currently no customers, when there are, they will appear here.</p>-->

<!--         </div>-->

<!--       </div>-->
<!--     </div>-->
     </div>
   </layout>

</template>

<script>
import NavBar from "../../components/dashboardComponents/NavBar.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import DashboardStatsCard from "../../components/dashboardComponents/DashboardStatsCard.vue";
import users from '../../assets/Cards/users.svg'
import card from '../../assets/Cards/overviecard.png'
import Layout from "../Layout.vue";
import RouteNav from "../../components/RouteNav.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";
export default {
  name: "Dashboard",
  components:{NavBar,OnBoardingButton,DashboardStatsCard,Layout,RouteNav},
  data(){
    return{
      users:users,
      card,
      showing:false,
      bookingProgress:['Flight Result','Traveller’s Info','Payment Confirmation'],
      currentProgressIndex:1,
    }
  },

  computed: {
    getCurrentRoute(){
      return router.currentRoute.value.name
    },
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },
    getBookingStage(){
      return storeUtils.fireAway().booking?.getBookingStage
    },

    getBookingSum(){
      return storeUtils.fireAway().booking?.getBookingSummary
    },

    getLoadingBooking(){
      return storeUtils.fireAway().booking?.getLoadingBooking
    },

    progressNav(){
      return storeUtils.fireAway().booking?.getProgressNav
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
      }

    },
  },
}
</script>

<style scoped>
@import "style.css";

a{
  text-decoration: none;
}

.create-booking-process{
  width: 100%;
  margin-top: 1.5rem;
}

.travel_type_booking{
  width: 100%;

}

.double-revenue-display{
 display: flex;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

 .inner-cards{
   display: inline-flex;
   gap: 20px;
   justify-content: space-between;
   overflow-x: scroll;
   width: 100%;
 }

.cards{
  margin-top: 48px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

::-webkit-scrollbar{
  display: none;
}

.no-revenue-yet{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;
}

.revenue{
  width: 100%;
  border-radius: 1rem;
  background: #FFF;
  padding: 2.25rem 0rem 2.3125rem 0rem;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 23.25rem;

}

.no-revenue-yet-p{
  width: 15.75rem;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

}

.no-revenue-yet-h{
  color:  #1D1E2C;
  text-align: center;
  /* Headings/18px/Medium */
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 144.444% */

}


.with-tiqwa-h{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem; /* 166.667% */
}

.with-tiqwa{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left:2rem;
  margin-top: 1rem;
  width: 24.5rem;
  height: 7.125rem;
}

.with-tiqwa-p{
  color: #2D3139;
  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.user-name{
  color: #000;
  /* Headings/32px/bold */
  font-family: 'Product Sans';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.625rem; /* 131.25% */
  text-transform: capitalize;
}

.get-started{
  width: 100%;
  height: 10.625rem;
  background-image: url("../../assets/home_background_blue.svg");
  margin: 2.5rem 0 4rem 0;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-color: var(--app-defautl-primary-light);
}

@media (max-width: 1024px) {
  .get-started{
    height: 12.625rem;
    margin: 1rem 0;
    background-position: top;
  }

  .double-revenue-display{
    flex-direction: column;
    margin-bottom:1.25rem;
  }
}
</style>