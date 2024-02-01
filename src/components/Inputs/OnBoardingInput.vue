<template>
  <div class="on_boarding_input">
    <div
      :style="
        info
          ? {
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              position: 'relative',
            }
          : null
      "
    >
      <span
        class="hide_show"
        v-if="type === 'password'"
        @click="hideShow"
        :id="`hideShow${id}`"
      ></span>
      <span class="add-info" v-if="info">{{ info }}</span>
      <div style="position: relative; width: 100%">
        <label class="label" :class="{ focused: isFocused }">{{ label }}</label>
        <div style="position: relative">
          <div
            v-if="type === 'tel'"
            style="
              position: absolute;
              display: flex;
              top: 1.25rem;
              left: 1.25rem;
              align-items: center;
              cursor: pointer;
              gap: 0.25rem;
            "
          >
            <div style="display: flex; gap: 0.5rem">
              <img
                src="../../assets/countries/ngn.svg"
                style="width: 1.5rem; height: 1.5rem"
              />
              <span class="country_code"> +234</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.9465 5.45312H7.79316H4.05317C3.41317 5.45312 3.09317 6.22646 3.5465 6.67979L6.99983 10.1331C7.55317 10.6865 8.45317 10.6865 9.0065 10.1331L10.3198 8.81979L12.4598 6.67979C12.9065 6.22646 12.5865 5.45312 11.9465 5.45312Z"
                fill="#292D32"
              />
            </svg>
          </div>

          <input
            :id="id"
            @keydown="validate"
            :name="name"
            :autocomplete="autocomplete"
            maxlength="max"
            required
            :style="[
              style,
              width
                ? { width: width, paddingLeft: type === 'tel' ? '7rem' : null }
                : null,
              isFocused
                ? {
                    border: custom_theme
                      ? custom_theme.color
                      : default_theme.color,
                    outlineColor: custom_theme
                      ? `${custom_theme.color} !important`
                      : default_theme.color,
                    caretColor: custom_theme
                      ? custom_theme.color
                      : default_theme.color,
                  }
                : null,
            ]"
            :type="type"
            class="formInput"
            :placeholder="type === 'tel' ? null : placeholder"
            :class="{ focused: isFocused }"
            :readonly="readonly"
            v-model="inputValue"
            @focus="handleFocus"
            @focusout="handleFocusOut"
            @input="emitValue"
          />
          <div class="loader">
            <spinner-loader v-if="isTyping && isFakeLoading"></spinner-loader>
          </div>
        </div>
        <p v-if="error" class="error">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6034 11.4667H1.40337C1.2167 11.4667 1.04337 11.36 0.936699 11.2C0.843366 11.04 0.843366 10.84 0.936699 10.6667L6.5367 0.799992C6.63003 0.626659 6.80337 0.533325 7.00337 0.533325C7.20337 0.533325 7.3767 0.639992 7.47003 0.799992L13.07 10.6667C13.1634 10.8267 13.1634 11.04 13.07 11.2C12.9634 11.36 12.79 11.4667 12.6034 11.4667ZM2.32337 10.4H11.6967L7.0167 2.14666L2.32337 10.4ZM7.5367 7.21332V4.73333C7.5367 4.43999 7.2967 4.19999 7.00337 4.19999C6.71003 4.19999 6.47003 4.43999 6.47003 4.73333V7.21332C6.47003 7.50666 6.71003 7.74666 7.00337 7.74666C7.2967 7.74666 7.5367 7.50666 7.5367 7.21332ZM7.47003 9.42665C7.59003 9.30665 7.67003 9.13332 7.67003 8.95999C7.67003 8.78665 7.60337 8.61332 7.47003 8.49332C7.35003 8.37332 7.1767 8.29332 7.00337 8.29332C6.83003 8.29332 6.6567 8.35999 6.5367 8.49332C6.4167 8.61332 6.3367 8.78665 6.3367 8.95999C6.3367 9.13332 6.40337 9.30665 6.5367 9.42665C6.6567 9.54665 6.83003 9.62665 7.00337 9.62665C7.1767 9.62665 7.35003 9.54665 7.47003 9.42665Z"
              fill="#FF1F1F"
            />
          </svg>
          {{ error }}
        </p>
      </div>
      <!--        <div style="display: flex;position: absolute;right: 1.25rem;bottom: 30px;gap: 1rem">-->
      <!--          <div>-->
      <!--            <span>.net</span>-->
      <!--          </div>-->
      <!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
      <!--          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.0967L6.35156 10.4483L8.04836 8.75146L12 12.7031L15.9516 8.75146L17.6484 10.4483L12 16.0967ZM12.0004 2.3999C6.69879 2.3999 2.40039 6.6971 2.40039 11.9999C2.40039 17.3015 6.69879 21.5999 12.0004 21.5999C17.302 21.5999 21.6004 17.3015 21.6004 11.9999C21.6004 6.6971 17.302 2.3999 12.0004 2.3999Z" fill="#D8B0D8"/>-->
      <!--          <mask id="mask0_1055_53310" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">-->
      <!--            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.0967L6.35156 10.4483L8.04836 8.75146L12 12.7031L15.9516 8.75146L17.6484 10.4483L12 16.0967ZM12.0004 2.3999C6.69879 2.3999 2.40039 6.6971 2.40039 11.9999C2.40039 17.3015 6.69879 21.5999 12.0004 21.5999C17.302 21.5999 21.6004 17.3015 21.6004 11.9999C21.6004 6.6971 17.302 2.3999 12.0004 2.3999Z" fill="white"/>-->
      <!--          </mask>-->
      <!--          <g mask="url(#mask0_1055_53310)">-->
      <!--          </g>-->
      <!--        </svg>-->
      <!--        </div>-->
    </div>
  </div>
</template>

<script>
import SpinnerLoader from "../loaders/SpinnerLoader.vue";
import storeUtils from "@/utils/storeUtils";

export default {
  name: "OnBoardingInput",
  components: { SpinnerLoader },
  props: [
    "type",
    "defaultValue",
    "isvalidate",
    "inputType",
    "value",
    "name",
    "style",
    "max",
    "isFakeLoading",
    "autocomplete",
    "className",
    "label",
    "width",
    "id",
    "error",
    "required",
    "errorInput",
    "placeholder",
    "readonly",
    "info",
    "newVal",
  ],
  data() {
    return {
      inputValue: null,
      isFocused: false,
      isTyping: false,
    };
  },
  methods: {
    setValue(val) {
      this.inputValue = val;
    },
    emitValue() {
      this.isTyping = true;
      setTimeout(() => {
        this.isTyping = false;
      }, 1000);

      this.$emit("inputValue", this.inputValue);
    },

    handleFocus() {
<<<<<<< HEAD
      this.isFocused = true
      this.$emit('isFocusing', true)
    },

    handleFocusOut() {
      this.isFocused = false
      this.$emit('isFocusing', false)
=======
      this.isFocused = true;
    },

    handleFocusOut() {
      this.isFocused = false;
>>>>>>> f562592e6194daccd7da25a8953155b27dab00bc
    },

    validate() {
      if (this.isvalidate) {
        let inputs = document.querySelectorAll(".formInput");
        inputs.forEach((item) => {
          if (item.value === null || item.value === "") {
            console.log(`${item.id} is empty`);
          }
        });
      }
    },

    hideShow() {
      const id = document.getElementById(`${this.id}`);
      const hideshow = document.getElementById(`hideShow${this.id}`);
      if (id.type === "password") {
        id.type = "text";
        hideshow.innerHTML = "HIDE";
      } else {
        id.type = "password";
        hideshow.innerHTML = "SHOW";
      }
    },
  },

  computed: {
    default_theme() {
      return storeUtils.fireAway().theme.getDefault_theme;
    },

    custom_theme() {
      return storeUtils.fireAway().theme.custom_theme;
    },
  },

  beforeMount() {},

  mounted() {
    const id = document.getElementById(`hideShow${this.id}`);
    if (id) id.innerHTML = "SHOW";
    if (this.defaultValue) this.inputValue = this.defaultValue;
  },
  watch: {
    newVal(newVal) {
      this.inputValue = newVal;
    },
  },
};
</script>

<style scoped>
.country_code {
  color: #2d3139;
  font-family: "Product Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  /* 150% */
}

.wrapper {
  border: solid;
  position: relative;
}

.loader {
  position: absolute;
  z-index: 99999;
  right: 20px;
  top: 20px;
}

.add-info {
  width: 4.875rem;
  height: 4rem;
  flex-shrink: 0;
  background: #eff2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  /*position: absolute;*/
}

.error_message {
  border: solid #ff1f1f;
}

.hide_show {
  color: #1d1e2c;
  font-family: "Product Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  right: 1.47rem;
  top: 1.7rem;
  cursor: pointer;
  z-index: 9999;
}

.on_boarding_input {
  position: relative;
  width: 100%;
}

.formInput {
  height: 4rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #e0e6ed;
  padding-top: 1.13rem;
  padding-left: 1.25rem;
  margin-bottom: 1rem;
  width: 100%;
  //background: transparent;
}

/* .groupedformInput{} */

.formInput.focused {
  padding-top: 1.13rem;
  padding-left: 1.25rem;
  border-radius: 0.375rem;
}

.error {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  /* Red */
  color: #ff1f1f;
  margin-top: -10px;
  margin-bottom: 16px;
}

.label.focused {
  position: absolute;
  top: -0.5rem;
  left: 1.25rem;
  width: auto;
  height: 1.5rem;
  font-size: 0.88rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-transform: capitalize;
  line-height: 1.5rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color: #575a65;
  transition: ease-in-out 0.2s;
  background-color: white;
  z-index: 999;
}

.label {
  position: absolute;
  top: 0.5rem;
  left: 1.25rem;
  width: auto;
  height: 1.5rem;
  font-size: 1rem;
  text-transform: capitalize;
  line-height: 1.7rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color: #575a65;
  transition: ease-in 0.2s;
  z-index: 999;
}

@media (max-width: 1024px) {
  .formInput {
    width: 100% !important;
  }
}
</style>