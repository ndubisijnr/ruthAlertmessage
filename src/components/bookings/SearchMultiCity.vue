<template>
  <div class="multi-city">
    <div
      class="new_flight"
      v-for="(b, index) in flightModel.destinations
        ? flightModel.destinations
        : null"
      :key="(index + 1) * 99"
    >
      <div class="new_flight_header">
        <p
          class="flight-index"
          :style="{
            backgroundColor: custom_theme
              ? lightenColor(custom_theme.color)
              : default_theme.color,
            color: '#fff',
          }"
        >
          Flight {{ index + 1 }}
        </p>
        <img
          v-if="index > 1 || flightModel.destinations.length > 2"
          src="../../assets/cancle.svg"
          @click="removeFlight(index)"
          style="cursor: pointer"
        />
      </div>
      <div class="new_flight_body">
        <div class="group-inputs">
          <!-- from -->
          <div class="input-divs">
            <on-boarding-input
              :defaultValue="b.origin_name"
              @isFocusing="handleFocus"
              :name="`from_input_${index}`"
              is-fake-loading="true"
              autocomplete="off"
              width="100%"
              value="hello"
              :id="`multi_city_from_input_${index}`"
              :newVal="b.origin_name"
              label="From"
              class=""
              @inputValue="
                (value) => {
                  (this.multiCityFromQuery = value), multiCitySearchFrom(index);
                }
              "
            />
            <div
              class="airportsDropDown"
              v-show="multiCityActiveInput === `from_${index}`"
            >
              <p
                @click="
                  (b.origin = `${i.iata_code}`),
                    (b.origin_name = `${i.city} - ${i.name}`),
                    selectDestination(
                      `multi_city_from_input_${index}`,
                      `${i.city} - ${i.name}`,
                      `${i.iata_code}`,
                      index
                    )
                "
                class="per_airport"
                v-for="(i, b_index) in filteredAirportFrom"
                :key="b_index"
              >
                {{ i.city }}
                -
                {{ i.country }}
                -
                {{ i.name }}
              </p>
            </div>
          </div>
          <!-- to -->
          <div class="input-divs">
            <on-boarding-input
              :defaultValue="b.destination_name"
              @isFocusing="handleFocus"
              input-type="input2"
              autocomplete="off"
              is-fake-loading="true"
              width="100%"
              :id="`multi_city_to_input_${index}`"
              :newVal="b.destination_name"
              label="To"
              class=""
              @inputValue="
                (value) => {
                  (this.multiCityToQuery = value), multiCitySearchTo(index);
                }
              "
            />
            <div
              class="airportsDropDown"
              v-show="multiCityActiveInput === `to_${index}`"
            >
              <p
                @click="
                  (b.destination = `${i.iata_code}`),
                    (b.destination_name = `${i.city} - ${i.name}`),
                    selectDestination(
                      `multi_city_to_input_${index}`,
                      `${i.city} - ${i.name}`,
                      `${i.iata_code}`,
                      index
                    )
                "
                class="per_airport"
                v-for="(i, i_index) in filteredAirportTo"
                :key="i_index"
              >
                {{ i.city }}
                -
                {{ i.country }}
                -
                {{ i.name }}
              </p>
            </div>
          </div>
          <!-- date -->
          <div class="input-divs">
            <div class="group-inputs">
              <data-picker
                :defaultValue="b.departure_date"
                @isFocusing="handleFocus"
                :min_date="b.origin"
                @dateValue="(obj) => (b.departure_date = obj.formattedDate)"
                icon-id="from_icon_multicity"
                :id="`from_multicity_${index}`"
                label="Departure Date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!flightModel.destinations || flightModel.destinations?.length < 6"
      @click="beginMultiCitySearch"
      class="add-new-flight"
      :style="{
        backgroundColor: custom_theme
          ? lightenColor(custom_theme.color)
          : default_theme.color,
      }"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16"
          cy="16"
          r="16"
          :fill="custom_theme ? custom_theme.color : default_theme.color"
        />
        <g clip-path="url(#clip0_305_1400)">
          <path
            d="M15.2379 15.2394V10.668H16.7617V15.2394H21.3332V16.7632H16.7617V21.3346H15.2379V16.7632H10.6665V15.2394H15.2379Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_305_1400">
            <rect
              width="18.2857"
              height="18.2857"
              fill="white"
              transform="translate(6.85715 6.85742)"
            />
          </clipPath>
        </defs>
      </svg>
      <p style="color: #fff">
        {{
          multiCityFlight.length > 0 ? "Add another flight" : "Add new flight"
        }}
      </p>
    </div>

    <div class="group-inputs"></div>
  </div>
</template>

<script>
import OnBoardingInput from "../../components/Inputs/OnBoardingInput.vue";
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import DataPicker from "../../components/Inputs/custom-date-picker/DataPicker.vue";
import { lightenColor } from "@/mixins/themeUtils";
import storeUtils from "../../utils/storeUtils";

export default {
  name: "SearchForFlight",
  components: {
    OnBoardingButton,
    OnBoardingInput,
    DataPicker,
  },
  props: ["flightModel"],
  data() {
    return {
      multiCity: [],
      showClass: false,
      filteredAirportFrom: [],
      filteredAirportTo: [],
      fromQuery: null,
      toQuery: null,
      multiCityFromQuery: null,
      multiCityToQuery: null,
      formatteddateFrom: null,
      dateFrom: null,
      dateTo: null,
      sum: null,
      lightenColor,
      multiCityFlight: [],
      multiCityActiveInput: null,
      thisDate: null,
      departure_date: null,
      return_date: null,
      destination: null,
      origin: null,
    };
  },
  methods: {
    handleFocus(value) {
      console.log(value);
      if (this.showPassengers || this.showClass) {
        this.showPassengers = !value;
        this.showClass = !value;
      }
    },

    beginMultiCitySearch() {
      const arr1 = [
        {
          departure_date: null,
          origin: null,
          destination: null,
          origin_name: null,
          destination_name: null,
        },
        {
          departure_date: null,
          origin: null,
          destination: null,
          origin_name: null,
          destination_name: null,
        },
      ];

      if (this.flightModel.destinations?.length) {
        if (this.flightModel.destinations.length < 6) {
          this.flightModel.destinations.push(arr1[0]);
        }
      } else {
        this.flightModel.destinations = [...arr1];
      }
    },

    removeFlight(id) {
      if (this.flightModel.destinations.length === 2) return;
      this.flightModel.destinations.splice(id, 1);
    },

    multiCitySearchFrom(index) {
      this.multiCityActiveInput = `from_${index}`;
      if (this.multiCityFromQuery?.length < 1) {
        this.filteredAirportFrom.length = 0;
      } else {
        this.filteredAirportFrom = this.getAirports.filter((it) => {
          // let searchQuery = Object.values(it).map(i => i).toLocaleString()
          return (
            it.iata_code === this.multiCityFromQuery?.toUpperCase() ||
            it.city.toLowerCase() === this.multiCityFromQuery?.toLowerCase() ||
            it.country.toLowerCase() ===
              this.multiCityFromQuery?.toLowerCase() ||
            it.iata_code.toLowerCase() ===
              this.multiCityFromQuery?.toLowerCase()
          );
        });
      }
    },

    multiCitySearchTo(index) {
      this.multiCityActiveInput = `to_${index}`;
      if (this.multiCityToQuery.length < 1) {
        this.filteredAirportTo.length = 0;
      } else {
        this.filteredAirportTo = this.getAirports.filter((it) => {
          // let searchQuery = Object.values(it).map(i => i).toLocaleString()
          return (
            it.iata_code === this.multiCityToQuery.toUpperCase() ||
            it.city.toLowerCase() === this.multiCityToQuery.toLowerCase() ||
            it.country.toLowerCase() === this.multiCityToQuery.toLowerCase() ||
            it.iata_code.toLowerCase() === this.multiCityToQuery.toLowerCase()
          );
        });
      }
    },

    updateMultiCityDateValue(obj) {
      this.thisDate = obj.formattedDate;
      // this.formatteddateFrom = obj.formattedDate
      // this.flightModel.return_date = obj.formattedDate
    },

    selectDestination(id, destination, code, index) {
      if (id === `multi_city_to_input_${index}`) {
        // const inputElement = document.getElementById(id);
        // inputElement.value = destination;
        this.filteredAirportTo.length = 0;
      }

      if (id === "from_input") {
        const inputElement = document.getElementById(id);
        inputElement.value = destination;

        this.origin = code;
        this.filteredAirportFrom.length = 0;
      }

      if (id === `multi_city_from_input_${index}`) {
        // const inputElement = document.getElementById(id);
        // inputElement.value = destination;
        this.filteredAirportFrom.length = 0;
      }

      if (id === "to_input") {
        const inputElement = document.getElementById(id);
        inputElement.value = destination;

        this.destination = code;
        this.filteredAirportTo.length = 0;
      }
    },

    filterAirportFrom() {
      if (this.fromQuery.length < 1) {
        this.filteredAirportFrom.length = 0;
      } else {
        this.filteredAirportFrom = this.getAirports.filter((it) => {
          // let searchQuery = Object.values(it).map(i => i).toLocaleString()
          return (
            it.iata_code === this.fromQuery.toUpperCase() ||
            it.city.toLowerCase() === this.fromQuery.toLowerCase() ||
            it.country.toLowerCase() === this.fromQuery.toLowerCase() ||
            it.iata_code.toLowerCase() === this.fromQuery.toLowerCase()
          );
        });
      }
    },

    filterAirportTo() {
      if (this.toQuery.length < 1) {
        this.filteredAirportTo.length = 0;
      } else {
        this.filteredAirportTo = this.getAirports.filter((it) => {
          return (
            it.country.toLowerCase() === this.toQuery.toLowerCase() ||
            it.city.toLowerCase() === this.toQuery.toLowerCase() ||
            it.iata_code === this.toQuery.toUpperCase() ||
            it.iata_code.toLowerCase() === this.toQuery.toLowerCase()
          );
        });
      }
    },
  },

  computed: {
    getAirports() {
      const airports = JSON.parse(localStorage?.airports);
      if (airports) {
        return airports;
      }
    },

    default_theme() {
      return storeUtils.fireAway().theme.getDefault_theme;
    },

    custom_theme() {
      return storeUtils.fireAway().theme.custom_theme;
    },
  },
};
</script>

<style scoped>
.txt-m {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.booking-div-head {
  display: flex;
  height: 7.25rem;
  align-items: end;
}

.service_nav {
  display: flex;
  margin-left: 5.31rem;
}

.booking-div-body {
  margin: 0 5.31rem;
}

.coming_soon {
  margin: 1rem 0;
}
.minus-button {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #201f1e;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.add-button {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #201f1e;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.selected-item {
  padding: 1rem 0 0.25rem 0;
  /* border: solid; */
  color: var(--black-text-01, #1d1e2c);
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  text-transform: capitalize;
}

.per_airport {
  padding: 0.5rem;
  border-bottom: solid var(--app-defautl-primary-light);
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
}

.nav-a1 {
  display: flex;
  width: 8rem;
  padding: 0.25rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  cursor: pointer;

  /* Medium/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}

.activeSection {
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  background: var(--app-default-primary);
  color: white;
}

.airportsDropDown {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0.5rem 0 0.5rem;
  gap: 1.25rem;
  border-radius: 0.5rem;
  top: 80%;
  background: #fff;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  position: absolute;
  z-index: 999999999;
}

.input-divs {
  position: relative;
  width: 100%;
}
.airportsDropDown {
  position: absolute;
}
.class_label {
  position: absolute;
  top: 5px;
  color: #575a65;

  /* sanslight/12px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 166.667% */
}

.passenger-type {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.37rem;
}

.passenger-type-text-1 {
  color: #222;

  /* medium/input/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.passenger-type-text-1:hover {
  transform: scale(1);
  font-size: 1.1rem;
}

.text-2 {
  color: #222;

  /* Subtext/14px/Regular */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.passenger-type:nth-child(2) {
  border-bottom: solid #c0ccda;
  border-top: solid #c0ccda;
}

.dropDown {
  width: 17.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1.25rem;
  border-radius: 0.5rem;
  top: 80%;
  background: #fff;
  box-shadow: 0px 6px 28px 0px rgba(21, 41, 82, 0.08);
  position: absolute;
  z-index: 999999999;
}

.show {
  display: flex;
}

.info-area {
  display: inline-flex;
  gap: 0.5rem;
}

.info-area-p {
  color: #575a65;
  width: 100%;

  /* Subtext/14px/Regular */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
}

.add-new-flight {
  display: flex;
  width: 13rem;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  cursor: pointer;
}
.flight-index {
  display: flex;
  width: 7.9375rem;
  padding: 0.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.25rem;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
}
.new_flight_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}
.new_flight {
  display: inline-block;
  padding: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d3dce6;
  width: 100%;
  margin-bottom: 1.5rem;
}

.form-area-checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.form-area-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progress {
  width: 100%;
  background-color: var(--app-default-primary);
  height: 0.25rem;
  transition: 1s ease-in;
}
.u-hide {
  border-radius: 0.5rem;
  border: 1px solid #f9fafc;
  background: #f9fafc;
}
.book-flight-details-btn {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding: 4rem;
}
.extra-baggage-p {
  color: #1d1e2c;

  /* Subtext/14px/Regular */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.price {
  color: #1d1e2c !important;

  /* Headings/black/24px */
  font-family: "Product Sans";
  font-size: 1.5rem !important;
  font-style: normal;
  font-weight: 900 !important;
  line-height: 3.875rem !important;
}

.breaker-3 {
  width: 0.0625rem;
  height: 2.25rem;
  background: #e0e6ed;
}

.additional-details-info-item {
  display: flex;
  width: auto;
  height: 2rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;
}

.text-1 {
  color: #575a65;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  /*line-height: 1.5rem; !* 150% *!*/
}

.text-2 {
  color: #1d1e2c;

  /* medium/input/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  /*line-height: 1.75rem;*/
}

.additional-details-info {
  display: flex;
  justify-content: start;
  border-top: solid #e0e6ed;
  border-bottom: solid #e0e6ed;
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
}

.depart_date-info {
  display: flex;
  align-items: center;
  gap: 3.25rem;
}

.depart-date-info-stops {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}

.depart-date {
  color: #1d1e2c;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.actual-result-wrapper {
  margin-bottom: 2.06rem;
  border-radius: 0.25rem;
  /*border: 1px solid  #E5E9F2;*/
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
  border: 1px solid #e0e6ed;
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
}

.view-details {
  color: #89128a;
  width: 4.8125rem;
  height: 1.5rem;

  /* subtext/medium/14px */
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
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
  border: 1px solid #eff2f7;
  margin-bottom: 1rem;
}

.doc_type_options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.37rem;
  padding: 0.5rem;
  width: 100%;
  background: #fff;
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
  font-family: "Product Sans";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
}

.activeDestType {
  border-bottom: 2px solid;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  font-family: "Product Sans";
}

.more-flight-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.duration {
  color: #1d1e2c;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.dest {
  color: #444854;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
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
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}

.time {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
}

.amount {
  color: #1d1e2c;
  text-align: center;
  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  margin-bottom: 1.25rem;
}

.amount-book-area {
  border-radius: 0.25rem;
  background: #f9fafc;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 15.888rem;
  display: flex;
  align-items: center;
}

.breaker-2 {
  width: 85%;
  height: 0.1rem;
  background: #e5e9f2;
}

.actual-result-item {
  width: 100%;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  background: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.logo {
  width: 2rem;
  height: 2rem;
}

.actual-result-item-info {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.actual-result {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.25rem;
  border: 1px solid #e5e9f2;
  box-sizing: content-box;
}

.one-round-way-multi-city {
  margin-top: 2rem;
}

.multi-city {
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
  color: #1d1e2c;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.filter-items {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.result-details {
  color: #2d3139;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  margin-bottom: 1rem;
}

.seperator_1 {
  width: 0.0625rem;
  height: 2.5rem;
  border: 1px solid #eff2f7;
}

.and-filter-by {
  color: #6a8297;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 100% */
}

.result-details-info {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.filter-by {
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  gap: 1.1875rem;
  border-radius: 1rem;
  border: 1px solid #eff2f7;
  background: #fff;
}

.breaker1 {
  width: 67.125rem;
  height: 0.0625rem;
  background: #dfe6ed;
  margin-top: 0.56rem;
}

.dest-abv {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.dest-abv-it {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 133.333% */
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
  background: #eff2f7;
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}

.flight-result {
  margin: 0 1.5rem;
}

.destination_type {
  margin: 0 2rem;
  padding: 0.38rem;
  color: #1d1e2c;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.booking-div-inner-wrapper {
  width: 68.125rem;
  height: auto;
  padding-bottom: 3.94rem;
}

.booking-nav-item {
  padding: 0.5rem;
  cursor: pointer;
  color: #201f1e;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.booking-div {
  margin: 0 0;
  width: 100%;
  background-color: #fff;
  border: 0.3px solid;
  border-radius: 1rem;
}

.booking-nav {
  display: flex;
  border-bottom: 1px solid #e5e9f2;
  gap: 5rem;
  margin-top: 2rem;
}

.progress-or {
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

.stage {
  color: #9da8b6;
  text-align: left;
  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  margin-left: -2rem;
}

.activeProgress {
  background: #89128a !important;
}
.activeStage {
  color: #89128a !important;
}

.progress-or-item {
}

.circle {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background: #e5e9f2;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
}

.line {
  width: 9.8125rem;
  height: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #e5e9f2;
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
  color: #575a65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.create-booking-process {
  width: 68.125rem;
  height: auto;
  flex-shrink: 0;
  position: relative;
}

.current-tab {
  color: #1d1e2c;
  text-align: center;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
}

.one-way {
  width: 100%;
}

.filter-div {
  background: #ffffff;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.filter-span {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
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
  border: 0.6px solid #e5e9f2;
  background: #fff;
}

.create-booking {
  display: flex;
  padding: 0.8125rem 0.6875rem 0.8125rem 1.5rem;
  align-items: center;
  border-radius: 0.25rem;
  background: #f8f1f8;
  width: 15.9375rem;
  height: 5rem;
  gap: 0.75rem;
  cursor: pointer;
}

.create-booking-p {
  color: #1d1e2c;

  /* medium/input/16px */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
}

.card-area {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  overflow-x: scroll;
  width: 100%;
}

.no-team-member-h {
  color: #0e0842;
  text-align: center;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 140% */
  text-transform: capitalize;
}

.no-team-member-sub {
  color: #575a65;
  text-align: center;

  /* Body/16px/Regular */
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
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
  .booking-div {
    margin: 0;
    padding: 0.5rem;
  }

  .group-inputs {
    flex-direction: column;
    gap: 1.5rem;
  }

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
  .booking-nav {
    display: flex;
    border-bottom: 1px solid #e5e9f2;
    gap: 0;
    margin-top: 2rem;
  }

  .booking-nav-item {
    padding: 0;

    font-size: 0.75rem;
    width: 100%;
    text-align: center;
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

  .nav-a1 {
    font-size: 0.75rem;
  }

  .booking-div-inner-wrapper {
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
  }

  .d-coming-soon-p {
    color: #0e0842;
    text-align: center;

    /* Headings/20px/bold */
    font-family: "Product Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 140% */
  }

  .d-coming-soon-p2 {
    color: #575a65;
    text-align: center;

    /* Body/16px/Regular */
    font-family: "Product Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    width: 24.125rem;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
