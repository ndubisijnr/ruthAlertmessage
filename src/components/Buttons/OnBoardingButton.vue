<template>
  <button
    :id="id"
    :type="type ? type : 'button'"
    :style="{
      fontSize: fontsize ? fontsize : '14px',
      border: border ? border : 'none',
      width: btnWidth ? btnWidth : null,
      backgroundColor: background
        ? background
        : custom_theme
        ? custom_theme.color
        : default_theme.color,
      color: color ? color : '#FFF',
      height: height ? height : '3.50rem',
      padding: padding,
    }"
    class="on_boarding_button"
    :class="{ disabled: disabled || loading }"
    :disabled="disabled"
  >
    <svg
      v-if="!loading && angleLeft"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.80007 8.00001C4.80007 7.53335 4.98007 7.06668 5.3334 6.71335L9.68007 2.36668C9.87341 2.17335 10.1934 2.17335 10.3867 2.36668C10.5801 2.56001 10.5801 2.88001 10.3867 3.07335L6.04007 7.42001C5.72007 7.74001 5.72007 8.26001 6.04007 8.58001L10.3867 12.9267C10.5801 13.12 10.5801 13.44 10.3867 13.6333C10.1934 13.8267 9.87341 13.8267 9.68007 13.6333L5.3334 9.28668C4.98007 8.93335 4.80007 8.46668 4.80007 8.00001Z"
        :fill="color ? color : '#FFF'"
      />
    </svg>
    <svg
      v-if="!loading && filter_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M22.5 7.25H16.5C16.09 7.25 15.75 6.91 15.75 6.5C15.75 6.09 16.09 5.75 16.5 5.75H22.5C22.91 5.75 23.25 6.09 23.25 6.5C23.25 6.91 22.91 7.25 22.5 7.25Z"
        fill="#89128A"
      />
      <path
        d="M6.5 7.25H2.5C2.09 7.25 1.75 6.91 1.75 6.5C1.75 6.09 2.09 5.75 2.5 5.75H6.5C6.91 5.75 7.25 6.09 7.25 6.5C7.25 6.91 6.91 7.25 6.5 7.25Z"
        fill="#89128A"
      />
      <path
        d="M10.5 10.75C8.16 10.75 6.25 8.84 6.25 6.5C6.25 4.16 8.16 2.25 10.5 2.25C12.84 2.25 14.75 4.16 14.75 6.5C14.75 8.84 12.84 10.75 10.5 10.75ZM10.5 3.75C8.98 3.75 7.75 4.98 7.75 6.5C7.75 8.02 8.98 9.25 10.5 9.25C12.02 9.25 13.25 8.02 13.25 6.5C13.25 4.98 12.02 3.75 10.5 3.75Z"
        fill="#89128A"
      />
      <path
        d="M22.5 18.25H18.5C18.09 18.25 17.75 17.91 17.75 17.5C17.75 17.09 18.09 16.75 18.5 16.75H22.5C22.91 16.75 23.25 17.09 23.25 17.5C23.25 17.91 22.91 18.25 22.5 18.25Z"
        fill="#89128A"
      />
      <path
        d="M8.5 18.25H2.5C2.09 18.25 1.75 17.91 1.75 17.5C1.75 17.09 2.09 16.75 2.5 16.75H8.5C8.91 16.75 9.25 17.09 9.25 17.5C9.25 17.91 8.91 18.25 8.5 18.25Z"
        fill="#89128A"
      />
      <path
        d="M14.5 21.75C12.16 21.75 10.25 19.84 10.25 17.5C10.25 15.16 12.16 13.25 14.5 13.25C16.84 13.25 18.75 15.16 18.75 17.5C18.75 19.84 16.84 21.75 14.5 21.75ZM14.5 14.75C12.98 14.75 11.75 15.98 11.75 17.5C11.75 19.02 12.98 20.25 14.5 20.25C16.02 20.25 17.25 19.02 17.25 17.5C17.25 15.98 16.02 14.75 14.5 14.75Z"
        fill="#89128A"
      />
    </svg>
    <p class="text">
      {{ loading ? null : textNode }}
      <spinner-loader v-show="loading"></spinner-loader>
    </p>
    <svg
      v-if="!loading && plus_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.66667 2.66668C8.66667 2.29849 8.36819 2.00002 8 2.00002C7.63181 2.00002 7.33333 2.29849 7.33333 2.66668V7.33335H2.66667C2.29848 7.33335 2 7.63183 2 8.00002C2 8.36821 2.29848 8.66668 2.66667 8.66668H7.33333V13.3334C7.33333 13.7015 7.63181 14 8 14C8.36819 14 8.66667 13.7015 8.66667 13.3334V8.66668H13.3333C13.7015 8.66668 14 8.36821 14 8.00002C14 7.63183 13.7015 7.33335 13.3333 7.33335H8.66667V2.66668Z"
        fill="white"
      />
    </svg>
    <svg
      v-if="!loading && angleRight"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M11.1999 7.99999C11.1999 8.46665 11.0199 8.93332 10.6666 9.28665L6.31993 13.6333C6.12659 13.8267 5.8066 13.8267 5.61326 13.6333C5.41993 13.44 5.41993 13.12 5.61326 12.9267L9.95993 8.57999C10.2799 8.25999 10.2799 7.73999 9.95993 7.41999L5.61326 3.07332C5.41993 2.87999 5.41993 2.55999 5.61326 2.36665C5.8066 2.17332 6.12659 2.17332 6.31993 2.36665L10.6666 6.71332C11.0199 7.06665 11.1999 7.53332 11.1999 7.99999Z"
        fill="white"
      />
    </svg>
  </button>
</template>

<script>
import SpinnerLoader from "../loaders/SpinnerLoader.vue";
import storeUtils from "@/utils/storeUtils";
export default {
  name: "OnBoardingButton",
  components: {
    SpinnerLoader,
  },
  props: [
    "textNode",
    "filter_icon",
    "plus_icon",
    "angleLeft",
    "angleRight",
    "disabled",
    "padding",
    "type",
    "id",
    "btnWidth",
    "background",
    "color",
    "height",
    "border",
    "loading",
    "fontsize",
  ],
  computed: {
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
.on_boarding_button {
  display: flex;
  /* padding: 19px 147px 18px 146px; */
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  grid-gap: 10px;
  width: 26.25rem;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
  position: relative;
}

.disabled {
  background: #e5e9f2 !important;
  color: #575a65 !important;
  border: none;
  cursor: not-allowed;
}

.text {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* width: 100%; */
  text-align: center;
}

@media (max-width: 1024px) {
  .on_boarding_button {
    width: 100% !important;
  }
  .text {
    font-family: "Product Sans";
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    text-align: center;
  }
}

/* .button{
  position: relative;
  background-color: black;
  border-radius: 4em;
  font-size: 16px;
  color: white;
  padding: 0.8em 1.8em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
 
} */

.on_boarding_button:hover {
  transition-duration: 0.1s;
  background-color: #3a3a3a;
}

/* */

/* .on_boarding_button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
} */

.on_boarding_button:active {
  top: 1px;
}

.on_boarding_button:after {
  content: "";
  display: block;
  position: absolute;
  /* border-radius: 4em; */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px rgb(8, 166, 198);

  /* box-shadow: 0 0 10px 40px white; */
}

.on_boarding_button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.on_boarding_button:active {
  top: 1px;
}
</style>