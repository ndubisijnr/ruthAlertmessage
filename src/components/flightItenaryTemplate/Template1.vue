<template>
  <div class="animate__animated animate__zoomIn">
    <div class="invoice-wrapper">
      <div class="invoice">
        <div class="first-invoice-row">
          <div class="back-and-logo-area">
            <div>
              <img v-if="getUser.logo" :src="getUser.logo" />
              <p class="tenant_name">{{ getUser.name }}</p>
            </div>
          </div>
          <div class="button-area" id="hiddenOnPrint1">
            <button
              @click="isPage ? printPage() : printComponent()"
              id="ondownload"
              class="print-invoice"
              :style="{
                background: custom_theme
                  ? lightenColor(custom_theme.color)
                  : default_theme.color_light,
              }"
            >
              Print
            </button>
          </div>
        </div>
        <div id="pdf-to-download">
          <!-- <img src="../../src/assets/full-black-logo.svg" id="ondownload" style="display: none;margin-bottom: 20px" /> -->

          <div class="invoice-receipt">Flight Itinerary</div>

          <div style="display: flex; justify-content: space-between">
            <div>
              <div style="display: flex; gap: 10px">
                <p class="key">Full Name :</p>
                <p class="value">
                  {{
                    getData?.booking.contact_first_name
                      ? getData?.booking.contact_first_name +
                        " " +
                        getData.booking.contact_last_name
                      : "Mr Jane Doe"
                  }}
                </p>
              </div>
              <div style="display: flex; gap: 10px">
                <p class="key">Email:</p>
                <p class="value">
                  {{
                    getData?.booking.contact_email
                      ? getData?.booking.contact_email
                      : "janedoe@gmail.com "
                  }}
                </p>
              </div>
              <div style="display: flex; gap: 10px">
                <p class="key">Class:</p>
                <p class="value">
                  {{
                    getData?.booking.flight?.outbound[0].cabin_type
                      ? getData?.flight?.outbound[0].cabin_type
                      : "Economy"
                  }}
                </p>
              </div>
              <div style="display: flex; gap: 10px">
                <p class="key">Booking ID :</p>
                <p class="value">{{ getData?.booking_id }}</p>
              </div>
              <div style="display: flex; gap: 10px">
                <p class="key">PNR:</p>
                <p class="value">{{ getData?.booking.flight?.pnr }}</p>
              </div>
            </div>
          </div>

          <div class="third-invoice-row-and-table">
            <!--     outbound-->

            <div
              v-for="(i, index) in getData?.booking.flight?.outbound"
              :key="index + 9923"
              class="flight_info_wrapper"
            >
              <div style="display: flex; align-items: center; gap: 0.12rem">
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
              <div
                class="equal-height-table"
                :style="{
                  background: custom_theme ? custom_theme.color : default_theme.color,
                }"
              >
                <div class="equal-height-table_item">
                  <p class="flight_info_text">
                    {{ getCityByCityCode(i.airport_from) }} ({{ i.airport_from }})
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
                    {{ i.arrival_time ? convertToWord(i.arrival_time) : "02 : 30 PM" }}
                  </p>
                  <p class="value">Arrival</p>
                </div>
                <div>
                  <p class="key">{{ getData?.booking.flight.outbound_stops }}</p>
                  <p class="value">Stops</p>
                </div>
              </div>

              <div class="flight_info">
                <div class="flight_info_item">
                  <p class="airport">
                    {{ getAirportNamesByCityCode(i.airport_from) }} ({{ i.airport_from }})
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
                    :fill="custom_theme ? custom_theme.color : default_theme.color"
                  />
                </svg>
                <div class="flight_info_item">
                  <p class="airport">
                    {{ getAirportNamesByCityCode(i.airport_to) }} ({{ i.airport_to }})
                  </p>
                  <p class="time">
                    {{ convertToWord(i.arrival_time) }}
                    {{ convertTo12HourFormat(i.arrival_time) }}
                  </p>
                </div>
              </div>
            </div>

            <template v-if="getData?.booking.flight?.inbound.length">
              <div
                v-for="(i, index) in getData?.booking.flight?.inbound"
                :key="index + 9923"
                class="flight_info_wrapper"
              >
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
                <div
                  class="equal-height-table"
                  :style="{
                    background: custom_theme ? custom_theme.color : default_theme.color,
                  }"
                >
                  <div class="equal-height-table_item">
                    <p class="flight_info_text">
                      {{ getCityByCityCode(i.airport_from) }} ({{ i.airport_from }})
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
                      {{ i.arrival_time ? convertToWord(i.arrival_time) : "02 : 30 PM" }}
                    </p>
                    <p class="value">Arrival</p>
                  </div>
                  <div>
                    <p class="key">{{ getData?.booking.flight.outbound_stops }}</p>
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
                        :fill="custom_theme ? custom_theme.color : default_theme.color"
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
                        :fill="custom_theme ? custom_theme.color : default_theme.color"
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
            </template>
          </div>

          <div class="flight_info_wrapper">
            <div
              class="equal-height-table"
              :style="{
                justifyContent: 'start',
                gap: '3.48rem',
              }"
            >
              <p class="flight_info_text" style="width: 11.25rem">Passenger Name</p>
              <p class="flight_info_text" style="width: 11.25rem">Email</p>
              <p class="flight_info_text" style="width: 11.25rem">Ticket</p>
            </div>

            <div
              v-for="i in getData?.booking.flight?.passengers"
              class="flight_info2"
              style="justify-content: start"
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
                background: custom_theme ? custom_theme.color : default_theme.color,
              }"
            >
              <div class="equal-height-table_item">
                <p class="flight_info_text">Ticket Receipt</p>
              </div>
            </div>

            <p>
              <span class="sub-total">Total :</span>₦
              {{ formatAmount(getData?.booking.amount) }}
            </p>
            <!-- <h4><span class="sub-total">Sub-Total :</span> {{ formatAmount(getBookedFlight.amount) }} </h4>
            <h4><span>Total :</span>  {{ formatAmount(getBookedFlight.amount) }} </h4> -->
          </div>
        </div>
      </div>
    </div>
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
    lightenColor,
    toEtickets() {
      router.push({
        path: "/e-tickets",
        query: { flight_reference: this.getBookedFlight.reference },
      });
    },
    backToHome() {
      router.push({ path: "/dashboard" });
    },
    async printPage() {
      const mobileNave = document.getElementById("bottom_nav");
      const closeBtn = document.getElementById("close");
      const detailsWrapper = document.getElementById("details_wrapper");
      const header = document.getElementById("header");
      const modalWrapper = document.getElementById("modal_wrapper");
      await mobileNave.classList.add("exclude-from-print");
      await closeBtn.classList.add("exclude-from-print");
      await header.classList.add("exclude-from-print");
      await detailsWrapper?.classList.add("exclude-from-print");
      await modalWrapper.classList.add("set-background-white");
      await window.print();
      await closeBtn.classList.remove("exclude-from-print");
      await header.classList.remove("exclude-from-print");
      await detailsWrapper?.classList.remove("exclude-from-print");
      await modalWrapper.classList.remove("set-background-white");
    },

    printComponent() {
      print();
      return;
      const elementToCapture = this.$refs.printComponent;
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(elementToCapture).set(opt).save();
      return;
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
    if (this.$router.currentRoute.value.path.includes("/templates")) this.isPage = true;
    if (this.$router.currentRoute.value.path === "/templates_1") this.printPage();
    if (this.$router.currentRoute.value.path === "/templates_3") this.printPage();
    if (this.$router.currentRoute.value.path === "/templates_2") this.printPage();
  },
};
</script>

<style scoped>

  body * {
    visibility: hidden;
  }
  .print-component,
  .print-component * {
    visibility: visible;
  }

  .print-component .invoice-wrapper {
    padding-top: 0;
    margin: 0;
  }

  /* Hide the element with the ID "hiddenOnPrint" when printing */
  #hiddenOnPrint1 {
    display: none;
  }
  #hiddenOnPrint2 {
    display: none !important;
  }
  #hiddenOnPrint3 {
    display: none;
  }

  #showWhenPrint {
    display: block !important;
  }
}
</style>

<style scoped>
.layover {
  display: flex;
  width: 33.25rem;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid;
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
@media print {
}

.flight_info_wrapper {
  margin-bottom: 4.25rem;
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
  padding: 0 1rem;
}

.flight_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.5rem;
  border-top: solid #e5e9f2;
  padding: 1.5rem;
  margin-top: 2.5rem;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
}
.last-row {
  text-align: right;
}
.billing h4,
h,
p {
  padding-bottom: 7px;
  padding-top: 7px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.equal-height-table {
  width: 100%;
  border: 1px solid #dfe6ed;
  margin-bottom: 1rem;
  padding: 1rem;
  color: #fff;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.invoice-wrapper {
  width: 56.25rem;
  background-color: #ffffff;
  padding: 2rem 2rem;
  display: flex;
  justify-content: center;
  margin: 2rem;
}

@media (max-width: 1024px) {
  .invoice-wrapper {
    padding: 0;
  }

  .invoice {
    padding: 20px;
  }

  .first-invoice-row {
    display: flex;
    align-items: start;
    justify-content: start;
    margin-bottom: 22px;
    flex-direction: column;
    gap: 20px;
  }
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
}

.download-invoice {
  cursor: pointer;
  display: flex;
  width: 12.6875rem;
  height: 3rem;
  padding: 0.5rem;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  border: none;

  /* Placeholder Text */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
</style>
