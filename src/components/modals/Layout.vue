<template>
  <div class="modal_wrapper">
    <slot name="children"></slot>
       
  </div>
</template>

<script>
export default {
    name:"Layour"

}
</script>

<style scoped>
.modal_wrapper{
    background: #00000065;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;
}

</style>