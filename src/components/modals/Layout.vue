<template>
  <div class="modal_wrapper ">
    <div class="main-main animate__animated animate__zoomInDown">
      <slot name="children"></slot>
    </div>
       
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
    height: 100vh;
    z-index: 5;
    position: fixed;
    bottom: 0;
    top: 0;
}

.main-main{
  width: 100%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 1.5rem;

}

::-webkit-scrollbar{
  display: none;
}

</style>