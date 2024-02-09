<template>
  <div class="invoice-wrapper" id="invoice-wrapper" v-if="getData">
    <div class="invoice" id="invoice">
      <div class="first-invoice-row">
        <div class="back-and-logo-area">
          <div>
            <img v-if="getUser?.logo" :src="getUser?.logo" class="logo" />
            <p v-else class="tenant_name">{{ getUser?.name }}</p>
          </div>
        </div>
        <div class="button-area" id="hiddenOnPrint1">
          <button
            @click="printPage"
            id="ondownload"
            class="print-invoice"
            :style="{
              background: custom_theme
                ? lightenColor(custom_theme.color)
                : default_theme.color_light,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.25 7.75H7.75C7.34 7.75 7 7.41 7 7V5C7 2.44 8.19 1.25 10.75 1.25H14.25C16.81 1.25 18 2.44 18 5V7C18 7.41 17.66 7.75 17.25 7.75ZM8.5 6.25H16.5V5C16.5 3.3 15.95 2.75 14.25 2.75H10.75C9.05 2.75 8.5 3.3 8.5 5V6.25Z"
                fill="white"
              />
              <path
                d="M13.5 22.75H11.5C9.08 22.75 7.75 21.42 7.75 19V15C7.75 14.59 8.09 14.25 8.5 14.25H16.5C16.91 14.25 17.25 14.59 17.25 15V19C17.25 21.42 15.92 22.75 13.5 22.75ZM9.25 15.75V19C9.25 20.58 9.92 21.25 11.5 21.25H13.5C15.08 21.25 15.75 20.58 15.75 19V15.75H9.25Z"
                fill="white"
              />
              <path
                d="M18.5 18.75H16.5C16.09 18.75 15.75 18.41 15.75 18V15.75H9.25V18C9.25 18.41 8.91 18.75 8.5 18.75H6.5C4.08 18.75 2.75 17.42 2.75 15V10C2.75 7.58 4.08 6.25 6.5 6.25H18.5C20.92 6.25 22.25 7.58 22.25 10V15C22.25 17.42 20.92 18.75 18.5 18.75ZM17.25 17.25H18.5C20.08 17.25 20.75 16.58 20.75 15V10C20.75 8.42 20.08 7.75 18.5 7.75H6.5C4.92 7.75 4.25 8.42 4.25 10V15C4.25 16.58 4.92 17.25 6.5 17.25H7.75V15C7.75 14.59 8.09 14.25 8.5 14.25H16.5C16.91 14.25 17.25 14.59 17.25 15V17.25Z"
                fill="white"
              />
              <path
                d="M17.5 15.75H7.5C7.09 15.75 6.75 15.41 6.75 15C6.75 14.59 7.09 14.25 7.5 14.25H17.5C17.91 14.25 18.25 14.59 18.25 15C18.25 15.41 17.91 15.75 17.5 15.75Z"
                fill="white"
              />
              <path
                d="M10.5 11.75H7.5C7.09 11.75 6.75 11.41 6.75 11C6.75 10.59 7.09 10.25 7.5 10.25H10.5C10.91 10.25 11.25 10.59 11.25 11C11.25 11.41 10.91 11.75 10.5 11.75Z"
                fill="white"
              />
            </svg>
            Print
          </button>
        </div>
      </div>

      <div id="pdf-to-download">
        <p class="invoice-receipt">Flight Itinerary</p>

        <div style="display: flex; justify-content: space-between">
          <div>
            <section style="display: flex; gap: 10px">
              <p class="key">Full Name :</p>
              <p class="value">
                {{
                  getData?.contact_details?.contact_first_name +
                  " " +
                  getData?.contact_details?.contact_last_name
                }}
              </p>
            </section>
            <section style="display: flex; gap: 10px">
              <p class="key">Email:</p>
              <p class="value">{{ getData?.contact_details?.contact_email }}</p>
            </section>
            <section style="display: flex; gap: 10px">
              <p class="key">Class:</p>
              <p class="value" v-if="getData?.is_multicity">
                {{ getData?.routes[0]?.segments[0].cabin_type }}
              </p>
              <p class="value" v-else>{{ getData?.outbound[0]?.cabin_type }}</p>
            </section>
            <section style="display: flex; gap: 10px">
              <p class="key">Booking ID :</p>
              <p class="value">{{ getData?.reference }}</p>
            </section>
            <section style="display: flex; gap: 10px">
              <p class="key">PNR:</p>
              <p class="value">{{ getData?.pnr }}</p>
            </section>
          </div>
        </div>

        <div class="third-invoice-row-and-table">
          <!--     outbound-->
          <div class="flight_info_wrapper">
            <div style="display: flex; align-items: center; gap: 0.5rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2645_19017)">
                  <path
                    d="M0.66 18.43H19.66V20.43H0.66V18.43ZM20.23 9.07C20.02 8.27 19.19 7.79 18.39 8.01L13.08 9.43L6.18 3L4.25 3.51L8.39 10.68L3.42 12.01L1.45 10.47L0 10.86L2.59 15.35L19.16 10.92C19.97 10.69 20.44 9.87 20.23 9.07Z"
                    fill="#575A65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2645_19017">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span class="departure_flight">Departure Flight</span>
            </div>

            <div v-for="(i, index) in getData?.outbound" :key="index">
              <div
                class="equal-height-table"
                :style="{
                  background: custom_theme
                    ? custom_theme.color
                    : default_theme.color,
                }"
              >
                <div class="equal-height-table_item">
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_from) }} ({{
                      i.airport_from
                    }})
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="18"
                    viewBox="0 0 52 18"
                    fill="none"
                  >
                    <path
                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                      fill="white"
                    />
                  </svg>
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_to) }} ({{ i.airport_to }})
                  </p>
                </div>
                <div>
                  <p class="flight_info_text">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                </div>
              </div>

              <div class="flight_info2">
                <div>
                  <p class="key">{{ i.flight_number }}</p>
                  <p class="value">Flight No.</p>
                </div>
                <div>
                  <p class="key">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                  <p class="value">Departure</p>
                </div>
                <div>
                  <p class="key">{{ convertDurationToWords(i.duration) }}</p>
                  <p class="value">Duration</p>
                </div>
                <div>
                  <p class="key">
                    {{
                      i.arrival_time
                        ? convertToWord(i.arrival_time)
                        : "02 : 30 PM"
                    }}
                  </p>
                  <p class="value">Arrival</p>
                </div>
                <div>
                  <p class="key">{{ getData?.outbound_stops }}</p>
                  <p class="value">Stops</p>
                </div>
              </div>

              <div class="flight_info">
                <div class="flight_info_item">
                  <p class="airport">
                    {{ getAirportNamesByCityCode(i.airport_from) }} ({{
                      i.airport_from
                    }})
                  </p>
                  <p class="time">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="18"
                  viewBox="0 0 52 18"
                  fill="none"
                >
                  <path
                    d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                    :fill="
                      custom_theme ? custom_theme.color : default_theme.color
                    "
                  />
                </svg>
                <div class="flight_info_item">
                  <p class="airport">
                    {{ getAirportNamesByCityCode(i.airport_to) }} ({{
                      i.airport_to
                    }})
                  </p>
                  <p class="time">
                    {{ convertToWord(i.arrival_time) }}
                    {{ convertTo12HourFormat(i.arrival_time) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            v-for="(j, index) in getData?.routes"
            class="flight_info_wrapper"
            :key="index"
          >
            <div v-for="(i, index) in j.segments" :key="index">
              <div
                class="equal-height-table"
                :style="{
                  background: custom_theme
                    ? custom_theme.color
                    : default_theme.color,
                }"
              >
                <div class="equal-height-table_item">
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_from) }} ({{
                      i.airport_from
                    }})
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="18"
                    viewBox="0 0 52 18"
                    fill="none"
                  >
                    <path
                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                      fill="white"
                    />
                  </svg>
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_to) }} ({{ i.airport_to }})
                  </p>
                </div>
                <div>
                  <p class="flight_info_text">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                </div>
              </div>

              <div class="flight_info2">
                <div>
                  <p class="key">{{ i.flight_number }}</p>
                  <p class="value">Flight No.</p>
                </div>
                <div>
                  <p class="key">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                  <p class="value">Departure</p>
                </div>
                <div>
                  <p class="key">{{ convertDurationToWords(i.duration) }}</p>
                  <p class="value">Duration</p>
                </div>
                <div>
                  <p class="key">
                    {{
                      i.arrival_time
                        ? convertToWord(i.arrival_time)
                        : "02 : 30 PM"
                    }}
                  </p>
                  <p class="value">Arrival</p>
                </div>
                <div>
                  <p class="key">{{ getData?.outbound_stops }}</p>
                  <p class="value">Stops</p>
                </div>
              </div>

              <div class="flight_info">
                <div class="flight_info_item">
                  <p class="airport">
                    {{ getAirportNamesByCityCode(i.airport_from) }} ({{
                      i.airport_from
                    }})
                  </p>
                  <p class="time">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="18"
                  viewBox="0 0 52 18"
                  fill="none"
                >
                  <path
                    d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                    :fill="
                      custom_theme ? custom_theme.color : default_theme.color
                    "
                  />
                </svg>
                <div class="flight_info_item">
                  <p class="airport">
                    {{ getAirportNamesByCityCode(i.airport_to) }} ({{
                      i.airport_to
                    }})
                  </p>
                  <p class="time">
                    {{ convertToWord(i.arrival_time) }}
                    {{ convertTo12HourFormat(i.arrival_time) }}
                  </p>
                </div>
              </div>
            </div>
            <!--              <div class="new_page"></div>-->
          </div>

          <div v-if="getData?.inbound?.length" class="flight_info_wrapper">
            <div style="display: flex; align-items: center; gap: 0.12rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2657_19155)">
                  <path
                    d="M23.342 18.43H4.34195V20.43H23.342V18.43ZM3.77195 9.07C3.98195 8.27 4.81195 7.79 5.61195 8.01L10.922 9.43L17.822 3L19.752 3.51L15.612 10.68L20.582 12.01L22.552 10.47L24.002 10.86L21.412 15.35L4.84195 10.92C4.03195 10.69 3.56195 9.87 3.77195 9.07Z"
                    fill="#575A65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2657_19155">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 1 24.002 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span class="departure_flight">Return Flight</span>
            </div>
            <div v-for="(i, index) in getData?.inbound" :key="index">
              <div
                class="equal-height-table"
                :style="{
                  background: custom_theme
                    ? custom_theme.color
                    : default_theme.color,
                }"
              >
                <div class="equal-height-table_item">
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_from) }} ({{
                      i.airport_from
                    }})
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="18"
                    viewBox="0 0 52 18"
                    fill="none"
                  >
                    <path
                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                      fill="white"
                    />
                  </svg>
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_to) }} ({{ i.airport_to }})
                  </p>
                </div>
                <div>
                  <p class="flight_info_text">Tues 15th Sept, 2023</p>
                </div>
              </div>

              <div class="flight_info2">
                <div>
                  <p class="key">{{ i.flight_number }}</p>
                  <p class="value">Flight</p>
                </div>
                <div>
                  <p class="key">
                    {{ convertToWord(i.departure_time) }}
                    {{ convertTo12HourFormat(i.departure_time) }}
                  </p>
                  <p class="value">Departure</p>
                </div>
                <div>
                  <p class="key">{{ convertDurationToWords(i.duration) }}</p>
                  <p class="value">Duration</p>
                </div>
                <div>
                  <p class="key">
                    {{
                      i.arrival_time
                        ? convertToWord(i.arrival_time)
                        : "02 : 30 PM"
                    }}
                  </p>
                  <p class="value">Arrival</p>
                </div>
                <div>
                  <p class="key">{{ getData?.outbound_stops }}</p>
                  <p class="value">Stops</p>
                </div>
              </div>

              <div>
                <div class="flight_info">
                  <div class="flight_info_item">
                    <p class="airport">
                      {{ convertToWord(i.departure_time) }}
                      {{ convertTo12HourFormat(i.departure_time) }}
                    </p>
                    <p class="time">01 : 00 PM</p>
                    <p class="time">Thurs 20th Sept, 2023</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="18"
                    viewBox="0 0 52 18"
                    fill="none"
                  >
                    <path
                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                      :fill="
                        custom_theme ? custom_theme.color : default_theme.color
                      "
                    />
                  </svg>
                  <div class="flight_info_item">
                    <p class="airport">
                      Muritala Mohammed International Airport Lagos (LOS)
                    </p>
                    <p class="time">01 : 00 PM</p>
                    <p class="time">Thurs 20th Sept, 2023</p>
                  </div>
                </div>

                <div
                  class="layover"
                  :style="{
                    borderColor: custom_theme
                      ? custom_theme.color
                      : default_theme.color_light,
                  }"
                >
                  <div
                    class="line"
                    :style="{
                      background: custom_theme
                        ? custom_theme.color
                        : default_theme.color_light,
                    }"
                  ></div>
                  <div style="display: flex; flex-direction: column">
                    <span class="layover_text">Lay Over</span>
                    <span class="layover_text">7h 30m</span>
                  </div>
                  <div
                    class="line"
                    :style="{
                      background: custom_theme
                        ? custom_theme.color
                        : default_theme.color_light,
                    }"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flight_info">
                  <div class="flight_info_item">
                    <p class="airport">
                      Muritala Mohammed International Airport Lagos (LOS)
                    </p>
                    <p class="time">01 : 00 PM</p>
                    <p class="time">Thurs 20th Sept, 2023</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="18"
                    viewBox="0 0 52 18"
                    fill="none"
                  >
                    <path
                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"
                      :fill="
                        custom_theme ? custom_theme.color : default_theme.color
                      "
                    />
                  </svg>
                  <div class="flight_info_item">
                    <p class="airport">
                      Muritala Mohammed International Airport Lagos (LOS)
                    </p>
                    <p class="time">01 : 00 PM</p>
                    <p class="time">Thurs 20th Sept, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--            <div class="new_page"></div>-->

          <div class="flight_info_wrapper">
            <div
              class="equal-height-table"
              :style="{
                background: custom_theme
                  ? custom_theme.color
                  : default_theme.color,
                justifyContent: 'start',
                gap: '3.48rem',
              }"
            >
              <p class="flight_info_text" style="width: 11.25rem">
                Passenger Name
              </p>
              <p class="flight_info_text" style="width: 11.25rem">Email</p>
              <p class="flight_info_text" style="width: 11.25rem">Ticket</p>
            </div>

            <div
              v-for="i in getData?.passengers"
              class="flight_info2"
              style="justify-content: start; padding: 0.5rem; border-top: solid"
            >
              <p class="value" style="width: 11.25rem">
                {{ i.title + " " + i.first_name + " " + i.last_name }}
              </p>
              <p class="value" style="width: 11.25rem">{{ i.email }}</p>
              <!-- <p class="value" style="width: 11.25rem;">Ticket </p> -->
            </div>
          </div>

          <div class="last-row">
            <div
              class="equal-height-table"
              :style="{
                background: custom_theme
                  ? custom_theme.color
                  : default_theme.color,
              }"
            >
              <div class="equal-height-table_item">
                <p class="flight_info_text">Ticket Receipt Total</p>
              </div>
            </div>

            <p class="total">
              <span class="sub-total">Total :</span>₦
              {{ formatAmount(getData?.amount) }}
            </p>
            <!-- <h4><span class="sub-total">Sub-Total :</span> {{ formatAmount(getBookedFlight.amount) }} </h4>
              <h4><span>Total :</span>  {{ formatAmount(getBookedFlight.amount) }} </h4> -->
          </div>

<!--          <template v-if="getData?.booking.flight?.inbound.length">-->
<!--            <div-->
<!--              v-for="(i, index) in getData?.booking.flight?.inbound"-->
<!--              :key="index + 9923"-->
<!--              class="flight_info_wrapper"-->
<!--            >-->
<!--              <div style="display: flex; align-items: center; gap: 0.12rem">-->
<!--                <svg-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  width="24"-->
<!--                  height="24"-->
<!--                  viewBox="0 0 24 24"-->
<!--                  fill="none"-->
<!--                >-->
<!--                  <g clip-path="url(#clip0_2657_19155)">-->
<!--                    <path-->
<!--                      d="M23.342 18.43H4.34195V20.43H23.342V18.43ZM3.77195 9.07C3.98195 8.27 4.81195 7.79 5.61195 8.01L10.922 9.43L17.822 3L19.752 3.51L15.612 10.68L20.582 12.01L22.552 10.47L24.002 10.86L21.412 15.35L4.84195 10.92C4.03195 10.69 3.56195 9.87 3.77195 9.07Z"-->
<!--                      fill="#575A65"-->
<!--                    />-->
<!--                  </g>-->
<!--                  <defs>-->
<!--                    <clipPath id="clip0_2657_19155">-->
<!--                      <rect-->
<!--                        width="24"-->
<!--                        height="24"-->
<!--                        fill="white"-->
<!--                        transform="matrix(-1 0 0 1 24.002 0)"-->
<!--                      />-->
<!--                    </clipPath>-->
<!--                  </defs>-->
<!--                </svg>-->
<!--                <span class="departure_flight">Return Flight</span>-->
<!--              </div>-->
<!--              <div-->
<!--                class="equal-height-table"-->
<!--                :style="{-->
<!--                  background: custom_theme-->
<!--                    ? custom_theme.color-->
<!--                    : default_theme.color,-->
<!--                }"-->
<!--              >-->
<!--                <div class="equal-height-table_item">-->
<!--                  <p class="flight_info_text">-->
<!--                    {{ getCityByCityCode(i.airport_from) }} ({{-->
<!--                      i.airport_from-->
<!--                    }})-->
<!--                  </p>-->
<!--                  <svg-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                    width="52"-->
<!--                    height="18"-->
<!--                    viewBox="0 0 52 18"-->
<!--                    fill="none"-->
<!--                  >-->
<!--                    <path-->
<!--                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"-->
<!--                      fill="white"-->
<!--                    />-->
<!--                  </svg>-->
<!--                  <p class="flight_info_text">-->
<!--                    {{ getCityByCityCode(i.airport_to) }} ({{ i.airport_to }})-->
<!--                  </p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <p class="flight_info_text">Tues 15th Sept, 2023</p>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="flight_info2">-->
<!--                <div>-->
<!--                  <p class="key">{{ i.flight_number }}</p>-->
<!--                  <p class="value">Flight</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <p class="key">-->
<!--                    {{ convertToWord(i.departure_time) }}-->
<!--                    {{ convertTo12HourFormat(i.departure_time) }}-->
<!--                  </p>-->
<!--                  <p class="value">Departure</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <p class="key">{{ convertDurationToWords(i.duration) }}</p>-->
<!--                  <p class="value">Duration</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <p class="key">-->
<!--                    {{-->
<!--                      i.arrival_time-->
<!--                        ? convertToWord(i.arrival_time)-->
<!--                        : "02 : 30 PM"-->
<!--                    }}-->
<!--                  </p>-->
<!--                  <p class="value">Arrival</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <p class="key">-->
<!--                    {{ getData?.booking.flight.outbound_stops }}-->
<!--                  </p>-->
<!--                  <p class="value">Stops</p>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div>-->
<!--                <div class="flight_info">-->
<!--                  <div class="flight_info_item">-->
<!--                    <p class="airport">-->
<!--                      {{ convertToWord(i.departure_time) }}-->
<!--                      {{ convertTo12HourFormat(i.departure_time) }}-->
<!--                    </p>-->
<!--                    <p class="time">01 : 00 PM</p>-->
<!--                    <p class="time">Thurs 20th Sept, 2023</p>-->
<!--                  </div>-->
<!--                  <svg-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                    width="52"-->
<!--                    height="18"-->
<!--                    viewBox="0 0 52 18"-->
<!--                    fill="none"-->
<!--                  >-->
<!--                    <path-->
<!--                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"-->
<!--                      :fill="-->
<!--                        custom_theme ? custom_theme.color : default_theme.color-->
<!--                      "-->
<!--                    />-->
<!--                  </svg>-->
<!--                  <div class="flight_info_item">-->
<!--                    <p class="airport">-->
<!--                      Muritala Mohammed International Airport Lagos (LOS)-->
<!--                    </p>-->
<!--                    <p class="time">01 : 00 PM</p>-->
<!--                    <p class="time">Thurs 20th Sept, 2023</p>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div-->
<!--                  class="layover"-->
<!--                  :style="{-->
<!--                    borderColor: custom_theme-->
<!--                      ? custom_theme.color-->
<!--                      : default_theme.color_light,-->
<!--                  }"-->
<!--                >-->
<!--                  <div-->
<!--                    class="line"-->
<!--                    :style="{-->
<!--                      background: custom_theme-->
<!--                        ? custom_theme.color-->
<!--                        : default_theme.color_light,-->
<!--                    }"-->
<!--                  ></div>-->
<!--                  <div style="display: flex; flex-direction: column">-->
<!--                    <span class="layover_text">Lay Over</span>-->
<!--                    <span class="layover_text">7h 30m</span>-->
<!--                  </div>-->
<!--                  <div-->
<!--                    class="line"-->
<!--                    :style="{-->
<!--                      background: custom_theme-->
<!--                        ? custom_theme.color-->
<!--                        : default_theme.color_light,-->
<!--                    }"-->
<!--                  ></div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="flight_info">-->
<!--                  <div class="flight_info_item">-->
<!--                    <p class="airport">-->
<!--                      Muritala Mohammed International Airport Lagos (LOS)-->
<!--                    </p>-->
<!--                    <p class="time">01 : 00 PM</p>-->
<!--                    <p class="time">Thurs 20th Sept, 2023</p>-->
<!--                  </div>-->
<!--                  <svg-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                    width="52"-->
<!--                    height="18"-->
<!--                    viewBox="0 0 52 18"-->
<!--                    fill="none"-->
<!--                  >-->
<!--                    <path-->
<!--                      d="M52 9L37 0.339746V17.6603L52 9ZM0 10.5H38.5V7.5H0V10.5Z"-->
<!--                      :fill="-->
<!--                        custom_theme ? custom_theme.color : default_theme.color-->
<!--                      "-->
<!--                    />-->
<!--                  </svg>-->
<!--                  <div class="flight_info_item">-->
<!--                    <p class="airport">-->
<!--                      Muritala Mohammed International Airport Lagos (LOS)-->
<!--                    </p>-->
<!--                    <p class="time">01 : 00 PM</p>-->
<!--                    <p class="time">Thurs 20th Sept, 2023</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </template>-->
        </div>
      </div>
    </div>
  </div>
  <div class="close" id="close">
    <img
      src="../../assets/cancle.svg"
      alt="close"
      @click="goBack(this.getData.reference)"
    />
  </div>
</template>

<script>
import router from "../../router";
import { convertToWord } from "../../mixins/lettersExtractor";
import {
  formatAmount,
  convertTo12HourFormat,
  convertDurationToWords,
} from "../../mixins/flightUtil";
import storeUtils from "@/utils/storeUtils";
import { lightenColor } from "@/mixins/themeUtils";
export default {
  name: "Template1",
  data() {
    return {
      formatAmount,
      convertToWord,
      convertTo12HourFormat,
      convertDurationToWords,
      isPage: false,
    };
  },
  methods: {
    goBack() {
      router.back();
    },
    lightenColor,

    async printPage() {
      // const mobileNave = document.getElementById('bottom_nav')
      // const closeBtn = document.getElementById('close')
      // const detailsWrapper = document.getElementById('details_wrapper')
      // const header = document.getElementById('header')
      // const modalWrapper = document.getElementById('modal_wrapper')
      // await mobileNave.classList.add('exclude-from-print')
      // await closeBtn.classList.add('exclude-from-print')
      // await header.classList.add('exclude-from-print')
      // await detailsWrapper?.classList.add('exclude-from-print')
      // await modalWrapper.classList.add('set-background-white')
      await window.print();
      // await closeBtn.classList.remove('exclude-from-print')
      // await header.classList.remove('exclude-from-print')
      // await detailsWrapper?.classList.remove('exclude-from-print')
      // await modalWrapper.classList.remove('set-background-white')
    },

    saveAsPDF() {
      const element = document.getElementById("pdf-to-download"); // You can select any HTML element to save as PDF. For example, 'document.getElementById('myElement')' to save a specific element.
      document.getElementById("ondownload").style.display = "block";
      setTimeout(() => {
        const opt = {
          margin: 7,
          filename: `${"TravelWahoo_Receipt"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        // Create the PDF using html2pdf.js
        window.html2pdf().from(element).set(opt).save();
      }, 0);

      setTimeout(() => {
        document.getElementById("ondownload").style.display = "none";
      }, 100);
    },

    getAirportNamesByCityCode(city_code) {
      const airports = JSON.parse(localStorage?.airports);
      if (airports) {
        return airports.filter(
          (it) => it.city_code === city_code || it.iata_code === city_code
        )[0]?.name;
      }
    },
    getCityByCityCode(city_code) {
      const airports = JSON.parse(localStorage?.airports);
      if (airports) {
        return airports.filter(
          (it) => it.city_code === city_code || it.iata_code === city_code
        )[0]?.city;
      }
    },
  },
  computed: {
    getBookedFlight() {
      const bookedFlight = JSON.parse(localStorage.bookedFlight);
      return bookedFlight;
    },
    default_theme() {
      return storeUtils.fireAway().theme.getDefault_theme;
    },

    getUser() {
      if (localStorage.user) {
        return JSON.parse(localStorage.user);
      }
    },

    getData() {
      return storeUtils.fireAway().print?.getData;
    },

    custom_theme() {
      return storeUtils.fireAway().theme.custom_theme;
    },
  },

  mounted() {
    if (!this.getData) this.goBack();
  },
};
</script>

<style scoped>
@media print {
  .new_page {
    page-break-before: always !important;
  }

  .close {
    display: none;
  }

  .equal-height-table {
    border: solid 0.5px;
  }

  .flight_info_text {
    color: #0f0f0f !important;
  }
}

.logo {
  width: 5rem;
  height: 5rem;
}

.third-invoice-row-and-table {
  margin: 1rem 0;
}
.close {
  margin: 20px auto;
  border-radius: 0.7rem;
  background: #fff;
  position: fixed;
  right: 10rem;
  cursor: pointer;
}
.layover {
  display: flex;
  width: 33.25rem;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  background: #2c6cac;
}

.layover_text {
  color: #000;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.departure_flight {
  color: #575a65;
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 140% */
}

.flight_info_text {
  color: #fff;
  font-family: "Product Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 116.667% */
}

.key {
  color: #1d1e2c;
  font-family: " Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
}

.value {
  color: var(--black-text-01, #1d1e2c);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.flight_info2 {
  display: flex;
  justify-content: space-evenly;
  gap: 3.48rem;
}

.flight_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.5rem;
  border-top: solid #e5e9f2;
  padding: 1.5rem;
  margin: 0.5rem 0;
  width: 100%;
}

.line {
  width: 12.5rem;
  height: 0.0625rem;
}

.flight_info_item {
  width: auto;
}

.airport {
  color: var(--black-text-01, #1d1e2c);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

#showWhenPrint {
  display: none;
}

.time {
  color: var(--black-text-01, #1d1e2c);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
}

.sub-total {
  color: #575a65;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
}

.total {
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
}
.last-row {
  text-align: right;
}

.equal-height-table {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary_color);
}

.equal-height-table_item {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.equal-height-table td {
  height: 56px;
  padding: 6px 8px;
  color: #555555;
  text-align: start;
}
.invoice {
  width: 100%;
}

.invoice-receipt {
  color: #1d1e2c;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 87.5% */
  margin-bottom: 1rem;
}

.first-invoice-row {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.invoice-wrapper {
  width: 56.25rem;
  background-color: #ffffff;
  padding: 2rem 2rem;
  overflow: scroll;
}

.back-and-logo-area {
  width: 90px;
  /*height: 120px;*/
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  /*justify-content: center;*/
  gap: 28px;
}

.back-and-logo-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-area {
  display: flex;
  align-items: center;
  gap: 24px;
}

.print-invoice {
  cursor: pointer;
  display: flex;
  width: 10.3125rem;
  height: 3rem;
  padding: 0.5rem;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
  border: none;
  gap: 0.5rem;
  border-radius: 0.25rem;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  color: #ffffff;
}
</style>
