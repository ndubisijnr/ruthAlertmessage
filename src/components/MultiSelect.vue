<template>
  <div :class="{ break: items.break }" class="flex_between">
    <label :for="items.id">
      {{ items.label }}
      <span v-if="items.required" class="text-danger">*</span>
    </label>
    <div class="d-flex align-center relative">
      <input
        v-if="items.inputType.structure === 'input'"
        :id="items.id"
        :type="items.inputType.type"
        v-model="items.val"
      />

      <div
        @click.stop="
          if (currentMenu === null) {
            items.inputType.openVal = loopedId + objectKey + '00';
            $emit('changeMenu', loopedId + objectKey + '00');
          } else {
            items.inputType.openVal = false;
            $emit('changeMenu', null);
          }
        "
        v-if="items.inputType.structure === 'select'"
        class="d-flex align-center menuDropDown relative"
      >
        <span>{{
          items.val && items.val.length
            ? items.inputType.type === "single"
              ? items.val.split("_").join(" ")
              : items.inputType.type === "multiple"
              ? items.val.join(", ")
              : items.userVal.join(", ")
            : `Select ${items.label}`
        }}</span>
        <div
          @click.stop="
            $emit('changeMenu', loopedId + objectKey + '00'),
              (items.inputType.openVal = loopedId + objectKey + '00')
          "
          :class="{
            active: items.inputType.openVal === currentMenu,
          }"
          class="absolute list_wrapper d-flex flex-column"
        >
          <!-- airlines -->
          <template v-if="items.inputType.type === 'airlines'">
            <div class="airlines_wrapper d-flex flex-column h-100">
              <div class="input_field">
                <input
                  @input="filterAirlines"
                  type="text"
                  v-model="searchValues.val"
                  placeholder="Enter Keywords"
                />
              </div>
              <div
                v-if="items.inputType.openVal === currentMenu"
                class="checkWapper d-flex flex-column h-100"
              >
                <div
                  v-if="!searchValues.val"
                  class="top_field d-flex align-center gap-3"
                >
                  <label class="transIn">
                    <input
                      color="var(--primary_color)"
                      style="color: var(--primary_color)"
                      @change="setHigherCheck(items.inputType.type, 0)"
                      :checked="indeterminateCheck(items.inputType.type).val"
                      type="checkbox"
                      :value="higherCheck(items.inputType.type).val"
                    />
                    Check All
                  </label>
                  <label class="transIn"
                    >selected ( {{ items.val.length }} )</label
                  >
                </div>
                <div class="check_field d-flex flex-column">
                  <template v-if="airlines.length">
                    <label
                      v-for="(airL, index) in airlines"
                      class="d-flex align-center"
                      :key="loopedId * (index + 3) * 333"
                    >
                      <input
                        @change="setLowerCheck(items.inputType.type, airL)"
                        v-model="lowerCheck(items.inputType.type, airL).val"
                        type="checkbox"
                      />
                      {{ airL.name }}
                    </label>
                  </template>
                  <template v-else>
                    <div>No keyword matches</div>
                  </template>
                </div>
              </div>
            </div>
          </template>
          <!-- countries -->
          <template v-else-if="items.inputType.type === 'countries'">
            <div class="airlines_wrapper d-flex flex-column h-100">
              <div class="input_field">
                <input
                  type="text"
                  v-model="searchValues.val"
                  placeholder="Enter Keywords"
                />
              </div>
              <div
                v-if="items.inputType.openVal === currentMenu"
                class="checkWapper d-flex flex-column h-100"
              >
                <div
                  v-if="!searchValues.val"
                  class="top_field d-flex align-center gap-3"
                >
                  <label class="transIn">
                    <input
                      color="var(--primary_color)"
                      style="color: var(--primary_color)"
                      @change="setHigherCheck(items.inputType.type)"
                      :checked="indeterminateCheck(items.inputType.type, 1).val"
                      type="checkbox"
                      :value="higherCheck(items.inputType.type).val"
                    />
                    Check All
                  </label>
                  <label class="transIn"
                    >selected ( {{ items.val.length }} )</label
                  >
                </div>
                <div class="check_field d-flex flex-column">
                  <template v-if="filterCountries().length">
                    <label
                      v-for="(airL, index) in filterCountries()"
                      class="d-flex align-center"
                      :key="loopedId * (index + 3) * 833"
                    >
                      <input
                        @change="setLowerCheck(items.inputType.type, airL)"
                        v-model="lowerCheck(items.inputType.type, airL).val"
                        type="checkbox"
                      />
                      {{ airL.name }}
                    </label>
                  </template>
                  <template v-else>
                    <div>No keyword matches</div>
                  </template>
                </div>
              </div>
            </div>
          </template>
          <!-- cities -->
          <template v-else-if="items.inputType.type === 'cities'">
            <div class="airlines_wrapper d-flex flex-column h-100">
              <template v-if="items.mapVal.length">
                <div class="input_field">
                  <input
                    type="text"
                    v-model="searchValues.val"
                    placeholder="Enter Keywords"
                  />
                </div>
                <div
                  v-if="items.inputType.openVal === currentMenu"
                  class="checkWapper d-flex flex-column h-100"
                >
                  <div
                    v-if="!searchValues.val"
                    class="top_field d-flex align-center gap-3"
                  >
                    <label class="transIn">
                      <input
                        color="var(--primary_color)"
                        style="color: var(--primary_color)"
                        @change="setHigherCheck(items.inputType.type)"
                        :checked="
                          indeterminateCheck(items.inputType.type, 1).val
                        "
                        type="checkbox"
                        :value="higherCheck(items.inputType.type).val"
                      />
                      Check All
                    </label>
                    <label class="transIn"
                      >selected ( {{ items.val.length }} )</label
                    >
                  </div>
                  <div class="check_field d-flex flex-column">
                    <template v-if="filterCitites(items.mapVal).length">
                      <label
                        v-for="(airL, index) in filterCitites(items.mapVal)"
                        class="d-flex align-center"
                        :key="loopedId * (index + 7) * 383"
                      >
                        <input
                          @change="setLowerCheck(items.inputType.type, airL)"
                          v-model="lowerCheck(items.inputType.type, airL).val"
                          type="checkbox"
                        />
                        {{ airL.city }}
                      </label>
                    </template>
                    <template v-else>
                      <div>No keyword matches</div>
                    </template>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="selectCountries">
                  {{ loader.cities ? "Loading..." : "Please select countries" }}
                </div>
              </template>
            </div>
          </template>
          <template v-else>
            <div
              v-for="(options, index) in items.inputType.options"
              :key="index + 9383"
              class="list_item d-flex align-center"
            >
              <template v-if="items.inputType.type == 'single'">
                <label class="d-flex align-center">
                  <input
                    type="radio"
                    :name="items.id"
                    :value="options"
                    v-model="items.val"
                  />
                  {{ options.split("_").join(" ") }}
                </label>
              </template>
              <template v-else>
                <input
                  @change="setSimpleCheck(options)"
                  v-model="simpleLowerCheck(options).val"
                  type="checkbox"
                />
                <span class="capital">{{ options.split("_").join(" ") }}</span>
              </template>
            </div>
          </template>
        </div>
      </div>
      <img
        class="absolute"
        v-if="items.tooltip"
        width="16"
        height="16"
        src="../assets/info.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import requestService from "../service/RequestService";
import countries from "../mixins/countries";
export default {
  props: {
    items: {
      type: Object,
    },
    searchValues: {
      type: Object,
    },
    formData: {
      type: Object,
    },
    getAirlines: {
      type: Array,
    },
    product: {
      type: String,
      default: "Air",
    },
    objectKey: {
      type: String,
      default: "0",
    },
    loopedId: {
      type: Number,
    },
    currentMenu: {
      type: null,
    },
    mainObj: {
      type: String,
      default: "rule",
    },
  },
  data() {
    return {
      loader: { cities: false },
      airlines: [],
    };
  },
  methods: {
    filterAirlines() {
      this.airlines = this.getAirlines;
      if (this.searchValues.val) {
        this.airlines = this.airlines.filter((el) => {
          return el.name
            .toLowerCase()
            .includes(this.searchValues.val.toLowerCase());
        });
      }
    },
    filterCountries() {
      let arr = countries;
      if (this.searchValues.val) {
        arr = arr.filter((el) => {
          return el.name
            .toLowerCase()
            .includes(this.searchValues.val.toLowerCase());
        });
      }
      return arr;
    },
    filterCitites(val) {
      let arr = val;
      if (this.searchValues.val) {
        arr = arr.filter((el) => {
          return el.city
            .toLowerCase()
            .includes(this.searchValues.val.toLowerCase());
        });
      }
      return arr;
    },
    simpleLowerCheck(item) {
      let val = false;
      if (this.mainObj !== "general") {
        if (
          this.formData[this.product][this.mainObj][this.objectKey][
            this.loopedId
          ].val.includes(item)
        ) {
          val = true;
        }
      } else {
        if (
          this.formData[this.product][this.mainObj][this.loopedId].val.includes(
            item
          )
        ) {
          val = true;
        }
      }

      return { val };
    },
    lowerCheck(type, item) {
      let val = false;
      switch (type) {
        default:
          if (
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val.includes(item.code)
          ) {
            val = true;
          }
          break;
      }
      return { val };
    },
    higherCheck(type) {
      let val = false;
      if (
        this.formData[this.product][this.mainObj][this.objectKey][this.loopedId]
          .val.length &&
        this.indeterminateCheck(type).val == "checked"
      ) {
        val = true;
      }

      return { val };
    },
    setLowerCheck(type, item) {
      const arrw =
        this.formData[this.product][this.mainObj][this.objectKey][
          this.loopedId
        ];
      switch (type) {
        case "cities":
          if (this.lowerCheck(type, item).val) {
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val = arrw.val.filter((el) => {
              return el !== item.code;
            });
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal = arrw.userVal.filter((el) => {
              return el !== item.city;
            });
          } else {
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val.push(item.code);
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal.push(item.city);
          }
          break;
        default:
          if (this.lowerCheck(type, item).val) {
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val = arrw.val.filter((el) => {
              return el !== item.code;
            });
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal = arrw.userVal.filter((el) => {
              return el !== item.name;
            });
          } else {
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val.push(item.code);
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal.push(item.name);
          }

          if (type == "countries") {
            this.configureCities();
          }
          break;
      }
      this.searchValues.val = "";
    },
    setSimpleCheck(item) {
      if (this.mainObj !== "general") {
        const arrw =
          this.formData[this.product][this.mainObj][this.objectKey][
            this.loopedId
          ];
        if (this.simpleLowerCheck(item).val) {
          this.formData[this.product][this.mainObj][this.objectKey][
            this.loopedId
          ].val = arrw.val.filter((el) => {
            return el !== item;
          });
        } else {
          this.formData[this.product][this.mainObj][this.objectKey][
            this.loopedId
          ].val.push(item);
        }
      } else {
        const arrw = this.formData[this.product][this.mainObj][this.loopedId];
        if (this.simpleLowerCheck(item).val) {
          this.formData[this.product][this.mainObj][this.loopedId].val =
            arrw.val.filter((el) => {
              return el !== item;
            });
        } else {
          this.formData[this.product][this.mainObj][this.loopedId].val.push(
            item
          );
        }
      }
    },
    indeterminateCheck(type) {
      var val = null;
      const arrw =
        this.formData[this.product][this.mainObj][this.objectKey][this.loopedId]
          .val;
      switch (type) {
        case "airlines":
          if (arrw.length && arrw.length < this.airlines.length) {
            val = "indeterminate";
          } else if (arrw.length && arrw.length === this.airlines.length) {
            val = "checked";
          } else {
            val = null;
          }
          break;
        case "countries":
          if (arrw.length && arrw.length < countries.length) {
            val = "indeterminate";
          } else if (arrw.length && arrw.length === countries.length) {
            val = "checked";
          } else {
            val = null;
          }
          break;
        case "cities":
          const mapVal =
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].mapVal;
          if (arrw.length && arrw.length < mapVal.length) {
            val = "indeterminate";
          } else if (arrw.length && arrw.length === mapVal.length) {
            val = "checked";
          } else {
            val = null;
          }
          break;

        default:
          break;
      }

      return { val };
    },
    setHigherCheck(type) {
      if (
        !this.formData[this.product][this.mainObj][this.objectKey][
          this.loopedId
        ].val.length ||
        this.indeterminateCheck(type).val === "indeterminate"
      ) {
        switch (type) {
          case "airlines":
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val = this.airlines.map((el) => {
              return el.code;
            });
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal = this.airlines.map((el) => {
              return el.name;
            });

            break;
          case "countries":
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val = countries.map((el) => {
              return el.code;
            });
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal = countries.map((el) => {
              return el.name;
            });
            break;
          case "cities":
            const mapVal =
              this.formData[this.product][this.mainObj][this.objectKey][
                this.loopedId
              ].mapVal;
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].val = mapVal.map((el) => {
              return el.code;
            });
            this.formData[this.product][this.mainObj][this.objectKey][
              this.loopedId
            ].userVal = mapVal.map((el) => {
              return el.city;
            });
            break;

          default:
            break;
        }
      } else {
        this.formData[this.product][this.mainObj][this.objectKey][
          this.loopedId
        ].val = [];
        this.formData[this.product][this.mainObj][this.objectKey][
          this.loopedId
        ].userVal = [];
      }
      this.searchValues.val = "";

      if (type == "countries") {
        this.configureCities();
      }
    },
    configureCities() {
      this.formData[this.product][this.mainObj][this.objectKey][
        this.loopedId + 2
      ].mapVal = [];
      this.formData[this.product][this.mainObj][this.objectKey][
        this.loopedId + 2
      ].val = [];
      this.formData[this.product][this.mainObj][this.objectKey][
        this.loopedId + 2
      ].userVal = [];

      if (
        this.formData[this.product][this.mainObj][this.objectKey][this.loopedId]
          .val.length
      ) {
        this.getCities(
          this.formData[this.product][this.mainObj][this.objectKey][
            this.loopedId
          ].userVal
        );
      }
    },
    async getCities(val) {
      this.loader.cities = true;
      try {
        const { data: res } = await requestService.getRequest({
          path: `airports/${val.join(",")}`,
        });
        this.formData[this.product][this.mainObj][this.objectKey][
          this.loopedId + 2
        ].mapVal = this.replaceKeys(this.removeDuplicates(res, "city_code"), [
          { name: "city_code", fieldName: "code" },
        ]);
      } catch (err) {
        console.log(err);
      } finally {
        this.loader.cities = false;
      }
    },
    replaceKeys(arr1, arr2) {
      const newArr = arr1.map((obj1) => {
        const newObj = {};

        for (const key in obj1) {
          const replacement = arr2.find((obj2) => obj2.name === key);

          if (replacement) {
            newObj[replacement.fieldName] = obj1[key];
          } else {
            newObj[key] = obj1[key];
          }
        }

        return newObj;
      });

      return newArr;
    },
    removeDuplicates(arr, prop) {
      let uniqueValues = new Set();
      return arr.filter(function (item) {
        if (item[prop] === null || !uniqueValues.has(item[prop])) {
          uniqueValues.add(item[prop]);
          return true;
        }
        return false;
      });
    },
  },
  mounted() {
    this.airlines = this.getAirlines;
  },
};
</script>

<style lang="scss" scoped>
.menuDropDown {
  height: 36px;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  padding: 6px 12px;
  padding-right: 30px;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;
  width: 100%;

  * {
    position: relative;
    z-index: 3;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #fff;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &::after {
    background: url("../assets/arrow_down.svg") calc(100% - 15px) center
      no-repeat;
  }

  span {
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list_wrapper {
    position: absolute;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(194, 194, 194, 0.5);
    background: #fff;
    left: 0;
    padding: 16px;
    grid-gap: 12px;
    user-select: none;
    pointer-events: none;
    opacity: 0;
    top: 0;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    .list_item,
    label {
      grid-gap: 8px;
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
    }

    &:has(.airlines_wrapper):not(:has(.selectCountries)) {
      max-width: 586px;
      min-width: 286px;
      border-radius: 4px;
      border-color: #d5e2ee;
      background: #f2f6fa;
      overflow: hidden;
      height: 300px;

      .airlines_wrapper {
        & > * {
          height: 100%;
          flex: auto;
        }
        .input_field {
          height: max-content;
          input {
            background: transparent;
          }
        }

        .checkWapper {
          padding-top: 17px;
          overflow: hidden;
          & > * {
            height: 100%;
            flex: auto;
          }

          .top_field {
            height: max-content;
            padding-bottom: 8px;
            border-bottom: 1px solid #d5e2ee;
          }
        }
        .check_field {
          padding-top: 8px;
          grid-gap: 9px;
          overflow-y: auto;
          overflow-x: hidden;
        }
      }
    }

    &.active {
      user-select: auto;
      pointer-events: all;
      opacity: 1;
      top: calc(100% + 10px);
      z-index: 10;
    }
  }
}
</style>