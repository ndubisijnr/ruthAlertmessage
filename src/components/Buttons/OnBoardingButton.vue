<template>
  <button :id="id" :type="type ? type : 'button'"
   :style="{border:border ? border :'1px solid  #89128A',width:btnWidth ? btnWidth : null, backgroundColor:background ? background : '#89128A', color:color ? color : '#FFF', height:height ? height : '3.50rem'}"
   class="on_boarding_button" :class="{'disabled':disabled || loading}" :disabled="disabled">
    <p class="text">{{loading ? null : textNode }} <spinner-loader v-show="loading"></spinner-loader></p>
  </button>
</template>

<script>
import SpinnerLoader from "../loaders/SpinnerLoader.vue";
export default {
    name: "OnBoardingButton",
  components:{
      SpinnerLoader
  },
  props:['textNode', 'disabled', 'type', 'id', 'btnWidth', 'background', 'color', 'height','border', 'loading']
}
</script>

<style scoped>
.on_boarding_button{
  display: flex;
  /* padding: 19px 147px 18px 146px; */
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  width:26.25rem;
}


.disabled{
  background: #E5E9F2 !important;
  color: #575A65 !important;
  border: none;
}

.text{
  font-family: 'Product Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center
}

@media (max-width: 1024px) {
  .on_boarding_button{
    width: 100%;
  }
  .text{
  font-family: 'Product Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center
}
}

</style>