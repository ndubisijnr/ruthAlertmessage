<template>
  <button :id="id" :type="type ? type : 'button'" :style="{fontSize:fontsize ? fontsize : '14px', border:border ? border :'none',width:btnWidth ? btnWidth : null, backgroundColor:background ? background : custom_theme ? custom_theme.color : default_theme.color, color:color ? color : '#FFF', height:height ? height : '3.50rem', padding:padding}"
   class="on_boarding_button" :class="{'disabled':disabled || loading}" :disabled="disabled">
      <svg v-if="filter_icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 24" fill="none">
      <path d="M22.5 7.25H16.5C16.09 7.25 15.75 6.91 15.75 6.5C15.75 6.09 16.09 5.75 16.5 5.75H22.5C22.91 5.75 23.25 6.09 23.25 6.5C23.25 6.91 22.91 7.25 22.5 7.25Z" fill="#89128A"/>
      <path d="M6.5 7.25H2.5C2.09 7.25 1.75 6.91 1.75 6.5C1.75 6.09 2.09 5.75 2.5 5.75H6.5C6.91 5.75 7.25 6.09 7.25 6.5C7.25 6.91 6.91 7.25 6.5 7.25Z" fill="#89128A"/>
      <path d="M10.5 10.75C8.16 10.75 6.25 8.84 6.25 6.5C6.25 4.16 8.16 2.25 10.5 2.25C12.84 2.25 14.75 4.16 14.75 6.5C14.75 8.84 12.84 10.75 10.5 10.75ZM10.5 3.75C8.98 3.75 7.75 4.98 7.75 6.5C7.75 8.02 8.98 9.25 10.5 9.25C12.02 9.25 13.25 8.02 13.25 6.5C13.25 4.98 12.02 3.75 10.5 3.75Z" fill="#89128A"/>
      <path d="M22.5 18.25H18.5C18.09 18.25 17.75 17.91 17.75 17.5C17.75 17.09 18.09 16.75 18.5 16.75H22.5C22.91 16.75 23.25 17.09 23.25 17.5C23.25 17.91 22.91 18.25 22.5 18.25Z" fill="#89128A"/>
      <path d="M8.5 18.25H2.5C2.09 18.25 1.75 17.91 1.75 17.5C1.75 17.09 2.09 16.75 2.5 16.75H8.5C8.91 16.75 9.25 17.09 9.25 17.5C9.25 17.91 8.91 18.25 8.5 18.25Z" fill="#89128A"/>
      <path d="M14.5 21.75C12.16 21.75 10.25 19.84 10.25 17.5C10.25 15.16 12.16 13.25 14.5 13.25C16.84 13.25 18.75 15.16 18.75 17.5C18.75 19.84 16.84 21.75 14.5 21.75ZM14.5 14.75C12.98 14.75 11.75 15.98 11.75 17.5C11.75 19.02 12.98 20.25 14.5 20.25C16.02 20.25 17.25 19.02 17.25 17.5C17.25 15.98 16.02 14.75 14.5 14.75Z" fill="#89128A"/>
    </svg>
    <p class="text">{{loading ? null : textNode }} <spinner-loader v-show="loading"></spinner-loader></p>
  </button>
</template>

<script>
import SpinnerLoader from "../loaders/SpinnerLoader.vue";
import storeUtils from "@/utils/storeUtils";
export default {
    name: "OnBoardingButton",
  components:{
      SpinnerLoader
  },
  props:['textNode','filter_icon','disabled','padding','type', 'id', 'btnWidth', 'background', 'color', 'height','border', 'loading', 'fontsize'],
  computed:{
    default_theme(){
      return storeUtils.fireAway().theme.getDefault_theme
    },

    custom_theme(){
      return storeUtils.fireAway().theme.getCustom_theme
    }
  }
}
</script>

<style scoped>
.on_boarding_button{
  display: flex;
  /* padding: 19px 147px 18px 146px; */
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  width:26.25rem;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
  position: relative;
}


.disabled{
  background: #E5E9F2 !important;
  color: #575A65 !important;
  border: none;
  cursor: not-allowed;
}

.text{
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center
}

@media (max-width: 1024px) {
  .on_boarding_button{
    width: 100% !important;
  }
  .text{
  font-family: 'Product Sans';
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
  background-color: #3A3A3A;
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
  top:0;
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
  top:0;
  opacity: 1;
  transition: 0s;
}

.on_boarding_button:active {
  top: 1px;
}



</style>