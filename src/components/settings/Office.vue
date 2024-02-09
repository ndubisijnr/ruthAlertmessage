<template>
  <div id="office-id" class="officeId animate__animated animate__fadeIn">
    <div class="card__wrapper">
      <template v-if="officeCreateData">
        <!-- input -->
        <div class="office-input">
          <on-boarding-input
            :readonly="disableAll"
            @inputValue="officeCreateData.office_id = $event"
            autocomplete="off"
            width="100%"
            label="Office ID"
            class=""
          />
        </div>
        <!-- rate -->
        <div class="office-rate">
          <on-boarding-input
            :readonly="disableAll"
            @inputValue="officeCreateData.rate = $event"
            autocomplete="off"
            type="number"
            width="100%"
            label="Rate"
            class=""
          />
        </div>
        <!-- currency -->
        <div class="relative office-currency-select">
          <select
            :disabled="disableAll"
            v-model="officeCreateData.currency"
            class="relative"
            id="office-currency-select"
          >
            <optgroup
              v-for="(countries, key, id) in filterCountriesLarge"
              :key="id + 43434"
              :label="key"
            >
              <option
                v-for="country in countries"
                :key="country.currency.toLowerCase()"
                :value="country.currency.toLowerCase()"
              >
                {{ country.name }}
              </option>
            </optgroup>
          </select>
          <div class="absolute d-flex align-center">
            <img
              :src="getSelectedCountry(officeCreateData.currency).flag"
              :alt="officeCreateData.currency"
            />
            <span>{{ getSelectedCountry(officeCreateData.currency).currency }}</span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9465 0.453125H4.79316H1.05317C0.413166 0.453125 0.0931657 1.22646 0.546499 1.67979L3.99983 5.13312C4.55317 5.68646 5.45317 5.68646 6.0065 5.13312L7.31983 3.81979L9.45983 1.67979C9.9065 1.22646 9.5865 0.453125 8.9465 0.453125Z"
                fill="#292D32"
              />
            </svg>
            <div class="d-flex flex-column">
              <span>Currency</span>
              <span v-if="officeCreateData.currency" class="currency_name">{{
                getSelectedCountry(officeCreateData.currency).currency_name
              }}</span>
            </div>
          </div>
        </div>
        <!-- rate select -->
        <div class="relative d-none office-select">
          <select class="relative" id="office-select">
            <option disabled selected value>Exchange Rate Source</option>
            <option value="wdwdwd">wdwdwd</option>
            <option value="wdwdwd">wdwdwd</option>
            <option value="edededededededededededededededeededed">
              edededededededededededededededeededed
            </option>
          </select>
          <label for="office-select" class="absolute">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99991 14.0952L4.35151 8.44683L6.04831 6.75003L9.99991 10.7016L13.9515 6.75003L15.6483 8.44683L9.99991 14.0952ZM9.9999 0.398438C4.6983 0.398438 0.399902 4.69564 0.399902 9.99844C0.399902 15.3 4.6983 19.5984 9.9999 19.5984C15.3015 19.5984 19.5999 15.3 19.5999 9.99844C19.5999 4.69564 15.3015 0.398438 9.9999 0.398438Z"
                fill="var(--primary_color)"
              />
            </svg>
          </label>
        </div>
        <!-- button -->
        <div style="max-width: max-content" class="office-btn">
          <on-boarding-button
            @click="createOfficeId"
            :loading="loader.create"
            :disabled="disableAll || disableAdd"
            style="margin-bottom: 1rem"
            btn-width="max-content"
            background="transparent"
            color="var(--primary_color)"
            text-node="Add"
          ></on-boarding-button>
        </div>
      </template>
    </div>
    <header class="">
      <h3>Office ID</h3>
    </header>

    <template v-if="officeData && officeData?.length">
      <div class="" v-for="(item, id) in officeData" :key="item.id + 3232">
        <div
          :class="{ disabled: item.status !== 'active' && isEdit !== id }"
          class="card__wrapper"
        >
          <!-- input -->
          <div class="office-input">
            <on-boarding-input
              :readonly="disableAll || isEdit !== id"
              @inputValue="item.office_id = $event"
              :defaultValue="item.office_id"
              autocomplete="off"
              width="100%"
              label="Office ID"
              class=""
            />
          </div>
          <!-- rates -->
          <div class="office-rate">
            <on-boarding-input
              :readonly="disableAll || isEdit !== id"
              @inputValue="item.rate = $event"
              type="number"
              :defaultValue="item.rate"
              autocomplete="off"
              width="100%"
              label="Rate"
              class=""
            />
          </div>
          <!-- currency select -->
          <div class="relative office-currency-select">
            <select
              :disabled="disableAll || isEdit !== id"
              class="relative"
              v-model="item.currency"
              id="office-currency-select"
            >
              <optgroup
                v-for="(countries, key, id) in filterCountriesLarge"
                :key="id + 43434890"
                :label="key"
              >
                <option
                  v-for="country in countries"
                  :key="country.currency.toLowerCase()"
                  :value="country.currency.toLowerCase()"
                >
                  {{ country.name }}
                </option>
              </optgroup>
            </select>

            <div class="absolute d-flex align-center">
              <img :src="getSelectedCountry(item.currency).flag" :alt="item.currency" />
              <span>{{ getSelectedCountry(item.currency).currency }}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9465 0.453125H4.79316H1.05317C0.413166 0.453125 0.0931657 1.22646 0.546499 1.67979L3.99983 5.13312C4.55317 5.68646 5.45317 5.68646 6.0065 5.13312L7.31983 3.81979L9.45983 1.67979C9.9065 1.22646 9.5865 0.453125 8.9465 0.453125Z"
                  fill="#292D32"
                />
              </svg>
              <div class="d-flex flex-column">
                <span>Currency</span>
                <span v-if="item.currency" class="currency_name">{{
                  getSelectedCountry(item.currency).currency_name
                }}</span>
              </div>
            </div>
          </div>
          <!-- exchange select -->
          <div class="relative d-none office-select">
            <select class="relative" id="office-select">
              <option disabled selected value>Exchange Rate Source</option>
              <option value="wdwdwd">wdwdwd</option>
              <option value="wdwdwd">wdwdwd</option>
              <option value="edededededededededededededededeededed">
                edededededededededededededededeededed
              </option>
            </select>

            <label for="office-select" class="absolute">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99991 14.0952L4.35151 8.44683L6.04831 6.75003L9.99991 10.7016L13.9515 6.75003L15.6483 8.44683L9.99991 14.0952ZM9.9999 0.398438C4.6983 0.398438 0.399902 4.69564 0.399902 9.99844C0.399902 15.3 4.6983 19.5984 9.9999 19.5984C15.3015 19.5984 19.5999 15.3 19.5999 9.99844C19.5999 4.69564 15.3015 0.398438 9.9999 0.398438Z"
                  fill="var(--primary_color)"
                />
              </svg>
            </label>
          </div>
          <!-- buttons -->
          <div style="max-width: max-content" class="office-btn">
            <on-boarding-button
              @click="allowEditForm(id)"
              :disabled="disableAll"
              :loading="loader.edit == id + 1"
              style="margin-bottom: 1rem"
              btn-width="max-content"
              background="transparent"
              :color="
                isEdit === id
                  ? !checkObj(id).show
                    ? 'rgba(29, 30, 44, 1)'
                    : 'rgba(21, 157, 84, 1)'
                  : 'rgba(44, 108, 172, 1)'
              "
              :text-node="
                isEdit === id ? (!checkObj(id).show ? 'Cancel' : 'Save') : 'Edit'
              "
            ></on-boarding-button>
          </div>
          <!-- status -->
          <div style="max-width: max-content" class="office-btn">
            <on-boarding-button
              :disabled="disableAll"
              @click="changeStatus(item, id)"
              :loading="loader.status == id + 1"
              style="margin-bottom: 1rem"
              btn-width="max-content"
              background="transparent"
              :color="
                item.status == 'active' ? 'rgba(241, 211, 2, 1)' : 'rgba(29, 30, 44, 1)'
              "
              :text-node="item.status == 'active' ? 'Deativate' : 'Activate &nbsp;'"
            ></on-boarding-button>
          </div>
          <!-- delete -->
          <div style="max-width: max-content" class="office-btn">
            <on-boarding-button
              :disabled="disableAll"
              @click="deleteOfficeId(item.id, id)"
              :loading="loader.delete == id + 1"
              style="margin-bottom: 1rem"
              btn-width="max-content"
              background="transparent"
              color="rgba(240, 68, 68, 1)"
              text-node="Delete"
            ></on-boarding-button>
          </div>
        </div>
      </div>
    </template>

    <div style="min-height: 50vh" v-else class="gap-3 flex_center flex-column h-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="116"
        height="116"
        viewBox="0 0 116 116"
        fill="none"
      >
        <path
          d="M0.117188 57.883C0.117188 73.2346 6.21556 87.9574 17.0707 98.8125C27.9259 109.668 42.6487 115.766 58.0002 115.766C73.3518 115.766 88.0746 109.668 98.9297 98.8125C109.785 87.9574 115.883 73.2346 115.883 57.883C115.883 42.5315 109.785 27.8087 98.9297 16.9536C88.0746 6.09837 73.3518 0 58.0002 0C42.6487 0 27.9259 6.09837 17.0707 16.9536C6.21556 27.8087 0.117188 42.5315 0.117188 57.883Z"
          fill="#F1F2F6"
        />
        <path
          d="M8.3418 20.9214L67.758 3.4748L90.5149 80.9757L31.0986 98.4223L8.3418 20.9214Z"
          fill="white"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.0869 8.62842H82.0131V89.3999H20.0869V8.62842Z"
          fill="white"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.166 16.707H73.937V24.7846H28.166V16.707Z"
          fill="#E5E9F2"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3193 38.2441H55.0899"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3193 43.6309H68.5521"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3193 49.0151H61.8405"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3193 65.1689H57.7815"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3193 70.5532H71.2436"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3193 75.9399H65.8591"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.7213 48.1225V44.5522H29.6377V43.6631H30.7213V42.524H29.6377V41.6349H30.7213V38.2036H32.166L33.4858 41.6349H35.125V38.2036H36.2225V41.6349H37.306V42.524H36.2225V43.6631H37.306V44.5522H36.2225V48.1225H34.7638L33.4441 44.5522H31.8048V48.1225H30.7213ZM31.7771 41.6349H32.3605L31.7771 39.9123H31.7215L31.7771 41.6349ZM31.8048 43.6631H33.1107L32.6939 42.524H31.7771L31.8048 43.6631ZM34.222 43.6631H35.1528L35.125 42.524H33.8053L34.222 43.6631ZM35.125 46.1637H35.1806L35.1389 44.5522H34.5554L35.125 46.1637Z"
          fill="#1D1E2C"
        />
        <path
          d="M30.7213 75.9057V72.3354H29.6377V71.4463H30.7213V70.3072H29.6377V69.4181H30.7213V65.9868H32.166L33.4858 69.4181H35.125V65.9868H36.2225V69.4181H37.306V70.3072H36.2225V71.4463H37.306V72.3354H36.2225V75.9057H34.7638L33.4441 72.3354H31.8048V75.9057H30.7213ZM31.7771 69.4181H32.3605L31.7771 67.6955H31.7215L31.7771 69.4181ZM31.8048 71.4463H33.1107L32.6939 70.3072H31.7771L31.8048 71.4463ZM34.222 71.4463H35.1528L35.125 70.3072H33.8053L34.222 71.4463ZM35.125 73.9469H35.1806L35.1389 72.3354H34.5554L35.125 73.9469Z"
          fill="#1D1E2C"
        />
        <path
          d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z"
          fill="#E5E9F2"
        />
        <path
          d="M110.051 101.615C110.527 102.079 110.906 102.632 111.166 103.244C111.427 103.856 111.563 104.513 111.567 105.177C111.572 105.842 111.444 106.501 111.192 107.116C110.939 107.731 110.567 108.289 110.097 108.759C109.627 109.23 109.069 109.602 108.454 109.854C107.839 110.106 107.18 110.234 106.516 110.23C105.851 110.226 105.194 110.09 104.582 109.829C103.971 109.569 103.417 109.19 102.953 108.714L89.6396 95.4011L96.739 88.3018L110.051 101.615Z"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M82.5391 84.7549L86.0882 81.2048L94.964 90.0781L91.4148 93.6282L82.5391 84.7549Z"
          fill="white"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M86.9799 53.6947C90.1393 56.854 92.2908 60.8792 93.1625 65.2613C94.0342 69.6434 93.5869 74.1856 91.8771 78.3135C90.1673 82.4414 87.2719 85.9695 83.5569 88.4518C79.8419 90.9341 75.4743 92.259 71.0063 92.259C66.5384 92.259 62.1707 90.9341 58.4558 88.4518C54.7408 85.9695 51.8453 82.4414 50.1356 78.3135C48.4258 74.1856 47.9784 69.6434 48.8501 65.2613C49.7218 60.8792 51.8734 56.854 55.0328 53.6947C59.2696 49.4591 65.0154 47.0796 71.0063 47.0796C76.9973 47.0796 82.743 49.4591 86.9799 53.6947Z"
          fill="white"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z"
          fill="#E5E9F2"
        />
        <path
          d="M82.5389 58.1331C84.8205 60.4147 86.3742 63.3216 87.0037 66.4863C87.6332 69.6509 87.3101 72.9312 86.0753 75.9122C84.8405 78.8933 82.7494 81.4412 80.0666 83.2338C77.3837 85.0265 74.2295 85.9833 71.0028 85.9833C67.7762 85.9833 64.622 85.0265 61.9391 83.2338C59.2562 81.4412 57.1652 78.8933 55.9304 75.9122C54.6956 72.9312 54.3725 69.6509 55.0019 66.4863C55.6314 63.3216 57.1852 60.4147 59.4667 58.1331C60.9816 56.6179 62.78 55.4161 64.7594 54.5961C66.7388 53.7761 68.8603 53.354 71.0028 53.354C73.1453 53.354 75.2669 53.7761 77.2462 54.5961C79.2256 55.4161 81.0241 56.6179 82.5389 58.1331Z"
          stroke="#1D1E2C"
          stroke-width="1.79437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M37.4121 108.503C37.4121 109.308 39.7563 110.079 43.9291 110.649C48.1018 111.218 53.7612 111.537 59.6624 111.537C65.5635 111.537 71.2229 111.218 75.3956 110.649C79.5684 110.079 81.9126 109.308 81.9126 108.503C81.9126 107.698 79.5684 106.926 75.3956 106.357C71.2229 105.788 65.5635 105.468 59.6624 105.468C53.7612 105.468 48.1018 105.788 43.9291 106.357C39.7563 106.926 37.4121 107.698 37.4121 108.503Z"
          fill="#E5E9F2"
        />
      </svg>
      <div class="no-team-member-text">
        <div style="text-align: center">
          <p class="no-team-member-h">
            Hi {{ getBusinessProfile?.name }}, Add your Office ID
          </p>
          <p class="no-team-member-sub">
            Yeah, you currently have not added any office ids. Add one today..
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RuthdoAlert } from "ruthly";
import RequestService from "../../service/RequestService";
import countriesLarge from "../../mixins/countriesLarge";

// components
import OnBoardingButton from "../../components/Buttons/OnBoardingButton.vue";
import OnBoardingInput from "../../components/Inputs/OnBoardingInput.vue";
export default {
  props: ["getBusinessProfile"],
  components: {
    OnBoardingButton,
    OnBoardingInput,
  },
  data() {
    return {
      officeCreateData: {
        office_id: null,
        rate: null,
        currency: null,
      },
      officeData: null,
      backupOfficeData: null,
      loader: {
        fetch: false,
        create: false,
        delete: false,
        status: false,
        edit: false,
      },
      isEdit: null,
    };
  },
  methods: {
    getSelectedCountry(val) {
      const currency = val ? val.toUpperCase() : "NGN";
      var obj = {};
      obj = countriesLarge.filter((el) => {
        return el.currency === currency;
      })[0];
      obj.flag = `https://flagsapi.com/${obj.iso2}/shiny/64.png`;
      return obj;
    },
    async fetchOfficeId() {
      try {
        this.isEdit = null;
        this.loader.fetch = true;
        const { data: res } = await RequestService.getRequest(
          {
            path: "office_id",
          },
          true
        );
        this.officeData = null;
        this.backupOfficeData = structuredClone(res.data.data);
        this.$nextTick(() => {
          this.officeData = res.data.data;
        });
      } catch (err) {
        RuthdoAlert({
          title: err?.response?.message,
          icon: "error",
        });
      } finally {
        this.loader.fetch = false;
      }
    },
    async deleteOfficeId(val, id) {
      this.loader.delete = id + 1;
      this.isEdit = null;
      try {
        const { data: res } = await RequestService.deleteRequest(
          {
            path: "office_id",
            id: val,
          },
          true
        );
        RuthdoAlert({
          title: res.data,
          icon: "success",
        });
        this.officeData = this.officeData.filter((el) => {
          return el.id !== val;
        });
      } catch (err) {
        RuthdoAlert({
          title: err?.response?.message,
          icon: "error",
        });
      } finally {
        this.loader.delete = false;
      }
    },
    async changeStatus(val, id) {
      this.loader.status = id + 1;
      this.isEdit = null;
      try {
        const { data: res } = await RequestService.patchRequest(
          {
            path: "office_id",
            payload: {
              id: val.id,
              status: val.status == "active" ? "inactive" : "active",
            },
          },
          true
        );
        RuthdoAlert({
          title: res.data,
          icon: "success",
        });
        this.fetchOfficeId();
      } catch (err) {
        RuthdoAlert({
          title: err?.response?.message,
          icon: "error",
        });
      } finally {
        this.loader.status = false;
      }
    },
    async updateOfficeId(index) {
      this.loader.edit = index + 1;
      var data = this.officeData[index];
      delete data.created_at;
      delete data.updated_at;
      delete data.status;
      try {
        const { data: res } = await RequestService.patchRequest(
          {
            path: "office_id",
            payload: data,
          },
          true
        );
        RuthdoAlert({
          title: res.data,
          icon: "success",
        });
        this.fetchOfficeId();
      } catch (err) {
        RuthdoAlert({
          title: err?.response?.message,
          icon: "error",
        });
      } finally {
        this.loader.edit = false;
      }
    },
    async createOfficeId() {
      this.isEdit = null;
      this.loader.create = true;
      try {
        const { data: res } = await RequestService.postRequest(
          {
            path: "office_id",
            payload: this.officeCreateData,
          },
          true
        );
        this.officeCreateData = null;
        this.$nextTick(() => {
          this.officeCreateData = {
            office_id: null,
            rate: 0,
            currency: null,
          };
        });
        this.fetchOfficeId();
        RuthdoAlert({
          title: res.data,
          icon: "success",
        });
      } catch (err) {
        RuthdoAlert({
          title: err?.response?.message,
          icon: "error",
        });
      } finally {
        this.loader.create = false;
      }
    },
    allowEditForm(index) {
      if (this.isEdit === index) {
        if (this.checkObj(index).show) {
          this.updateOfficeId(index);
          this.isEdit = null;
        } else {
          this.isEdit = null;
        }
      } else if (this.isEdit === null) {
        this.isEdit = index;
      }
    },
    checkObj(index) {
      var show = false;
      Object.entries(this.officeData[index]).forEach(([key, value]) => {
        if (value != this.backupOfficeData[index][key]) {
          show = true;
        }
      });
      return { show };
    },
  },
  computed: {
    filterCountriesLarge() {
      let arrList = [];
      let arr = [...countriesLarge];
      // get the main permission holder
      arr.forEach((element) => {
        let word = element.name[0];
        if (!arrList.includes(word)) {
          arrList.push(word);
        }
      });
      let obj = {};
      arrList.sort();
      arrList.forEach((element) => {
        Object.assign(obj, {
          [element]: arr.filter((item) => {
            return item.name[0] === element;
          }),
        });
      });
      return obj;
    },
    disableAll() {
      var disable = false;
      Object.keys(this.loader).forEach((el) => {
        if (this.loader[el]) {
          disable = true;
        }
      });
      return disable;
    },
    disableAdd() {
      var disable = false;
      if (this.officeCreateData) {
        Object.keys(this.officeCreateData).forEach((el) => {
          if (!this.officeCreateData[el]) {
            disable = true;
          }
        });
      }
      return disable;
    },
  },
};
</script>

<style lang="scss" scoped>
.officeId {
  padding-block: 2.5rem;
  header {
    margin-block: 46px 24px;
    h3 {
      color: rgba(44, 108, 172, 1);
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 0;
    }
  }

  .card__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 16px;
    background: #fff;
    padding: 16px 24px 13px;

    & > * {
      flex: auto;
      &:not(.office-btn) {
        min-width: 100px;
      }
    }

    &.disabled {
      & > *:not(.office-btn) {
        opacity: 0.5;
      }
    }

    select {
      height: 4rem;
      margin-bottom: 1rem;
      border-radius: 0.375rem;
      border: 1px solid #e0e6ed;
      padding: 6px 12px;
      color: #000;
      font-size: 1rem;
      font-weight: 400;
      width: 100%;
      text-transform: capitalize;
      cursor: pointer;
      padding-right: 30px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      &:focus {
        border-color: var(--primary_color);
        caret-color: var(--primary_color);
        outline-color: var(--primary_color);
      }

      &:disabled {
        background-color: rgba(239, 239, 239, 0.3) !important;
      }

      optgroup,
      option {
        color: #000;
      }
    }

    .office-select {
      height: 100%;
      select {
        z-index: 2;
        background: transparent;
        padding-right: 35px;
      }

      .absolute {
        margin: 0;
        z-index: 1;
        padding: 0;
        height: 15px;
        width: 15px;
        right: 12px;
        top: 40%;
        transform: translateY(-50%);
        transition: all 0.25s ease-in-out;
        svg {
          height: 100%;
          width: 100%;
        }
      }

      &:has(select:focus) {
        .absolute {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
    .office-currency-select {
      height: 100%;
      overflow: hidden;
      select {
        z-index: 2;
        background: transparent;
        color: transparent;
        padding-right: 40px;
      }

      .absolute {
        margin: 0;
        top: 0;
        left: 12px;
        z-index: 1;
        grid-gap: 3px;
        padding: 0;
        height: calc(100% - 1rem);
        width: calc(100% - 24px);
        transition: all 0.25s ease-in-out;
        svg {
          height: 5px;
          width: 9px;
          min-width: 9px;
        }
        img {
          height: 20px;
          min-width: 20px;
          width: 20px;
          object-fit: cover;
        }

        span {
          font-weight: 300;
          font-size: 14px;
          color: rgba(45, 49, 57, 1);
        }

        div {
          // margin-left: 5px;
          height: auto;
          transition: all 0.25s ease-in-out;
          * {
            transition: all 0.2s ease-in-out;
          }
          &:has(.currency_name) {
            span {
              font-size: 12px;
              &.currency_name {
                font-weight: 500;
                font-size: 14px;
                color: rgba(14, 8, 66, 1);
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
}

.no-team-member-h {
  color: #0e0842;
  text-align: center;

  /* Headings/20px/bold */
  font-family: "Product Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  /* 140% */
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

@media screen and (max-width: 959px) {
  .officeId {
    .card__wrapper {
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  }
}
</style>
