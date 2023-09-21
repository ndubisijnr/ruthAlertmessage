<template>
  <booking-index v-slot:booking_children>
    <div class="flight-result">
      <div><p>Booking Search</p></div>
      <div class="booking-info">
        <div class="search-info-area">
          <p class="search-info">Round Trip</p>
          <p class="search-info">4 Passengers</p>
          <p class="search-info">Business Class</p>
          <p class="search-info">12th, April 2022 - 15th, May 2022</p>
        </div>
        <a href=""> <on-boarding-button @click="doSearch('Search for Flight')" btn-width="7.26981rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="Edit Search"></on-boarding-button></a>
      </div>
      <div class="dest-abv">
        <p class="dest-abv-it">Lagos (LOS)</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49964 11.9991C1.49964 12.198 1.57865 12.3887 1.71931 12.5294C1.85996 12.67 2.05072 12.7491 2.24964 12.7491H19.9391L15.2186 17.4681C15.1489 17.5378 15.0936 17.6206 15.0559 17.7117C15.0181 17.8028 14.9987 17.9004 14.9987 17.9991C14.9987 18.0977 15.0181 18.1953 15.0559 18.2864C15.0936 18.3775 15.1489 18.4603 15.2186 18.5301C15.2884 18.5998 15.3712 18.6551 15.4623 18.6928C15.5534 18.7306 15.651 18.75 15.7496 18.75C15.8483 18.75 15.9459 18.7306 16.037 18.6928C16.1281 18.6551 16.2109 18.5998 16.2806 18.5301L22.2806 12.5301C22.3505 12.4604 22.4059 12.3776 22.4437 12.2865C22.4815 12.1954 22.501 12.0977 22.501 11.9991C22.501 11.9004 22.4815 11.8027 22.4437 11.7116C22.4059 11.6205 22.3505 11.5377 22.2806 11.4681L16.2806 5.46805C16.2109 5.39832 16.1281 5.34301 16.037 5.30527C15.9459 5.26753 15.8483 5.24811 15.7496 5.24811C15.651 5.24811 15.5534 5.26753 15.4623 5.30527C15.3712 5.34301 15.2884 5.39832 15.2186 5.46805C15.1489 5.53778 15.0936 5.62057 15.0559 5.71168C15.0181 5.80279 14.9987 5.90044 14.9987 5.99905C14.9987 6.09767 15.0181 6.19532 15.0559 6.28643C15.0936 6.37754 15.1489 6.46032 15.2186 6.53005L19.9391 11.2491H2.24964C2.05072 11.2491 1.85996 11.3281 1.71931 11.4687C1.57865 11.6094 1.49964 11.8001 1.49964 11.9991Z" fill="#1D1E2C"/>
        </svg>
        <p class="dest-abv-it">London (LHN)</p>
      </div>
      <div class="breaker1"></div>
      <div style="display: flex;flex-direction: column;margin-top: 2rem;margin-bottom: 1.44rem">
        <p class="result-details">3 Result Details</p>
        <div class="search-result-filter-area">
          <div class="result-details-info">
            <div class="filter-by">
              <p class="and-filter-by">Filter by</p>
              <div class="seperator_1"></div>
              <div class="filter-items">
                <p class="filter-item">
                  Price range
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10.3448L5 6H11L8 10.3448Z" fill="#6A8297"/>
                  </svg>
                </p>
                <p class="filter-item">
                  Stops
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10.3448L5 6H11L8 10.3448Z" fill="#6A8297"/>
                  </svg>
                </p>
                <p class="filter-item">
                  Duration
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10.3448L5 6H11L8 10.3448Z" fill="#6A8297"/>
                  </svg>
                </p>
                <p class="filter-item">
                  Airlines
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10.3448L5 6H11L8 10.3448Z" fill="#6A8297"/>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div class="result-details-info">
            <div class="filter-by">
              <p class="and-filter-by">Sort by</p>
              <div class="seperator_1"></div>
              <div class="filter-items">
                <p class="filter-item">
                  Cheapest
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10.3448L5 6H11L8 10.3448Z" fill="#6A8297"/>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="actual-result-wrapper">
        <div class="actual-result">
          <div style="width: 100%">
            <div class="actual-result-item">
              <div class="logo-area">
                <img src="../../assets/turkishAir.png" class="logo" />
                <p class="flight-name">Qatar Airways</p>
              </div>
              <div class="actual-result-item-info">
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
                <div class="more-flight-info">
                  <span class="duration">13hrs 25m</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                    <path d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z" fill="#9DA8B6"/>
                  </svg>
                  <span class="stops">2-Stops</span>
                </div>
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
              </div>
            </div>
            <div style="display: flex;align-items: center;justify-content: center;gap:0.5rem">
              <div class="breaker-2"></div>
              <span class="view-details" v-show="!showingDetails" @click="showingDetails=true">View Details</span>
            </div>
            <div class="actual-result-item">
              <div class="logo-area">
                <img src="../../assets/turkishAir.png" class="logo" />
                <p class="flight-name">Qatar Airways</p>
              </div>
              <div class="actual-result-item-info">
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
                <div class="more-flight-info">
                  <span class="duration">13hrs 25m</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                    <path d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z" fill="#9DA8B6"/>
                  </svg>
                  <span class="stops">2-Stops</span>
                </div>
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="amount-book-area">
            <div style="width: 100%">
              <p class="amount">4,565,230.00</p>
              <on-boarding-button v-show="!showingDetails" btn-width="10rem" text-node="Book Flight"></on-boarding-button>
            </div>
          </div>
        </div>
        <div v-show="showingDetails" class="details">
          <div>
            <div class="booking-info">
              <div class="search-info-area">
                <p class="search-info">Round Trip</p>
                <p class="search-info">12th, April 2022 - 15th, May 2022</p>
              </div>
              <on-boarding-button btn-width="9.26981rem" height="2.75rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="4 Passengers"></on-boarding-button>
            </div>
            <div class="component87">
              <div>
                <div  id="departure"  class="dropdown-details-div">
                  <div class="depart_date-info">
                    <p class="depart-date">Depart on 12th, April 2022  ( Lagos to London)</p>
                    <p class="depart-date-info-stops">2-Stops</p>
                  </div>
                  <svg @click="revealDetails_departure" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.0972L6.35164 10.4488L8.04844 8.75198L12 12.7036L15.9516 8.75198L17.6484 10.4488L12 16.0972ZM12 2.40039C6.69842 2.40039 2.40002 6.69759 2.40002 12.0004C2.40002 17.302 6.69842 21.6004 12 21.6004C17.3016 21.6004 21.6 17.302 21.6 12.0004C21.6 6.69759 17.3016 2.40039 12 2.40039Z" fill="#1D1E2C"/>
                  </svg>
                </div>
                <div v-if="active==='departure'"></div>
              </div>

              <div>
                <div  class="dropdown-details-div u-hide" id="return">
                  <div class="depart_date-info">
                    <p class="depart-date">Return on 5th, May 2022  ( London Nigeria to Lagos )</p>
                    <p class="depart-date-info-stops">2-Stops</p>
                  </div>
                  <svg @click="revealDetails_return" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.0972L6.35164 10.4488L8.04844 8.75198L12 12.7036L15.9516 8.75198L17.6484 10.4488L12 16.0972ZM12 2.40039C6.69842 2.40039 2.40002 6.69759 2.40002 12.0004C2.40002 17.302 6.69842 21.6004 12 21.6004C17.3016 21.6004 21.6 17.302 21.6 12.0004C21.6 6.69759 17.3016 2.40039 12 2.40039Z" fill="#1D1E2C"/>
                  </svg>
                </div>
                <div v-if="active==='return'"></div>
              </div>

              <div>
                <div class="additional-details-info">
                  <div class="additional-details-info-item">
                    <img src="../../assets/baggage.svg" />
                    <p class="text-1">Checked Baggage:<span class="text-2">1 x 23kg Checked baggage</span></p>
                    <div class="breaker-3"></div>
                  </div>
                  <div class="additional-details-info-item">
                    <img src="../../assets/baggage.svg" />
                    <p class="text-1">Carry-on Baggage:<span class="text-2">1 cabin bag</span></p>
                    <div class="breaker-3"></div>

                  </div>
                  <div class="additional-details-info-item">
                    <img src="../../assets/wallet.svg" />
                    <p class="text-1">Price:<span class="text-2 price"> N 565,230.00</span></p>
                  </div>
                </div>

                <p class="extra-baggage-p"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81348 16.1865C5.46753 17.8408 7.66235 18.75 10 18.75C12.3376 18.75 14.5361 17.8408 16.1865 16.1865C17.8406 14.5322 18.75 12.3379 18.75 10C18.75 7.66212 17.8406 5.46432 16.1865 3.81348C14.5361 2.15919 12.3376 1.25 10 1.25C7.66235 1.25 5.46387 2.15919 3.81348 3.81348C2.15942 5.46432 1.25 7.66212 1.25 10C1.25 12.3379 2.15942 14.5357 3.81348 16.1865ZM8.90625 5.625C8.90625 5.01999 9.39453 4.53125 10 4.53125C10.6055 4.53125 11.0938 5.01999 11.0938 5.625V11.0938C11.0938 11.6988 10.6055 12.1875 10 12.1875C9.39453 12.1875 8.90625 11.6988 8.90625 11.0938V5.625ZM11.0938 14.375C11.0938 13.77 10.6055 13.2812 10 13.2812C9.39453 13.2812 8.90625 13.77 8.90625 14.375C8.90625 14.98 9.39453 15.4688 10 15.4688C10.6055 15.4688 11.0938 14.98 11.0938 14.375Z" fill="#1D1E2C"/>
                </svg>Extra baggage will result to extra charges</p>

                <div class="book-flight-details-btn">
                  <on-boarding-button @click="traveller_info" btn-width="43.875rem" text-node="Book Flight for N 565, 230.00 "></on-boarding-button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="actual-result-wrapper">
        <div class="actual-result">
          <div style="width: 100%">
            <div class="actual-result-item">
              <div class="logo-area">
                <img src="../../assets/turkishAir.png" class="logo" />
                <p class="flight-name">Qatar Airways</p>
              </div>
              <div class="actual-result-item-info">
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
                <div class="more-flight-info">
                  <span class="duration">13hrs 25m</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                    <path d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z" fill="#9DA8B6"/>
                  </svg>
                  <span class="stops">2-Stops</span>
                </div>
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
              </div>
            </div>
            <div style="display: flex;align-items: center;justify-content: center;gap:0.5rem">
              <div class="breaker-2"></div>
              <span class="view-details">View Details</span>
            </div>
            <div class="actual-result-item">
              <div class="logo-area">
                <img src="../../assets/turkishAir.png" class="logo" />
                <p class="flight-name">Qatar Airways</p>
              </div>
              <div class="actual-result-item-info">
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
                <div class="more-flight-info">
                  <span class="duration">13hrs 25m</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                    <path d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z" fill="#9DA8B6"/>
                  </svg>
                  <span class="stops">2-Stops</span>
                </div>
                <div>
                  <p class="time"> 08:50 am</p>
                  <p class="dest">Lagos (LOS)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="amount-book-area">
            <div>
              <p class="amount">₦ 4,565,230.00</p>
              <on-boarding-button btn-width="10rem" text-node="Book Flight"></on-boarding-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </booking-index>

</template>

<script>
import BookingIndex from "../../views/dashboard/Index.vue";
import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
import router from "../../router";
import storeUtils from "../../utils/storeUtils";

export default {
  name: "FlightResult",
  components:{BookingIndex, OnBoardingButton},
  data(){
    return{
      active:"departure",
      showingDetails:false,

    }
  },
  methods:{
    revealDetails_departure(){
      document.getElementById('departure').classList.remove('u-hide')
      document.getElementById('return').classList.add('u-hide')
      this.active = 'departure'
    },

    revealDetails_return(){
      document.getElementById('departure').classList.add('u-hide')
      document.getElementById('return').classList.remove('u-hide')
      this.active = 'return'
    },

    traveller_info(){
      storeUtils.fireAway().booking?.addToProgressNav('Flight Result')
      storeUtils.fireAway().booking?.commitBookingStage('Traveller’s Info')
      router.push({path:`/bookings/traveller\n’s_info/${this.getUser?.access_token?.slice(0,20)}`})
    }
  },

  computed:{
    getCurrentRoute(){
      return router.currentRoute.value.name
    },

    getBusinessProfile(){
      if(localStorage.businessProfile){
        const business = JSON.parse(localStorage?.businessProfile)
        return business
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
    getBookings(){
      return storeUtils.fireAway().booking?.getBookings
    },
    getUser(){
      if(localStorage.user){
        return JSON.parse(localStorage.user)
      }
    },

  },


}
</script>

<style scoped>
a{
  text-decoration: none;
}

.progress{
  width: 100%;
  background-color: #89128A;
  height: 0.25rem;
  transition: 1s ease-in;
}

.u-hide{
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background:  #F9FAFC;

}
.book-flight-details-btn{
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding: 4rem;
}
.extra-baggage-p{
  color:  #1D1E2C;

  /* Subtext/14px/Regular */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.price{
  color:  #1D1E2C !important;

  /* Headings/black/24px */
  font-family: 'Product Sans';
  font-size: 1.5rem !important;
  font-style: normal;
  font-weight: 900 !important;
  line-height: 3.875rem !important;
}

.breaker-3{
  width: 0.0625rem;
  height: 2.25rem;
  background: #E0E6ED;
}

.additional-details-info-item{
  display: flex;
  width: auto;
  height: 2rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;

}
.text-1{
  color:#575A65;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  /*line-height: 1.5rem; !* 150% *!*/

}

.text-2{
  color: #1D1E2C;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  /*line-height: 1.75rem;*/


}
.additional-details-info{
  display: flex;
  justify-content: start;
  border-top: solid #E0E6ED;
  border-bottom: solid #E0E6ED;
  width: 100%;
  gap: 1.5rem;
  height: 5.375rem;
  align-items: center;
  margin-top: 3.5rem;

}
.dropdown-details-div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: 5.75rem;

}
.depart_date-info{
  display: flex;
  align-items: center;
  gap: 3.25rem;
}
.depart-date-info-stops{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}
.depart-date{
  color: #1D1E2C;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}


.actual-result-wrapper{
  margin-bottom: 2.06rem;
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/


}
.details{
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/
  padding: 1.5rem;



}
.component87{
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid #E0E6ED;
  background: #FFF;
  margin-top: 2rem;
  padding: 1.5rem;

}
.view-details{
  color:var(--app-default-primary);
  width: 4.8125rem;
  height: 1.5rem;

  /* subtext/medium/14px */
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  cursor: pointer;
}
.spiralLines-div{
  position: absolute;
  top: -100px;
  right: -150px;
  width: 30.47194rem;
  height: 25.32919rem;
  /*border: solid;*/
  z-index: -1;
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

.doc_type_options{
  display: flex;
  width: 36rem;
  flex-direction: column;
  align-items: flex-start;
  /*gap: 1.25rem;*/
  border-radius: 0.5rem;
  border: 1px solid  #F9FAFC;
  background: #FFF;
  left: 0;
  /*bottom: -60px;*/
  /* m4 */
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
}

.form-area-footer{
  margin-top: 4rem;
}
.group-inputs{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.stops{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
}
.activeDestType{
  border-bottom:2px solid #89128A;
  color:#89128A !important;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  font-family: 'Product Sans';

}
.more-flight-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.duration{
  color:  #1D1E2C;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}
.dest{
  color:  #444854;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
}
.logo-area{
  display: flex;
  width: 15.1875rem;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
}

.flight-name{
  color:  #444854;
  text-align: center;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}

.time{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
}

.amount{
  color:  #1D1E2C;
  text-align: center;
  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  margin-bottom: 1.25rem;
}
.amount-book-area{
  border-radius: 0.25rem;
  background:  #F9FAFC;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 15.888rem;
  display: flex;
  align-items: center;
}
.breaker-2{
  width: 85%;
  height: 0.1rem;
  background: #E5E9F2;
}
.actual-result-item{
  width: 100%;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  background: #FFF;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  padding-left:1.5rem;
  padding-right: 1.5rem;
}

.logo{
  width: 2rem;
  height: 2rem;
}

.actual-result-item-info{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.actual-result{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.25rem;
  border: 1px solid  #E5E9F2;
  box-sizing: content-box;
}

.one-round-way-multi-city{
  margin-top: 2rem;
}

.search-result-filter-area{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.filter-item{
  display: flex;
  align-items: center;
  justify-content: center;
  color:  #1D1E2C;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.filter-items{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.result-details{
  color: #2D3139;
  font-family:'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  margin-bottom: 1rem;
}

.seperator_1{
  width: 0.0625rem;
  height: 2.5rem;
  border: 1px solid  #EFF2F7;
}

.and-filter-by{
  color: #6A8297;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 100% */
}

.result-details-info{
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.filter-by{
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  gap: 1.1875rem;
  border-radius: 1rem;
  border: 1px solid #EFF2F7;
  background:  #FFF;
}

.breaker1{
  width: 67.125rem;
  height: 0.0625rem;
  background: #DFE6ED;
  margin-top: 0.56rem;
}

.dest-abv{
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.dest-abv-it{
  color: #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 133.333% */
}

.booking-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.search-info-area{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-info{
  display: flex;
  padding: 0.625rem 1.25rem;
  align-items: flex-start;
  width: auto !important;
  gap: 0.625rem;
  border-radius: 31.25rem;
  background: #EFF2F7;
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}

.flight-result{
  margin: 0 1.5rem;
}

.destination_type{
  margin: 0 2rem;
  padding: 0.38rem;
  color:  #1D1E2C;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.booking-div-inner-wrapper{
  margin: 0.5rem;
  padding: 1.5rem;
}

.booking-nav-item{
  padding: 0.5rem;
  cursor: pointer;
  color:  #201F1E;

  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.booking-div{
  margin: 2.88rem 4.75rem;
}

.booking-nav{
  display: flex;
  border-bottom: 1px solid  #E5E9F2;
  gap: 5rem;
}

.progress-or{
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

.stage{
  color:  #9DA8B6;
  text-align: left;
  /* Body/16px/Regular */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-left: -2rem;
}

.activeProgress{
  background: #89128A !important;
}
.activeStage{
  color: #89128A !important;
}


.progress-or-item{
}

.circle{
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background: #E5E9F2;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:  #FFF;

  /* Headings/20px/bold */
  font-family: 'Product Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.line{
  width: 9.8125rem;
  height: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #E5E9F2;
}

.spiralLines{
  width: inherit;
  height: inherit;
}

.breadcrumb-sub{
  height: 2.4rem;
  width: 20.4rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.94rem;
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

.create-booking-process{
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  position: relative;
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

.one-way{}

.travel_type_booking{
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid  #D8B0D8;
  background: #FFF;
  z-index: 99;
  box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
  position: relative;

}

@media (max-width: 1024px) {
  .travel_type_booking{
    width: 100% !important;
  }
}

.filter-div{
  background: #FFFFFF;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.filter-span{
  color:  #1D1E2C;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
}

.overall{
  display: flex;
  justify-content: center;
}

.filter{
  display: flex;
  gap: 1.25rem;
}

.search_filter{
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-wrapper{
  overflow-x: scroll;
  width: 68.625rem;
}

.booking-wrapper{
  width: 68.625rem;
  height: 54rem;
  position: relative;
}

.search{
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

.create-booking{
  display: flex;
  padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
  align-items: center;
  border-radius: 0.25rem;
  background:  #F8F1F8;
  width: 15.9375rem;
  height: 5rem;
  gap: 0.75rem;
  cursor: pointer;
}

.create-booking-p{
  color:  #1D1E2C;

  /* medium/input/16px */
  font-family: 'Product Sans' ;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.card-area{
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  overflow-x: scroll;
  width: 100%;
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

@media (max-width: 1024px) {
  .card-area{
    overflow-x: scroll;
    width:1024px;
  }

  .search_filter{
    flex-direction: column-reverse;
  }

  .search{
    width: 80%;
  }

  .filter{
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin:10px 0;
  }

  .filter-div{
    width: 80%;
  }
  .filter-btn{
    width: 80% !important;
  }

  .booking-wrapper{
    width: 100%;
  }

  .table-wrapper{
    width: auto !important;
  }


}

::-webkit-scrollbar{
  display: none;
}

</style>