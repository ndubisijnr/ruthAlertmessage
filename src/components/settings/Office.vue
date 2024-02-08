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
            <span>{{
              getSelectedCountry(officeCreateData.currency).currency
            }}</span>
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

    <template v-if="officeData">
      <div class="" v-for="item in officeData" :key="item.id + 3232">
        <div class="card__wrapper">
          <!-- input -->
          <div class="office-input">
            <on-boarding-input
              :readonly="disableAll && isEdit !== item.id"
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
              :readonly="disableAll && isEdit !== item.id"
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
              :disabled="disableAll && isEdit !== item.id"
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
              <img
                :src="getSelectedCountry(item.currency).flag"
                :alt="item.currency"
              />
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
              :disabled="disableAll"
              style="margin-bottom: 1rem"
              btn-width="max-content"
              background="transparent"
              color="rgba(44, 108, 172, 1)"
              text-node="Edit"
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
                item.status == 'active'
                  ? 'rgba(241, 211, 2, 1)'
                  : 'rgba(29, 30, 44, 1)'
              "
              :text-node="item.status == 'active' ? 'Deativate' : 'activate'"
            ></on-boarding-button>
          </div>
          <!-- delete -->
          <div style="max-width: max-content" class="office-btn">
            <on-boarding-button
              :disabled="disableAll"
              @click="deleteOfficeId(item.id)"
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
        this.loader.fetch = true;
        const { data: res } = await RequestService.getRequest(
          {
            path: "office_id",
          },
          true
        );
        this.officeData = null;
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
    async deleteOfficeId(id) {
      this.loader.delete = id + 1;
      try {
        const { data: res } = await RequestService.deleteRequest(
          {
            path: "office_id",
            id,
          },
          true
        );
        RuthdoAlert({
          title: res.data,
          icon: "success",
        });
        this.officeData = this.officeData.filter((el) => {
          return el.id !== id;
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
    async createOfficeId() {
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
      width: 100%;
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
</style>