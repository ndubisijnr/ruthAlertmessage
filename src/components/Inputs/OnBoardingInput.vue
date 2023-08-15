<template>
  <div class="on_boarding_input">
    <label class="label" :class="{'focused':isFocused}">{{ label }}</label>
    <span class="hide_show" v-if="type === 'password'" @click="hideShow" id="hideShow"></span>
    <input :id="id" :style="width ? {width:width} :  null "  :type="type" class="formInput"  :class="{'focused':isFocused}" v-model="inputValue" @focus="handleFocus" @focusout="handleFocusOut" @input="emitValue"/>
  </div>
</template>

<script>
export default {
  name: "OnBoardingInput",
  props:['type', 'className','label','width','id'],
  data(){
    return{
      inputValue:null,
      isFocused:false
    }
  },
  methods:{
    emitValue(){
      this.$emit('inputValue', this.inputValue)
    },
    handleFocus(){
      this.isFocused = true
    },
    handleFocusOut(){
      this.isFocused = false
    },
    hideShow(){
      const id = document.getElementById(`${this.id}`)
      const hideshow = document.getElementById('hideShow')
      if(id.type === 'password'){
        id.type = 'text'
        hideshow.innerHTML = 'HIDE'
      }else{
        id.type = 'password'
        hideshow.innerHTML = 'SHOW'

      }
    },

  },
  mounted(){
    const id = document.getElementById('hideShow')
    console.log(id)
    if(id)id.innerHTML = 'SHOW'
  }
}
</script>

<style scoped>
.hide_show{
  color: var(--black-text-01, #1D1E2C);
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  right: 1.47rem;
  top:1.7rem;
  cursor: pointer;
}
.on_boarding_input{
  position:relative;
  width: 100%;
}

.formInput{
  height: 4rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid  #E0E6ED;
  padding-top: 1.13rem;
  padding-left:1.25rem;
  margin-bottom: 1rem;
  width:26rem;
}



/* .groupedformInput{} */

.formInput.focused{
  padding-top: 1.13rem;
  padding-left:1.25rem;
  border: 1px solid #89128A;
  border-radius: 0.375rem;
  outline: #89128A;  

}

.label.focused{
  position:absolute;
  top:0.68rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:0.88rem;
  text-transform: capitalize;
  line-height: 1.5rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in-out .2s;
}
.label{
  position:absolute;
  top:1.13rem;
  left:1.25rem;
  width: auto;
  height:1.50rem;
  font-size:1rem;
  text-transform: capitalize;
  line-height: 1.7rem; /* 171.429% */
  font-style: normal;
  font-weight: 300;
  color:  #575A65;
  transition: ease-in .2s;
}

@media (max-width:1024px) {
  .formInput{
    width:100% !important;
  }
}
</style>