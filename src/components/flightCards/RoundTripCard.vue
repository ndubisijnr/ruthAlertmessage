<template>
    <div>
  
    
      <div class="actual-result-wrapper"
        v-for="(i, index) in getFilteredFlight.length ? paginate(getFilteredFlight, currentPage, itemsPerPage) : paginate(getFlightResult, currentPage, itemsPerPage)"
        :key="index">
        <div class="actual-result">
          <div class="best_offer" v-if="i.amount === sortByCheapest">Best Offer</div>
          <div style="width: 100%;" @click="showDetails(index)">
              <div style="width: 100%;" v-if="i.outbound.length > 1" v-for="(x, itemindex) in i.outbound" :key="itemindex">
                <div class="actual-result-item" v-if="itemindex === i.outbound.length - 1">
                  <div class="logo-area">
                  <img :src="i.outbound[0]?.airline_details.logo" class="logo" />
                  <p class="flight-name">{{ i.outbound[0]?.airline_details.name }}</p>
                  </div>
                  <div class="actual-result-item-info">
                  <div>
                      <p class="time"> {{ convertTo12HourFormat(i.outbound[0]?.departure_time) }}</p>
                      <p class="dest">{{ getCityByCityCode(i.outbound[0]?.airport_from) }}
                      ({{ i.outbound[0]?.airport_from }})</p>
                  </div>
                  <div class="more-flight-info">
                      <span class="duration">{{ convertDurationToWords(i.total_duration) }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="69" height="16" viewBox="0 0 69 16" fill="none">
                      <path
                          d="M68.3536 8.35355C68.5488 8.15829 68.5488 7.84171 68.3536 7.64645L65.1716 4.46447C64.9763 4.2692 64.6597 4.2692 64.4645 4.46447C64.2692 4.65973 64.2692 4.97631 64.4645 5.17157L67.2929 8L64.4645 10.8284C64.2692 11.0237 64.2692 11.3403 64.4645 11.5355C64.6597 11.7308 64.9763 11.7308 65.1716 11.5355L68.3536 8.35355ZM0 8.5H1.88889V7.5H0V8.5ZM5.66667 8.5H9.44444V7.5H5.66667V8.5ZM13.2222 8.5H17V7.5H13.2222V8.5ZM20.7778 8.5H24.5556V7.5H20.7778V8.5ZM28.3333 8.5H32.1111V7.5H28.3333V8.5ZM35.8889 8.5H39.6667V7.5H35.8889V8.5ZM43.4445 8.5H47.2222V7.5H43.4445V8.5ZM51 8.5H54.7778V7.5H51V8.5ZM58.5556 8.5H62.3333V7.5H58.5556V8.5ZM66.1111 8.5H68V7.5H66.1111V8.5ZM68.7071 8.70711C69.0976 8.31658 69.0976 7.68342 68.7071 7.29289L62.3431 0.928932C61.9526 0.538408 61.3195 0.538408 60.9289 0.928932C60.5384 1.31946 60.5384 1.95262 60.9289 2.34315L66.5858 8L60.9289 13.6569C60.5384 14.0474 60.5384 14.6805 60.9289 15.0711C61.3195 15.4616 61.9526 15.4616 62.3431 15.0711L68.7071 8.70711ZM0 9H1.88889V7H0V9ZM5.66667 9H9.44444V7H5.66667V9ZM13.2222 9H17V7H13.2222V9ZM20.7778 9H24.5556V7H20.7778V9ZM28.3333 9H32.1111V7H28.3333V9ZM35.8889 9H39.6667V7H35.8889V9ZM43.4445 9H47.2222V7H43.4445V9ZM51 9H54.7778V7H51V9ZM58.5556 9H62.3333V7H58.5556V9ZM66.1111 9H68V7H66.1111V9Z"
                          fill="#9DA8B6" />
                      </svg>
                      <span class="stops">{{ i.outbound_stops === 0 ? 'Direct' :
                      `${i.outbound_stops}-Stops` }}</span>
                  </div>
                  <div>
                      <p class="time"> {{ convertTo12HourFormat(x.arrival_time) }}</p>
                      <p class="dest">{{ getCityByCityCode(x.airport_to) }} ({{ x.airport_to }})</p>
                  </div>

                  </div>
              </div>
              </div>

              <div style="width: 100%" v-else>
              <div class="actual-result-item" v-for="j in i.outbound">
                  <div class="logo-area">
                  <img :src="j.airline_details.logo" class="logo" />
                  <p class="flight-name">{{ j.airline_details.name }}</p>
                  </div>
                  <div class="actual-result-item-info">
                  <div>
                      <p class="time"> {{ convertTo12HourFormat(j.departure_time) }}</p>
                      <p class="dest">{{ getCityByCityCode(j.airport_from) }} ({{ j.airport_from }})</p>
                  </div>
                  <div class="more-flight-info">
                      <span class="duration">{{ convertDurationToWords(i.total_duration) }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                      <path
                          d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z"
                          fill="#9DA8B6" />
                      </svg>
                      <span class="stops">{{ i.outbound_stops + i.inbound_stops === 0 ? 'Direct' :
                      `${i.outbound_stops + i.inbound_stops}-Stops` }}</span>
                  </div>
                  <div>
                      <p class="time"> {{ convertTo12HourFormat(j.arrival_time) }}</p>
                      <p class="dest">{{ getCityByCityCode(j.airport_to) }} ({{ j.airport_to }})</p>
                  </div>

                  </div>
              </div>
              </div>

              <div style="width: 100%;" v-if="i.inbound.length > 0" v-for="(x, index) in i.inbound" :key="index">
              <div class="actual-result-item" v-if="index === i.inbound.length - 1">
                  <div class="logo-area">
                  <img :src="i.inbound[0]?.airline_details.logo" class="logo" />
                  <p class="flight-name">{{ i.inbound[0]?.airline_details.name }}</p>
                  </div>
                  <div class="actual-result-item-info">
                  <div>
                      <p class="time"> {{ convertTo12HourFormat(i.inbound[0]?.arrival_time) }}</p>
                      <p class="dest"> {{ getCityByCityCode(i.inbound[0]?.airport_from) }}
                      ({{ i.inbound[0]?.airport_from }})</p>
                  </div>
                  <div class="more-flight-info">
                      <span class="duration">{{ convertDurationToWords(i.total_duration) }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="69" height="16" viewBox="0 0 69 16" fill="none">
                      <path
                          d="M68.3536 8.35355C68.5488 8.15829 68.5488 7.84171 68.3536 7.64645L65.1716 4.46447C64.9763 4.2692 64.6597 4.2692 64.4645 4.46447C64.2692 4.65973 64.2692 4.97631 64.4645 5.17157L67.2929 8L64.4645 10.8284C64.2692 11.0237 64.2692 11.3403 64.4645 11.5355C64.6597 11.7308 64.9763 11.7308 65.1716 11.5355L68.3536 8.35355ZM0 8.5H1.88889V7.5H0V8.5ZM5.66667 8.5H9.44444V7.5H5.66667V8.5ZM13.2222 8.5H17V7.5H13.2222V8.5ZM20.7778 8.5H24.5556V7.5H20.7778V8.5ZM28.3333 8.5H32.1111V7.5H28.3333V8.5ZM35.8889 8.5H39.6667V7.5H35.8889V8.5ZM43.4445 8.5H47.2222V7.5H43.4445V8.5ZM51 8.5H54.7778V7.5H51V8.5ZM58.5556 8.5H62.3333V7.5H58.5556V8.5ZM66.1111 8.5H68V7.5H66.1111V8.5ZM68.7071 8.70711C69.0976 8.31658 69.0976 7.68342 68.7071 7.29289L62.3431 0.928932C61.9526 0.538408 61.3195 0.538408 60.9289 0.928932C60.5384 1.31946 60.5384 1.95262 60.9289 2.34315L66.5858 8L60.9289 13.6569C60.5384 14.0474 60.5384 14.6805 60.9289 15.0711C61.3195 15.4616 61.9526 15.4616 62.3431 15.0711L68.7071 8.70711ZM0 9H1.88889V7H0V9ZM5.66667 9H9.44444V7H5.66667V9ZM13.2222 9H17V7H13.2222V9ZM20.7778 9H24.5556V7H20.7778V9ZM28.3333 9H32.1111V7H28.3333V9ZM35.8889 9H39.6667V7H35.8889V9ZM43.4445 9H47.2222V7H43.4445V9ZM51 9H54.7778V7H51V9ZM58.5556 9H62.3333V7H58.5556V9ZM66.1111 9H68V7H66.1111V9Z"
                          fill="#9DA8B6" />
                      </svg>
                      <span class="stops">{{ i.inbound_stops === 0 ? 'Direct' :
                      `${i.inbound_stops}-Stops` }}</span>
                  </div>
                  <div>
                      <p class="time"> {{ convertTo12HourFormat(x.arrival_time) }}</p>
                      <p class="dest">{{ getCityByCityCode(x.airport_to) }} ({{ x.airport_to }})</p>
                  </div>
                  </div>
              </div>
              </div>
              <div style="width: 100%;" v-else>
              <div class="actual-result-item" v-for="(x, index) in i.inbound" :key="index">
                    <div class="logo-area">
                    <img :src="x.airline_details.logo" class="logo" />
                    <p class="flight-name">{{ x.airline_details.name }}</p>
                    </div>
                    <div class="actual-result-item-info">
                    <div>
                        <p class="time"> {{ convertTo12HourFormat(x.arrival_time) }}</p>
                        <p class="dest">{{ getCityByCityCode(x.airport_to) }} ({{ x.airport_to }})</p>
                    </div>
                    <div class="more-flight-info">
                        <span class="duration">{{ convertDurationToWords(i.total_duration) }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none">
                        <path
                            d="M231.354 8.35355C231.549 8.15829 231.549 7.84171 231.354 7.64645L228.172 4.46447C227.976 4.2692 227.66 4.2692 227.464 4.46447C227.269 4.65973 227.269 4.97631 227.464 5.17157L230.293 8L227.464 10.8284C227.269 11.0237 227.269 11.3403 227.464 11.5355C227.66 11.7308 227.976 11.7308 228.172 11.5355L231.354 8.35355ZM0 8.5H1.99138V7.5H0V8.5ZM5.97414 8.5H9.9569V7.5H5.97414V8.5ZM13.9397 8.5H17.9224V7.5H13.9397V8.5ZM21.9052 8.5H25.8879V7.5H21.9052V8.5ZM29.8707 8.5H33.8534V7.5H29.8707V8.5ZM37.8362 8.5H41.819V7.5H37.8362V8.5ZM45.8017 8.5H49.7845V7.5H45.8017V8.5ZM53.7672 8.5H57.75V7.5H53.7672V8.5ZM61.7327 8.5H65.7155V7.5H61.7327V8.5ZM69.6983 8.5H73.681V7.5H69.6983V8.5ZM77.6638 8.5H81.6465V7.5H77.6638V8.5ZM85.6293 8.5H89.6121V7.5H85.6293V8.5ZM93.5948 8.5H97.5776V7.5H93.5948V8.5ZM101.56 8.5H105.543V7.5H101.56V8.5ZM109.526 8.5H113.509V7.5H109.526V8.5ZM117.491 8.5H121.474V7.5H117.491V8.5ZM125.457 8.5H129.44V7.5H125.457V8.5ZM133.422 8.5H137.405V7.5H133.422V8.5ZM141.388 8.5H145.371V7.5H141.388V8.5ZM149.353 8.5H153.336V7.5H149.353V8.5ZM157.319 8.5H161.302V7.5H157.319V8.5ZM165.284 8.5H169.267V7.5H165.284V8.5ZM173.25 8.5H177.233V7.5H173.25V8.5ZM181.215 8.5H185.198V7.5H181.215V8.5ZM189.181 8.5H193.164V7.5H189.181V8.5ZM197.147 8.5H201.129V7.5H197.147V8.5ZM205.112 8.5H209.095V7.5H205.112V8.5ZM213.078 8.5H217.06V7.5H213.078V8.5ZM221.043 8.5H225.026V7.5H221.043V8.5ZM229.009 8.5H231V7.5H229.009V8.5ZM231.707 8.70711C232.098 8.31658 232.098 7.68342 231.707 7.29289L225.343 0.928932C224.953 0.538408 224.319 0.538408 223.929 0.928932C223.538 1.31946 223.538 1.95262 223.929 2.34315L229.586 8L223.929 13.6569C223.538 14.0474 223.538 14.6805 223.929 15.0711C224.319 15.4616 224.953 15.4616 225.343 15.0711L231.707 8.70711ZM0 9H1.99138V7H0V9ZM5.97414 9H9.9569V7H5.97414V9ZM13.9397 9H17.9224V7H13.9397V9ZM21.9052 9H25.8879V7H21.9052V9ZM29.8707 9H33.8534V7H29.8707V9ZM37.8362 9H41.819V7H37.8362V9ZM45.8017 9H49.7845V7H45.8017V9ZM53.7672 9H57.75V7H53.7672V9ZM61.7327 9H65.7155V7H61.7327V9ZM69.6983 9H73.681V7H69.6983V9ZM77.6638 9H81.6465V7H77.6638V9ZM85.6293 9H89.6121V7H85.6293V9ZM93.5948 9H97.5776V7H93.5948V9ZM101.56 9H105.543V7H101.56V9ZM109.526 9H113.509V7H109.526V9ZM117.491 9H121.474V7H117.491V9ZM125.457 9H129.44V7H125.457V9ZM133.422 9H137.405V7H133.422V9ZM141.388 9H145.371V7H141.388V9ZM149.353 9H153.336V7H149.353V9ZM157.319 9H161.302V7H157.319V9ZM165.284 9H169.267V7H165.284V9ZM173.25 9H177.233V7H173.25V9ZM181.215 9H185.198V7H181.215V9ZM189.181 9H193.164V7H189.181V9ZM197.147 9H201.129V7H197.147V9ZM205.112 9H209.095V7H205.112V9ZM213.078 9H217.06V7H213.078V9ZM221.043 9H225.026V7H221.043V9ZM229.009 9H231V7H229.009V9Z"
                            fill="#9DA8B6" />
                        </svg>
                        <span class="stops">{{ i.inbound_stops === 0 ? 'Direct' :
                        `${i.inbound_stops}-Stops` }}</span>
                    </div>
                    <div>
                        <p class="time"> {{ convertTo12HourFormat(x.arrival_time) }}</p>
                        <p class="dest">{{ getCityByCityCode(x.airport_to) }} ({{ x.airport_to }})</p>
                    </div>
                    </div>
                </div>
          </div>

            <!-- <div style="width:8rem;display: flex;justify-content: center;">
                <p class="view-details" @click="showDetails(index)">{{ showingDetails && currentShowingDetailsIndex == index ? 'Unview' : 'View Details' }}</p>
            </div> -->
           
          </div>
  
          <div class="amount-book-area"
            :style="i.inbound.length > 0 ? { 'display': 'flex !important', 'align-items': 'center !important', 'height': '15.5rem !important' } : null">
            <div style="width: 100%;">
              <p class="amount">₦ {{ formatAmount(i.amount) }}</p>
              <on-boarding-button @click="selectFlight(i)"
                btn-width="10rem"
                text-node="Book Flight"></on-boarding-button>
            </div>
          </div>
        </div>
  
  
        <!-- Showing extra flight details -->
          <div v-show="showingDetails && currentShowingDetailsIndex === index" class="details">
            <div>
             
              <div class="component87 animate__animated animate__fadeIn">
                <div >
                  <div id="departure" class="dropdown-details-div">
                    <div class="depart_date-info">
                      <p class="depart-date">Depart on {{
                        convertToWord(i.outbound[0]?.departure_time.split("T")[0]) }} ( {{
                        getCityByCityCode(i.outbound[0]?.airport_from) }} to
                        {{ getCityByCityCode(i.outbound[0]?.airport_to) }})</p>
                      <p class="depart-date-info-stops">{{ i.outbound_stops }}-Stops</p>
                    </div>
                    <svg class="dropdown_icon" @click="isDepartureActive = !isDepartureActive" style="cursor: pointer;"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 16.0972L6.35164 10.4488L8.04844 8.75198L12 12.7036L15.9516 8.75198L17.6484 10.4488L12 16.0972ZM12 2.40039C6.69842 2.40039 2.40002 6.69759 2.40002 12.0004C2.40002 17.302 6.69842 21.6004 12 21.6004C17.3016 21.6004 21.6 17.302 21.6 12.0004C21.6 6.69759 17.3016 2.40039 12 2.40039Z"
                        fill="#1D1E2C" />
                    </svg>
                  </div>
                  <div v-if="isDepartureActive" >
                    <div class="booking-info">
                    <div class="search-info-area">
                      <p class="search-info">Round Trip</p>
                      <p class="search-info">12th, April 2022 - 15th, May 2022</p>
                    </div>
                    <on-boarding-button btn-width="9.26981rem" height="2.75rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="4 Passengers"></on-boarding-button>
                  </div>

                  <!-- extra stops details  -->
  
                  <div style="display:flex;justify-content: space-between;overflow-x: scroll">

                    <!-- looping through multiple outbounds -->

                    <div v-for="j in i.outbound" style="display: flex;margin-right: 2.5rem;gap:2.5rem">

                      <div class="actual-result-item-inner-inner-info">
                        <!-- returning the airport details -->
                        <div class="actual-result-item-info-airport-details">
                          <p class="airport-name">{{ getAirportNamesByCityCode(j.airport_from) }} ({{
                              getCityByCityCode(j.airport_from) }})</p>
                          <p class="time-info">{{ convertToWord(j.departure_time.split("T")[0]) }}, {{
                              convertTo12HourFormat(j.departure_time) }}</p>
                          <p class="dest">{{ getCityByCityCode(j.airport_from) }} ({{ j.airport_from }})
                          </p>
                        </div>

                        <div class="actual-result-item-info">

                          <div class="more-flight-info">
                                <span class="duration">
                                {{ convertDurationToWords(i.total_outbound_duration) }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="162" height="16" viewBox="0 0 162 16" fill="none">
                              <path d="M160.854 8.35355C161.049 8.15829 161.049 7.84171 160.854 7.64645L157.672 4.46447C157.476 4.2692 157.16 4.2692 156.964 4.46447C156.769 4.65973 156.769 4.97631 156.964 5.17157L159.793 8L156.964 10.8284C156.769 11.0237 156.769 11.3403 156.964 11.5355C157.16 11.7308 157.476 11.7308 157.672 11.5355L160.854 8.35355ZM0.5 8.5H2.5V7.5H0.5V8.5ZM6.5 8.5H10.5V7.5H6.5V8.5ZM14.5 8.5H18.5V7.5H14.5V8.5ZM22.5 8.5H26.5V7.5H22.5V8.5ZM30.5 8.5H34.5V7.5H30.5V8.5ZM38.5 8.5H42.5V7.5H38.5V8.5ZM46.5 8.5H50.5V7.5H46.5V8.5ZM54.5 8.5H58.5V7.5H54.5V8.5ZM62.5 8.5H66.5V7.5H62.5V8.5ZM70.5 8.5H74.5V7.5H70.5V8.5ZM78.5 8.5H82.5V7.5H78.5V8.5ZM86.5 8.5H90.5V7.5H86.5V8.5ZM94.5 8.5H98.5V7.5H94.5V8.5ZM102.5 8.5H106.5V7.5H102.5V8.5ZM110.5 8.5H114.5V7.5H110.5V8.5ZM118.5 8.5H122.5V7.5H118.5V8.5ZM126.5 8.5H130.5V7.5H126.5V8.5ZM134.5 8.5H138.5V7.5H134.5V8.5ZM142.5 8.5H146.5V7.5H142.5V8.5ZM150.5 8.5H154.5V7.5H150.5V8.5ZM158.5 8.5H160.5V7.5H158.5V8.5ZM161.207 8.70711C161.598 8.31658 161.598 7.68342 161.207 7.29289L154.843 0.928932C154.453 0.538408 153.819 0.538408 153.429 0.928932C153.038 1.31946 153.038 1.95262 153.429 2.34315L159.086 8L153.429 13.6569C153.038 14.0474 153.038 14.6805 153.429 15.0711C153.819 15.4616 154.453 15.4616 154.843 15.0711L161.207 8.70711ZM0.5 9H2.5V7H0.5V9ZM6.5 9H10.5V7H6.5V9ZM14.5 9H18.5V7H14.5V9ZM22.5 9H26.5V7H22.5V9ZM30.5 9H34.5V7H30.5V9ZM38.5 9H42.5V7H38.5V9ZM46.5 9H50.5V7H46.5V9ZM54.5 9H58.5V7H54.5V9ZM62.5 9H66.5V7H62.5V9ZM70.5 9H74.5V7H70.5V9ZM78.5 9H82.5V7H78.5V9ZM86.5 9H90.5V7H86.5V9ZM94.5 9H98.5V7H94.5V9ZM102.5 9H106.5V7H102.5V9ZM110.5 9H114.5V7H110.5V9ZM118.5 9H122.5V7H118.5V9ZM126.5 9H130.5V7H126.5V9ZM134.5 9H138.5V7H134.5V9ZM142.5 9H146.5V7H142.5V9ZM150.5 9H154.5V7H150.5V9ZM158.5 9H160.5V7H158.5V9Z" fill="#C0CCDA"/>
                            </svg>
                            <span class="stops">{{ i.outbound_stops }}-Stops</span>
                          </div>
                        </div>

                        <div class="actual-result-item-info-airport-details">
                          <p class="airport-name">{{ getAirportNamesByCityCode(j.airport_to) }} ({{
                              getCityByCityCode(j.airport_to) }})</p>
                          <p class="time-info">{{ convertToWord(j.arrival_time.split("T")[0]) }}, {{
                              convertTo12HourFormat(j.arrival_time) }}</p>
                          <p class="dest">{{ getCityByCityCode(j.airport_to) }} ({{ j.airport_to }})</p>
                        </div>

                        <div class="airline_info">
                          <div class="inner-airline_details">
                            <div class="inner-airline_details-item airline">
                              <p class="key">Airline: </p>
                              <div style="display: flex;align-items: center;gap:0.5rem;width: 100%;">
                                <img :src="j.airline_details.logo" class="logo" />
                                <p class="value">{{ j.airline_details.name }}</p>
                              </div>

                            </div>
                            <div class="inner-airline_details-item flight-no">
                              <p class="key">Flight No: </p>
                              <p class="value">{{ j.flight_number }}</p>
                            </div>
                            <div class="inner-airline_details-item type">
                              <p class="key">Aircraft Type: </p>
                              <p class="value">{{ j.marketing_airline }}</p>
                            </div>
                            <div class="inner-airline_details-item class-type">
                              <p class="key">Class Type: </p>
                              <p class="value">{{ j.cabin_type }}</p>
                            </div>
                          </div>

                        </div>
                      </div>
<!--                      <div>-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">-->
<!--                          <path d="M10 1.66602C5.40835 1.66602 1.66669 5.40768 1.66669 9.99935C1.66669 14.591 5.40835 18.3327 10 18.3327C14.5917 18.3327 18.3334 14.591 18.3334 9.99935C18.3334 5.40768 14.5917 1.66602 10 1.66602ZM13.625 12.9743C13.5084 13.1743 13.3 13.2827 13.0834 13.2827C12.975 13.2827 12.8667 13.2577 12.7667 13.191L10.1834 11.6493C9.54169 11.266 9.06669 10.4243 9.06669 9.68268V6.26602C9.06669 5.92435 9.35002 5.64102 9.69169 5.64102C10.0334 5.64102 10.3167 5.92435 10.3167 6.26602V9.68268C10.3167 9.98268 10.5667 10.4243 10.825 10.5743L13.4084 12.116C13.7084 12.291 13.8084 12.6743 13.625 12.9743Z" fill="#1D1E2C"/>-->
<!--                        </svg>-->
<!--                        <p>3h 56m layover in casablana</p>-->
<!--                      </div>-->
                    </div>
                    </div>

                  <!-- extra stops details  -->

                  </div>
                </div>
  
                <div v-if="i.inbound.length > 0">
                  <div class="dropdown-details-div">
                    <div class="depart_date-info">
                      <p class="depart-date">Return on {{
                        convertToWord(i.inbound[0]?.departure_time.split("T")[0]) }} ( {{
                        getCityByCityCode(i.inbound[0]?.airport_from) }} to
                        {{ getCityByCityCode(i.inbound[0]?.airport_to) }})</p>
                      <p class="depart-date-info-stops">{{ i.inbound_stops }}-Stops</p>
                    </div>
                    <svg class="dropdown_icon" @click="isReturnActive = !isReturnActive" style="cursor: pointer;"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 16.0972L6.35164 10.4488L8.04844 8.75198L12 12.7036L15.9516 8.75198L17.6484 10.4488L12 16.0972ZM12 2.40039C6.69842 2.40039 2.40002 6.69759 2.40002 12.0004C2.40002 17.302 6.69842 21.6004 12 21.6004C17.3016 21.6004 21.6 17.302 21.6 12.0004C21.6 6.69759 17.3016 2.40039 12 2.40039Z"
                        fill="#1D1E2C" />
                    </svg>
                  </div>
                  <div v-if="isReturnActive">
                    <div class="booking-info">
                    <div class="search-info-area">
                      <p class="search-info">Round Trip</p>
                      <p class="search-info">12th, April 2022 - 15th, May 2022</p>
                    </div>
                    <on-boarding-button btn-width="9.26981rem" height="2.75rem" color="#2C6CAC" border="none" background="#EAF0F7" text-node="4 Passengers"></on-boarding-button>
                  </div>
                  <div style="display:flex;justify-content: space-between;">
                    <div v-for="x in i.inbound">

                        <div class="actual-result-item-inner-inner-info">
                            <div class="actual-result-item-info-airport-details">
                            <p class="airport-name">{{ getAirportNamesByCityCode(x.airport_from) }} ({{
                                getCityByCityCode(x.airport_from) }})</p>
                            <p class="time-info">{{ convertToWord(x.departure_time.split("T")[0]) }}, {{
                                convertTo12HourFormat(x.departure_time) }}</p>
                            <p class="dest">{{ getCityByCityCode(x.airport_from) }} ({{ x.airport_from }})
                            </p>
                            </div>
                            <div class="actual-result-item-info">
    
                            <div class="more-flight-info">
                                <span class="duration">
                                {{ convertDurationToWords(i.total_outbound_duration) }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="161" height="16" viewBox="0 0 161 16" fill="none">
                                    <path d="M160.354 8.35355C160.549 8.15829 160.549 7.84171 160.354 7.64645L157.172 4.46447C156.976 4.2692 156.66 4.2692 156.464 4.46447C156.269 4.65973 156.269 4.97631 156.464 5.17157L159.293 8L156.464 10.8284C156.269 11.0237 156.269 11.3403 156.464 11.5355C156.66 11.7308 156.976 11.7308 157.172 11.5355L160.354 8.35355ZM0 8.5H2V7.5H0V8.5ZM6 8.5H10V7.5H6V8.5ZM14 8.5H18V7.5H14V8.5ZM22 8.5H26V7.5H22V8.5ZM30 8.5H34V7.5H30V8.5ZM38 8.5H42V7.5H38V8.5ZM46 8.5H50V7.5H46V8.5ZM54 8.5H58V7.5H54V8.5ZM62 8.5H66V7.5H62V8.5ZM70 8.5H74V7.5H70V8.5ZM78 8.5H82V7.5H78V8.5ZM86 8.5H90V7.5H86V8.5ZM94 8.5H98V7.5H94V8.5ZM102 8.5H106V7.5H102V8.5ZM110 8.5H114V7.5H110V8.5ZM118 8.5H122V7.5H118V8.5ZM126 8.5H130V7.5H126V8.5ZM134 8.5H138V7.5H134V8.5ZM142 8.5H146V7.5H142V8.5ZM150 8.5H154V7.5H150V8.5ZM158 8.5H160V7.5H158V8.5ZM160.707 8.70711C161.098 8.31658 161.098 7.68342 160.707 7.29289L154.343 0.928932C153.953 0.538408 153.319 0.538408 152.929 0.928932C152.538 1.31946 152.538 1.95262 152.929 2.34315L158.586 8L152.929 13.6569C152.538 14.0474 152.538 14.6805 152.929 15.0711C153.319 15.4616 153.953 15.4616 154.343 15.0711L160.707 8.70711ZM0 9H2V7H0V9ZM6 9H10V7H6V9ZM14 9H18V7H14V9ZM22 9H26V7H22V9ZM30 9H34V7H30V9ZM38 9H42V7H38V9ZM46 9H50V7H46V9ZM54 9H58V7H54V9ZM62 9H66V7H62V9ZM70 9H74V7H70V9ZM78 9H82V7H78V9ZM86 9H90V7H86V9ZM94 9H98V7H94V9ZM102 9H106V7H102V9ZM110 9H114V7H110V9ZM118 9H122V7H118V9ZM126 9H130V7H126V9ZM134 9H138V7H134V9ZM142 9H146V7H142V9ZM150 9H154V7H150V9ZM158 9H160V7H158V9Z" fill="#C0CCDA"/>
                                </svg>
                                <span class="stops">{{ i.outbound_stops }}-Stops</span>
                            </div>
                            </div>
                            <div class="actual-result-item-info-airport-details">
                            <p class="airport-name">{{ getAirportNamesByCityCode(x.airport_to) }} ({{
                                getCityByCityCode(x.airport_to) }})</p>
                            <p class="time-info">{{ convertToWord(x.arrival_time.split("T")[0]) }}, {{
                                convertTo12HourFormat(x.arrival_time) }}</p>
                            <p class="dest">{{ getCityByCityCode(x.airport_to) }} ({{ x.airport_to }})</p>
                            </div>

                            <div class="airline_info">
                            <div class="inner-airline_details">
                                <div class="inner-airline_details-item airline">
                                    <p class="key">Airline: </p>
                                    <div style="display: flex;align-items: center;gap:0.5rem;width: 100%;">
                                    <img :src="x.airline_details.logo" class="logo" />
                                    <p class="value">{{ x.airline_details.name }}</p>
                                    </div>
        
                                </div>
                                <div class="inner-airline_details-item flight-no">
                                    <p class="key">Flight No: </p>
                                    <p class="value">{{ x.flight_number }}</p>
                                </div>
                                <div class="inner-airline_details-item type">
                                    <p class="key">Aircraft Type: </p>
                                    <p class="value">{{ x.marketing_airline }}</p>
                                </div>
                                <div class="inner-airline_details-item class-type">
                                    <p class="key">Class Type: </p>
                                    <p class="value">{{ x.cabin_type }}</p>
                                </div>
                        </div>

                        </div>
                      </div>
  
                      <!-- <div v-if="i.inbound_stops > 0">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 1.66602C5.40835 1.66602 1.66669 5.40768 1.66669 9.99935C1.66669 14.591 5.40835 18.3327 10 18.3327C14.5917 18.3327 18.3334 14.591 18.3334 9.99935C18.3334 5.40768 14.5917 1.66602 10 1.66602ZM13.625 12.9743C13.5084 13.1743 13.3 13.2827 13.0834 13.2827C12.975 13.2827 12.8667 13.2577 12.7667 13.191L10.1834 11.6493C9.54169 11.266 9.06669 10.4243 9.06669 9.68268V6.26602C9.06669 5.92435 9.35002 5.64102 9.69169 5.64102C10.0334 5.64102 10.3167 5.92435 10.3167 6.26602V9.68268C10.3167 9.98268 10.5667 10.4243 10.825 10.5743L13.4084 12.116C13.7084 12.291 13.8084 12.6743 13.625 12.9743Z" fill="#1D1E2C"/>
                              </svg>
                              <p>3h 56m layover in casablana</p>
                            </div>
                          </div> -->
                    </div>
                </div>
  
                  </div>
                </div>
              </div>
  
              <div>
                <div class="additional-details-info">
                  <div class="additional-details-info-item">
                    <div style="display: flex;align-items: center;gap:0.5rem">
                      <img src="../../assets/baggage.svg" />
                      <p class="text-1">Checked Baggage:<span class="text-2">{{ i.outbound[0].baggage
                      }}</span></p>
                    </div>
                    <div class="breaker-3"></div>
                  </div>
                  <div class="additional-details-info-item">
                    <div style="display: flex;align-items: center;gap:0.5rem">
                      <img src="../../assets/baggage.svg" />
                      <p class="text-1">Carry-on Baggage:<span class="text-2">1 cabin bag</span></p>
                    </div>
                    <div class="breaker-3"></div>
  
                  </div>
                  <div class="additional-details-info-item">
                    <div style="display: flex;align-items: center;gap:0.5rem">
                      <img src="../../assets/wallet.svg" />
                      <p class="text-1">Price:<span class="text-2 price"> ₦
                          {{ formatAmount(i.amount) }}</span></p>
                    </div>
                  </div>
                </div>
  
                <p class="extra-baggage-p"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.81348 16.1865C5.46753 17.8408 7.66235 18.75 10 18.75C12.3376 18.75 14.5361 17.8408 16.1865 16.1865C17.8406 14.5322 18.75 12.3379 18.75 10C18.75 7.66212 17.8406 5.46432 16.1865 3.81348C14.5361 2.15919 12.3376 1.25 10 1.25C7.66235 1.25 5.46387 2.15919 3.81348 3.81348C2.15942 5.46432 1.25 7.66212 1.25 10C1.25 12.3379 2.15942 14.5357 3.81348 16.1865ZM8.90625 5.625C8.90625 5.01999 9.39453 4.53125 10 4.53125C10.6055 4.53125 11.0938 5.01999 11.0938 5.625V11.0938C11.0938 11.6988 10.6055 12.1875 10 12.1875C9.39453 12.1875 8.90625 11.6988 8.90625 11.0938V5.625ZM11.0938 14.375C11.0938 13.77 10.6055 13.2812 10 13.2812C9.39453 13.2812 8.90625 13.77 8.90625 14.375C8.90625 14.98 9.39453 15.4688 10 15.4688C10.6055 15.4688 11.0938 14.98 11.0938 14.375Z"
                      fill="#1D1E2C" />
                  </svg>Extra baggage will result to extra charges</p>
  
                <div class="book-flight-details-btn">
                  <on-boarding-button @click="selectFlight(i)" btn-width="43.875rem"
                    :text-node="`Book Flight for ₦ ${formatAmount(i.amount)}`"></on-boarding-button>
                </div>
  
                <div class="fare_rules">
                  <div
                    style="width: 100%;display:flex;align-items: center;gap: 0.5rem;margin-bottom: 0.5rem;justify-content: space-between;">
                    <div style="display:flex;align-items: center;gap: 0.5rem;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.07617 19.4238C7.06104 21.409 9.69482 22.5 12.5 22.5C15.3052 22.5 17.9434 21.409 19.9238 19.4238C21.9087 17.4387 23 14.8055 23 12C23 9.19455 21.9087 6.55719 19.9238 4.57617C17.9434 2.59103 15.3052 1.5 12.5 1.5C9.69482 1.5 7.05664 2.59103 5.07617 4.57617C3.09131 6.55719 2 9.19455 2 12C2 14.8055 3.09131 17.4428 5.07617 19.4238ZM11.1875 6.75C11.1875 6.02399 11.7734 5.4375 12.5 5.4375C13.2266 5.4375 13.8125 6.02399 13.8125 6.75V13.3125C13.8125 14.0385 13.2266 14.625 12.5 14.625C11.7734 14.625 11.1875 14.0385 11.1875 13.3125V6.75ZM13.8125 17.25C13.8125 16.524 13.2266 15.9375 12.5 15.9375C11.7734 15.9375 11.1875 16.524 11.1875 17.25C11.1875 17.976 11.7734 18.5625 12.5 18.5625C13.2266 18.5625 13.8125 17.976 13.8125 17.25Z"
                          fill="#1D1E2C" />
                      </svg>
                      <p class="fare_rule_h">Fare Rule</p>
                    </div>
  
                    <svg style="cursor:pointer" @click="toogleFareRules = !toogleFareRules" xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 16.0972L6.35159 10.4488L8.04839 8.75198L12 12.7036L15.9516 8.75198L17.6484 10.4488L12 16.0972ZM12 2.40039C6.69838 2.40039 2.39998 6.69759 2.39998 12.0004C2.39998 17.302 6.69838 21.6004 12 21.6004C17.3016 21.6004 21.6 17.302 21.6 12.0004C21.6 6.69759 17.3016 2.40039 12 2.40039Z"
                        fill="#1D1E2C" />
                    </svg>
                  </div>
  
                  <div v-if="toogleFareRules">
                    <li class="fare_rule_p">Penalty Applies - Check Rules</li>
                    <li class="fare_rule_p"> On some airlines, changes are not permitted on a ticket in case
                      of no-show and the ticket(s) have no value and cannot be refunded</li>
                    <li class="fare_rule_p"> Extra baggaga will result to extra charges</li>
                    <li class="fare_rule_p"> Please ensure that you have a valid visa before your
                      international travel. Wakanow will not be held liable by airport authorities if you
                      have not fulfilled your visa requirements.</li>
                    <li class="fare_rule_p"> Tickets to Kuala Lumpur must not exceed 14 days, this simply
                      means all tickets booked to Kuala Lumpur may be less than 14 days but must not be
                      more than 14 days.</li>
                    <li class="fare_rule_p"> Egypt Air tickets cannot be booked for one way routes, there
                      should be a RESTRICTION on bookings, NO ONE WAY on Egypt Air.</li>
                    <li class="fare_rule_p"> If you or anyone accompanying you has a serious health issue,
                      please call us before booking.</li>
                    <li class="fare_rule_p"> In the case of cancellation, amount paid for insurance will be
                      non-refundable. This is applicable if insurance is booked along with a ticket.</li>
                    <li class="fare_rule_p"> Refunds will be processed within 6 - 8 weeks</li>
                    <li class="fare_rule_p"> A maximum of one infant is allowed to travel with one adult.
                    </li>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
         <!-- Showing extra flight details -->
      </div>
  
  
      <!-- paginate area -->
  
      <div class="paginate" v-if="getTotalPage > 1">
        <div style="width: 10%;margin: 0 0.5rem;">Total Pages: {{ getTotalPage }}</div>
        <div class="paginate_num">
          <img src="../../assets/Icons/Settings/leftArrows.svg" @click="currentPage = currentPage - 1" />
          <div @click="currentPage = i, currentShowingDetailsIndex = null" :class="{ 'activePage': i === currentPage }"
            class="pag_item" v-for="i in getTotalPage">
            <span>{{ i }}</span>
          </div>
          <img src="../../assets/Icons/Settings/rightArrow.svg" @click="currentPage = currentPage + 1" />
        </div>
      </div>
  
       <!-- end paginate area -->
     
    </div>
  </template>
  <script>
  import { getYYYYMMDDFormat, convertToWord, formatAmount, convertDurationToWords, convertTo12HourFormat } from "../../mixins/flightUtil"
  import OnBoardingButton from "../Buttons/OnBoardingButton.vue";
  import router from "../../router";
  import storeUtils from "../../utils/storeUtils";
  import paginate from "../../mixins/paginate";
  export default {
    name: "RoundTripCard",
    components: { OnBoardingButton },
    data() {
      return {
        active: "departure",
        showingDetails: false,
        getYYYYMMDDFormat,
        formatAmount,
        convertDurationToWords,
        convertTo12HourFormat,
        convertToWord,
        currentShowingDetailsIndex: null,
        currentPage: 1,
        itemsPerPage: 10,
        paginate,
        isDepartureActive: false,
        isReturnActive: false,
        toogleFareRules: false
      }
    },
    methods: {
  
      flightSkelentonLoader() {
  
      },
  
  
      showDetails(index) {
        if (this.showingDetails && this.currentShowingDetailsIndex == index) {
          this.showingDetails = false
        } else {
          this.showingDetails = true
          this.currentShowingDetailsIndex = index
        }
      },
  
      extractAirlineDetails(obj) {
        const airlineDetails = [];
  
        function searchForAirlineDetails(obj) {
          for (const key in obj) {
            if (typeof obj[key] === 'object') {
              if (key === 'airline_details' && !airlineDetails.includes(obj[key].name)) {
  
                airlineDetails.push(obj[key]);
              }
              searchForAirlineDetails(obj[key]);
            }
          }
        }
        searchForAirlineDetails(obj);
  
        return airlineDetails;
      },
  
      revealDetails_departure() {
        document.getElementById('departure').classList.remove('u-hide')
        document.getElementById('return').classList.add('u-hide')
        this.active = 'departure'
      },
  
      getAirportNamesByCityCode(city_code) {
        const airports = JSON.parse(localStorage?.airports)
        if (airports) {
          const airportName = airports.filter(it => it.city_code === city_code || it.iata_code=== city_code)[0]?.name
          return airportName
        }
      },
  
      getCityByCityCode(city_code) {
        const airports = JSON.parse(localStorage?.airports)
        if (airports) {
          const cityName = airports.filter(it => it.city_code === city_code || it.iata_code=== city_code)[0]?.city
          return cityName
        }
      },
  
      revealDetails_return() {
        document.getElementById('departure').classList.add('u-hide')
        document.getElementById('return').classList.remove('u-hide')
        this.active = 'return'
      },
  
      selectFlight(obj) {
        setTimeout(() => {
          storeUtils.fireAway().flight?.commitSelectedFlight(obj)
        }, 500)
      }
    },
  
    computed: {
  
      sortByCheapest() {
        let prizes = this.getFlightResult.map(it => it.amount)
        prizes.sort(function (a, b) {
          return a - b
        })
        return prizes[0]
  
      },
  
      getTotalPage() {
        return Math.ceil(Number(this.getFilteredFlight.length ? this.getFilteredFlight.length : this.getFlightResult.length) / Number(this.itemsPerPage))
      },
  
      getFlightResult() {
        return storeUtils.fireAway().flight.getFlightResults
      },
      getCurrentRoute() {
        return router.currentRoute.value.name
      },
  
      getBusinessProfile() {
        if (localStorage.businessProfile) {
          const business = JSON.parse(localStorage?.businessProfile)
          return business
        }
  
      },
  
      getBookingStage() {
        return storeUtils.fireAway().flight?.getBookingStage
      },
  
      getBookingSum() {
        return storeUtils.fireAway().booking?.getBookingSummary
      },
  
      getLoadingBooking() {
        return storeUtils.fireAway().booking?.getLoadingBooking
      },
      getBookings() {
        return storeUtils.fireAway().booking?.getBookings
      },
      getUser() {
        if (localStorage.user) {
          return JSON.parse(localStorage.user)
        }
      },
  
      getFilteredFlight() {
  
        return storeUtils.fireAway().flight?.getFilteredFlight
      }
  
    },
  
  }
  </script>
  <style scoped>
  .airline_info{
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background: #EBF4FC;
  }
  .fare_rules {
    display: inline-flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary-1, #D5E2EE);
    background: #F9FAFC;
    width: 100%;
  }
  
  .fare_rule_h {
    color: var(--black-text-01, #1D1E2C);
  
    /* Subtext/14px/Regular */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 171.429% */
  }
  
  .fare_rule_p {
    color: var(--black-text-03, #444854);
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    /* 1.6rem */
  }
  
  .result_area {
    display: flex;
    gap: 1.75rem;
    align-items: start;
    justify-content: space-between;
  
  }
  
  .best_offer {
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: rgba(21, 157, 84, 0.08);
    color: #159D54;
    font-family: 'Product Sans';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 133.333% */
    position: absolute;
    left: 1.44rem;
    top: 0.44rem;
  }
  
  .activePage {
    border-left: 0.6px solid #E5E9F2;
    background: #E5E9F2;
  }
  
  .paginate_num {
    display: flex;
    height: 2rem;
    justify-content: end;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
  
  .pag_item {
    width: 2.5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-left: 0.6px solid var(--secondarytext-default-text-textfield, #E5E9F2);
  }
  
  .paginate {
    display: flex;
    background: #ffffff;
    height: 3.5rem;
    /* padding: 0.875rem 0.75rem 0.625rem 0.75rem; */
    justify-content: space-evenly;
    align-items: center;
    /* gap: 42.625rem; */
    flex-shrink: 0;
    margin: 1.69rem 0;
  }
  
  a {
    text-decoration: none;
  }
  
  .time-info {
    color: #1D1E2C;
    /* Body/18px/Regular */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    width: 9.25rem;
    margin-bottom: 0.56rem;
    /* 166.667% */
  }
  
  .actual-result-item-info-airport-details {
    width: 100%;
  }
  
  .airport-name {
    color: #1D1E2C;
    /* 18px/bold */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    margin-bottom: 0.75rem;
    /* 155.556% */
  }
  
  .key {
    color: #575A65;
    font-family: 'Product Sans';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 150% */
  }
  
  .value {
    color: #1D1E2C;
    text-align: center;
  
    /* medium/input/16px */
    font-family: 'Product Sans';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .inner-airline_details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  
  }
  
  .inner-airline_details-item {
    display: flex;
    gap: 1rem;
    align-items: center;
    /* flex-direction: column; */
  }
  
  .airline_details {
    display: flex;
    width: 100%;
    padding: 2rem;
    height: 7.5rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.25rem;
    /* border: 1px solid #E5E9F2; */
    border: solid;
  }
  
  .progress {
    width: 100%;
    background-color: #89128A;
    height: 0.25rem;
    transition: 1s ease-in;
  }
  
  .u-hide {
    border-radius: 0.5rem;
    border: 1px solid #F9FAFC;
    background: #F9FAFC;
  }
  
  .book-flight-details-btn {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    padding: 4rem;
  }
  
  .extra-baggage-p {
    color: #1D1E2C;
  
    /* Subtext/14px/Regular */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 171.429% */
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
  
  .price {
    color: #1D1E2C !important;
  
    /* Headings/black/24px */
    font-family: 'Product Sans';
    font-size: 1.5rem !important;
    font-style: normal;
    font-weight: 900 !important;
    line-height: 3.875rem !important;
  }
  
  .breaker-3 {
    width: 0.0625rem;
    height: 2.25rem;
    background: #E0E6ED;
  }
  
  .additional-details-info-item {
    display: flex;
    width: 100%;
    height: 2rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
  
  }
  
  .text-1 {
    color: #575A65;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    /*line-height: 1.5rem; !* 150% *!*/
  
  }
  
  .text-2 {
    color: #1D1E2C;
  
    /* medium/input/16px */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    /*line-height: 1.75rem;*/
  
  
  }
  
  .dropdown_icon:hover {
    border: solid var(--app-default-primary);
    border-radius: 50%;
  
  }
  
  .additional-details-info {
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
  
  .dropdown-details-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    height: 5.75rem;
    border-radius: 0.5rem;
    border: 1px solid #F9FAFC;
    background: #F9FAFC;
    margin-bottom: 1rem;
  
  }
  
  .depart_date-info {
    display: flex;
    align-items: center;
    gap: 3.25rem;
  }
  
  .depart-date-info-stops {
    color: #1D1E2C;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 150% */
    border-radius: 31.25rem;
    background: var(--Color, #FFF);
    display: flex;
    padding: 0.625rem 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
  }
  
  .depart-date {
    color: #1D1E2C;
  
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
  }
  
  
  .actual-result-wrapper {
    margin-bottom: 2.06rem;
    border-radius: 0.25rem;
    background-color: #FFF;
    border: 1px solid #E5E9F2;
    cursor: pointer;
    width: 100%;
  }
  
  :is(.actual-result-wrapper):hover {
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  }
  
  .details {
    border-radius: 0.25rem;
    /*border: 1px solid  #E5E9F2;*/
    padding: 1.5rem;
  
  
  
  }
  
  .component87 {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 0.5rem;
    /* border: 1px solid #E0E6ED; */
    background: #FFF;
  
  }
  
  .view-details {
    color: var(--app-default-primary);
    width: 4.8125rem;
    height: 1.5rem;
  
    /* subtext/medium/14px */
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    /* 171.429% */
    cursor: pointer;
    
  }
  
  .spiralLines-div {
    position: absolute;
    top: -100px;
    right: -150px;
    width: 30.47194rem;
    height: 25.32919rem;
    /*border: solid;*/
    z-index: -1;
  }
  
  .choose_document_type {
    display: flex;
    width: 100%;
    height: 4rem;
    padding: 0.875rem 1.25rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.375rem;
    border: 1px solid #EFF2F7;
    margin-bottom: 1rem;
  
  }
  
  .doc_type_options {
    display: flex;
    width: 36rem;
    flex-direction: column;
    align-items: flex-start;
    /*gap: 1.25rem;*/
    border-radius: 0.5rem;
    border: 1px solid #F9FAFC;
    background: #FFF;
    left: 0;
    /*bottom: -60px;*/
    /* m4 */
    box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  }
  
  .form-area-footer {
    margin-top: 4rem;
  }
  
  .group-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .stops {
    color: #444854;
    font-family: 'Product Sans';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 133.333% */
  }
  
  .activeDestType {
    border-bottom: 2px solid #89128A;
    color: #89128A !important;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
    font-family: 'Product Sans';
  
  }
  
  .more-flight-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12.375rem;

  }
  
  .duration {
    color: #1D1E2C;
  
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .dest {
    color: #444854;
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 114.286% */
  }
  
  .logo-area {
    display: flex;
    width: 15.1875rem;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;

  }
  
  .flight-name {
    color: #444854;
    text-align: center;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    /* 150% */
  }
  
  .time {
    color: #1D1E2C;
    font-family: 'Product Sans';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    /* 133.333% */
  }
  
  .amount {
    color: #1D1E2C;
    text-align: center;
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
    margin-bottom: 1.25rem;
  }
  
  .amount-book-area {
    border-radius: 0.25rem;
    background: #F9FAFC;
    padding: 2rem;
    /* padding-right: 1.5rem; */
    height: inherit;
    /* height: 15.888rem; */
    display: flex;
    align-items: center;
    width: 15rem;
  
  }
  
  .breaker-2 {
    width: 85%;
    height: 0.1rem;
    background: #E5E9F2;
  }
  
  .actual-result-item {
    width: 100%;
    height: 7rem;
    flex-shrink: 0;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #FFF;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2.44rem;
    padding: 0 1.5rem;
  }

  .actual-result-item-inner-inner-info{
    width: 12.375rem;
    flex-shrink: 1;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #FFF;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.56rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
    height: 35rem;
  }
  
  .details {
    margin: 0;
    background: var(--Color, #FFF);
    width:55.625rem;
    //border: solid red;
  }
  
  .logo {
    width: 2rem;
    height: 2rem;
    border-radius: 30%;
  }
  
  .actual-result-item-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  
  .actual-result {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #E5E9F2;
    height: auto;
    position: relative;

  }
  
  .one-round-way-multi-city {
    margin-top: 2rem;
  }
  
  .search-result-filter-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  }
  
  .filter-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1D1E2C;
  
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .filter-items {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .result-details {
    color: #2D3139;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 150% */
    margin-bottom: 1rem;
  }
  
  .seperator_1 {
    width: 0.0625rem;
    height: 2.5rem;
    border: 1px solid #EFF2F7;
  }
  
  .and-filter-by {
    color: #6A8297;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 100% */
  }
  
  .result-details-info {
    display: flex;
    justify-content: end;
    gap: 1rem;
    width: 100%;
  }
  
  .filter-by {
    /* display: flex;
    padding: 0rem 1rem;
    align-items: center;
    gap: 1.1875rem;
    border-radius: 1rem;
    border: 1px solid #EFF2F7;
    background:  #FFF; */
  
    display: flex;
    width: auto;
    padding: 0rem 1rem;
    align-items: center;
    gap: 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--dividers-borders-disabled-states, #EFF2F7);
    background: var(--Color, #FFF);
    cursor: pointer;
    color: #2D3139;
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    /* 114.286% */
  }
  
  .breaker1 {
    width: 100%;
    height: 0.0625rem;
    background: #DFE6ED;
    margin-top: 0.56rem;
  }
  
  .dest-abv {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    align-items: center;
  }
  
  .dest-abv-it {
    color: #1D1E2C;
    font-family: 'Product Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    /* 133.333% */
  }
  
  .booking-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .search-info-area {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .search-info {
    display: flex;
    padding: 0.625rem 1.25rem;
    align-items: flex-start;
    width: auto !important;
    gap: 0.625rem;
    border-radius: 31.25rem;
    background: #EFF2F7;
    color: #1D1E2C;
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    /* 150% */
  }
  
  .flight-result {
    margin: 0 0;
    border: solid;
  }
  
  .destination_type {
    margin: 0 2rem;
    padding: 0.38rem;
    color: #1D1E2C;
  
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
  }
  
  .booking-div-inner-wrapper {
    margin: 0.5rem;
    padding: 1.5rem;
  }
  
  .booking-nav-item {
    padding: 0.5rem;
    cursor: pointer;
    color: #201F1E;
  
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .booking-div {
    margin: 2.88rem 4.75rem;
  }
  
  .booking-nav {
    display: flex;
    border-bottom: 1px solid #E5E9F2;
    gap: 5rem;
  }
  
  .progress-or {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
  }
  
  .stage {
    color: #9DA8B6;
    text-align: left;
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    margin-left: -2rem;
  }
  
  .activeProgress {
    background: #89128A !important;
  }
  
  .activeStage {
    color: #89128A !important;
  }
  
  
  .progress-or-item {}
  
  .circle {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    background: #E5E9F2;
    border-radius: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
  
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
  }
  
  .line {
    width: 9.8125rem;
    height: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #E5E9F2;
  }
  
  .spiralLines {
    width: inherit;
    height: inherit;
  }
  
  .breadcrumb-sub {
    height: 2.4rem;
    width: 20.4rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1.94rem;
    gap: 0.5rem;
  }
  
  .current-path-sub {
    color: #575A65;
    text-align: center;
  
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .create-booking-process {
    width: 68.125rem;
    height: auto;
    flex-shrink: 0;
    position: relative;
  }
  
  
  .one-way {}
  
  .travel_type_booking {
    width: 68.125rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 1px solid #D8B0D8;
    background: #FFF;
    z-index: 99;
    box-shadow: 0px 4px 20px 0px rgba(232, 237, 250, 0.20);
    position: relative;
  
  }
  
  @media (max-width: 1024px) {
    .travel_type_booking {
      width: 100% !important;
    }
  }
  
  .filter-div {
    background: #FFFFFF;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }
  
  .filter-span {
    color: #1D1E2C;
    font-family: 'Product Sans';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    /* 171.429% */
  }
  
  .overall {
    display: flex;
    justify-content: center;
  }
  
  .filter {
    display: flex;
    gap: 1.25rem;
  }
  
  .search_filter {
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .table-wrapper {
    overflow-x: scroll;
    width: 68.625rem;
  }
  
  .booking-wrapper {
    width: 68.625rem;
    height: 54rem;
    position: relative;
  }
  
  .search {
    display: flex;
    width: 19.4375rem;
    padding: 0.5rem 5rem 0.5rem 1.25rem;
    align-items: center;
    gap: 1.0625rem;
    flex-shrink: 0;
    outline: none;
    border-radius: 0.375rem;
    border: 0.6px solid #E5E9F2;
    background: #FFF;
  }
  
  .create-booking {
    display: flex;
    padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
    align-items: center;
    border-radius: 0.25rem;
    background: #F8F1F8;
    width: 15.9375rem;
    height: 5rem;
    gap: 0.75rem;
    cursor: pointer;
  }
  
  .create-booking-p {
    color: #1D1E2C;
  
    /* medium/input/16px */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .card-area {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    overflow-x: scroll;
    width: 100%;
  }
  
  .no-team-member-h {
    color: #0E0842;
    text-align: center;
  
    /* Headings/20px/bold */
    font-family: 'Product Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    /* 140% */
    text-transform: capitalize;
  }
  
  .no-team-member-sub {
    color: #575A65;
    text-align: center;
  
    /* Body/16px/Regular */
    font-family: 'Product Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
  }
  
  .no-team-member-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
  
  }
  
  .no-team-member {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 2.54rem;
    margin: 4rem;
  }
  
  @media (max-width: 1024px) {
    .card-area {
      overflow-x: scroll;
      width: 1024px;
    }
  
    .search_filter {
      flex-direction: column-reverse;
    }
  
    .search {
      width: 80%;
    }
  
    .filter {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
  
    .filter-div {
      width: 80%;
    }
  
    .filter-btn {
      width: 80% !important;
    }
  
    .booking-wrapper {
      width: 100%;
    }
  
    .table-wrapper {
      width: auto !important;
    }
  
  
  }
  
  ::-webkit-scrollbar {
    display: none;
  }</style>