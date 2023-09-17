<template>
  <div class="wrapper">
    <img class="input-slot-image" src="../../../assets/Cards/icons/calendar.svg" />

  <label>{{ label }}</label>
  <VueDatePicker v-model="date" :enable-time-picker="false" auto-apply :clearable="false" position="left" :month-change-on-scroll="false">
    <template #dp-input="{ value, onInput, onEnter, onTab, onClear, onBlur, onKeypress, onPaste, isMenuOpen }">
      <input type="text" class="data-picker-input" :value="value"  />
    </template>
    <template #input-icon>
    </template>
    <template #clock-icon>
      <img class="slot-icon" src="../../../assets/Cards/tiqwa.png"/>
    </template>
  </VueDatePicker>
  </div>

</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  name: "DataPicker",
  props:['value', 'label'],
  components:{VueDatePicker},
  data(){
    return{
      isFocused:false,
      date: null,

    }
  },
  methods:{
    handleFocus(){
      this.isFocused = true
    },

    handleFocusOut(){
      this.isFocused = false
    },

  },

}

</script>

<style scoped>
@import "style.css";
.wrapper{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}
label{
  position: absolute;
  z-index: 999999;
  top: 0;
  color:  #2D3139;
  padding-top: 0.5rem;

  /* sanslight/12px/Regular */
  font-family:'Product Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 166.667% */
  padding-left: 1.25rem;
}
</style>