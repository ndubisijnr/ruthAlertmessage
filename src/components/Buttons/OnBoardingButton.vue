<template>
  <button :id="id" :type="type ? type : 'button'"
   :style="{width:btnWidth ? btnWidth : null, backgroundColor:background ? background : '#89128A', color:color ? color : '#FFF', height:height ? height : '3.50rem'}"  
   class="on_boarding_button" :class="{'disabled':disabled}" :disabled="disabled">
    <p class="text">{{textNode}}</p>
  </button>
</template>

<script>
export default {
  name: "OnBoardingButton",
  props:['textNode', 'disabled', 'type', 'id', 'btnWidth', 'background', 'color', 'height']
}
</script>

<style scoped>
.on_boarding_button{
  display: flex;
  /* padding: 19px 147px 18px 146px; */
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid  #89128A;
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