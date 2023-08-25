<template>
  <div class="modal_wrapper">
    <slot name="children"></slot>
       
  </div>
</template>

<script>
export default {
    name:"Layout"

}
</script>

<style scoped>
.modal_wrapper{
    background: #00000065;
    width: 100%;
    min-height: 100%;
    position: absolute;
    z-index: 9999999999;
    display: inline-block;

}

</style>